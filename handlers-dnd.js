// D&Dハンドラ・自動配置
// 依存: config.js (TABS), utils.js (resolveAttendantConflicts)

/**
 * D&D操作と自動配置のハンドラ群を生成するファクトリ関数
 */
function createDndHandlers({
    formations, treasures, activeTab,
    draggedGeneral, draggedTreasure,
    collapsedFormations, recommendTargetFormation,
    setFormations, setDraggedGeneral, setDraggedTreasure,
    isGeneralUsed, isTreasureUsed, isURGeneralUsed
}) {

    // ドラッグ開始
    const handleDragStart = (e, general) => {
        // UR武将のみ重複チェック
        if (general.rarity === 'UR' && isURGeneralUsed(general.id)) {
            e.preventDefault();
            return;
        }
        setDraggedGeneral({ general });
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('application/json', JSON.stringify({
            type: 'general',
            general: general,
            from: 'general-list'
        }));
    };

    // 配置済み武将からのドラッグ開始
    const handleSlotDragStart = (e, general, formationKey, slotName) => {
        setDraggedGeneral({ ...general, sourceFormation: formationKey, sourceSlot: slotName });
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('application/json', JSON.stringify({
            type: 'general',
            general: general,
            from: `formation-${formationKey}-${slotName}`
        }));
    };

    // 侍従のドラッグ開始
    const handleAttendantDragStart = (e, attendant, formationKey, slotName) => {
        setDraggedGeneral({ ...attendant, sourceFormation: formationKey, sourceSlot: slotName, isFromAttendant: true });
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('application/json', JSON.stringify({
            type: 'general',
            general: attendant,
            from: `formation-${formationKey}-attendant-${slotName}`
        }));
    };

    // 名宝のドラッグ開始
    const handleTreasureDragStart = (e, treasure) => {
        if (isTreasureUsed(treasure.id, treasure.name)) {
            e.preventDefault();
            return;
        }
        setDraggedTreasure(treasure);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('application/json', JSON.stringify({
            type: 'treasure',
            treasure: treasure,
            from: 'treasure-list'
        }));
    };

    // 配置済み名宝からのドラッグ開始
    const handleTreasureSlotDragStart = (e, treasure, formationKey, slotName, treasureSlot) => {
        setDraggedTreasure({ ...treasure, sourceFormation: formationKey, sourceSlot: slotName, sourceTreasureSlot: treasureSlot });
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('application/json', JSON.stringify({
            type: 'treasure',
            treasure: treasure,
            from: `formation-${formationKey}-${slotName}-${treasureSlot}`
        }));
    };

    // 参軍のドラッグ開始
    const handleAdvisorDragStart = (e, general, formationKey, advisorType) => {
        setDraggedGeneral({
            general,
            sourceFormation: formationKey,
            sourceAdvisorType: advisorType
        });
    };

    // ドロップ
    // ドロップ
    const handleDrop = (e, formationKey, slotName) => {
        e.preventDefault();
        if (!draggedGeneral) return;

        // UR武将の重複チェック（武将リストからの配置、または移動元がある場合）
        const generalRarity = draggedGeneral.rarity || draggedGeneral.general?.rarity;
        const generalId = draggedGeneral.id || draggedGeneral.general?.id;
        const generalName = draggedGeneral.name || draggedGeneral.general?.name;

        if (generalRarity === 'UR' && !draggedGeneral.sourceFormation) {
            // 武将リストからの新規配置の場合のみチェック
            if (isURGeneralUsed(generalId)) {
                alert('UR武将は重複して配置できません');
                setDraggedGeneral(null);
                return;
            }
        }

        // 移動元がある場合（配置済み武将の移動）
        if (draggedGeneral.sourceFormation && draggedGeneral.sourceSlot) {
            setFormations(prev => {
                const newFormations = { ...prev };

                // 移動先に既に武将がいるかチェック
                const targetGeneral = newFormations[formationKey]?.slots?.[slotName];

                if (targetGeneral) {
                    // 位置交換：移動先の武将を移動元に配置
                    const targetGeneralData = {
                        id: targetGeneral.id,
                        name: targetGeneral.name,
                        rarity: targetGeneral.rarity,
                        unit_type: targetGeneral.unit_type,
                        leadership: targetGeneral.leadership,
                        attack: targetGeneral.attack,
                        intelligence: targetGeneral.intelligence,
                        affinity: targetGeneral.affinity
                    };

                    if (targetGeneral.attendant_position) {
                        targetGeneralData.attendant_position = targetGeneral.attendant_position;
                    }

                    // 移動元が侍従枠の場合
                    if (draggedGeneral.isFromAttendant) {
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            attendants: {
                                ...newFormations[draggedGeneral.sourceFormation].attendants,
                                [draggedGeneral.sourceSlot]: targetGeneralData
                            }
                        };
                    } else {
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            slots: {
                                ...newFormations[draggedGeneral.sourceFormation].slots,
                                [draggedGeneral.sourceSlot]: targetGeneralData
                            }
                        };
                    }
                } else {
                    // 移動元から削除（移動先が空の場合）
                    if (draggedGeneral.isFromAttendant) {
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            attendants: {
                                ...newFormations[draggedGeneral.sourceFormation].attendants,
                                [draggedGeneral.sourceSlot]: null
                            }
                        };
                    } else {
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            slots: {
                                ...newFormations[draggedGeneral.sourceFormation].slots,
                                [draggedGeneral.sourceSlot]: null
                            }
                        };
                    }
                }

                // ドラッグした武将を移動先に配置
                const generalData = {
                    id: draggedGeneral.id,
                    name: draggedGeneral.name,
                    rarity: draggedGeneral.rarity,
                    unit_type: draggedGeneral.unit_type,
                    leadership: draggedGeneral.leadership,
                    attack: draggedGeneral.attack,
                    intelligence: draggedGeneral.intelligence,
                    affinity: draggedGeneral.affinity
                };

                if (draggedGeneral.attendant_position) {
                    generalData.attendant_position = draggedGeneral.attendant_position;
                }

                newFormations[formationKey] = {
                    ...newFormations[formationKey],
                    slots: {
                        ...newFormations[formationKey].slots,
                        [slotName]: generalData
                    }
                };

                return newFormations;
            });
        } else {
            // 武将リストからの配置
            const generalToPlace = draggedGeneral.general || draggedGeneral;
            setFormations(prev => ({
                ...prev,
                [formationKey]: {
                    ...prev[formationKey],
                    slots: {
                        ...prev[formationKey].slots,
                        [slotName]: generalToPlace
                    }
                }
            }));
        }

        setDraggedGeneral(null);
    };

    // 侍従へのドロップ
    const handleAttendantDrop = (e, formationKey, slotName) => {
        e.preventDefault();
        if (!draggedGeneral) return;

        // レア度チェック
        const generalRarity = draggedGeneral.rarity || draggedGeneral.general?.rarity;
        const generalId = draggedGeneral.id || draggedGeneral.general?.id;
        const generalName = draggedGeneral.name || draggedGeneral.general?.name;

        // LR武将は侍従に配置できない
        if (generalRarity === 'LR') {
            alert('侍従にはUR/SSR/SR/R武将のみ配置できます');
            setDraggedGeneral(null);
            return;
        }

        // UR武将の重複チェック（武将リストからの配置、または移動元がある場合）
        if (generalRarity === 'UR' && !draggedGeneral.sourceFormation) {
            // 武将リストからの新規配置の場合のみチェック
            if (isURGeneralUsed(generalId)) {
                alert('UR武将は重複して配置できません');
                setDraggedGeneral(null);
                return;
            }
        }

        // 移動元がある場合（配置済み武将の移動）
        if (draggedGeneral.sourceFormation && draggedGeneral.sourceSlot) {
            setFormations(prev => {
                const newFormations = { ...prev };

                // 移動先に既に侍従がいるかチェック
                const targetAttendant = newFormations[formationKey]?.attendants?.[slotName];

                if (targetAttendant) {
                    // 位置交換
                    const targetAttendantData = {
                        id: targetAttendant.id,
                        name: targetAttendant.name,
                        rarity: targetAttendant.rarity,
                        unit_type: targetAttendant.unit_type,
                        leadership: targetAttendant.leadership,
                        attack: targetAttendant.attack,
                        intelligence: targetAttendant.intelligence,
                        affinity: targetAttendant.affinity
                    };

                    // 移動元が侍従枠の場合
                    if (draggedGeneral.isFromAttendant) {
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            attendants: {
                                ...newFormations[draggedGeneral.sourceFormation].attendants,
                                [draggedGeneral.sourceSlot]: targetAttendantData
                            }
                        };
                    } else {
                        // 移動元が主将/副将/補佐の場合
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            slots: {
                                ...newFormations[draggedGeneral.sourceFormation].slots,
                                [draggedGeneral.sourceSlot]: targetAttendantData
                            }
                        };
                    }
                } else {
                    // 移動元から削除（移動先が空の場合）
                    if (draggedGeneral.isFromAttendant) {
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            attendants: {
                                ...newFormations[draggedGeneral.sourceFormation].attendants,
                                [draggedGeneral.sourceSlot]: null
                            }
                        };
                    } else {
                        newFormations[draggedGeneral.sourceFormation] = {
                            ...newFormations[draggedGeneral.sourceFormation],
                            slots: {
                                ...newFormations[draggedGeneral.sourceFormation].slots,
                                [draggedGeneral.sourceSlot]: null
                            }
                        };
                    }
                }

                // ドラッグした武将を移動先の侍従枠に配置
                const generalData = {
                    id: draggedGeneral.id,
                    name: draggedGeneral.name,
                    rarity: draggedGeneral.rarity,
                    unit_type: draggedGeneral.unit_type,
                    leadership: draggedGeneral.leadership,
                    attack: draggedGeneral.attack,
                    intelligence: draggedGeneral.intelligence,
                    affinity: draggedGeneral.affinity
                };

                newFormations[formationKey] = {
                    ...newFormations[formationKey],
                    attendants: {
                        ...newFormations[formationKey].attendants,
                        [slotName]: generalData
                    }
                };

                return newFormations;
            });
        } else {
            // 武将リストからの配置
            const generalData = draggedGeneral.general || draggedGeneral;
            setFormations(prev => ({
                ...prev,
                [formationKey]: {
                    ...prev[formationKey],
                    attendants: {
                        ...prev[formationKey].attendants,
                        [slotName]: generalData
                    }
                }
            }));
        }

        setDraggedGeneral(null);
    };

    // 参軍のドロップ
    const handleAdvisorDrop = (e, formationKey, advisorType) => {
        e.preventDefault();
        if (!draggedGeneral) return;

        const generalToPlace = draggedGeneral.general || draggedGeneral;

        // 移動元がある場合（配置済み参軍の移動）
        if (draggedGeneral.sourceFormation && draggedGeneral.sourceAdvisorType) {
            setFormations(prev => {
                const newFormations = { ...prev };

                // 移動元から削除
                newFormations[draggedGeneral.sourceFormation] = {
                    ...newFormations[draggedGeneral.sourceFormation],
                    advisors: {
                        ...newFormations[draggedGeneral.sourceFormation].advisors,
                        [draggedGeneral.sourceAdvisorType]: null
                    }
                };

                // 移動先に配置
                newFormations[formationKey] = {
                    ...newFormations[formationKey],
                    advisors: {
                        ...newFormations[formationKey].advisors,
                        [advisorType]: generalToPlace
                    }
                };

                return newFormations;
            });
        } else {
            // 武将リストからの配置
            setFormations(prev => ({
                ...prev,
                [formationKey]: {
                    ...prev[formationKey],
                    advisors: {
                        ...prev[formationKey].advisors,
                        [advisorType]: generalToPlace
                    }
                }
            }));
        }

        setDraggedGeneral(null);
    };

    // 名宝のドロップ
    const handleTreasureDrop = (e, formationKey, slotName, treasureSlot) => {
        e.preventDefault();
        if (!draggedTreasure) return;

        // カテゴリーチェック：武器は武器枠、防具は防具枠、文物は文物枠のみ
        const slotCategoryMap = {
            'weapon': '武器',
            'armor': '防具',
            'artifact': '文物'
        };

        if (draggedTreasure.category !== slotCategoryMap[treasureSlot]) {
            // カテゴリーが合わない場合は装備しない
            setDraggedTreasure(null);
            return;
        }

        // 移動先のキー
        const targetTreasureKey = `${slotName}-${treasureSlot}`;

        // 移動元がある場合（配置済み名宝の移動）
        if (draggedTreasure.sourceFormation && draggedTreasure.sourceSlot && draggedTreasure.sourceTreasureSlot) {
            setFormations(prev => {
                const newFormations = { ...prev };

                // 移動先に既に名宝があるかチェック
                const targetTreasure = newFormations[formationKey]?.treasures?.[targetTreasureKey];

                // 移動元のキー
                const sourceTreasureKey = `${draggedTreasure.sourceSlot}-${draggedTreasure.sourceTreasureSlot}`;

                if (targetTreasure) {
                    // 入れ替え処理
                    // 移動元に移動先の名宝を配置
                    newFormations[draggedTreasure.sourceFormation] = {
                        ...newFormations[draggedTreasure.sourceFormation],
                        treasures: {
                            ...newFormations[draggedTreasure.sourceFormation].treasures,
                            [sourceTreasureKey]: {
                                id: targetTreasure.id,
                                name: targetTreasure.name,
                                category: targetTreasure.category,
                                weapon_type: targetTreasure.weapon_type
                            }
                        }
                    };
                } else {
                    // 移動先が空の場合は移動元を削除
                    newFormations[draggedTreasure.sourceFormation] = {
                        ...newFormations[draggedTreasure.sourceFormation],
                        treasures: {
                            ...newFormations[draggedTreasure.sourceFormation].treasures,
                            [sourceTreasureKey]: null
                        }
                    };
                }

                // 移動先に移動元の名宝を配置
                newFormations[formationKey] = {
                    ...newFormations[formationKey],
                    treasures: {
                        ...newFormations[formationKey].treasures,
                        [targetTreasureKey]: {
                            id: draggedTreasure.id,
                            name: draggedTreasure.name,
                            category: draggedTreasure.category,
                            weapon_type: draggedTreasure.weapon_type
                        }
                    }
                };

                return newFormations;
            });
        } else {
            // 名宝リストからの配置
            setFormations(prev => ({
                ...prev,
                [formationKey]: {
                    ...prev[formationKey],
                    treasures: {
                        ...prev[formationKey].treasures,
                        [targetTreasureKey]: draggedTreasure
                    }
                }
            }));
        }

        setDraggedTreasure(null);
    };

    // 武将削除
    // 武将を削除
    // 武将を削除
    const handleRemoveGeneral = (formationKey, slotName) => {
        setFormations(prev => ({
            ...prev,
            [formationKey]: {
                ...prev[formationKey],
                slots: {
                    ...prev[formationKey].slots,
                    [slotName]: null
                }
            }
        }));
    };

    // 侍従を削除
    // 侍従を削除
    const handleRemoveAttendant = (formationKey, slotName) => {
        setFormations(prev => ({
            ...prev,
            [formationKey]: {
                ...prev[formationKey],
                attendants: {
                    ...prev[formationKey].attendants,
                    [slotName]: null
                }
            }
        }));
    };

    // 参軍の削除
    const handleRemoveAdvisor = (formationKey, advisorType) => {
        setFormations(prev => ({
            ...prev,
            [formationKey]: {
                ...prev[formationKey],
                advisors: {
                    ...prev[formationKey].advisors,
                    [advisorType]: null
                }
            }
        }));
    };

    // 名宝削除
    const handleRemoveTreasure = (formationKey, slotName, treasureSlot) => {
        setFormations(prev => ({
            ...prev,
            [formationKey]: {
                ...prev[formationKey],
                treasures: {
                    ...prev[formationKey].treasures,
                    [`${slotName}-${treasureSlot}`]: null
                }
            }
        }));
    };

    // 名宝のUR化状態を切り替え
    // LR武将を空いている主将/副将/補佐枠に自動配置
    const autoAssignLRGeneral = (general) => {
        // 配置順序
        const slots = ['主将', '副将1', '副将2', '補佐1', '補佐2'];

        // 全部隊を順番にチェック
        for (const tab of TABS) {
            for (let i = 0; i < tab.count; i++) {
                const formationKey = `${tab.id}-${i}`;
                const formation = formations[formationKey];

                // 各枠を順番にチェック
                for (const slotName of slots) {
                    if (!formation.slots[slotName]) {
                        // 空いている枠が見つかったら配置
                        setFormations(prev => ({
                            ...prev,
                            [formationKey]: {
                                ...prev[formationKey],
                                slots: {
                                    ...prev[formationKey].slots,
                                    [slotName]: general
                                }
                            }
                        }));
                        return true;
                    }
                }
            }
        }
        return false;
    };

    // UR武将を空いている侍従枠に自動配置
    const autoAssignURGeneral = (general) => {
        // 配置順序
        const slots = ['主将', '副将1', '副将2', '補佐1', '補佐2'];

        // 全部隊を順番にチェック
        for (const tab of TABS) {
            for (let i = 0; i < tab.count; i++) {
                const formationKey = `${tab.id}-${i}`;
                const formation = formations[formationKey];

                // 各枠の侍従を順番にチェック
                for (const slotName of slots) {
                    if (!formation.attendants || !formation.attendants[slotName]) {
                        // 空いている侍従枠が見つかったら配置
                        setFormations(prev => ({
                            ...prev,
                            [formationKey]: {
                                ...prev[formationKey],
                                attendants: {
                                    ...prev[formationKey].attendants,
                                    [slotName]: general
                                }
                            }
                        }));
                        return true;
                    }
                }
            }
        }
        return false;
    };

    // 名宝を空いている枠に自動配置
    const autoAssignTreasure = (treasure) => {
        // カテゴリに応じたスロット名を決定
        let treasureSlot = '';
        if (treasure.category === '武器') treasureSlot = 'weapon';
        else if (treasure.category === '防具') treasureSlot = 'armor';
        else if (treasure.category === '文物') treasureSlot = 'artifact';
        else return false;

        // 配置順序
        const slots = ['主将', '副将1', '副将2', '補佐1', '補佐2'];

        // 部隊チェック順序を構築（おススメ部隊を最優先）
        const formationOrder = [];

        // おススメ部隊を最優先
        if (recommendTargetFormation && !collapsedFormations[recommendTargetFormation]) {
            formationOrder.push(recommendTargetFormation);
        }

        // 現在のタブの部隊を次に優先
        const currentTab = TABS.find(tab => tab.id === activeTab);
        if (currentTab) {
            for (let i = 0; i < currentTab.count; i++) {
                const formationKey = `${currentTab.id}-${i}`;
                if (formationKey !== recommendTargetFormation) {
                    formationOrder.push(formationKey);
                }
            }
        }

        // 残りの部隊を追加
        for (const tab of TABS) {
            if (tab.id !== activeTab) {
                for (let i = 0; i < tab.count; i++) {
                    const formationKey = `${tab.id}-${i}`;
                    if (formationKey !== recommendTargetFormation) {
                        formationOrder.push(formationKey);
                    }
                }
            }
        }

        // 全部隊を順番にチェック
        for (const formationKey of formationOrder) {
            // 折りたたまれている部隊はスキップ
            if (collapsedFormations[formationKey]) {
                continue;
            }

            const formation = formations[formationKey];

            // 各武将枠の名宝スロットを順番にチェック
            for (const slotName of slots) {
                const treasureKey = `${slotName}-${treasureSlot}`;
                if (!formation.treasures || !formation.treasures[treasureKey]) {
                    // 空いている名宝枠が見つかったら配置
                    setFormations(prev => ({
                        ...prev,
                        [formationKey]: {
                            ...prev[formationKey],
                            treasures: {
                                ...prev[formationKey].treasures,
                                [treasureKey]: treasure
                            }
                        }
                    }));
                    return true;
                }
            }
        }
        return false;
    };

    // 武将ダブルクリック：空き枠に自動配置
    const handleGeneralDoubleClick = (general) => {
        // 既に使用中の武将をダブルクリック → 編制から削除
        if (isGeneralUsed(general.id, general.name, general.rarity)) {
            setFormations(prev => {
                const newFormations = { ...prev };

                // 全ての部隊から該当武将を削除
                Object.keys(newFormations).forEach(formationKey => {
                    // スロットから削除
                    if (newFormations[formationKey].slots) {
                        Object.keys(newFormations[formationKey].slots).forEach(slotName => {
                            const slot = newFormations[formationKey].slots[slotName];
                            if (slot && slot.id === general.id && slot.rarity === general.rarity) {
                                newFormations[formationKey].slots[slotName] = null;
                            }
                        });
                    }

                    // 侍従から削除
                    if (newFormations[formationKey].attendants) {
                        Object.keys(newFormations[formationKey].attendants).forEach(attendantKey => {
                            const attendant = newFormations[formationKey].attendants[attendantKey];
                            if (attendant && attendant.id === general.id && attendant.rarity === general.rarity) {
                                newFormations[formationKey].attendants[attendantKey] = null;
                            }
                        });
                    }
                });

                return newFormations;
            });
            return;
        }

        // UR武将の場合は重複チェック（配置しようとしている時のみ）
        if (general.rarity === 'UR' && isURGeneralUsed(general.id)) {
            alert('UR武将は重複して配置できません');
            return;
        }

        const slotOrder = ['主将', '副将1', '副将2', '補佐1', '補佐2'];
        const formationOrder = [];

        // おススメ部隊を最優先
        if (recommendTargetFormation && !collapsedFormations[recommendTargetFormation]) {
            formationOrder.push(recommendTargetFormation);
        }

        // 現在のタブの部隊を次に優先
        const currentTab = TABS.find(tab => tab.id === activeTab);
        if (currentTab) {
            for (let i = 0; i < currentTab.count; i++) {
                const formationKey = `${currentTab.id}-${i}`;
                if (formationKey !== recommendTargetFormation) {
                    formationOrder.push(formationKey);
                }
            }
        }

        // 残りの部隊順序を構築
        TABS.forEach(tab => {
            if (tab.id !== activeTab) {
                for (let i = 0; i < tab.count; i++) {
                    const formationKey = `${tab.id}-${i}`;
                    if (formationKey !== recommendTargetFormation) {
                        formationOrder.push(formationKey);
                    }
                }
            }
        });

        // LR武将：主将/副将/補佐枠を探す
        if (general.rarity === 'LR') {
            for (const formationKey of formationOrder) {
                // 折りたたまれている部隊はスキップ
                if (collapsedFormations[formationKey]) {
                    continue;
                }

                for (const slotName of slotOrder) {
                    if (!formations[formationKey]?.slots[slotName]) {
                        // 空き枠に配置
                        setFormations(prev => ({
                            ...prev,
                            [formationKey]: {
                                ...prev[formationKey],
                                slots: {
                                    ...prev[formationKey].slots,
                                    [slotName]: general
                                }
                            }
                        }));
                        return;
                    }
                }
            }
        }

        // UR/SSR/SR/R武将：侍従枠を探す
        if (['UR', 'SSR', 'SR', 'R'].includes(general.rarity)) {
            for (const formationKey of formationOrder) {
                // 折りたたまれている部隊はスキップ
                if (collapsedFormations[formationKey]) {
                    continue;
                }
                for (const slotName of slotOrder) {
                    const attendantKey = slotName;
                    if (!formations[formationKey]?.attendants?.[attendantKey]) {
                        // 空き侍従枠に配置
                        setFormations(prev => ({
                            ...prev,
                            [formationKey]: {
                                ...prev[formationKey],
                                attendants: {
                                    ...prev[formationKey].attendants,
                                    [attendantKey]: general
                                }
                            }
                        }));
                        return;
                    }
                }
            }
        }
    };

    return {
        handleDragStart,
        handleSlotDragStart,
        handleAttendantDragStart,
        handleTreasureDragStart,
        handleTreasureSlotDragStart,
        handleAdvisorDragStart,
        handleDrop,
        handleAttendantDrop,
        handleAdvisorDrop,
        handleTreasureDrop,
        handleRemoveGeneral,
        handleRemoveAttendant,
        handleRemoveAdvisor,
        handleRemoveTreasure,
        autoAssignLRGeneral,
        autoAssignURGeneral,
        autoAssignTreasure,
        handleGeneralDoubleClick
    };
}
