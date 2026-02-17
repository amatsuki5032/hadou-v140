// パネルコンポーネント群 - 武将リスト・名宝リスト
// 依存: React (グローバル)
// 依存: getAffinityColor, getAffinityGroup, getUnitTypeName, getWeaponTypeName (utils.js)

/**
 * 武将リストパネル
 * フィルタUI + 武将カード一覧を表示
 */
function GeneralsPanel({
    // データ
    generals, formations, disabledGenerals,
    generalsByUnitTypeAndRarity, FACTION_TAGS,
    // パネル状態
    showGeneralsPanel, setShowGeneralsPanel, showContextHelp,
    // フィルタ状態
    activeGeneralsTab, setActiveGeneralsTab,
    generalsSortOrder, setGeneralsSortOrder,
    affinitySortDirection, setAffinitySortDirection,
    expandedRarities, setExpandedRarities,
    unitTypeFilter, setUnitTypeFilter,
    factionFilter, setFactionFilter,
    attendantFilter, setAttendantFilter,
    showOnlyFavorites, setShowOnlyFavorites,
    showOnlyRecommendedGenerals, setShowOnlyRecommendedGenerals,
    showOnlyRangeSkill, setShowOnlyRangeSkill,
    showOnlySwiftSkill, setShowOnlySwiftSkill,
    showOnlyAntiAnnihilation, setShowOnlyAntiAnnihilation,
    showOnlyDamageDealt, setShowOnlyDamageDealt,
    showOnlyDamageTaken, setShowOnlyDamageTaken,
    recommendTargetFormation,
    // コールバック
    handleDragStart, handleGeneralDoubleClick,
    isGeneralUsed, moveToDisabled, moveToActive,
    getImageUrl, getGeneralStarRank,
    toggleFilter, setContextHelpType,
    // コンポーネント
    ItemImage
}) {
    return (
        <div className={`generals-panel ${!showGeneralsPanel ? 'collapsed' : ''}`}>
            <div className="panel-header">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <div className="panel-title">武将リスト</div>
                    <button
                        onClick={() => setShowGeneralsPanel(!showGeneralsPanel)}
                        style={{
                            padding: '2px 6px',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}
                        title={showGeneralsPanel ? 'パネルを閉じる' : 'パネルを開く'}
                    >
                        {showGeneralsPanel ? '▽' : '▷'}
                    </button>
                    {showContextHelp && (
                        <button
                            onClick={() => setContextHelpType('general')}
                            style={{
                                background: 'var(--accent)',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '10px',
                                width: '18px',
                                height: '18px',
                                padding: 0,
                                lineHeight: '18px'
                            }}
                            title="武将の配置方法"
                        >
                            ?
                        </button>
                    )}
                </div>
                
                <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                    <button
                        onClick={() => setGeneralsSortOrder(prev => prev === 'unit_type' ? 'affinity' : 'unit_type')}
                        style={{
                            padding: '4px 8px',
                            background: generalsSortOrder === 'affinity' ? 'var(--success)' : 'var(--bg-elevated)',
                            border: '1px solid ' + (generalsSortOrder === 'affinity' ? 'var(--success)' : 'var(--bg-elevated)'),
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '10px',
                            fontWeight: 'bold'
                        }}
                        title={generalsSortOrder === 'affinity' ? '相性順で表示中（クリックで兵科順に）' : '兵科順で表示中（クリックで相性順に）'}
                    >
                        {generalsSortOrder === 'affinity' ? '相性順' : '兵科順'}
                    </button>
                    {generalsSortOrder === 'affinity' && (
                        <button
                            onClick={() => setAffinitySortDirection(prev => prev === 'desc' ? 'asc' : 'desc')}
                            style={{
                                padding: '4px 8px',
                                background: 'var(--accent)',
                                border: '1px solid var(--accent)',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '10px',
                                fontWeight: 'bold'
                            }}
                            title={affinitySortDirection === 'desc' ? '降順（高→低）クリックで昇順に' : '昇順（低→高）クリックで降順に'}
                        >
                            {affinitySortDirection === 'desc' ? '↓' : '↑'}
                        </button>
                    )}
                    <button
                        onClick={() => {
                            setUnitTypeFilter([]);
                            setFactionFilter([]);
                            setAttendantFilter([]);
                            setShowOnlyFavorites(false);
                            setShowOnlyRecommendedGenerals(false);
                        }}
                        style={{
                            padding: '4px 8px',
                            background: 'var(--danger)',
                            border: '1px solid var(--danger)',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '10px',
                            fontWeight: 'bold'
                        }}
                        title="全フィルタをリセット"
                    >
                        🔄
                    </button>
                </div>
                
                <div className="filter-section">
                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                        {['LR', 'UR', 'SSR', 'SR', 'R'].map(rarity => (
                            <button
                                key={rarity}
                                className={`filter-chip ${expandedRarities[rarity] ? 'active' : ''}`}
                                onClick={() => {
                                    // レアリティは排他的（1つだけON）
                                    const isCurrentlyActive = expandedRarities[rarity];
                                    
                                    // LR以外に変更、またはLRをOFFにする場合は侍従タグをクリア
                                    if (rarity !== 'LR' || isCurrentlyActive) {
                                        setAttendantFilter([]);
                                    }
                                    
                                    // 全てOFFにしてから、クリックしたものだけON（再クリックでOFF）
                                    setExpandedRarities({
                                        LR: false,
                                        UR: false,
                                        SSR: false,
                                        SR: false,
                                        R: false,
                                        [rarity]: !isCurrentlyActive
                                    });
                                }}
                            >
                                {rarity}
                            </button>
                        ))}
                        {['槍', '弓', '馬'].map(unit => (
                            <button
                                key={unit}
                                className={`filter-chip ${unitTypeFilter.includes(unit) ? 'active' : ''}`}
                                onClick={() => toggleFilter('unitType', unit)}
                            >
                                {unit}
                            </button>
                        ))}
                    </div>
                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px'}}>
                        {FACTION_TAGS.map(faction => (
                            <button
                                key={faction.name}
                                className={`filter-chip ${factionFilter.includes(faction.name) ? 'active' : ''}`}
                                onClick={() => toggleFilter('faction', faction.name)}
                                style={{
                                    background: factionFilter.includes(faction.name) ? faction.color : 'var(--bg-elevated)',
                                    borderColor: faction.color
                                }}
                            >
                                {faction.name}
                            </button>
                        ))}
                        <button
                            className={`filter-chip ${showOnlyFavorites ? 'active' : ''}`}
                            onClick={() => {
                                const willActivate = !showOnlyFavorites;
                                setShowOnlyFavorites(willActivate);
                                if (willActivate) {
                                    setFactionFilter([]);
                                }
                            }}
                            style={{
                                background: showOnlyFavorites ? 'var(--rank-color)' : 'var(--bg-elevated)',
                                borderColor: 'var(--accent)',
                                color: showOnlyFavorites ? 'var(--text-primary)' : 'var(--text-primary)'
                            }}
                        >
                            お気に入り
                        </button>
                        <button
                            className={`filter-chip ${showOnlyRecommendedGenerals ? 'active' : ''}`}
                            onClick={() => {
                                const targetFormation = formations[recommendTargetFormation];
                                const mainGeneral = targetFormation?.slots?.['主将'];
                                if (mainGeneral) {
                                    const willActivate = !showOnlyRecommendedGenerals;
                                    setShowOnlyRecommendedGenerals(willActivate);
                                    if (willActivate) {
                                        setFactionFilter([]);
                                    }
                                }
                            }}
                            disabled={!formations[recommendTargetFormation]?.slots?.['主将']}
                            style={{
                                background: showOnlyRecommendedGenerals ? 'var(--accent)' : 'var(--bg-elevated)',
                                borderColor: 'var(--accent)',
                                color: showOnlyRecommendedGenerals ? 'var(--text-primary)' : 'var(--text-muted)',
                                opacity: !formations[recommendTargetFormation]?.slots?.['主将'] ? 0.5 : 1,
                                cursor: !formations[recommendTargetFormation]?.slots?.['主将'] ? 'not-allowed' : 'pointer'
                            }}
                            title={!formations[recommendTargetFormation]?.slots?.['主将'] ? '対象部隊に主将を配置してください' : '好相性の武将のみ表示'}
                        >
                            好相性
                        </button>
                        {[
                            { state: showOnlyRangeSkill, setter: setShowOnlyRangeSkill, label: '遠射', title: '射程スキル持ち武将のみ表示' },
                            { state: showOnlySwiftSkill, setter: setShowOnlySwiftSkill, label: '敏活', title: '戦法速度スキル持ち武将のみ表示' },
                            { state: showOnlyAntiAnnihilation, setter: setShowOnlyAntiAnnihilation, label: '即壊滅回避', title: '即壊滅回避スキル持ち武将のみ表示' },
                            { state: showOnlyDamageDealt, setter: setShowOnlyDamageDealt, label: '与ダメージ', title: '与ダメージパラメータ持ち武将のみ表示' },
                            { state: showOnlyDamageTaken, setter: setShowOnlyDamageTaken, label: '被ダメージ', title: '被ダメージパラメータ持ち武将のみ表示' }
                        ].map(({ state, setter, label, title }) => (
                            <button
                                key={label}
                                className={`filter-chip ${state ? 'active' : ''}`}
                                onClick={() => {
                                    const newState = !state;
                                    setter(newState);
                                    if (newState) {
                                        setExpandedRarities({LR: true, UR: true, SSR: true, SR: true, R: true});
                                    }
                                }}
                                style={{
                                    background: state ? 'var(--accent)' : 'var(--bg-elevated)',
                                    borderColor: 'var(--accent)',
                                    color: state ? 'var(--text-primary)' : 'var(--text-muted)'
                                }}
                                title={title}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="filter-group" style={{marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                        <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                            {['左', '上', '右上', '右'].map(position => (
                                <button
                                    key={position}
                                    className={`filter-chip ${attendantFilter.includes(position) ? 'active' : ''}`}
                                    onClick={() => toggleFilter('attendant', position)}
                                    style={{
                                        fontSize: '10px',
                                        padding: '4px 8px'
                                    }}
                                >
                                    侍従:{position}
                                </button>
                            ))}
                        </div>
                        <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                            {['左下', '下', '右下'].map(position => (
                                <button
                                    key={position}
                                    className={`filter-chip ${attendantFilter.includes(position) ? 'active' : ''}`}
                                    onClick={() => toggleFilter('attendant', position)}
                                    style={{
                                        fontSize: '10px',
                                        padding: '4px 8px'
                                    }}
                                >
                                    侍従:{position}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {showGeneralsPanel && (
                <div className="generals-list">
                    <div className="generals-tabs">
                        <button 
                            className={`generals-tab ${activeGeneralsTab === 'active' ? 'active' : ''}`}
                            onClick={() => setActiveGeneralsTab('active')}
                        >
                            使用可能
                        </button>
                        <button 
                            className={`generals-tab ${activeGeneralsTab === 'disabled' ? 'active' : ''}`}
                            onClick={() => setActiveGeneralsTab('disabled')}
                        >
                            不使用 ({disabledGenerals.length})
                        </button>
                    </div>
                    
                    <div className="generals-content-wrapper">
                    {activeGeneralsTab === 'active' ? (
                        // 使用可能武将（レア度ごとに折りたたみ）
                        ['LR', 'UR', 'SSR', 'SR', 'R'].map(rarity => {
                            // このレアリティの武将が存在するかチェック
                            const hasGenerals = ['槍', '弓', '馬'].some(unitType => 
                                generalsByUnitTypeAndRarity[unitType][rarity].length > 0
                            );
                            
                            if (!hasGenerals) return null;
                            
                            // このレアリティの武将の総数を計算
                            const totalCount = ['槍', '弓', '馬'].reduce((sum, unitType) => 
                                sum + generalsByUnitTypeAndRarity[unitType][rarity].length, 0
                            );
                            
                            return (
                                <div key={rarity} className="rarity-category" style={{marginBottom: '12px'}}>
                                    <div 
                                        className="rarity-category-title"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '4px 12px',
                                            background: 'rgba(26, 31, 46, 0.8)',
                                            borderLeft: '3px solid var(--bordeaux)',
                                            cursor: 'pointer',
                                            marginBottom: '6px'
                                        }}
                                        onClick={() => {
                                            setExpandedRarities(prev => ({
                                                ...prev,
                                                [rarity]: !prev[rarity]
                                            }));
                                        }}
                                    >
                                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                                            <span style={{fontSize: '11px', color: 'var(--text-muted)'}}>
                                                {expandedRarities[rarity] ? '▼' : '▶'}
                                            </span>
                                            <span style={{fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '12px'}}>
                                                {rarity} ({totalCount}人)
                                            </span>
                                        </div>
                                    </div>
                                    {expandedRarities[rarity] && (
                                        <React.Fragment>
                                            {['槍', '弓', '馬'].map(unitType => (
                                                generalsByUnitTypeAndRarity[unitType][rarity].length > 0 && (
                                                    <div key={`${unitType}-${rarity}`} className="unit-type-section">
                                                        <div className="unit-type-title">{getUnitTypeName(unitType)} - {rarity}</div>
                                                        <div className="generals-grid-display">
                                                            {generalsByUnitTypeAndRarity[unitType][rarity].map(general => (
                                            <div
                                                key={`${general.rarity}-${general.id}-${general.name}`}
                                                className="general-item-wrapper"
                                            >
                                                <div
                                                    className={`general-item ${isGeneralUsed(general.id, general.name, general.rarity) ? 'used' : ''}`}
                                                    data-affinity-group={getAffinityGroup(general.affinity)}
                                                    data-rarity={general.rarity}
                                                    draggable={true}
                                                    onDragStart={(e) => handleDragStart(e, general)}
                                                    onDoubleClick={() => handleGeneralDoubleClick(general)}
                                                    style={{
                                                        backgroundColor: `${getAffinityColor(general.affinity)}60`
                                                    }}
                                                >
                                                    <div className="general-item-with-image">
                                                        <ItemImage 
                                                            src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                            alt={general.name}
                                                            rarity={general.rarity}
                                                        />
                                                        <div className="item-text-content">
                                                            <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px'}}>
                                                                <span className="general-rarity" style={{fontSize: '10px'}}>{general.rarity}</span>
                                                                <span
                                                                    className="general-name"
                                                                    style={{
                                                                        color: 'var(--text-primary)',
                                                                        flex: 1,
                                                                        fontSize: general.name.length >= 4 ? '13px' : undefined
                                                                    }}
                                                                >
                                                                    {general.name}
                                                                </span>
                                                                <span style={{fontSize: '10px', color: 'var(--text-primary)', fontWeight: 'bold'}}>
                                                                    ☆{getGeneralStarRank(general)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="general-move-btn"
                                                    onClick={() => moveToDisabled(general)}
                                                    title="不使用に移動"
                                                >
                                                    →
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                    )
                                ))}
                            </React.Fragment>
                        )}
                    </div>
                );
            })
                    ) : (
                        // 不使用武将
                        <div className="generals-grid-display">
                            {disabledGenerals.map(general => (
                                <div
                                    key={`disabled-${general.rarity}-${general.id}-${general.name}`}
                                    className="general-item-wrapper"
                                >
                                    <div 
                                        className="general-item" 
                                        data-affinity-group={getAffinityGroup(general.affinity)}
                                        style={{
                                            backgroundColor: `${getAffinityColor(general.affinity)}60`
                                        }}
                                    >
                                        <div className="general-item-with-image">
                                            <ItemImage 
                                                src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                alt={general.name}
                                                rarity={general.rarity}
                                            />
                                            <div className="item-text-content">
                                                <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px'}}>
                                                    <span className="general-rarity" style={{fontSize: '10px'}}>{general.rarity}</span>
                                                    <span
                                                        className="general-name"
                                                        style={{
                                                            color: 'var(--text-primary)',
                                                            flex: 1,
                                                            fontSize: general.name.length >= 4 ? '13px' : undefined
                                                        }}
                                                    >
                                                        {general.name}
                                                    </span>
                                                    <span style={{fontSize: '10px', color: 'var(--text-primary)', fontWeight: 'bold'}}>
                                                        ☆{getGeneralStarRank(general)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="general-move-btn"
                                        onClick={() => moveToActive(general)}
                                        title="使用可能に戻す"
                                    >
                                        ←
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>{/* generals-content-wrapper */}
                </div>
            )}
        </div>
    );
}

/**
 * 名宝リストパネル
 * フィルタUI + 名宝カード一覧を表示
 */
function TreasuresPanel({
    // データ
    generals, treasures, formations, disabledTreasures,
    treasuresByCategory,
    // パネル状態
    showTreasuresPanel, setShowTreasuresPanel, showContextHelp,
    // フィルタ状態
    activeTreasuresTab, setActiveTreasuresTab,
    expandedTreasureCategories, setExpandedTreasureCategories,
    treasureWeaponFilter, setTreasureWeaponFilter,
    treasureFactionFilter, setTreasureFactionFilter,
    showOnlyFavoriteTreasures, setShowOnlyFavoriteTreasures,
    showOnlyRecommendedTreasures, setShowOnlyRecommendedTreasures,
    showOnlyRendatsuTreasures, setShowOnlyRendatsuTreasures,
    showOnlySwift, setShowOnlySwift,
    showOnlyAntiAnnihilation, setShowOnlyAntiAnnihilation,
    showOnlyDamageDealt, setShowOnlyDamageDealt,
    showOnlyDamageTaken, setShowOnlyDamageTaken,
    recommendTargetFormation,
    // コールバック
    handleTreasureDragStart, autoAssignTreasure,
    isTreasureUsed, isTreasureUR,
    moveTreasureToDisabled, moveTreasureToActive,
    removeTreasureFromFormations,
    getImageUrl, getTreasureForgeRank,
    toggleFilter, setContextHelpType,
    // コンポーネント
    ItemImage
}) {
    return (
        <div className={`treasures-panel ${!showTreasuresPanel ? 'collapsed' : ''}`}>
            <div className="panel-header">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <div className="panel-title">名宝リスト</div>
                    <button
                        onClick={() => setShowTreasuresPanel(!showTreasuresPanel)}
                        style={{
                            padding: '2px 6px',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}
                        title={showTreasuresPanel ? 'パネルを閉じる' : 'パネルを開く'}
                    >
                        {showTreasuresPanel ? '▽' : '▷'}
                    </button>
                    {showContextHelp && (
                        <button
                            onClick={() => setContextHelpType('treasure')}
                            style={{
                                background: 'var(--accent)',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '10px',
                                width: '18px',
                                height: '18px',
                                padding: 0,
                                lineHeight: '18px'
                            }}
                            title="名宝の配置方法"
                        >
                            ?
                        </button>
                    )}
                </div>
                
                <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                    <button
                        onClick={() => {
                            setTreasureWeaponFilter([]);
                            setTreasureFactionFilter([]);
                            setShowOnlyFavoriteTreasures(false);
                            setShowOnlyRecommendedTreasures(false);
                        }}
                        style={{
                            padding: '4px 8px',
                            background: 'var(--danger)',
                            border: '1px solid var(--danger)',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '10px',
                            fontWeight: 'bold'
                        }}
                        title="全フィルタをリセット"
                    >
                        🔄
                    </button>
                </div>
                
                <div className="filter-section">
                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                        {[
                            {name: '武器', color: 'var(--filter-weapon)'},
                            {name: '防具', color: 'var(--filter-armor)'},
                            {name: '文物', color: 'var(--filter-artifact)'}
                        ].map(category => (
                            <button
                                key={category.name}
                                className={`filter-chip ${expandedTreasureCategories[category.name] ? 'active' : ''}`}
                                onClick={() => {
                                    setExpandedTreasureCategories(prev => ({
                                        ...prev,
                                        [category.name]: !prev[category.name]
                                    }));
                                }}
                                style={{
                                    background: expandedTreasureCategories[category.name] ? category.color : 'var(--bg-elevated)',
                                    borderColor: category.color,
                                    color: expandedTreasureCategories[category.name] ? 'var(--bg-base)' : 'var(--text-body)'
                                }}
                            >
                                {category.name}
                            </button>
                        ))}
                        {[
                            {weapon: '槍', label: '歩兵', color: 'var(--filter-weapon)'},
                            {weapon: '弓', label: '弓兵', color: 'var(--filter-armor)'},
                            {weapon: '馬', label: '騎兵', color: 'var(--filter-artifact)'},
                            {weapon: '全', label: '全兵科', color: 'var(--filter-all)'}
                        ].map(item => (
                            <button
                                key={item.weapon}
                                className={`filter-chip ${treasureWeaponFilter.includes(item.weapon) ? 'active' : ''}`}
                                onClick={() => toggleFilter('treasureWeapon', item.weapon)}
                                style={{
                                    background: treasureWeaponFilter.includes(item.weapon) ? item.color : 'var(--bg-elevated)',
                                    borderColor: item.color,
                                    color: treasureWeaponFilter.includes(item.weapon) ? 'var(--bg-base)' : 'var(--text-body)'
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px'}}>
                    </div>
                    <div className="filter-group" style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px'}}>
                        {[
                            {name: '魏', color: 'var(--accent)'},
                            {name: '蜀', color: 'var(--success)'},
                            {name: '袁紹', color: 'var(--filter-yuan)'},
                            {name: '呉', color: 'var(--filter-wu)'},
                            {name: '他', color: 'var(--filter-weapon)'},
                            {name: 'イベント', color: 'var(--filter-armor)'}
                        ].map(faction => (
                            <button
                                key={faction.name}
                                className={`filter-chip ${treasureFactionFilter.includes(faction.name) ? 'active' : ''}`}
                                onClick={() => toggleFilter('treasureFaction', faction.name)}
                                style={{
                                    background: treasureFactionFilter.includes(faction.name) ? faction.color : 'var(--bg-elevated)',
                                    borderColor: faction.color,
                                    color: treasureFactionFilter.includes(faction.name) ? 'var(--bg-base)' : 'var(--text-body)'
                                }}
                            >
                                {faction.name}
                            </button>
                        ))}
                    </div>
                    <div className="filter-group" style={{marginTop: '8px'}}>
                        {(() => {
                            const targetFormation = formations[recommendTargetFormation];
                            const hasGeneral = targetFormation?.slots?.['主将'] ||
                                targetFormation?.slots?.['副将1'] ||
                                targetFormation?.slots?.['副将2'] ||
                                targetFormation?.slots?.['補佐1'] ||
                                targetFormation?.slots?.['補佐2'] ||
                                (targetFormation?.attendants && Object.values(targetFormation.attendants).some(a => a));
                            // 排他的タグON時の共通処理
                            const activateExclusive = (setter) => {
                                setShowOnlyFavoriteTreasures(false);
                                setShowOnlyRecommendedTreasures(false);
                                setShowOnlyRendatsuTreasures(false);
                                setter(true);
                                setExpandedTreasureCategories({'武器': true, '防具': true, '文物': true});
                                setTreasureWeaponFilter([]);
                            };
                            return (<>
                                <button
                                    className={`filter-chip ${showOnlyFavoriteTreasures ? 'active' : ''}`}
                                    onClick={() => {
                                        if (showOnlyFavoriteTreasures) {
                                            setShowOnlyFavoriteTreasures(false);
                                        } else {
                                            activateExclusive(setShowOnlyFavoriteTreasures);
                                        }
                                    }}
                                    style={{
                                        background: showOnlyFavoriteTreasures ? 'var(--rank-color)' : 'var(--bg-elevated)',
                                        borderColor: 'var(--accent)',
                                        color: showOnlyFavoriteTreasures ? 'var(--bg-base)' : 'var(--text-body)'
                                    }}
                                >
                                    お気に入り
                                </button>
                                <button
                                    className={`filter-chip ${showOnlyRecommendedTreasures ? 'active' : ''}`}
                                    onClick={() => {
                                        if (showOnlyRecommendedTreasures) {
                                            setShowOnlyRecommendedTreasures(false);
                                        } else if (hasGeneral) {
                                            activateExclusive(setShowOnlyRecommendedTreasures);
                                        }
                                    }}
                                    disabled={!hasGeneral}
                                    style={{
                                        background: showOnlyRecommendedTreasures ? 'var(--accent)' : 'var(--bg-elevated)',
                                        borderColor: 'var(--accent)',
                                        color: showOnlyRecommendedTreasures ? 'var(--text-primary)' : 'var(--text-muted)',
                                        opacity: hasGeneral ? 1 : 0.5,
                                        cursor: hasGeneral ? 'pointer' : 'not-allowed'
                                    }}
                                    title={hasGeneral ? '関連名宝のみ表示' : '対象部隊に武将を配置してください'}
                                >
                                    関連名宝
                                </button>
                                <button
                                    className={`filter-chip ${showOnlyRendatsuTreasures ? 'active' : ''}`}
                                    onClick={() => {
                                        if (showOnlyRendatsuTreasures) {
                                            setShowOnlyRendatsuTreasures(false);
                                        } else if (hasGeneral) {
                                            activateExclusive(setShowOnlyRendatsuTreasures);
                                        }
                                    }}
                                    disabled={!hasGeneral}
                                    style={{
                                        background: showOnlyRendatsuTreasures ? 'var(--accent)' : 'var(--bg-elevated)',
                                        borderColor: 'var(--accent)',
                                        color: showOnlyRendatsuTreasures ? 'var(--text-primary)' : 'var(--text-muted)',
                                        opacity: hasGeneral ? 1 : 0.5,
                                        cursor: hasGeneral ? 'pointer' : 'not-allowed'
                                    }}
                                    title={hasGeneral ? '練達名宝のみ表示' : '対象部隊に武将を配置してください'}
                                >
                                    練達名宝
                                </button>
                            </>);
                        })()}
                        {[
                            { state: showOnlySwift, setter: setShowOnlySwift, label: '敏活', title: '敏活練達スキル持ち名宝のみ表示' },
                            { state: showOnlyAntiAnnihilation, setter: setShowOnlyAntiAnnihilation, label: '即壊滅回避', title: '即壊滅回避スキル持ち名宝のみ表示' },
                            { state: showOnlyDamageDealt, setter: setShowOnlyDamageDealt, label: '与ダメージ', title: '与ダメージパラメータ持ち名宝のみ表示' },
                            { state: showOnlyDamageTaken, setter: setShowOnlyDamageTaken, label: '被ダメージ', title: '被ダメージパラメータ持ち名宝のみ表示' }
                        ].map(({ state, setter, label, title }) => (
                            <button
                                key={label}
                                className={`filter-chip ${state ? 'active' : ''}`}
                                onClick={() => {
                                    setter(!state);
                                    if (!state) setExpandedTreasureCategories({'武器': true, '防具': true, '文物': true});
                                }}
                                style={{
                                    background: state ? 'var(--accent)' : 'var(--bg-elevated)',
                                    borderColor: 'var(--accent)',
                                    color: state ? 'var(--text-primary)' : 'var(--text-muted)'
                                }}
                                title={title}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            {showTreasuresPanel && (
                <div className="treasures-list">
                    <div className="treasures-tabs">
                        <button 
                            className={`treasures-tab ${activeTreasuresTab === 'active' ? 'active' : ''}`}
                            onClick={() => setActiveTreasuresTab('active')}
                        >
                            使用可能
                        </button>
                        <button 
                            className={`treasures-tab ${activeTreasuresTab === 'disabled' ? 'active' : ''}`}
                            onClick={() => setActiveTreasuresTab('disabled')}
                        >
                            不使用 ({disabledTreasures.length})
                        </button>
                    </div>
                    
                    <div className="treasures-content-wrapper">
                    {activeTreasuresTab === 'active' ? (
                        // 使用可能名宝（カテゴリごとに折りたたみ）
                        ['武器', '防具', '文物'].map(category => {
                            if (treasuresByCategory[category].length === 0) return null;
                            
                            return (
                                <div key={category} className="treasure-category" style={{marginBottom: '16px'}}>
                                    <div 
                                        className="treasure-category-title"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '8px 12px',
                                            background: 'rgba(26, 31, 46, 0.8)',
                                            borderLeft: '3px solid var(--bordeaux)',
                                            cursor: 'pointer',
                                            marginBottom: '8px'
                                        }}
                                        onClick={() => {
                                            setExpandedTreasureCategories(prev => ({
                                                ...prev,
                                                [category]: !prev[category]
                                            }));
                                        }}
                                    >
                                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                            <span style={{fontSize: '12px', color: 'var(--text-muted)'}}>
                                                {expandedTreasureCategories[category] ? '▼' : '▶'}
                                            </span>
                                            <span style={{fontWeight: 'bold', color: 'var(--text-primary)'}}>
                                                {category} ({treasuresByCategory[category].length}個)
                                            </span>
                                        </div>
                                    </div>
                                    {expandedTreasureCategories[category] && (
                                    <div className="treasures-grid-display">
                                        {treasuresByCategory[category].map(treasure => (
                                            <div
                                                key={treasure.id}
                                                className="treasure-item-wrapper"
                                            >
                                                <div 
                                                    className={`treasure-item ${isTreasureUsed(treasure.id, treasure.name) ? 'used' : ''}`}
                                                    draggable={true}
                                                    onDragStart={(e) => handleTreasureDragStart(e, treasure)}
                                                    onDoubleClick={(e) => {
                                                        e.stopPropagation();
                                                        if (isTreasureUsed(treasure.id, treasure.name)) {
                                                            // 配置済みの場合は編制から削除
                                                            removeTreasureFromFormations(treasure.id, treasure.name);
                                                        } else {
                                                            // 未配置の場合は自動配置
                                                            autoAssignTreasure(treasure);
                                                        }
                                                    }}
                                                >
                                                    <div className="treasure-item-with-image">
                                                        <ItemImage 
                                                            src={getImageUrl('treasure', treasure.id, null, treasure.name)}
                                                            alt={treasure.name}
                                                            rarity={isTreasureUR(treasure.id) ? 'UR' : 'normal'}
                                                        />
                                                        <div className="treasure-text-content" style={{display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0}}>
                                                            <span
                                                                className="treasure-name"
                                                                style={{
                                                                    color: isTreasureUR(treasure.id) ? 'var(--rarity-ur)' : 'var(--text-primary)',
                                                                    fontWeight: isTreasureUR(treasure.id) ? 'bold' : '700',
                                                                    fontSize: treasure.name.length >= 6 ? '9px' : undefined
                                                                }}
                                                            >
                                                                {treasure.name}{isTreasureUR(treasure.id) ? '(UR)' : ''}
                                                            </span>
                                                            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                                {getTreasureForgeRank(treasure.id) >= 0 && (
                                                                    <span className={`treasure-forge-inline ${isTreasureUR(treasure.id) ? 'ur' : ''}`}>
                                                                        {isTreasureUR(treasure.id) ? '★' : '☆'}{getTreasureForgeRank(treasure.id)}
                                                                    </span>
                                                                )}
                                                                {treasure.weapon_type && (
                                                                    <span className="treasure-type" style={{color: 'var(--text-muted)'}}>{getWeaponTypeName(treasure.weapon_type)}</span>
                                                                )}
                                                                {treasure.related && (
                                                                    <span
                                                                        className="treasure-related"
                                                                        style={{
                                                                            color: (() => {
                                                                                const relatedGeneral = generals.find(g => g.name === treasure.related);
                                                                                return relatedGeneral ? getAffinityColor(relatedGeneral.affinity) : 'var(--text-muted)';
                                                                            })(),
                                                                            fontWeight: '600'
                                                                        }}
                                                                    >
                                                                        {treasure.related}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="treasure-move-btn"
                                                    onClick={() => moveTreasureToDisabled(treasure)}
                                                    title="不使用に移動"
                                                >
                                                    →
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        // 不使用名宝
                        <div className="treasures-grid-display">
                            {disabledTreasures.map(treasure => (
                                <div
                                    key={`disabled-${treasure.id}-${treasure.name}`}
                                    className="treasure-item-wrapper"
                                >
                                    <div
                                        className="treasure-item"
                                    >
                                        <div className="treasure-item-with-image">
                                            <ItemImage
                                                src={getImageUrl('treasure', treasure.id, null, treasure.name)}
                                                alt={treasure.name}
                                                rarity={isTreasureUR(treasure.id) ? 'UR' : 'normal'}
                                            />
                                            <div className="treasure-text-content" style={{display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0}}>
                                                <span
                                                    className="treasure-name"
                                                    style={{
                                                        color: isTreasureUR(treasure.id) ? 'var(--rarity-ur)' : 'var(--text-primary)',
                                                        fontWeight: isTreasureUR(treasure.id) ? 'bold' : '700',
                                                        fontSize: treasure.name.length >= 6 ? '9px' : undefined
                                                    }}
                                                >
                                                    {treasure.name}{isTreasureUR(treasure.id) ? '(UR)' : ''}
                                                </span>
                                                <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                    {getTreasureForgeRank(treasure.id) >= 0 && (
                                                        <span className={`treasure-forge-inline ${isTreasureUR(treasure.id) ? 'ur' : ''}`}>
                                                            {isTreasureUR(treasure.id) ? '★' : '☆'}{getTreasureForgeRank(treasure.id)}
                                                        </span>
                                                    )}
                                                    {treasure.weapon_type && (
                                                        <span className="treasure-type" style={{color: 'var(--text-muted)'}}>{getWeaponTypeName(treasure.weapon_type)}</span>
                                                    )}
                                                    {treasure.related && (
                                                        <span
                                                            className="treasure-related"
                                                            style={{
                                                                color: (() => {
                                                                    const relatedGeneral = generals.find(g => g.name === treasure.related);
                                                                    return relatedGeneral ? getAffinityColor(relatedGeneral.affinity) : 'var(--text-muted)';
                                                                })(),
                                                                fontWeight: '600'
                                                            }}
                                                        >
                                                            {treasure.related}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="treasure-move-btn"
                                        onClick={() => moveTreasureToActive(treasure)}
                                        title="使用可能に戻す"
                                    >
                                        ←
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>{/* treasures-content-wrapper */}
                </div>
            )}
        </div>
    );
}
