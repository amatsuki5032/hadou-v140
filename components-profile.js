// components-profile.js — プロファイルパネル（研究・調査・軍馬）
// 依存: React (グローバル), data-profile.js, data-research.js, data-skill-db.js

/**
 * プロファイルパネル
 * 右パネルの折りたたみ可能な3タブパネル
 */
function ProfilePanel({
    showProfilePanel, setShowProfilePanel,
    profileConfig, setProfileConfig,
    showContextHelp, setContextHelpType,
}) {
    const [activeProfileTab, setActiveProfileTab] = React.useState('research');

    const tabs = [
        { id: 'research',      label: '研究' },
        { id: 'investigation', label: '調査' },
        { id: 'horse',         label: '軍馬' },
    ];

    return (
        <div className={`profile-panel ${!showProfilePanel ? 'collapsed' : ''}`}>
            <div className="panel-header">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <div className="panel-title">プロファイル</div>
                    <button
                        onClick={() => setShowProfilePanel(!showProfilePanel)}
                        style={{
                            padding: '2px 6px', background: 'transparent',
                            border: 'none', color: 'var(--text-primary)',
                            cursor: 'pointer', fontSize: '14px', fontWeight: 'bold'
                        }}
                        title={showProfilePanel ? 'パネルを閉じる' : 'パネルを開く'}
                    >
                        {showProfilePanel ? '▽' : '▷'}
                    </button>
                </div>
            </div>

            {showProfilePanel && (
                <React.Fragment>
                    <div className="profile-tab-bar">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`profile-tab-btn ${activeProfileTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveProfileTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="profile-tab-content">
                        {activeProfileTab === 'research' && (
                            <ResearchTab
                                profileConfig={profileConfig}
                                setProfileConfig={setProfileConfig}
                            />
                        )}
                        {activeProfileTab === 'investigation' && (
                            <InvestigationTab
                                profileConfig={profileConfig}
                                setProfileConfig={setProfileConfig}
                            />
                        )}
                        {activeProfileTab === 'horse' && (
                            <HorseTab
                                profileConfig={profileConfig}
                                setProfileConfig={setProfileConfig}
                            />
                        )}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}


// ============================================================
// 研究タブ
// ============================================================

function ResearchTab({ profileConfig, setProfileConfig }) {
    const research = profileConfig?.research || {};
    const specs = research.specializations || {};
    const items = research.items || {};

    const handleSpecChange = (category, value) => {
        setProfileConfig(prev => ({
            ...prev,
            research: {
                ...prev.research,
                specializations: {
                    ...(prev.research?.specializations || {}),
                    [category]: value,
                },
            },
        }));
    };

    const handleItemChange = (key, field, value) => {
        setProfileConfig(prev => ({
            ...prev,
            research: {
                ...prev.research,
                items: {
                    ...(prev.research?.items || {}),
                    [key]: {
                        ...((prev.research?.items || {})[key] || {}),
                        [field]: value,
                    },
                },
            },
        }));
    };

    const activeFields = new Set([
        '序論', specs.city, specs.troop, specs.fourth,
    ].filter(Boolean));

    if (typeof RESEARCH_DATA === 'undefined' || typeof RESEARCH_FIELDS === 'undefined') {
        return <div className="profile-empty-state">data-research.js が読み込まれていません</div>;
    }

    const grouped = {};
    for (const item of RESEARCH_DATA) {
        (grouped[item.field] ??= []).push(item);
    }
    const fieldOrder = Object.values(RESEARCH_FIELDS).flatMap(f => f.choices);

    // 一括操作: 全項目を解除（アンロック）
    const handleUnlockAll = () => {
        setProfileConfig(prev => {
            const newItems = { ...(prev.research?.items || {}) };
            for (const item of RESEARCH_DATA) {
                const key = `${item.field}:${item.name}`;
                newItems[key] = { ...(newItems[key] || {}), unlocked: true };
            }
            return { ...prev, research: { ...prev.research, items: newItems } };
        });
    };

    // 一括操作: 全ロック
    const handleLockAll = () => {
        setProfileConfig(prev => {
            const newItems = { ...(prev.research?.items || {}) };
            for (const key of Object.keys(newItems)) {
                newItems[key] = { ...newItems[key], unlocked: false };
            }
            return { ...prev, research: { ...prev.research, items: newItems } };
        });
    };

    // 一括操作: 全上限に設定（専攻に関係なく全項目）
    const handleSetAllMax = () => {
        if (!confirm('すべての研究項目の値を上限に設定します。\nよろしいですか？')) return;
        setProfileConfig(prev => {
            const newItems = { ...(prev.research?.items || {}) };
            for (const item of RESEARCH_DATA) {
                const key = `${item.field}:${item.name}`;
                const maxPct = (item.maxValue != null && typeof item.maxValue === 'number' && item.maxValue <= 1)
                    ? item.maxValue * 100
                    : (item.maxValue || 0);
                newItems[key] = { ...newItems[key], unlocked: true, value: maxPct };
            }
            return { ...prev, research: { ...prev.research, items: newItems } };
        });
    };

    // 一括操作: 全リセット（全項目をロック＋値を0に戻す）
    const handleResetAll = () => {
        if (!confirm('すべての研究項目をリセットします。\n（全項目ロック＋値を初期化）\nよろしいですか？')) return;
        setProfileConfig(prev => {
            return { ...prev, research: { ...prev.research, items: {} } };
        });
    };

    return (
        <div className="research-tab">
            {/* 専攻選択 */}
            <div className="research-spec-section">
                <div className="research-spec-label">専攻選択</div>
                {RESEARCH_SPECIALIZATION_CATEGORIES.map(cat => (
                    <div key={cat.id} className="research-spec-row">
                        <span className="research-spec-cat">{cat.label}</span>
                        <div className="research-spec-options">
                            {cat.options.map(opt => (
                                <label key={opt} className="research-spec-radio">
                                    <input
                                        type="radio"
                                        name={`spec-${cat.id}`}
                                        checked={specs[cat.id] === opt}
                                        onChange={() => handleSpecChange(cat.id, opt)}
                                    />
                                    <span>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 一括操作 */}
            <div className="research-bulk-actions">
                <button className="research-bulk-btn research-bulk-btn-danger" onClick={handleResetAll}>全リセット</button>
                <button className="research-bulk-btn" onClick={handleLockAll}>全ロック</button>
                <button className="research-bulk-btn" onClick={handleUnlockAll}>全解除</button>
                <button className="research-bulk-btn research-bulk-btn-danger" onClick={handleSetAllMax}>全上限に設定</button>
            </div>

            {/* 分野別研究リスト */}
            {fieldOrder.map(fieldName => {
                const fieldItems = grouped[fieldName] || [];
                if (fieldItems.length === 0) return null;
                const isActive = activeFields.has(fieldName);

                return (
                    <ResearchFieldGroup
                        key={fieldName}
                        fieldName={fieldName}
                        fieldItems={fieldItems}
                        isActive={isActive}
                        items={items}
                        onItemChange={handleItemChange}
                    />
                );
            })}
        </div>
    );
}

function ResearchFieldGroup({ fieldName, fieldItems, isActive, items, onItemChange }) {
    const [expanded, setExpanded] = React.useState(isActive);

    React.useEffect(() => {
        if (isActive) setExpanded(true);
    }, [isActive]);

    const unlockedCount = fieldItems.filter(item => {
        const key = `${item.field}:${item.name}`;
        return items[key]?.unlocked;
    }).length;

    return (
        <div className={`research-field-group ${!isActive ? 'inactive' : ''}`}>
            <div className="research-field-header" onClick={() => setExpanded(!expanded)}>
                <span className="research-field-toggle">{expanded ? '▾' : '▸'}</span>
                <span className="research-field-name">{fieldName}</span>
                <span className="research-field-count">{unlockedCount}/{fieldItems.length}</span>
                {!isActive && fieldName !== '序論' && (
                    <span className="research-field-badge-inactive">専攻外</span>
                )}
                {fieldName === '序論' && (
                    <span className="research-field-badge-master">常時有効</span>
                )}
            </div>

            {expanded && (
                <div className="research-field-items">
                    {fieldItems.map(item => {
                        const isMaster = item.isMaster;
                        const key = `${item.field}:${item.name}`;
                        const saved = items[key] || {};
                        const isInactive = !isActive && !isMaster;
                        const effectLabel = (item.effects || []).map(e => e.effect).filter(Boolean).join(', ');

                        return (
                            <div key={key} className={`research-item ${isInactive ? 'inactive' : ''}`}>
                                <button
                                    className={`research-item-lock ${saved.unlocked ? 'unlocked' : ''}`}
                                    onClick={() => onItemChange(key, 'unlocked', !saved.unlocked)}
                                    title={saved.unlocked ? 'クリックでロック' : 'クリックで解除'}
                                >{saved.unlocked ? '\u{1F513}' : '\u{1F512}'}</button>
                                <span className="research-item-name">{item.name}</span>
                                <span className="research-item-effect">
                                    {item.maxValue != null
                                        ? (typeof item.maxValue === 'number' && item.maxValue <= 1
                                            ? `最大${(item.maxValue * 100).toFixed(0)}%`
                                            : `最大${item.maxValue}`)
                                        : '—'}
                                </span>
                                <input
                                    type="number"
                                    className="research-item-value"
                                    value={saved.value || ''}
                                    placeholder="0"
                                    step="0.5"
                                    min="0"
                                    max={item.maxValue != null
                                        ? (typeof item.maxValue === 'number' && item.maxValue <= 1
                                            ? item.maxValue * 100
                                            : 100)
                                        : 100}
                                    disabled={!saved.unlocked}
                                    onChange={(e) => onItemChange(key, 'value', parseFloat(e.target.value) || 0)}
                                />
                                <span className="research-item-unit">%</span>
                                {isMaster && <span className="research-item-badge-m">M</span>}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}


// ============================================================
// 調査タブ
// ============================================================

function InvestigationTab({ profileConfig, setProfileConfig }) {
    const investigation = profileConfig?.investigation || {};

    const handleLevelChange = (skillName, level) => {
        setProfileConfig(prev => ({
            ...prev,
            investigation: { ...prev.investigation, [skillName]: level },
        }));
    };

    if (typeof SKILL_DB === 'undefined') {
        return <div className="profile-empty-state">data-skill-db.js が読み込まれていません</div>;
    }

    const LEVEL_KEY_MAP = { 1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ' };

    return (
        <div className="investigation-tab">
            {INVESTIGATION_TRIBES.map(tribe => (
                <div key={tribe.id} className="investigation-tribe">
                    <div className="investigation-tribe-header">{tribe.name}</div>
                    <div className="investigation-tribe-skills">
                        {tribe.skills.map(skillName => {
                            const skillData = SKILL_DB[skillName];
                            const level = investigation[skillName] || 0;

                            let effectLabel = '';
                            let effectValue = '';
                            if (skillData && level > 0) {
                                const mainEffect = skillData.effects.find(e => e.type2 !== '所持');
                                if (mainEffect) {
                                    effectLabel = mainEffect.effect || '';
                                    const lvKey = LEVEL_KEY_MAP[Math.min(level, 5)];
                                    const val = mainEffect.levels?.[lvKey];
                                    if (val != null) {
                                        effectValue = typeof val === 'number'
                                            ? (val < 1 ? `+${(val * 100).toFixed(1)}%` : `+${val}`)
                                            : `+${val}`;
                                    }
                                }
                            }

                            return (
                                <div key={skillName} className="investigation-skill-row">
                                    <span className="investigation-skill-name">{skillName}</span>
                                    <span className="investigation-skill-effect">{effectLabel}</span>
                                    <select
                                        className="investigation-skill-level"
                                        value={level}
                                        onChange={(e) => handleLevelChange(skillName, parseInt(e.target.value))}
                                    >
                                        <option value={0}>-</option>
                                        <option value={1}>Ⅰ</option>
                                        <option value={2}>Ⅱ</option>
                                        <option value={3}>Ⅲ</option>
                                        <option value={4}>Ⅳ</option>
                                        <option value={5}>Ⅴ</option>
                                    </select>
                                    <span className="investigation-skill-value">{effectValue}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}


// ============================================================
// 軍馬タブ
// ============================================================

function HorseTab({ profileConfig, setProfileConfig }) {
    const horses = profileConfig?.horses || createDefaultProfileData().horses;

    const updateHorse = (index, updater) => {
        setProfileConfig(prev => {
            const newHorses = [...(prev.horses || createDefaultProfileData().horses)];
            newHorses[index] = typeof updater === 'function'
                ? updater(newHorses[index])
                : { ...newHorses[index], ...updater };
            return { ...prev, horses: newHorses };
        });
    };

    // HORSE_SKILL_DATA から個別スキル名リストを生成
    const skillOptions = (typeof HORSE_SKILL_DATA !== 'undefined' ? HORSE_SKILL_DATA : []).map(s => s.name);

    const getUsedSkills = (horseIndex) => {
        const horse = horses[horseIndex];
        if (!horse) return new Set();
        return new Set(horse.skills.map(s => s.name).filter(Boolean));
    };

    // 他の馬で使用中の名馬を取得
    const getUsedMeiba = (horseIndex) => {
        const used = new Set();
        horses.forEach((h, i) => {
            if (i !== horseIndex && h && h.isMeiba && h.meibaName) {
                used.add(h.meibaName);
            }
        });
        return used;
    };

    // 累積計算（個別スキル名でそのまま集計）
    const totals = {};
    for (const horse of horses) {
        if (!horse) continue;
        for (const skill of (horse.skills || [])) {
            if (skill.name && skill.level > 0) {
                totals[skill.name] = Math.min((totals[skill.name] || 0) + skill.level, 10);
            }
        }
        if (horse.isMeiba && horse.meibaName) {
            const meiba = MEIBA_DATA[horse.meibaName];
            if (meiba) {
                const slv = meiba.starRankToSkillLevel[horse.meibaStarRank] || 0;
                if (slv > 0) {
                    totals[meiba.skillName] = Math.min((totals[meiba.skillName] || 0) + slv, meiba.maxSkillLevel);
                }
            }
        }
    }

    const statBonus = calcHorseStatBonuses(horses);
    const ROMAN = ['', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ'];

    return (
        <div className="horse-tab">
            {/* 3頭カード横並び */}
            <div className="horse-cards">
                {horses.map((horse, i) => (
                    <HorseConfig
                        key={i}
                        horse={horse}
                        index={i}
                        updateHorse={updateHorse}
                        skillOptions={skillOptions}
                        getUsedSkills={getUsedSkills}
                        getUsedMeiba={getUsedMeiba}
                        ROMAN={ROMAN}
                    />
                ))}
            </div>

            {/* 合計 */}
            <div className="horse-summary">
                <div className="horse-summary-header">合計</div>
                <div className="horse-summary-stats">
                    {statBonus.attack > 0 && <span>攻撃+{statBonus.attack}</span>}
                    {statBonus.defense > 0 && <span>防御+{statBonus.defense}</span>}
                    {statBonus.intelligence > 0 && <span>知力+{statBonus.intelligence}</span>}
                    {statBonus.mobility > 0 && <span>機動+{statBonus.mobility}</span>}
                </div>
                <div className="horse-summary-skills">
                    {Object.entries(totals).filter(([_, lv]) => lv > 0).map(([name, lv]) => (
                        <span key={name} className="horse-summary-skill">{name}{ROMAN[lv] || lv}</span>
                    ))}
                    {Object.keys(totals).filter(k => totals[k] > 0).length === 0 && (
                        <span className="text-muted">技能未設定</span>
                    )}
                </div>
                <div className="horse-summary-note">
                    通常6部隊 + 自都市3部隊に適用（詰所は対象外）
                </div>
            </div>
        </div>
    );
}

function HorseConfig({ horse, index, updateHorse, skillOptions, getUsedSkills, getUsedMeiba, ROMAN }) {
    const usedSkills = getUsedSkills(index);
    const usedMeiba = getUsedMeiba(index);
    const isMeiba = !!MEIBA_DATA[horse.coat];

    // 毛色/名馬の統合セレクト変更
    const handleTypeChange = (value) => {
        const meiba = !!MEIBA_DATA[value];
        updateHorse(index, prev => ({
            ...prev,
            coat: value,
            isMeiba: meiba,
            meibaName: meiba ? value : null,
            meibaStarRank: meiba ? (prev.meibaStarRank || 0) : 0,
        }));
    };

    const handleSkillChange = (skillIndex, field, value) => {
        updateHorse(index, prev => {
            const newSkills = [...prev.skills];
            newSkills[skillIndex] = { ...newSkills[skillIndex], [field]: value };
            if (field === 'name' && value && newSkills[skillIndex].level === 0) {
                newSkills[skillIndex].level = 1;
            }
            return { ...prev, skills: newSkills };
        });
    };

    let meibaStats = null;
    if (isMeiba && horse.meibaName) {
        const meiba = MEIBA_DATA[horse.meibaName];
        if (meiba) meibaStats = meiba.stats[horse.meibaStarRank] || meiba.stats[0];
    }

    return (
        <div className="horse-card">
            <div className="horse-card-header">{horse.coat || `馬${index + 1}`}</div>

            {/* 毛色/名馬 統合セレクト */}
            <div className="horse-config-row">
                <select
                    className="horse-config-select horse-config-select-full"
                    value={horse.coat || ''}
                    onChange={(e) => handleTypeChange(e.target.value)}
                >
                    {Object.keys(HORSE_COATS).map(coat => (
                        <option key={coat} value={coat}>{coat}</option>
                    ))}
                    {Object.keys(MEIBA_DATA).map(name => {
                        const isUsed = usedMeiba.has(name);
                        return (
                            <option key={name} value={name} disabled={isUsed}>
                                {name}{isUsed ? '（編制済）' : ''}
                            </option>
                        );
                    })}
                </select>
            </div>

            {/* 毛色ボーナス（通常馬のみ） */}
            {!isMeiba && horse.coat && HORSE_COATS[horse.coat] && (
                <div className="horse-config-bonus">
                    {Object.entries(HORSE_COATS[horse.coat])
                        .filter(([_, v]) => v > 0)
                        .map(([k, v]) => `${k === 'attack' ? '攻撃' : k === 'defense' ? '防御' : '知力'}+${v}`)
                        .join(' ')}
                </div>
            )}

            {/* 名馬: ☆ランク */}
            {isMeiba && (
                <div className="horse-config-row">
                    <span className="horse-config-star-label">☆</span>
                    <select
                        className="horse-config-select horse-config-select-sm"
                        value={horse.meibaStarRank}
                        onChange={(e) => updateHorse(index, prev => ({ ...prev, meibaStarRank: parseInt(e.target.value) }))}
                    >
                        {[0,1,2,3,4,5,6,7].map(r => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* 名馬ステータス */}
            {meibaStats && (
                <div className="horse-meiba-stats">
                    <span>攻+{meibaStats.attack}</span>
                    <span>防+{meibaStats.defense}</span>
                    <span>知+{meibaStats.intelligence}</span>
                    {meibaStats.mobility > 0 && <span>機+{meibaStats.mobility}</span>}
                    {horse.meibaName && (() => {
                        const meiba = MEIBA_DATA[horse.meibaName];
                        const slv = meiba?.starRankToSkillLevel[horse.meibaStarRank] || 0;
                        return slv > 0 ? <span className="horse-meiba-skill">{horse.meibaName}{ROMAN[slv]}</span> : null;
                    })()}
                </div>
            )}

            {/* 技能3枠 */}
            <div className="horse-skills-section">
                {horse.skills.map((skill, si) => (
                    <div key={si} className="horse-skill-slot">
                        <select
                            className="horse-config-select horse-config-select-full"
                            value={skill.name || ''}
                            onChange={(e) => handleSkillChange(si, 'name', e.target.value)}
                        >
                            <option value="">技能{si + 1}</option>
                            {skillOptions.map(opt => {
                                const isUsed = usedSkills.has(opt) && skill.name !== opt;
                                return (
                                    <option key={opt} value={opt} disabled={isUsed}>
                                        {opt}{isUsed ? '（使用中）' : ''}
                                    </option>
                                );
                            })}
                        </select>
                        <select
                            className="horse-config-select horse-config-select-sm"
                            value={skill.level}
                            disabled={!skill.name}
                            onChange={(e) => handleSkillChange(si, 'level', parseInt(e.target.value))}
                        >
                            <option value={0}>-</option>
                            {[1,2,3,4,5].map(lv => (
                                <option key={lv} value={lv}>{ROMAN[lv]}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
}
