// 部隊エリアコンポーネント
// 依存: React (グローバル), utils.js (getAffinityColor, getUnitTypeName, getRarityColor, resolveAttendantConflicts)

/**
 * 部隊エリア（12部隊のグリッド表示・配置・D&D）
 */
function FormationsArea({
    currentFormations, treasures, collapsedFormations,
    showImages, showSkillEffects, setShowSkillEffects,
    showStatDetail, setShowStatDetail,
    recommendTargetFormation, setRecommendTargetFormation,
    selectedForMove, setSelectedForMove, handleClickMove,
    // ハンドラ
    handleDrop, handleTreasureDrop,
    handleSlotDragStart, handleAttendantDragStart,
    handleAttendantDrop, handleAdvisorDragStart, handleAdvisorDrop,
    handleTreasureSlotDragStart,
    handleRemoveGeneral, handleRemoveAttendant,
    handleRemoveAdvisor, handleRemoveTreasure,
    resetFormation, toggleFormationCollapse,
    saveFormationTemplate, loadFormationTemplate,
    // 計算・ユーティリティ
    getImageUrl, getGeneralStarRank, getTreasureForgeRank,
    isTreasureUR, calcCombatParams, calcFormationStats, calcSkillEffects,
    showSkillList, calcSkillList,
    ItemImage
}) {
    return (
        <div className="formations-area">
            {currentFormations.map(({ key, number, data }) => (
                <div key={key} className="formation-card">
                    <div className="formation-header">
                        <div style={{display: 'flex', alignItems: 'center', gap: '12px', flex: 1}}>
                            <input
                                type="checkbox"
                                id={`collapse-${key}`}
                                checked={!collapsedFormations[key]}
                                onChange={() => toggleFormationCollapse(key)}
                                style={{width: '16px', height: '16px', cursor: 'pointer'}}
                            />
                            <button
                                className={`recommend-target-radio ${recommendTargetFormation === key ? 'selected' : ''}`}
                                onClick={() => setRecommendTargetFormation(key)}
                                title="おススメフィルタの対象部隊に設定"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    border: recommendTargetFormation === key ? '2px solid var(--gold-bright)' : '2px solid var(--border-dim)',
                                    borderRadius: '50%',
                                    background: recommendTargetFormation === key ? 'var(--rank-color)' : 'transparent',
                                    color: recommendTargetFormation === key ? 'var(--bg-base)' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: recommendTargetFormation === key ? '12px' : '14px',
                                    padding: '0',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {recommendTargetFormation === key ? '🎯' : '○'}
                            </button>
                            <label 
                                htmlFor={`collapse-${key}`}
                                style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}
                            >
                                <div className="formation-number">部隊 {number}</div>
                                {data.slots?.['主将'] && (
                                    <div style={{
                                        fontSize: '11px', 
                                        color: 'var(--text-primary)',
                                        padding: '2px 6px',
                                        background: 'rgba(37, 99, 235, 0.08)',
                                        borderRadius: '3px',
                                        border: '1px solid rgba(37, 99, 235, 0.15)'
                                    }}>
                                        {getUnitTypeName(data.slots['主将'].unit_type)}
                                    </div>
                                )}
                            </label>
                        </div>
                        <button
                            onClick={() => saveFormationTemplate(key)}
                            style={{
                                padding: '4px 12px',
                                background: 'var(--success)',
                                border: '1px solid var(--success)',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                marginRight: '8px'
                            }}
                            title="この部隊をテンプレートとして保存"
                        >
                            保存
                        </button>
                        <button
                            onClick={() => loadFormationTemplate(key)}
                            style={{
                                padding: '4px 12px',
                                background: 'var(--accent)',
                                border: '1px solid var(--accent)',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                marginRight: '8px'
                            }}
                            title="テンプレートから呼び出し"
                        >
                            呼出
                        </button>
                        <button
                            onClick={() => resetFormation(key)}
                            style={{
                                padding: '4px 12px',
                                background: 'var(--danger)',
                                border: '1px solid var(--danger)',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                marginRight: '8px'
                            }}
                            title="この部隊をリセット"
                        >
                            リセット
                        </button>
                        <button
                            onClick={() => setShowSkillEffects(prev => ({...prev, [key]: !prev[key]}))}
                            style={{
                                padding: '4px 12px',
                                background: showSkillEffects[key] ? 'var(--success)' : 'var(--bg-elevated)',
                                border: `1px solid ${showSkillEffects[key] ? 'var(--success)' : 'var(--text-muted)'}`,
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                marginRight: '8px'
                            }}
                            title="技能効果を表示"
                        >
                            {showSkillEffects[key] ? '技能効果▲' : '技能効果▼'}
                        </button>
                        <select
                            className="formation-select"
                            value={data.formationType || '基本陣形'}
                            onChange={(e) => {
                                setFormations(prev => ({
                                    ...prev,
                                    [key]: {
                                        ...prev[key],
                                        formationType: e.target.value
                                    }
                                }));
                            }}
                        >
                            {Object.keys(FORMATIONS_TYPES).map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    
                    {/* 折りたたみ時は非表示 */}
                    {!collapsedFormations[key] && (
                    <div>
                    {/* コメント入力欄 */}
                    <div style={{
                        padding: '8px 12px',
                        borderBottom: '1px solid var(--border-base)',
                        background: 'var(--bg-base)'
                    }}>
                        <input
                            type="text"
                            placeholder="メモを入力..."
                            value={data.comment || ''}
                            onChange={(e) => {
                                setFormations(prev => ({
                                    ...prev,
                                    [key]: {
                                        ...prev[key],
                                        comment: e.target.value
                                    }
                                }));
                            }}
                            style={{
                                width: '100%',
                                padding: '6px 10px',
                                background: 'var(--bg-base)',
                                border: '1px solid var(--border-base)',
                                borderRadius: '4px',
                                color: 'var(--text-body)',
                                fontSize: '12px',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>
                    {/* 技能効果表示 */}
                    {showSkillEffects[key] && (() => {
                        const effects = calcSkillEffects(key);
                        if (!effects) return null;
                        
                        return (
                            <div style={{
                                padding: '12px',
                                background: 'var(--bg-card)',
                                borderRadius: '8px',
                                marginBottom: '16px',
                                border: '2px solid var(--accent)',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                            }}>
                                <div style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    color: 'var(--text-primary)',
                                    marginBottom: '8px',
                                    borderBottom: '1px solid rgba(37, 99, 235, 0.15)',
                                    paddingBottom: '4px'
                                }}>
                                    技能効果
                                </div>
                                <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
                                    {['攻撃速度', '会心発生', '戦法速度'].map(param => {
                                        const value = effects[param];
                                        if (value === 0) return null;
                                        return (
                                            <div key={param} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}>
                                                <span style={{
                                                    color: 'var(--text-muted)',
                                                    fontSize: '13px'
                                                }}>
                                                    {param}:
                                                </span>
                                                <span style={{
                                                    color: 'var(--success)',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                }}>
                                                    +{(value * 100).toFixed(1)}%
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                                {Object.values(effects).every(v => v === 0) && (
                                    <div style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '13px',
                                        fontStyle: 'italic'
                                    }}>
                                        対象パラメータの技能効果なし
                                    </div>
                                )}
                            </div>
                        );
                    })()}
                    {/* 技能一覧表示 */}
                    {showSkillList && (() => {
                        const entries = calcSkillList(key);
                        if (!entries || entries.length === 0) return null;

                        // スロット別にグループ化
                        const slotOrder = ['主将', '副将1', '副将2', '補佐1', '補佐2'];
                        const bySlot = {};
                        for (const e of entries) {
                            (bySlot[e.slotName] ??= []).push(e);
                        }

                        return (
                            <div style={{
                                padding: '10px 12px',
                                background: 'var(--bg-card)',
                                borderRadius: '8px',
                                marginBottom: '12px',
                                border: '1px solid var(--border-light)',
                                fontSize: '11px',
                                lineHeight: '1.6'
                            }}>
                                <div style={{
                                    fontWeight: 'bold',
                                    color: 'var(--text-primary)',
                                    marginBottom: '6px',
                                    paddingBottom: '4px',
                                    borderBottom: '1px solid var(--border-light)'
                                }}>
                                    技能一覧
                                </div>
                                {slotOrder.map(slot => {
                                    const slotEntries = bySlot[slot];
                                    if (!slotEntries) return null;
                                    // 同一スロット内で重複排除（同名技能は最初のもの）
                                    const seen = new Set();
                                    const unique = slotEntries.filter(e => {
                                        if (seen.has(e.skillName)) return false;
                                        seen.add(e.skillName);
                                        return true;
                                    });
                                    return (
                                        <div key={slot} style={{marginBottom: '4px'}}>
                                            <span style={{
                                                color: 'var(--text-muted)',
                                                fontWeight: 'bold',
                                                marginRight: '6px'
                                            }}>
                                                {slot}:
                                            </span>
                                            {unique.map((e, i) => (
                                                <span key={i}>
                                                    {i > 0 && <span style={{color: 'var(--text-muted)'}}> / </span>}
                                                    <span style={{color: 'var(--text-body)'}}>
                                                        {e.skillName}
                                                    </span>
                                                    <span style={{color: 'var(--accent)', marginLeft: '2px'}}>
                                                        Lv{e.level}
                                                    </span>
                                                </span>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })()}
                    {/* 陣形と編制枠を横並び */}
                    <div style={{display: 'flex', gap: '16px', position: 'relative'}}>
                        {/* 左：陣形グリッド（相対位置指定でSVGオーバーレイ用） */}
                        <div style={{flex: '0 0 auto', position: 'relative'}}>
                            {/* グリッド */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 60px)',
                                gridTemplateRows: 'repeat(3, 60px)',
                                gap: '4px'
                            }}>
                                {(() => {
                                    const formationType = data.formationType || '基本陣形';
                                    const formationData = FORMATIONS_TYPES[formationType];
                                    const attendantPlacements = resolveAttendantConflicts(formationType, data.slots);
                                    
                                    return formationData.positions.map((row, rowIndex) =>
                                        row.map((cell, colIndex) => {
                                            let slotName = null;
                                            for (const [slot, [r, c]] of Object.entries(formationData.mapping)) {
                                                if (r === rowIndex && c === colIndex) {
                                                    slotName = slot;
                                                    break;
                                                }
                                            }
                                            const general = slotName ? data.slots[slotName] : null;
                                            
                                            // 侍従枠がこの位置にあるかチェック
                                            let attendantSlot = null;
                                            for (const [slot, coords] of Object.entries(attendantPlacements)) {
                                                if (coords && coords[0] === rowIndex && coords[1] === colIndex) {
                                                    attendantSlot = slot;
                                                    break;
                                                }
                                            }
                                            const hasAttendantSlot = attendantSlot !== null;
                                            const attendant = attendantSlot ? data.attendants?.[attendantSlot] : null;
                                            
                                            // 武将の勢力色とレア度色を取得
                                            const affinityColor = general ? getAffinityColor(general.affinity) : 
                                                                (attendant ? getAffinityColor(attendant.affinity) : null);
                                            const rarityColor = general ? getRarityColor(general.rarity) : 
                                                              (attendant ? getRarityColor(attendant.rarity) : null);
                                            
                                            return (
                                                <div
                                                    key={`${rowIndex}-${colIndex}`}
                                                    style={{
                                                        border: cell === 1 ? '2px solid var(--gold)' : (hasAttendantSlot ? '2px solid var(--attendant)' : '1px solid var(--border-light)'),
                                                        background: cell === 1 ? 'var(--bg-card)' : (hasAttendantSlot ? 'var(--bg-card)' : 'var(--bg-base)'),
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '10px',
                                                        color: general ? affinityColor : (hasAttendantSlot ? 'var(--attendant)' : 'var(--text-muted)'),
                                                        fontWeight: general || attendant ? 'bold' : 'normal',
                                                        padding: '2px',
                                                        textAlign: 'center',
                                                        flexDirection: 'column',
                                                        gap: '1px'
                                                    }}
                                                >
                                                    {general ? (
                                                        showImages ? (
                                                            <ItemImage 
                                                                src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                                alt={general.name}
                                                                rarity={general.rarity}
                                                            />
                                                        ) : (
                                                            <>
                                                                <div style={{fontSize: '7px', color: rarityColor, opacity: 0.8}}>{general.rarity}</div>
                                                                <div>{general.name.substring(0, 2)}</div>
                                                            </>
                                                        )
                                                    ) : hasAttendantSlot ? (
                                                        attendant ? (
                                                            showImages ? (
                                                                <ItemImage 
                                                                    src={getImageUrl('general', attendant.id, attendant.rarity, attendant.name)}
                                                                    alt={attendant.name}
                                                                    rarity={attendant.rarity}
                                                                />
                                                            ) : (
                                                                <>
                                                                    <div style={{fontSize: '7px', color: 'var(--text-muted)'}}>侍</div>
                                                                    <div style={{fontSize: '6px', color: rarityColor, opacity: 0.8}}>{attendant.rarity}</div>
                                                                    <div style={{color: affinityColor}}>{attendant.name.substring(0, 2)}</div>
                                                                </>
                                                            )
                                                        ) : (
                                                            <div style={{fontSize: '9px', color: 'var(--attendant)'}}>侍従</div>
                                                        )
                                                    ) : (
                                                        slotName || ''
                                                    )}
                                                </div>
                                            );
                                        })
                                    ).flat();
                                })()}
                            </div>
                            
                            {/* SVG接続線（グリッドの上にオーバーレイ） */}
                            <svg 
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '196px',  // 60*3 + 4*2
                                    height: '196px',
                                    pointerEvents: 'none'
                                }}
                            >
                                {(() => {
                                    const formationType = data.formationType || '基本陣形';
                                    const formationData = FORMATIONS_TYPES[formationType];
                                    const attendantPlacements = resolveAttendantConflicts(formationType, data.slots);
                                    const lines = [];
                                    
                                    // 各侍従枠について、LR武将との接続線を描画
                                    Object.entries(attendantPlacements).forEach(([slotName, attendantCoords]) => {
                                        if (!attendantCoords) return;
                                        
                                        const generalCoords = formationData.mapping[slotName];
                                        if (!generalCoords) return;
                                        
                                        // 座標を計算（セルの中心）
                                        const cellSize = 60;
                                        const gap = 4;
                                        
                                        const generalX = generalCoords[1] * (cellSize + gap) + cellSize / 2;
                                        const generalY = generalCoords[0] * (cellSize + gap) + cellSize / 2;
                                        
                                        const attendantX = attendantCoords[1] * (cellSize + gap) + cellSize / 2;
                                        const attendantY = attendantCoords[0] * (cellSize + gap) + cellSize / 2;
                                        
                                        lines.push(
                                            <line
                                                key={slotName}
                                                x1={generalX}
                                                y1={generalY}
                                                x2={attendantX}
                                                y2={attendantY}
                                                stroke="var(--attendant)"
                                                strokeWidth="1.5"
                                                strokeDasharray="3,3"
                                                opacity="0.5"
                                            />
                                        );
                                    });
                                    
                                    return lines;
                                })()}
                            </svg>

                        {/* 部隊ステータス・パラメータ統合パネル */}
                        <div className="combat-parameters-panel">
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '2px'}}>
                                <button
                                    onClick={() => setShowStatDetail(!showStatDetail)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: showStatDetail ? 'var(--accent)' : 'var(--text-muted)',
                                        fontSize: '9px',
                                        cursor: 'pointer',
                                        padding: '0 2px',
                                        opacity: showStatDetail ? 1 : 0.6,
                                    }}
                                    title="ステータス内訳を表示"
                                >
                                    {showStatDetail ? '内訳 ▲' : '内訳 ▼'}
                                </button>
                            </div>
                            <div className="combat-params-content">
                                {(() => {
                                    const fStats = typeof calcFormationStats === 'function' ? calcFormationStats(key) : null;
                                    const params = calcCombatParams(key);
                                    if (!fStats && !params) return <div className="no-data">データなし</div>;

                                    return (
                                        <>
                                            {fStats && (
                                                <>
                                                    {[
                                                        { label: '攻撃', key: 'attack',       color: 'var(--stat-attack, #ef4444)' },
                                                        { label: '防御', key: 'defense',      color: 'var(--danger, #dc2626)' },
                                                        { label: '知力', key: 'intelligence', color: 'var(--accent, #2563eb)' },
                                                    ].map(row => {
                                                        const finalVal = fStats.withSkills[row.key];

                                                        if (!showStatDetail) {
                                                            // 通常モード: 最終値のみ
                                                            return (
                                                                <div key={row.key} className="param-row">
                                                                    <span className="param-label" style={{color: row.color, fontWeight: 'bold'}}>
                                                                        {row.label}:
                                                                    </span>
                                                                    <span style={{
                                                                        color: 'var(--text-primary)',
                                                                        fontWeight: 'bold',
                                                                        fontFamily: 'monospace',
                                                                        fontSize: '13px'
                                                                    }}>
                                                                        {finalVal.toLocaleString()}
                                                                    </span>
                                                                </div>
                                                            );
                                                        }

                                                        // 詳細モード: 内訳表示
                                                        const baseVal = fStats.base[row.key];
                                                        const advVal = fStats.advisor ? (fStats.advisor[row.key] || 0) : 0;
                                                        const horseVal = fStats.horse ? (fStats.horse[row.key] || 0) : 0;
                                                        const pctBonus = (fStats.bonuses?.pct?.[row.key]) || 0;
                                                        const profilePct = (fStats.profileBonuses?.pct?.[row.key]) || 0;
                                                        const totalPct = pctBonus + profilePct;

                                                        return (
                                                            <div key={row.key} className="param-row">
                                                                <span className="param-label" style={{color: row.color, fontWeight: 'bold'}}>
                                                                    {row.label}:
                                                                </span>
                                                                <span style={{
                                                                    color: 'var(--text-primary)',
                                                                    fontWeight: 'bold',
                                                                    fontFamily: 'monospace',
                                                                    fontSize: '13px'
                                                                }}>
                                                                    {finalVal.toLocaleString()}
                                                                </span>
                                                                <span style={{color: 'var(--text-muted)', fontSize: '9px'}}>
                                                                    ({baseVal.toLocaleString()}
                                                                    {advVal > 0 && <span style={{color: 'var(--success, #22c55e)'}}>+{advVal}</span>}
                                                                    {horseVal > 0 && <span style={{color: '#a78bfa'}}>+{horseVal}</span>}
                                                                    {totalPct > 0 && <span style={{color: 'var(--accent)'}}>+{(totalPct * 100).toFixed(0)}%</span>})
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                    {showStatDetail && (
                                                        <div className="param-row" style={{borderBottom: '1px solid var(--border-light)', paddingBottom: '2px', marginBottom: '2px'}}>
                                                            <span style={{fontSize: '9px', color: 'var(--text-muted)'}}>
                                                                {fStats.formationName} / 参軍Lv10
                                                                {data.treasures && Object.values(data.treasures).some(t => t != null) && ' / 名宝'}
                                                                {(fStats.horse?.attack > 0 || fStats.horse?.defense > 0 || fStats.horse?.intelligence > 0) && ' / 軍馬'}
                                                                {(fStats.profileBonuses?.pct?.attack > 0 || fStats.profileBonuses?.pct?.defense > 0) && ' / 調査'}
                                                                {(fStats.research?.attack > 0 || fStats.research?.defense > 0 || fStats.research?.intelligence > 0 || fStats.research?.hp > 0) && ' / 研究'}
                                                                {(fStats.formationBonus?.attack !== 0 || fStats.formationBonus?.defense !== 0 || fStats.formationBonus?.intelligence !== 0 || fStats.formationBonus?.hp !== 0) && ' / 陣形'}
                                                            </span>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                            {params && (() => {
                                                const det = params._details || {};
                                                const detailSub = (paramKey) => {
                                                    if (!showStatDetail || !det[paramKey] || det[paramKey].length === 0) return null;
                                                    return det[paramKey].map((d, i) => (
                                                        <div key={i} className="param-row" style={{paddingLeft: '22px'}}>
                                                            <span style={{color: 'var(--text-body)', fontSize: '9px'}}>
                                                                {d.skillName}
                                                                <span style={{color: 'var(--accent)', marginLeft: '3px'}}>Lv{d.level}</span>
                                                                {d.condition !== '常に' && (
                                                                    <span style={{color: 'var(--text-muted)', marginLeft: '3px'}}>({d.condition})</span>
                                                                )}
                                                            </span>
                                                            <span style={{color: 'var(--success)', fontFamily: 'monospace', fontSize: '9px'}}>
                                                                +{d.value.toFixed(1)}%
                                                            </span>
                                                        </div>
                                                    ));
                                                };
                                                return (
                                                    <>
                                                        <div className="param-row">
                                                            <span className="param-icon">⚡</span>
                                                            <span className="param-label">出陣ゲージ:</span>
                                                            <span className="param-value">+{params.initialGauge.toFixed(1)}%</span>
                                                        </div>
                                                        {detailSub('initialGauge')}
                                                        <div className="param-row">
                                                            <span className="param-icon">🎯</span>
                                                            <span className="param-label">戦法速度:</span>
                                                            <span className="param-value">+{params.tacticSpeed.toFixed(1)}%</span>
                                                        </div>
                                                        {detailSub('tacticSpeed')}
                                                        <div className="param-row">
                                                            <span className="param-icon">🛡️</span>
                                                            <span className="param-label">致死耐性:</span>
                                                            <span className={`param-value ${params.lethalResist ? 'active' : 'inactive'}`}>
                                                                {params.lethalResist ? 'ON' : 'OFF'}
                                                            </span>
                                                        </div>
                                                        {showStatDetail && det.lethalResist && det.lethalResist.length > 0 && (
                                                            det.lethalResist.map((d, i) => (
                                                                <div key={i} className="param-row" style={{paddingLeft: '22px'}}>
                                                                    <span style={{color: 'var(--text-body)', fontSize: '9px'}}>
                                                                        {d.skillName}
                                                                        <span style={{color: 'var(--accent)', marginLeft: '3px'}}>Lv{d.level}</span>
                                                                        {d.condition !== '常に' && (
                                                                            <span style={{color: 'var(--text-muted)', marginLeft: '3px'}}>({d.condition})</span>
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            ))
                                                        )}
                                                        <div className="param-row">
                                                            <span className="param-icon">⏱️</span>
                                                            <span className="param-label">戦法短縮:</span>
                                                            <span className="param-value">+{params.tacticReduce.toFixed(1)}%</span>
                                                        </div>
                                                        {detailSub('tacticReduce')}
                                                        <div className="param-row">
                                                            <span className="param-icon">⚔️</span>
                                                            <span className="param-label">攻撃速度:</span>
                                                            <span className="param-value">+{params.attackSpeed.toFixed(1)}%</span>
                                                        </div>
                                                        {detailSub('attackSpeed')}
                                                        <div className="param-row">
                                                            <span className="param-icon">💥</span>
                                                            <span className="param-label">会心発生:</span>
                                                            <span className="param-value">+{params.critical.toFixed(1)}%</span>
                                                        </div>
                                                        {detailSub('critical')}
                                                    </>
                                                );
                                            })()}
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                        </div>
                        
                        {/* 右：編制枠 */}
                        <div className="template-slots" style={{flex: '1'}}>
                        {['主将', '副将1', '副将2', '補佐1', '補佐2'].map(slotName => (
                            <div key={slotName} className="slot-row">
                                <div className="slot-label">{slotName}</div>
                                
                                {/* 武将枠 */}
                                <div
                                    className={`slot-drop-zone ${data.slots[slotName] ? 'filled' : ''} ${
                                        selectedForMove?.type === 'general' && selectedForMove.formationKey === key && selectedForMove.slotName === slotName ? 'selected-for-move' : ''
                                    } ${selectedForMove?.type === 'general' ? 'move-target' : ''}`}
                                    data-rarity={data.slots[slotName]?.rarity}
                                    onDragOver={(e) => {
                                        e.preventDefault();
                                        e.currentTarget.classList.add('drag-over');
                                    }}
                                    onDragLeave={(e) => {
                                        e.currentTarget.classList.remove('drag-over');
                                    }}
                                    onDrop={(e) => {
                                        e.currentTarget.classList.remove('drag-over');
                                        handleDrop(e, key, slotName);
                                    }}
                                    onClick={(e) => {
                                        if (e.target.closest('.mini-remove-btn')) return;
                                        if (selectedForMove) {
                                            if (selectedForMove.type === 'general') {
                                                handleClickMove(key, slotName, 'general');
                                            }
                                        } else if (data.slots[slotName]) {
                                            setSelectedForMove({
                                                type: 'general',
                                                formationKey: key,
                                                slotName: slotName,
                                                item: data.slots[slotName]
                                            });
                                        }
                                    }}
                                >
                                    {data.slots[slotName] ? (
                                        <div 
                                            className="slot-content"
                                            data-rarity={data.slots[slotName].rarity}
                                            draggable={true}
                                            onDragStart={(e) => handleSlotDragStart(e, data.slots[slotName], key, slotName)}
                                            onDoubleClick={() => handleRemoveGeneral(key, slotName)}
                                            style={{cursor: 'grab'}}
                                            title="ダブルクリックで削除"
                                        >
                                            <button
                                                className="mini-remove-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveGeneral(key, slotName);
                                                }}
                                            >
                                                ×
                                            </button>
                                            <div className="slot-general-info" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                                <ItemImage 
                                                    src={getImageUrl('general', data.slots[slotName].id, data.slots[slotName].rarity, data.slots[slotName].name)}
                                                    alt={data.slots[slotName].name}
                                                    rarity={data.slots[slotName].rarity}
                                                />
                                                <div style={{flex: 1}}>
                                                    <div className="slot-general-name" style={{color: 'var(--text-primary)'}}>
                                                        {data.slots[slotName].name}
                                                    </div>
                                                    <div className="slot-general-details">
                                                    <span style={{color: getRarityColor(data.slots[slotName].rarity), fontWeight: 'bold'}}>
                                                        {data.slots[slotName].rarity}
                                                    </span>
                                                    {' '}- {getUnitTypeName(data.slots[slotName].unit_type)}
                                                    {' '}
                                                    <span style={{
                                                        color: getAffinityColor(data.slots[slotName].affinity),
                                                        fontWeight: 'bold',
                                                        fontSize: '11px'
                                                    }}>
                                                        相性{data.slots[slotName].affinity}
                                                    </span>
                                                    <span className="star-rank">
                                                        {' '}{(() => {
                                                            const rank = getGeneralStarRank(data.slots[slotName]);
                                                            return '★'.repeat(rank) + '☆'.repeat(7 - rank);
                                                        })()}
                                                    </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="slot-empty">武将</div>
                                    )}
                                </div>
                                
                                {/* 侍従枠 */}
                                <div 
                                    className={`attendant-zone ${data.attendants?.[slotName] ? 'filled' : ''} ${
                                        selectedForMove?.type === 'attendant' && selectedForMove.formationKey === key && selectedForMove.slotName === slotName ? 'selected-for-move' : ''
                                    } ${selectedForMove?.type === 'attendant' ? 'move-target' : ''}`}
                                    data-rarity={data.attendants?.[slotName]?.rarity}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => handleAttendantDrop(e, key, slotName)}
                                    onClick={(e) => {
                                        if (e.target.closest('.mini-remove-btn')) return;
                                        if (selectedForMove) {
                                            if (selectedForMove.type === 'attendant') {
                                                handleClickMove(key, slotName, 'attendant');
                                            }
                                        } else if (data.attendants?.[slotName]) {
                                            setSelectedForMove({
                                                type: 'attendant',
                                                formationKey: key,
                                                slotName: slotName,
                                                item: data.attendants[slotName]
                                            });
                                        }
                                    }}
                                >
                                    {data.attendants?.[slotName] ? (
                                        <div 
                                            className="slot-general-info"
                                            draggable={true}
                                            onDragStart={(e) => handleAttendantDragStart(e, data.attendants[slotName], key, slotName)}
                                            onDoubleClick={() => handleRemoveAttendant(key, slotName)}
                                            style={{cursor: 'grab', width: '100%', height: '100%', padding: '4px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
                                            title="ドラッグで移動、ダブルクリックで削除"
                                        >
                                            <button
                                                className="mini-remove-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveAttendant(key, slotName);
                                                }}
                                            >
                                                ×
                                            </button>
                                            {showImages ? (
                                                <ItemImage 
                                                    src={getImageUrl('general', data.attendants[slotName].id, data.attendants[slotName].rarity, data.attendants[slotName].name)}
                                                    alt={data.attendants[slotName].name}
                                                    rarity={data.attendants[slotName].rarity}
                                                />
                                            ) : (
                                                <div style={{width: '100%'}}>
                                                    <div style={{fontSize: '11px', color: 'var(--text-primary)', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                                        {data.attendants[slotName].name}
                                                    </div>
                                                    <div style={{fontSize: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                                        <span style={{color: getRarityColor(data.attendants[slotName].rarity), fontWeight: 'bold'}}>
                                                            {data.attendants[slotName].rarity}
                                                        </span>
                                                        {' '}
                                                        <span style={{
                                                            color: getAffinityColor(data.attendants[slotName].affinity),
                                                            fontWeight: 'bold'
                                                        }}>
                                                            相性{data.attendants[slotName].affinity}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        '侍従'
                                    )}
                                </div>
                                
                                {/* 名宝枠 */}
                                <div className="treasures-zone">
                                    {['weapon', 'armor', 'artifact'].map((treasureSlot, idx) => {
                                        const treasureKey = `${slotName}-${treasureSlot}`;
                                        const equippedTreasure = data.treasures?.[treasureKey];
                                        const labels = ['武器', '防具', '文物'];
                                        
                                        return (
                                            <div 
                                                key={treasureSlot}
                                                className={`treasure-mini-slot ${equippedTreasure ? 'filled' : ''} ${
                                                    selectedForMove?.type === 'treasure' && selectedForMove.formationKey === key && selectedForMove.slotName === slotName && selectedForMove.treasureSlot === treasureSlot ? 'selected-for-move' : ''
                                                } ${selectedForMove?.type === 'treasure' ? 'move-target' : ''}`}
                                                onDragOver={(e) => e.preventDefault()}
                                                onDrop={(e) => handleTreasureDrop(e, key, slotName, treasureSlot)}
                                                draggable={!!equippedTreasure}
                                                onDragStart={(e) => {
                                                    if (equippedTreasure) {
                                                        handleTreasureSlotDragStart(e, equippedTreasure, key, slotName, treasureSlot);
                                                    }
                                                }}
                                                onDoubleClick={(e) => {
                                                    if (equippedTreasure) {
                                                        e.stopPropagation();
                                                        handleRemoveTreasure(key, slotName, treasureSlot);
                                                    }
                                                }}
                                                onClick={(e) => {
                                                    if (selectedForMove) {
                                                        if (selectedForMove.type === 'treasure') {
                                                            handleClickMove(key, slotName, 'treasure', treasureSlot);
                                                        }
                                                    } else if (equippedTreasure) {
                                                        setSelectedForMove({
                                                            type: 'treasure',
                                                            formationKey: key,
                                                            slotName: slotName,
                                                            treasureSlot: treasureSlot,
                                                            item: equippedTreasure
                                                        });
                                                    }
                                                }}
                                                style={equippedTreasure ? {cursor: 'grab'} : {}}
                                                title={equippedTreasure ? "ダブルクリックで削除" : ""}
                                            >
                                                {equippedTreasure ? (
                                                    <>
                                                        {getTreasureForgeRank(equippedTreasure.id) >= 0 && (
                                                            <div className={`forge-rank ${isTreasureUR(equippedTreasure.id) ? 'ur' : ''}`} style={{fontSize: '6px', top: '1px', left: '1px'}}>
                                                                {isTreasureUR(equippedTreasure.id) ? '★' : '☆'}{getTreasureForgeRank(equippedTreasure.id)}
                                                            </div>
                                                        )}
                                                        <ItemImage 
                                                            src={getImageUrl('treasure', equippedTreasure.id, null, equippedTreasure.name)}
                                                            alt={equippedTreasure.name}
                                                            rarity={isTreasureUR(equippedTreasure.id) ? 'UR' : 'normal'}
                                                        />
                                                        <div 
                                                            className="treasure-name-mini"
                                                            style={{
                                                                color: isTreasureUR(equippedTreasure.id) ? 'var(--rarity-ur)' : 'var(--text-body)',
                                                                marginTop: '2px'
                                                            }}
                                                        >
                                                            {equippedTreasure.name}{isTreasureUR(equippedTreasure.id) ? '(UR)' : ''}
                                                        </div>
                                                    </>
                                                ) : (
                                                    labels[idx]
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        </div>
                        
                        {/* 参軍配置エリア */}
                        <div className="advisor-section" style={{
                            marginTop: '12px',
                            padding: '8px',
                            background: 'var(--bg-card)',
                            borderRadius: '4px',
                            border: '1px solid var(--border-base)'
                        }}>
                            <div style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'var(--text-primary)',
                                marginBottom: '8px',
                                borderBottom: '1px solid var(--border-base)',
                                paddingBottom: '4px'
                            }}>
                                参軍配置
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '50px 1fr',
                                gap: '6px',
                                alignItems: 'center'
                            }}>
                                {[
                                    { key: 'leadership', label: '統率', color: 'var(--danger)' },
                                    { key: 'attack', label: '武力', color: 'var(--stat-attack)' },
                                    { key: 'intelligence', label: '知力', color: 'var(--accent)' },
                                    { key: 'politics', label: '政治', color: 'var(--stat-politics)' },
                                    { key: 'charm', label: '魅力', color: 'var(--stat-charm)' }
                                ].map(advisor => {
                                    const advisorGeneral = data.advisors?.[advisor.key];
                                    return (
                                        <React.Fragment key={advisor.key}>
                                            <div style={{
                                                fontSize: '10px',
                                                fontWeight: 'bold',
                                                color: advisor.color,
                                                padding: '4px 8px',
                                                background: 'rgba(0,0,0,0.3)',
                                                borderRadius: '3px',
                                                textAlign: 'center',
                                                minWidth: '40px'
                                            }}>
                                                {advisor.label}
                                            </div>
                                            <div
                                                className={`advisor-drop-zone ${advisorGeneral ? 'filled' : ''} ${
                                                    selectedForMove?.type === 'advisor' && selectedForMove.formationKey === key && selectedForMove.advisorType === advisor.key ? 'selected-for-move' : ''
                                                } ${selectedForMove?.type === 'advisor' ? 'move-target' : ''}`}
                                                onDragOver={(e) => {
                                                    e.preventDefault();
                                                    e.currentTarget.classList.add('drag-over');
                                                }}
                                                onDragLeave={(e) => {
                                                    e.currentTarget.classList.remove('drag-over');
                                                }}
                                                onDrop={(e) => {
                                                    e.currentTarget.classList.remove('drag-over');
                                                    handleAdvisorDrop(e, key, advisor.key);
                                                }}
                                                onClick={(e) => {
                                                    if (e.target.closest('.mini-remove-btn')) return;
                                                    if (selectedForMove) {
                                                        if (selectedForMove.type === 'advisor') {
                                                            handleClickMove(key, null, 'advisor', advisor.key);
                                                        }
                                                    } else if (advisorGeneral) {
                                                        setSelectedForMove({
                                                            type: 'advisor',
                                                            formationKey: key,
                                                            slotName: null,
                                                            advisorType: advisor.key,
                                                            item: advisorGeneral
                                                        });
                                                    }
                                                }}
                                                style={{
                                                    padding: '4px',
                                                    background: advisorGeneral ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-base)',
                                                    border: `1px solid ${advisorGeneral ? advisor.color : 'var(--bg-elevated)'}`,
                                                    borderRadius: '3px',
                                                    minHeight: '52px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: advisorGeneral ? 'grab' : 'default',
                                                    position: 'relative'
                                                }}
                                                draggable={!!advisorGeneral}
                                                onDragStart={(e) => {
                                                    if (advisorGeneral) {
                                                        handleAdvisorDragStart(e, advisorGeneral, key, advisor.key);
                                                    }
                                                }}
                                                onDoubleClick={() => {
                                                    if (advisorGeneral) {
                                                        handleRemoveAdvisor(key, advisor.key);
                                                    }
                                                }}
                                                title={advisorGeneral ? "ダブルクリックで削除" : ""}
                                            >
                                                {advisorGeneral ? (
                                                    <>
                                                        <button
                                                            className="mini-remove-btn"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleRemoveAdvisor(key, advisor.key);
                                                            }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: '2px',
                                                                right: '2px'
                                                            }}
                                                        >
                                                            ×
                                                        </button>
                                                        {showImages ? (
                                                            <ItemImage 
                                                                src={getImageUrl('general', advisorGeneral.id, advisorGeneral.rarity, advisorGeneral.name)}
                                                                alt={advisorGeneral.name}
                                                                rarity={advisorGeneral.rarity}
                                                            />
                                                        ) : (
                                                            <div style={{width: '100%', fontSize: '10px'}}>
                                                                <div style={{
                                                                    color: 'var(--text-primary)',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '11px',
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis'
                                                                }}>
                                                                    {advisorGeneral.name}
                                                                </div>
                                                                <div style={{
                                                                    display: 'flex',
                                                                    gap: '6px',
                                                                    fontSize: '9px'
                                                                }}>
                                                                    <span style={{
                                                                        color: getRarityColor(advisorGeneral.rarity),
                                                                        fontWeight: 'bold'
                                                                    }}>
                                                                        {advisorGeneral.rarity}
                                                                    </span>
                                                                    <span style={{
                                                                        color: getAffinityColor(advisorGeneral.affinity)
                                                                    }}>
                                                                        相性{advisorGeneral.affinity}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <div style={{
                                                        color: 'var(--text-muted)',
                                                        fontSize: '10px',
                                                        textAlign: 'center',
                                                        width: '100%'
                                                    }}>
                                                        参軍
                                                    </div>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            ))}
        </div>
        
    );
}
