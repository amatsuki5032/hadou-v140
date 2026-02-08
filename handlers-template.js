// テンプレート・編制パターン管理
// 依存: config.js (TABS)

/**
 * テンプレート保存/呼出とパターン管理のハンドラ群
 */
function createTemplateHandlers({
    formations, treasures,
    formationPatterns, activePattern, currentProfile,
    formationTemplates, collapsedFormations,
    templateName, selectedTemplate,
    overwriteGenerals, overwriteTreasures,
    showTemplateSaveDialog, showTemplateLoadDialog,
    setFormations, setFormationPatterns,
    setFormationTemplates, setOpenPatternMenu,
    setTemplateName, setSelectedTemplate,
    setOverwriteGenerals, setOverwriteTreasures,
    setShowTemplateSaveDialog, setShowTemplateLoadDialog
}) {

    // 部隊テンプレートを保存
    const saveFormationTemplate = (formationKey) => {
        const formationData = formations[formationKey];

        // 主将の名前を取得
        const mainGeneral = formationData?.slots?.['主将'];
        let baseName = formationKey; // デフォルトは「編制1」など

        if (mainGeneral) {
            // 主将がいる場合は「LR関羽」形式
            baseName = `${mainGeneral.rarity}${mainGeneral.name}`;
        }

        // 重複チェック：同じ名前が既にあれば番号を追加
        let templateName = baseName;
        let counter = 0;

        while (formationTemplates[templateName]) {
            templateName = `${baseName}-${counter}`;
            counter++;
        }

        setShowTemplateSaveDialog(formationKey);
        setTemplateName(templateName);
    };

    // テンプレート保存を実行
    const executeSaveTemplate = () => {
        if (!templateName.trim()) {
            alert('テンプレート名を入力してください');
            return;
        }

        const formationData = formations[showTemplateSaveDialog];
        if (!formationData) {
            alert('保存する部隊データがありません');
            return;
        }

        // treasuresをオブジェクトから配列に変換
        let treasuresArray = Array(15).fill(null); // 5人 × 3個 = 15個
        if (formationData.treasures) {
            if (Array.isArray(formationData.treasures)) {
                // 既に配列の場合
                treasuresArray = JSON.parse(JSON.stringify(formationData.treasures));
            } else if (typeof formationData.treasures === 'object') {
                // オブジェクト形式の場合、配列に変換
                // treasures: { '主将-weapon': {...}, '主将-armor': {...}, ... }
                Object.entries(formationData.treasures).forEach(([key, treasure]) => {
                    if (treasure) {
                        // キーから位置を特定
                        // 主将-weapon → 0, 主将-armor → 1, 主将-artifact → 2
                        // 副将1-weapon → 3, 副将1-armor → 4, 副将1-artifact → 5
                        // 副将2-weapon → 6, 副将2-armor → 7, 副将2-artifact → 8
                        // 補佐1-weapon → 9, 補佐1-armor → 10, 補佐1-artifact → 11
                        // 補佐2-weapon → 12, 補佐2-armor → 13, 補佐2-artifact → 14
                        let index = -1;
                        if (key.startsWith('主将-weapon')) index = 0;
                        else if (key.startsWith('主将-armor')) index = 1;
                        else if (key.startsWith('主将-artifact')) index = 2;
                        else if (key.startsWith('副将1-weapon')) index = 3;
                        else if (key.startsWith('副将1-armor')) index = 4;
                        else if (key.startsWith('副将1-artifact')) index = 5;
                        else if (key.startsWith('副将2-weapon')) index = 6;
                        else if (key.startsWith('副将2-armor')) index = 7;
                        else if (key.startsWith('副将2-artifact')) index = 8;
                        else if (key.startsWith('補佐1-weapon')) index = 9;
                        else if (key.startsWith('補佐1-armor')) index = 10;
                        else if (key.startsWith('補佐1-artifact')) index = 11;
                        else if (key.startsWith('補佐2-weapon')) index = 12;
                        else if (key.startsWith('補佐2-armor')) index = 13;
                        else if (key.startsWith('補佐2-artifact')) index = 14;

                        if (index >= 0) {
                            treasuresArray[index] = JSON.parse(JSON.stringify(treasure));
                        }
                    }
                });
            }
        }

        // ディープコピーして保存
        const template = {
            name: templateName.trim(),
            slots: JSON.parse(JSON.stringify(formationData.slots)),
            attendants: JSON.parse(JSON.stringify(formationData.attendants)),
            treasures: treasuresArray,
            formationType: formationData.formationType
        };

        setFormationTemplates(prev => ({
            ...prev,
            [templateName.trim()]: template
        }));

        setShowTemplateSaveDialog(null);
        setTemplateName('');
    };

    // 部隊テンプレートを呼び出し
    const loadFormationTemplate = (formationKey) => {
        setShowTemplateLoadDialog(formationKey);
        // 一番上のテンプレートを自動選択
        const templateKeys = Object.keys(formationTemplates);
        if (templateKeys.length > 0) {
            setSelectedTemplate(templateKeys[0]);
        } else {
            setSelectedTemplate('');
        }
        setOverwriteGenerals(true);
        setOverwriteTreasures(true);
    };

    // テンプレート呼び出しを実行
    const executeLoadTemplate = () => {
        if (!selectedTemplate) {
            alert('テンプレートを選択してください');
            return;
        }

        const template = formationTemplates[selectedTemplate];
        if (!template) {
            alert('テンプレートが見つかりません');
            return;
        }

        const currentFormation = formations[showTemplateLoadDialog];

        setFormations(prev => {
            // 完全に新しいオブジェクトを作成（浅いコピーではなく）
            const targetFormation = {
                formationType: prev[showTemplateLoadDialog]?.formationType || '基本陣形',
                slots: {},
                attendants: {},
                treasures: {}
            };

            // 武将（主将・副将・補佐）と侍従を上書き
            if (overwriteGenerals) {
                // テンプレートの武将をコピー（初期化済みなので直接コピー）
                Object.keys(template.slots).forEach(slotName => {
                    if (template.slots[slotName]) {
                        targetFormation.slots[slotName] = JSON.parse(JSON.stringify(template.slots[slotName]));
                    }
                });

                // 侍従もコピー（初期化済みなので直接コピー）
                Object.keys(template.attendants).forEach(position => {
                    if (template.attendants[position]) {
                        targetFormation.attendants[position] = JSON.parse(JSON.stringify(template.attendants[position]));
                    }
                });
            } else {
                // 武将を上書きしない場合は既存のをコピー
                targetFormation.slots = JSON.parse(JSON.stringify(prev[showTemplateLoadDialog]?.slots || {}));
                targetFormation.attendants = JSON.parse(JSON.stringify(prev[showTemplateLoadDialog]?.attendants || {}));
            }

            // 名宝を上書き
            if (overwriteTreasures) {
                // 既に{}で初期化済みなので、テンプレートから直接コピー
                if (template.treasures && Array.isArray(template.treasures)) {
                    const keyMapping = [
                        '主将-weapon', '主将-armor', '主将-artifact',
                        '副将1-weapon', '副将1-armor', '副将1-artifact',
                        '副将2-weapon', '副将2-armor', '副将2-artifact',
                        '補佐1-weapon', '補佐1-armor', '補佐1-artifact',
                        '補佐2-weapon', '補佐2-armor', '補佐2-artifact'
                    ];

                    template.treasures.forEach((treasure, index) => {
                        if (treasure && keyMapping[index]) {
                            targetFormation.treasures[keyMapping[index]] = JSON.parse(JSON.stringify(treasure));
                        }
                    });
                }
            } else {
                // 名宝を上書きしない場合は既存のをコピー
                targetFormation.treasures = JSON.parse(JSON.stringify(prev[showTemplateLoadDialog]?.treasures || {}));
            }

            // 陣形タイプは常に上書き
            targetFormation.formationType = template.formationType;

            const newFormations = {
                ...prev,
                [showTemplateLoadDialog]: targetFormation
            };

            // 重複チェック: 他の部隊から同じ武将・名宝を削除
            // allowDuplicates が true の場合はスキップ
            const allowDuplicates = formationPatterns[activePattern]?.allowDuplicates || false;

            if (!allowDuplicates && (overwriteGenerals || overwriteTreasures)) {
                Object.keys(newFormations).forEach(formationKey => {
                    if (formationKey === showTemplateLoadDialog) return; // 自分自身はスキップ

                    const formation = newFormations[formationKey];
                    if (!formation) return;

                    // 武将の重複チェック（主将・副将・補佐）
                    if (overwriteGenerals && targetFormation.slots) {
                        Object.keys(targetFormation.slots).forEach(slotName => {
                            const targetGeneral = targetFormation.slots[slotName];
                            if (!targetGeneral) return;

                            // 他の部隊から同じ武将を削除
                            Object.keys(formation.slots || {}).forEach(otherSlot => {
                                const otherGeneral = formation.slots[otherSlot];
                                if (otherGeneral &&
                                    otherGeneral.id === targetGeneral.id &&
                                    otherGeneral.rarity === targetGeneral.rarity) {
                                    formation.slots[otherSlot] = null;
                                }
                            });

                            // 侍従も削除
                            Object.keys(formation.attendants || {}).forEach(position => {
                                const attendant = formation.attendants[position];
                                if (attendant &&
                                    attendant.id === targetGeneral.id &&
                                    attendant.rarity === targetGeneral.rarity) {
                                    formation.attendants[position] = null;
                                }
                            });
                        });
                    }

                    // 侍従の重複チェック（targetFormation.attendantsもチェック）
                    if (overwriteGenerals && targetFormation.attendants) {
                        Object.keys(targetFormation.attendants).forEach(position => {
                            const targetAttendant = targetFormation.attendants[position];
                            if (!targetAttendant) return;

                            // 他の部隊から同じ武将を削除（スロットから）
                            Object.keys(formation.slots || {}).forEach(otherSlot => {
                                const otherGeneral = formation.slots[otherSlot];
                                if (otherGeneral &&
                                    otherGeneral.id === targetAttendant.id &&
                                    otherGeneral.rarity === targetAttendant.rarity) {
                                    formation.slots[otherSlot] = null;
                                }
                            });

                            // 他の部隊から同じ武将を削除（侍従から）
                            Object.keys(formation.attendants || {}).forEach(otherPosition => {
                                const otherAttendant = formation.attendants[otherPosition];
                                if (otherAttendant &&
                                    otherAttendant.id === targetAttendant.id &&
                                    otherAttendant.rarity === targetAttendant.rarity) {
                                    formation.attendants[otherPosition] = null;
                                }
                            });
                        });
                    }

                    // 名宝の重複チェック
                    if (overwriteTreasures && targetFormation.treasures) {
                        Object.entries(targetFormation.treasures).forEach(([key, targetTreasure]) => {
                            if (!targetTreasure) return;

                            // 他の部隊から同じ名宝を削除
                            Object.keys(formation.treasures || {}).forEach(otherKey => {
                                const otherTreasure = formation.treasures[otherKey];
                                if (otherTreasure &&
                                    otherTreasure.id === targetTreasure.id &&
                                    otherTreasure.name === targetTreasure.name) {
                                    formation.treasures[otherKey] = null;
                                }
                            });
                        });
                    }
                });
            }

            return newFormations;
        });

        setShowTemplateLoadDialog(null);
        setSelectedTemplate('');
    };

    // テンプレートを削除
    const deleteTemplate = (templateKey) => {
        if (confirm(`テンプレート「${templateKey}」を削除しますか？`)) {
            setFormationTemplates(prev => {
                const newTemplates = {...prev};
                delete newTemplates[templateKey];
                return newTemplates;
            });
        }
    };

    // 編制パターン名を変更
    const renamePattern = (patternIndex) => {
        const currentName = formationPatterns[patternIndex]?.name || `編制${patternIndex + 1}`;
        const newName = prompt('編制名を入力してください', currentName);
        if (newName && newName.trim() !== '') {
            setFormationPatterns(prev => ({
                ...prev,
                [patternIndex]: {
                    ...prev[patternIndex],
                    name: newName.trim()
                }
            }));
        }
        setOpenPatternMenu(null);
    };

    // 編制パターンをリセット
    const resetPattern = (patternIndex) => {
        const patternName = formationPatterns[patternIndex]?.name || `編制${patternIndex + 1}`;
        if (confirm(`${patternName}の全12部隊をリセットしますか？\n\n全ての武将・侍従・名宝の配置がクリアされます。`)) {
            const initialFormations = {};
            TABS.forEach(tab => {
                for (let i = 0; i < tab.count; i++) {
                    const key = `${tab.id}-${i}`;
                    initialFormations[key] = {
                        formationType: '基本陣形',
                        slots: {
                            '主将': null,
                            '副将1': null,
                            '副将2': null,
                            '補佐1': null,
                            '補佐2': null
                        },
                        attendants: {},
                        treasures: Array(6).fill(null)
                    };
                }
            });

            setFormationPatterns(prev => ({
                ...prev,
                [patternIndex]: {
                    ...prev[patternIndex],
                    formations: initialFormations,
                    collapsedFormations: {}
                }
            }));
        }
        setOpenPatternMenu(null);
    };

    // 重複チェックを切り替え
    const toggleDuplicateCheck = (patternIndex) => {
        setFormationPatterns(prev => ({
            ...prev,
            [patternIndex]: {
                ...prev[patternIndex],
                allowDuplicates: !prev[patternIndex]?.allowDuplicates
            }
        }));
        setOpenPatternMenu(null);
    };

    // 編制パターンをコピー
    const copyFromPattern = (targetIndex, sourceIndex) => {
        const targetName = formationPatterns[targetIndex]?.name || `編制${targetIndex + 1}`;
        const sourceName = formationPatterns[sourceIndex]?.name || `編制${sourceIndex + 1}`;

        if (confirm(`${sourceName}の内容を${targetName}にコピーしますか？\n\n${targetName}の現在の内容は上書きされます。`)) {
            // ディープコピーを作成
            const sourceFormations = JSON.parse(JSON.stringify(formationPatterns[sourceIndex].formations));

            setFormationPatterns(prev => ({
                ...prev,
                [targetIndex]: {
                    ...prev[targetIndex],
                    formations: sourceFormations,
                    collapsedFormations: {} // 折りたたみ状態はリセット
                }
            }));
        }
        setOpenPatternMenu(null);
    };

    return {
        saveFormationTemplate,
        executeSaveTemplate,
        loadFormationTemplate,
        executeLoadTemplate,
        deleteTemplate,
        renamePattern,
        resetPattern,
        toggleDuplicateCheck,
        copyFromPattern
    };
}
