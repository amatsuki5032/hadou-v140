// ランク設定パネルコンポーネント
// 依存: React (グローバル), utils.js (getRarityColor, getUnitTypeName)

/**
 * ランク設定画面（武将星ランク / 名宝精錬ランク / お気に入り / 不使用設定）
 */
function RankSettingsPanel({
    generals, treasures,
    currentProfile, setCurrentProfile,
    profileNames, setProfileNames, profileData, setProfileData,
    rankTab, setRankTab,
    rankSearchTerm, setRankSearchTerm,
    expandedRarities, setExpandedRarities,
    expandedTreasureCategories, setExpandedTreasureCategories,
    setDisabledGenerals, setDisabledTreasures,
    getGeneralStarRank, setGeneralStar,
    getGeneralProfile, setGeneralLevel, setGeneralGrade,
    getTreasureForgeRank, setTreasureForge,
    isTreasureUR, toggleTreasureUR,
    isFavorite, toggleFavorite,
    isFavoriteTreasure, toggleFavoriteTreasure,
    isGeneralDisabled, isTreasureDisabled,
    getImageUrl, ItemImage,
    exportProfile, importProfile,
    profileConfig, setProfileConfig
}) {
    // profileDataから現在プロファイルのランクデータを取得
    const currentProfileData = profileData[currentProfile] || {};
    const generalStarRank = currentProfileData.generalStarRank || {};
    const treasureForgeRank = currentProfileData.treasureForgeRank || {};
    const treasureURStatus = currentProfileData.treasureURStatus || {};
    
    return (
        <div className="rank-settings-container" style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
            {/* プロファイル選択 */}
            <div style={{marginBottom: '24px', padding: '16px', background: 'var(--bg-card)', border: '2px solid var(--border-light)', borderRadius: '4px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
                    <h3 style={{color: 'var(--text-primary)', margin: 0, fontSize: '16px'}}>プロファイル選択</h3>
                    <div style={{display: 'flex', gap: '8px'}}>
                        <button
                            onClick={exportProfile}
                            style={{
                                padding: '6px 12px',
                                background: 'var(--success)',
                                border: '1px solid var(--success)',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: 'bold'
                            }}
                            title="現在のプロファイルをエクスポート"
                        >
                            プロファイル保存
                        </button>
                        <label
                            style={{
                                padding: '6px 12px',
                                background: 'var(--accent)',
                                border: '1px solid var(--accent)',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: 'bold'
                            }}
                            title="プロファイルをインポート"
                        >
                            プロファイル読込
                            <input
                                type="file"
                                accept=".json"
                                onChange={importProfile}
                                style={{display: 'none'}}
                            />
                        </label>
                    </div>
                </div>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                    {profileNames.map((name, index) => (
                        <div key={index} style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
                            <button
                                onClick={() => setCurrentProfile(index)}
                                style={{
                                    padding: '8px 16px',
                                    background: currentProfile === index ? 'var(--accent)' : 'var(--bg-elevated)',
                                    border: currentProfile === index ? '2px solid var(--gold)' : '2px solid var(--border-dim)',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontWeight: currentProfile === index ? 'bold' : 'normal',
                                    fontSize: '13px',
                                    minWidth: '120px'
                                }}
                            >
                                {name}
                            </button>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    const newNames = [...profileNames];
                                    newNames[index] = e.target.value;
                                    setProfileNames(newNames);
                                }}
                                style={{
                                    padding: '6px 8px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-light)',
                                    color: 'var(--text-primary)',
                                    fontSize: '11px',
                                    width: '100px'
                                }}
                                placeholder="名前を編集"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div style={{marginBottom: '20px', display: 'flex', gap: '12px', borderBottom: '2px solid var(--border-dim)', paddingBottom: '12px'}}>
                <button
                    className={`tab-button ${rankTab === 'general' ? 'active' : ''}`}
                    onClick={() => setRankTab('general')}
                >
                    武将の将星ランク
                </button>
                <button
                    className={`tab-button ${rankTab === 'treasure' ? 'active' : ''}`}
                    onClick={() => setRankTab('treasure')}
                >
                    名宝の鍛錬ランク
                </button>
                <button
                    className={`tab-button ${rankTab === 'research' ? 'active' : ''}`}
                    onClick={() => setRankTab('research')}
                >
                    研究
                </button>
                <button
                    className={`tab-button ${rankTab === 'investigation' ? 'active' : ''}`}
                    onClick={() => setRankTab('investigation')}
                >
                    調査
                </button>
                <button
                    className={`tab-button ${rankTab === 'horse' ? 'active' : ''}`}
                    onClick={() => setRankTab('horse')}
                >
                    軍馬
                </button>
            </div>
            
            {rankTab === 'general' ? (
                <div>
                    <h2 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>武将の育成設定</h2>
                    
                    {/* 一括操作ボタン */}
                    <div style={{marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                        <button
                            onClick={() => {
                                if (!confirm('全武将の将星ランクを☆7に変更します。よろしいですか？')) return;
                                setProfileData(prev => {
                                    const cp = prev[currentProfile];
                                    const newRanks = {...(cp.generalStarRank || {})};
                                    generals.forEach(g => {
                                        const key = `${g.id}-${g.rarity}-${g.name}`;
                                        newRanks[key] = 7;
                                    });
                                    return {
                                        ...prev,
                                        [currentProfile]: { ...cp, generalStarRank: newRanks }
                                    };
                                });
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--accent-hover)',
                                border: 'none',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            全武将☆7
                        </button>
                        <button
                            onClick={() => {
                                if (!confirm('全武将の将星ランクを☆0にリセットします。よろしいですか？')) return;
                                setProfileData(prev => ({
                                    ...prev,
                                    [currentProfile]: {
                                        ...prev[currentProfile],
                                        generalStarRank: {}
                                    }
                                }));
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--bg-hover)',
                                border: 'none',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            全武将☆0
                        </button>
                    </div>
                    
                    {/* プロファイル機能 */}
                    <div style={{marginBottom: '16px', padding: '12px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-light)'}}>
                        <div style={{color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 'bold'}}>プロファイル</div>
                        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                            <button
                                onClick={() => {
                                    const profile = {
                                        generalStarRank,
                                        generalProfiles: currentProfileData.generalProfiles || {},
                                        treasureForgeRank,
                                        treasureURStatus
                                    };
                                    localStorage.setItem('hadou-rank-profile-backup', JSON.stringify(profile));
                                    alert('現在の設定を保存しました');
                                }}
                                style={{
                                    padding: '8px 16px',
                                    background: 'var(--success)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                保存
                            </button>
                            <button
                                onClick={() => {
                                    const saved = localStorage.getItem('hadou-rank-profile-backup');
                                    if (saved) {
                                        const profile = JSON.parse(saved);
                                        setProfileData(prev => ({
                                            ...prev,
                                            [currentProfile]: {
                                                ...prev[currentProfile],
                                                generalStarRank: profile.generalStarRank || {},
                                                generalProfiles: profile.generalProfiles || {},
                                                treasureForgeRank: profile.treasureForgeRank || {},
                                                treasureURStatus: profile.treasureURStatus || {}
                                            }
                                        }));
                                        alert('保存された設定を呼び出しました');
                                    } else {
                                        alert('保存された設定がありません');
                                    }
                                }}
                                style={{
                                    padding: '8px 16px',
                                    background: 'var(--accent)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                呼び出し
                            </button>
                        </div>
                    </div>
                    
                    <div style={{marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                        <input 
                            type="text" 
                            placeholder="武将名で検索..."
                            value={rankSearchTerm}
                            onChange={(e) => setRankSearchTerm(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-light)',
                                color: 'var(--text-primary)',
                                flex: '1',
                                minWidth: '200px'
                            }}
                        />
                    </div>
                    
                    {/* レアリティごとにグループ分け */}
                    {['LR', 'UR', 'SSR', 'SR', 'R'].map(rarity => {
                        const filteredGenerals = generals
                            .filter(g => g.rarity === rarity)
                            .filter(g => rankSearchTerm === '' || g.name.includes(rankSearchTerm));
                        
                        if (filteredGenerals.length === 0) return null;
                        
                        return (
                            <div key={rarity} style={{marginBottom: '24px'}}>
                                <div 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '12px',
                                        padding: '8px 12px',
                                        background: 'rgba(26, 31, 46, 0.5)',
                                        borderLeft: `4px solid ${getRarityColor(rarity)}`,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        setExpandedRarities(prev => ({
                                            ...prev,
                                            [rarity]: !prev[rarity]
                                        }));
                                    }}
                                >
                                    <h3 style={{
                                        color: getRarityColor(rarity),
                                        margin: 0,
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <span style={{fontSize: '12px', color: 'var(--text-muted)'}}>
                                            {expandedRarities[rarity] ? '▼' : '▶'}
                                        </span>
                                        {rarity} ({filteredGenerals.length}名)
                                    </h3>
                                    <div style={{display: 'flex', gap: '8px'}} onClick={(e) => e.stopPropagation()}>
                                        <button
                                            onClick={() => {
                                                if (!confirm(`${rarity}武将の将星ランクを全て☆0にリセットします。よろしいですか？`)) return;
                                                const newRanks = {...generalStarRank};
                                                generals
                                                    .filter(g => g.rarity === rarity)
                                                    .forEach(g => {
                                                        const key = `${g.id}-${g.rarity}-${g.name}`;
                                                        delete newRanks[key];
                                                    });
                                                setProfileData(prev => ({
                                                    ...prev,
                                                    [currentProfile]: {
                                                        ...prev[currentProfile],
                                                        generalStarRank: newRanks
                                                    }
                                                }));
                                            }}
                                            style={{
                                                padding: '6px 12px',
                                                background: 'var(--bg-hover)',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: 'var(--text-primary)',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                            }}
                                            title={`${rarity}武将を全て☆0にする`}
                                        >
                                            {rarity}☆0
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (!confirm(`${rarity}武将の将星ランクを全て☆7に変更します。よろしいですか？`)) return;
                                                const newRanks = {...generalStarRank};
                                                generals
                                                    .filter(g => g.rarity === rarity)
                                                    .forEach(g => {
                                                        const key = `${g.id}-${g.rarity}-${g.name}`;
                                                        newRanks[key] = 7;
                                                    });
                                                setProfileData(prev => ({
                                                    ...prev,
                                                    [currentProfile]: {
                                                        ...prev[currentProfile],
                                                        generalStarRank: newRanks
                                                    }
                                                }));
                                            }}
                                            style={{
                                                padding: '6px 12px',
                                                background: getRarityColor(rarity),
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: 'var(--bg-base)',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                            }}
                                            title={`${rarity}武将を全て☆7にする`}
                                        >
                                            {rarity}☆7
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (!confirm(`${rarity}武将のLv・グレードを全てMax（Lv50/60・G30）に変更します。よろしいですか？`)) return;
                                                setProfileData(prev => {
                                                    const cp = prev[currentProfile];
                                                    const newProfiles = {...(cp.generalProfiles || {})};
                                                    generals
                                                        .filter(g => g.rarity === rarity)
                                                        .forEach(g => {
                                                            const key = `${g.id}-${g.rarity}-${g.name}`;
                                                            const star = (cp.generalStarRank || {})[key] || 0;
                                                            newProfiles[key] = {
                                                                ...(newProfiles[key] || {}),
                                                                level: star >= 7 ? 60 : 50,
                                                                grade: 30
                                                            };
                                                        });
                                                    return {
                                                        ...prev,
                                                        [currentProfile]: {
                                                            ...cp,
                                                            generalProfiles: newProfiles
                                                        }
                                                    };
                                                });
                                            }}
                                            style={{
                                                padding: '6px 12px',
                                                background: 'var(--success)',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                            }}
                                            title={`${rarity}武将を全てMaxLv・G30にする`}
                                        >
                                            {rarity} Max育成
                                        </button>
                                    </div>
                                </div>
                                {expandedRarities[rarity] && (
                                <div style={{display: 'grid', gap: '8px'}}>
                                    {filteredGenerals.map(general => {
                                const currentRank = getGeneralStarRank(general);
                                const profile = getGeneralProfile ? getGeneralProfile(general) : { star: currentRank };
                                const currentLevel = profile.level ?? (currentRank >= 7 ? 60 : 50);
                                const currentGrade = profile.grade ?? 30;
                                const maxLevel = currentRank >= 7 ? 60 : 50;
                                const isFav = isFavorite(general);
                                const isDisabled = isGeneralDisabled(general);
                                return (
                                    <div 
                                        key={`${general.id}-${general.rarity}-${general.name}`}
                                        style={{
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border-light)',
                                            padding: '8px 12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            flexWrap: 'wrap',
                                            opacity: isDisabled ? 0.4 : 1,
                                        }}
                                    >
                                        {/* アイコン+名前 */}
                                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', minWidth: '140px'}}>
                                            <ItemImage 
                                                src={getImageUrl('general', general.id, general.rarity, general.name)}
                                                alt={general.name}
                                                rarity={general.rarity}
                                            />
                                            <div>
                                                <div style={{color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '13px'}}>
                                                    {general.name}
                                                </div>
                                                <div style={{color: 'var(--text-muted)', fontSize: '11px'}}>
                                                    {general.rarity} - {getUnitTypeName(general.unit_type)}
                                                </div>
                                            </div>
                                        </div>
                                        {/* お気に入り・不使用 */}
                                        <div style={{display: 'flex', gap: '2px'}}>
                                            <button
                                                onClick={() => toggleFavorite(general)}
                                                style={{
                                                    padding: '2px 6px', background: 'none', border: 'none',
                                                    cursor: 'pointer', fontSize: '14px',
                                                    color: isFav ? 'var(--rank-color)' : 'var(--text-muted)'
                                                }}
                                                title="お気に入り"
                                            >★</button>
                                            <button
                                                onClick={() => {
                                                    if (isDisabled) {
                                                        setDisabledGenerals(prev => prev.filter(g => !(g.id === general.id && g.rarity === general.rarity)));
                                                    } else {
                                                        setDisabledGenerals(prev => [...prev, general]);
                                                    }
                                                }}
                                                style={{
                                                    padding: '2px 6px', background: 'none', border: 'none',
                                                    cursor: 'pointer', fontSize: '14px',
                                                    color: isDisabled ? 'var(--danger)' : 'var(--text-muted)'
                                                }}
                                                title="不使用"
                                            >×</button>
                                        </div>
                                        {/* ☆ランク */}
                                        <div style={{display: 'flex', gap: '2px', alignItems: 'center'}}>
                                            <span style={{fontSize: '11px', color: 'var(--text-muted)', marginRight: '2px'}}>☆</span>
                                            {[0,1,2,3,4,5,6,7].map(rank => (
                                                <button
                                                    key={rank}
                                                    onClick={() => setGeneralStar(general, rank)}
                                                    style={{
                                                        padding: '3px 7px',
                                                        fontSize: '11px',
                                                        background: currentRank === rank ? 'var(--accent)' : 'var(--bg-elevated)',
                                                        border: '1px solid var(--border-light)',
                                                        color: currentRank === rank ? '#fff' : 'var(--text-secondary)',
                                                        cursor: 'pointer',
                                                        fontWeight: currentRank === rank ? 'bold' : 'normal',
                                                        borderRadius: '3px',
                                                        minWidth: '24px',
                                                    }}
                                                >
                                                    {rank}
                                                </button>
                                            ))}
                                        </div>
                                        {/* Lv */}
                                        <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                                            <span style={{fontSize: '11px', color: 'var(--text-muted)'}}>Lv</span>
                                            <input
                                                type="number"
                                                min={1}
                                                max={maxLevel}
                                                value={currentLevel}
                                                onChange={(e) => {
                                                    const v = parseInt(e.target.value);
                                                    if (!isNaN(v) && v >= 1 && v <= maxLevel) {
                                                        setGeneralLevel(general, v);
                                                    }
                                                }}
                                                style={{
                                                    width: '42px', padding: '3px 4px',
                                                    fontSize: '11px', textAlign: 'center',
                                                    background: 'var(--bg-elevated)', color: 'var(--text-primary)',
                                                    border: '1px solid var(--border-light)', borderRadius: '3px',
                                                }}
                                            />
                                        </div>
                                        {/* Grade */}
                                        <div style={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                                            <span style={{fontSize: '11px', color: 'var(--text-muted)'}}>G</span>
                                            <input
                                                type="number"
                                                min={0}
                                                max={30}
                                                value={currentGrade}
                                                onChange={(e) => {
                                                    const v = parseInt(e.target.value);
                                                    if (!isNaN(v) && v >= 0 && v <= 30) {
                                                        setGeneralGrade(general, v);
                                                    }
                                                }}
                                                style={{
                                                    width: '38px', padding: '3px 4px',
                                                    fontSize: '11px', textAlign: 'center',
                                                    background: 'var(--bg-elevated)', color: 'var(--text-primary)',
                                                    border: '1px solid var(--border-light)', borderRadius: '3px',
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                                </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : rankTab === 'treasure' ? (
                <div>
                    <h2 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>名宝の鍛錬ランク設定</h2>
                    
                    {/* 一括操作ボタン */}
                    <div style={{marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                        <button
                            onClick={() => {
                                if (!confirm('全名宝の鍛錬ランクをMAX（☆7/☆10）に変更します。よろしいですか？')) return;
                                const newRanks = {...treasureForgeRank};
                                treasures.forEach(t => {
                                    const maxRank = treasureURStatus[t.id] ? 10 : 7;
                                    newRanks[t.id] = maxRank;
                                });
                                setProfileData(prev => ({
                                    ...prev,
                                    [currentProfile]: {
                                        ...prev[currentProfile],
                                        treasureForgeRank: newRanks
                                    }
                                }));
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--accent-hover)',
                                border: 'none',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            一括MAX（☆7/☆10）
                        </button>
                        <button
                            onClick={() => {
                                if (!confirm('全名宝の鍛錬ランクを☆0にリセットします。よろしいですか？')) return;
                                setProfileData(prev => ({
                                    ...prev,
                                    [currentProfile]: {
                                        ...prev[currentProfile],
                                        treasureForgeRank: {}
                                    }
                                }));
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--bg-hover)',
                                border: 'none',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            一括☆0
                        </button>
                        <button
                            onClick={() => {
                                // 全てUR化されているかチェック
                                const allUR = treasures.every(t => treasureURStatus[t.id]);
                                const msg = allUR
                                    ? '全名宝のUR化を解除します。よろしいですか？'
                                    : '全名宝をUR化します。よろしいですか？';
                                if (!confirm(msg)) return;

                                const newURStatus = {...treasureURStatus};

                                if (allUR) {
                                    // 全てUR化されている → 全て解除（鍛錬ランクはそのまま）
                                    treasures.forEach(t => {
                                        newURStatus[t.id] = false;
                                    });
                                } else {
                                    // 一部またはなし → 全てUR化（鍛錬ランクはそのまま）
                                    treasures.forEach(t => {
                                        newURStatus[t.id] = true;
                                    });
                                }

                                setProfileData(prev => ({
                                    ...prev,
                                    [currentProfile]: {
                                        ...prev[currentProfile],
                                        treasureURStatus: newURStatus
                                    }
                                }));
                            }}
                            style={{
                                padding: '8px 16px',
                                background: 'var(--bordeaux)',
                                border: 'none',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            {treasures.every(t => treasureURStatus[t.id]) ? '一括UR解除' : '一括UR化'}
                        </button>
                    </div>
                    
                    {/* プロファイル機能 */}
                    <div style={{marginBottom: '16px', padding: '12px', background: 'var(--bg-card)', borderRadius: '4px', border: '1px solid var(--border-light)'}}>
                        <div style={{color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 'bold'}}>プロファイル</div>
                        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                            <button
                                onClick={() => {
                                    const profile = {
                                        generalStarRank: generalStarRank,
                                        generalProfiles: currentProfileData.generalProfiles || {},
                                        treasureForgeRank: treasureForgeRank,
                                        treasureURStatus: treasureURStatus
                                    };
                                    localStorage.setItem('hadou-rank-profile-backup', JSON.stringify(profile));
                                    alert('現在の設定を保存しました');
                                }}
                                style={{
                                    padding: '8px 16px',
                                    background: 'var(--success)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                保存
                            </button>
                            <button
                                onClick={() => {
                                    const saved = localStorage.getItem('hadou-rank-profile-backup');
                                    if (saved) {
                                        const profile = JSON.parse(saved);
                                        setProfileData(prev => ({
                                            ...prev,
                                            [currentProfile]: {
                                                ...prev[currentProfile],
                                                generalStarRank: profile.generalStarRank || {},
                                                generalProfiles: profile.generalProfiles || {},
                                                treasureForgeRank: profile.treasureForgeRank || {},
                                                treasureURStatus: profile.treasureURStatus || {}
                                            }
                                        }));
                                        alert('保存された設定を呼び出しました');
                                    } else {
                                        alert('保存された設定がありません');
                                    }
                                }}
                                style={{
                                    padding: '8px 16px',
                                    background: 'var(--accent)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                呼び出し
                            </button>
                        </div>
                    </div>
                    
                    {/* カテゴリごとに折りたたみ */}
                    {['武器', '防具', '文物'].map(category => {
                        const categoryTreasures = treasures.filter(t => t.category === category);
                        if (categoryTreasures.length === 0) return null;
                        
                        return (
                            <div key={category} style={{marginBottom: '24px'}}>
                                <div 
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '12px',
                                        padding: '8px 12px',
                                        background: 'rgba(26, 31, 46, 0.5)',
                                        borderLeft: '3px solid var(--bordeaux)',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        setExpandedTreasureCategories(prev => ({
                                            ...prev,
                                            [category]: !prev[category]
                                        }));
                                    }}
                                >
                                    <h3 style={{
                                        color: 'var(--text-primary)',
                                        margin: 0,
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <span style={{fontSize: '12px', color: 'var(--text-muted)'}}>
                                            {expandedTreasureCategories[category] ? '▼' : '▶'}
                                        </span>
                                        {category} ({categoryTreasures.length}個)
                                    </h3>
                                </div>
                                {expandedTreasureCategories[category] && (
                                <div style={{display: 'grid', gap: '12px'}}>{categoryTreasures.map(treasure => {
                            const currentRank = getTreasureForgeRank(treasure.id);
                            const isUR = isTreasureUR(treasure.id);
                            const maxRank = isUR ? 10 : 7;
                            const isFav = isFavoriteTreasure(treasure);
                            const isDisabled = isTreasureDisabled(treasure);
                            return (
                                <div 
                                    key={treasure.id}
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-light)',
                                        padding: '12px',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 60px 90px 180px auto',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}
                                >
                                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                        <ItemImage 
                                            src={getImageUrl('treasure', treasure.id, null, treasure.name)}
                                            alt={treasure.name}
                                            rarity={isUR ? 'UR' : 'normal'}
                                        />
                                        <div>
                                            <div style={{color: 'var(--text-primary)', fontWeight: 'bold'}}>
                                                {treasure.name}
                                            </div>
                                            <div style={{color: 'var(--text-muted)', fontSize: '12px'}}>
                                                {treasure.category} {isUR && <span style={{color: 'var(--rarity-ur)'}}>[UR]</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', gap: '4px'}}>
                                        <button
                                            onClick={() => toggleFavoriteTreasure(treasure)}
                                            style={{
                                                padding: '4px 8px',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: '16px',
                                                color: isFav ? 'var(--rank-color)' : 'var(--text-muted)'
                                            }}
                                            title="お気に入り"
                                        >
                                            ★
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (isDisabled) {
                                                    setDisabledTreasures(prev => prev.filter(t => t.id !== treasure.id));
                                                } else {
                                                    setDisabledTreasures(prev => [...prev, treasure]);
                                                }
                                            }}
                                            style={{
                                                padding: '4px 8px',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: '16px',
                                                color: isDisabled ? 'var(--danger)' : 'var(--text-muted)'
                                            }}
                                            title="不使用"
                                        >
                                            ×
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => toggleTreasureUR(treasure.id)}
                                        style={{
                                            padding: '6px 12px',
                                            background: isUR ? 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)' : 'var(--bg-elevated)',
                                            border: isUR ? '1px solid var(--rarity-ur)' : '1px solid var(--border-dim)',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            fontSize: '11px',
                                            width: '90px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {isUR ? '✓ UR化' : 'UR化'}
                                    </button>
                                    <div style={{textAlign: 'center', minWidth: '180px'}}>
                                        {Array.from({length: 10}, (_, i) => {
                                            const maxColoredRank = isUR ? 10 : 7;
                                            const isColored = i < currentRank;
                                            const isDimmed = i >= maxColoredRank;
                                            return (
                                                <span 
                                                    key={i} 
                                                    style={{
                                                        color: isDimmed ? 'var(--bg-card)' : (isColored ? (isUR ? 'var(--rarity-ur)' : 'var(--rank-color)') : 'var(--bg-elevated)')
                                                    }}
                                                >
                                                    {isUR ? '★' : '☆'}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <div style={{display: 'flex', gap: '4px', flexWrap: 'wrap'}}>
                                        {Array.from({length: 11}, (_, rank) => {
                                            const isDisabled = !isUR && rank > 7;
                                            return (
                                                <button
                                                    key={rank}
                                                    onClick={() => !isDisabled && setTreasureForge(treasure.id, rank)}
                                                    style={{
                                                        padding: '6px 12px',
                                                        background: currentRank === rank ? 'var(--accent)' : (isDisabled ? 'var(--bg-base)' : 'var(--bg-elevated)'),
                                                        border: '1px solid var(--border-light)',
                                                        color: isDisabled ? 'var(--text-muted)' : (currentRank === rank ? 'var(--text-primary)' : 'var(--text-primary)'),
                                                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                                                        fontWeight: currentRank === rank ? 'bold' : 'normal',
                                                        opacity: isDisabled ? 0.3 : 1
                                                    }}
                                                    disabled={isDisabled}
                                                >
                                                    {rank}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    )}
                            </div>
                        );
                    })}
                </div>
            ) : rankTab === 'research' ? (
                <ResearchTab profileConfig={profileConfig} setProfileConfig={setProfileConfig} />
            ) : rankTab === 'investigation' ? (
                <InvestigationTab profileConfig={profileConfig} setProfileConfig={setProfileConfig} />
            ) : rankTab === 'horse' ? (
                <HorseTab profileConfig={profileConfig} setProfileConfig={setProfileConfig} />
            ) : null}
        </div>
    );
}
