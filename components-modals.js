// モーダルコンポーネント群
// 依存: React (グローバル)

/**
 * Google Drive連携ダイアログ
 */
function GDriveDialog({ show, onClose, lastSync, onSave, onLoad }) {
    if (!show) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3000
        }}>
            <div style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--accent)',
                borderRadius: '12px',
                padding: '32px',
                maxWidth: '600px',
                width: '90%'
            }}>
                <h2 style={{color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                    Google Drive連携
                </h2>
                
                <div style={{marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8'}}>
                    <p style={{marginBottom: '16px'}}>
                        Google Driveを使ってデータを同期できます。
                    </p>
                    
                    <h3 style={{color: 'var(--text-primary)', fontSize: '16px', marginBottom: '12px'}}>使い方</h3>
                    
                    <div style={{background: 'var(--bg-base)', padding: '16px', borderRadius: '8px', marginBottom: '16px'}}>
                        <p style={{marginBottom: '12px', fontWeight: 'bold', color: 'var(--accent)'}}>1. データを保存（家のPC）</p>
                        <p style={{marginBottom: '8px', paddingLeft: '20px'}}>
                            ① 「Google Driveへ保存」をクリック<br/>
                            ② ダウンロードされたファイル「hadou-formation-sync.json」をGoogle Driveにアップロード<br/>
                            　（推奨：「hadou-formation」フォルダを作成）
                        </p>
                        
                        <p style={{marginBottom: '12px', marginTop: '16px', fontWeight: 'bold', color: 'var(--accent)'}}>2. データを読み込み（職場のPC）</p>
                        <p style={{paddingLeft: '20px'}}>
                            ① Google Driveから「hadou-formation-sync.json」をダウンロード<br/>
                            ② 「Google Driveから読み込み」をクリック<br/>
                            ③ ダウンロードしたファイルを選択
                        </p>
                    </div>
                    
                    {lastSync && (
                        <p style={{color: 'var(--success)', fontSize: '13px', marginTop: '12px'}}>
                            ✓ 最終同期: {new Date(lastSync).toLocaleString('ja-JP')}
                        </p>
                    )}
                </div>
                
                <div style={{display: 'flex', gap: '12px', marginBottom: '20px'}}>
                    <button
                        onClick={onSave}
                        style={{
                            flex: 1,
                            padding: '14px 20px',
                            background: 'var(--accent)',
                            border: 'none',
                            borderRadius: '6px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '15px',
                            fontWeight: 'bold'
                        }}
                    >
                        Google Driveへ保存
                    </button>
                    <button
                        onClick={onLoad}
                        style={{
                            flex: 1,
                            padding: '14px 20px',
                            background: 'var(--success)',
                            border: 'none',
                            borderRadius: '6px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '15px',
                            fontWeight: 'bold'
                        }}
                    >
                        Google Driveから読み込み
                    </button>
                </div>
                
                <button
                    onClick={onClose}
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    閉じる
                </button>
            </div>
        </div>
    );
}

/**
 * テンプレート保存ダイアログ
 */
function TemplateSaveDialog({ show, onClose, templateName, onNameChange, onSave }) {
    if (!show) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(4, 4, 6, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
        }}>
            <div style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                padding: '24px',
                minWidth: '400px',
                maxWidth: '500px'
            }}>
                <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>部隊テンプレートを保存</h3>
                <input
                    type="text"
                    value={templateName}
                    onChange={(e) => onNameChange(e.target.value)}
                    placeholder="テンプレート名を入力"
                    style={{
                        width: '100%',
                        padding: '10px',
                        background: 'var(--bg-base)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '4px',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        marginBottom: '20px'
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && onSave()}
                />
                <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '8px 20px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer'
                        }}
                    >
                        キャンセル
                    </button>
                    <button
                        onClick={onSave}
                        style={{
                            padding: '8px 20px',
                            background: 'var(--success)',
                            border: '1px solid var(--success)',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        保存
                    </button>
                </div>
            </div>
        </div>
    );
}

/**
 * テンプレート呼び出しダイアログ
 */
function TemplateLoadDialog({
    show, onClose, templates, selectedTemplate, onSelectTemplate,
    overwriteGenerals, onOverwriteGeneralsChange,
    overwriteTreasures, onOverwriteTreasuresChange,
    onDelete, onLoad
}) {
    if (!show) return null;

    const hasTemplates = Object.keys(templates).length > 0;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(4, 4, 6, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
        }}>
            <div style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                padding: '24px',
                minWidth: '400px',
                maxWidth: '500px'
            }}>
                <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>テンプレートを呼び出し</h3>
                
                {!hasTemplates ? (
                    <p style={{color: 'var(--text-muted)', marginBottom: '20px'}}>保存されたテンプレートがありません</p>
                ) : (
                    <>
                        <div style={{marginBottom: '20px', maxHeight: '300px', overflowY: 'auto'}}>
                            {Object.entries(templates).map(([key, template]) => (
                                <div key={key} style={{marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <input
                                        type="radio"
                                        id={`template-${key}`}
                                        name="template"
                                        checked={selectedTemplate === key}
                                        onChange={() => onSelectTemplate(key)}
                                        style={{cursor: 'pointer'}}
                                    />
                                    <label
                                        htmlFor={`template-${key}`}
                                        style={{color: 'var(--text-primary)', cursor: 'pointer', flex: 1}}
                                    >
                                        {template.name}
                                    </label>
                                    <button
                                        onClick={() => onDelete(key)}
                                        style={{
                                            padding: '4px 8px',
                                            background: 'var(--danger)',
                                            border: 'none',
                                            borderRadius: '3px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            fontSize: '11px'
                                        }}
                                    >
                                        削除
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        <div style={{marginBottom: '20px', padding: '12px', background: 'var(--bg-base)', borderRadius: '4px'}}>
                            <div style={{marginBottom: '8px'}}>
                                <label style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', cursor: 'pointer'}}>
                                    <input
                                        type="checkbox"
                                        checked={overwriteGenerals}
                                        onChange={(e) => onOverwriteGeneralsChange(e.target.checked)}
                                    />
                                    武将・侍従を上書き
                                </label>
                            </div>
                            <div>
                                <label style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', cursor: 'pointer'}}>
                                    <input
                                        type="checkbox"
                                        checked={overwriteTreasures}
                                        onChange={(e) => onOverwriteTreasuresChange(e.target.checked)}
                                    />
                                    名宝を上書き
                                </label>
                            </div>
                        </div>
                    </>
                )}
                
                <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '8px 20px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer'
                        }}
                    >
                        キャンセル
                    </button>
                    {hasTemplates && (
                        <button
                            onClick={onLoad}
                            style={{
                                padding: '8px 20px',
                                background: 'var(--accent)',
                                border: '1px solid var(--accent)',
                                borderRadius: '4px',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            呼び出し
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

/**
 * コンテキストヘルプモーダル（武将配置・名宝配置・編制パターン・テンプレート）
 */
function ContextHelpModal({ helpType, onClose }) {
    if (!helpType) return null;

    const titles = {
        general: '武将の配置方法',
        treasure: '名宝の配置方法',
        pattern: '編制パターンの使い方',
        template: 'テンプレートの使い方'
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(4, 4, 6, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2500,
            padding: '20px'
        }} onClick={onClose}>
            <div style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--accent)',
                borderRadius: '8px',
                padding: '20px',
                maxWidth: '600px',
                color: 'var(--text-primary)'
            }} onClick={(e) => e.stopPropagation()}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
                    <h3 style={{color: 'var(--accent)', margin: 0}}>
                        {titles[helpType] || ''}
                    </h3>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'var(--danger)',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '18px',
                            width: '28px',
                            height: '28px'
                        }}
                    >
                        ×
                    </button>
                </div>
                
                {helpType === 'general' && (
                    <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ドラッグ&ドロップ</p>
                            <p style={{margin: '4px 0'}}>武将を左パネルから部隊の枠にドラッグして配置</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ダブルクリック</p>
                            <p style={{margin: '4px 0'}}>• 武将をダブルクリック → 空きスロットに自動配置</p>
                            <p style={{margin: '4px 0'}}>• 配置済み武将をダブルクリック → 削除</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>入れ替え</p>
                            <p style={{margin: '4px 0'}}>武将同士をドラッグ&ドロップで入れ替え可能</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>侍従配置</p>
                            <p style={{margin: '4px 0'}}>LR武将のみ侍従として配置可能。ダブルクリックで自動配置</p>
                        </div>
                    </div>
                )}
                
                {helpType === 'treasure' && (
                    <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>配置可能な場所</p>
                            <p style={{margin: '4px 0'}}>• 主将：武器・防具・文物を各1つずつ（最大3つ）</p>
                            <p style={{margin: '4px 0'}}>• 副将1：武器・防具・文物を各1つずつ（最大3つ）</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ドラッグ&ドロップ</p>
                            <p style={{margin: '4px 0'}}>名宝を左パネルから装備枠にドラッグして配置</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>ダブルクリック</p>
                            <p style={{margin: '4px 0'}}>• 名宝をダブルクリック → 種類に応じた空きスロットに自動配置</p>
                            <p style={{margin: '4px 0'}}>• 配置済み名宝をダブルクリック → 削除</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--rarity-ur)'}}>注意</p>
                            <p style={{margin: '4px 0'}}>同じ名宝は1つの部隊にしか配置できません</p>
                        </div>
                    </div>
                )}
                
                {helpType === 'pattern' && (
                    <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>5つの編制パターン</p>
                            <p style={{margin: '4px 0'}}>各編制は独立した12部隊を管理。用途別に使い分けが可能</p>
                            <p style={{margin: '4px 0', fontSize: '12px', color: 'var(--text-muted)'}}>例：編制1=攻撃用、編制2=防御用、編制3=イベント用</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>[...]メニュー</p>
                            <p style={{margin: '4px 0'}}>• <strong>編制名を変更：</strong>分かりやすい名前を付ける</p>
                            <p style={{margin: '4px 0'}}>• <strong>他の編制からコピー：</strong>別の編制の内容をコピー</p>
                            <p style={{margin: '4px 0'}}>• <strong>この編制をリセット：</strong>全12部隊をクリア</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>切り替え</p>
                            <p style={{margin: '4px 0'}}>タブをクリックで編制を切り替え。データは自動保存</p>
                        </div>
                    </div>
                )}
                
                {helpType === 'template' && (
                    <div style={{lineHeight: '1.8', fontSize: '14px'}}>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>保存</p>
                            <p style={{margin: '4px 0'}}>部隊の[保存]ボタンで現在の構成をテンプレートとして保存</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>呼出</p>
                            <p style={{margin: '4px 0'}}>部隊の[呼出]ボタンで保存したテンプレートを呼び出し</p>
                            <p style={{margin: '4px 0', fontSize: '12px', color: 'var(--text-muted)'}}>上書き設定：武将・名宝の上書き有無を選択可能</p>
                        </div>
                        <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px'}}>
                            <p style={{margin: '4px 0', fontWeight: 'bold', color: 'var(--text-primary)'}}>重複削除</p>
                            <p style={{margin: '4px 0'}}>テンプレート呼び出し時、同じ武将・名宝が他の部隊にあれば自動削除</p>
                            <p style={{margin: '4px 0', fontSize: '12px', color: 'var(--text-muted)'}}>例：部隊1の張飛を部隊2に呼び出すと、部隊1の張飛は自動削除</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * ヘルプモーダル（使い方ガイド全体）
 */
function HelpModal({ show, onClose }) {
    if (!show) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3000,
            padding: '20px'
        }} onClick={onClose}>
            <div style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border-light)',
                borderRadius: '8px',
                padding: '24px',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflowY: 'auto',
                color: 'var(--text-primary)'
            }} onClick={(e) => e.stopPropagation()}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                    <h2 style={{color: 'var(--text-primary)', margin: 0}}>三国志覇道 編成支援ツール 使い方ガイド</h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'var(--danger)',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '20px',
                            width: '32px',
                            height: '32px'
                        }}
                    >
                        ×
                    </button>
                </div>
                
                <div style={{lineHeight: '1.8'}}>
                    <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px'}}>基本操作</h3>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>武将・名宝の配置</h4>
                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                        <p style={{margin: '4px 0'}}><strong>ドラッグ&ドロップ:</strong> 武将/名宝を左パネルから部隊エリアにドラッグして配置</p>
                        <p style={{margin: '4px 0'}}><strong>ダブルクリック:</strong> 武将/名宝をダブルクリックで自動的に空きスロットに配置</p>
                        <p style={{margin: '4px 0'}}><strong>削除:</strong> 配置済みの武将/名宝をダブルクリックで削除</p>
                        <p style={{margin: '4px 0'}}><strong>入れ替え:</strong> 武将同士、名宝同士をドラッグ&ドロップで入れ替え可能</p>
                    </div>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>武将配置の詳細</h4>
                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                        <p style={{margin: '4px 0'}}><strong>主将:</strong> 各部隊に1名必須。ダブルクリックで主将エリアに配置</p>
                        <p style={{margin: '4px 0'}}><strong>副将:</strong> 副将1、副将2の2つのスロット。ダブルクリックで空きスロットに配置</p>
                        <p style={{margin: '4px 0'}}><strong>補佐:</strong> 補佐1、補佐2の2つのスロット。ダブルクリックで空きスロットに配置</p>
                        <p style={{margin: '4px 0'}}><strong>侍従:</strong> LR武将のみ配置可能。ダブルクリックで自動配置</p>
                    </div>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>名宝配置の詳細</h4>
                    <div style={{background: 'var(--bg-elevated)', padding: '12px', borderRadius: '4px', marginBottom: '12px'}}>
                        <p style={{margin: '4px 0'}}><strong>主将の名宝:</strong> 武器・防具・文物を各1つずつ、最大3つまで配置可能</p>
                        <p style={{margin: '4px 0'}}><strong>副将1の名宝:</strong> 武器・防具・文物を各1つずつ、最大3つまで配置可能</p>
                        <p style={{margin: '4px 0'}}><strong>自動配置:</strong> 名宝をダブルクリックすると、種類に応じた空きスロットに自動配置</p>
                        <p style={{margin: '4px 0', color: 'var(--rarity-ur)'}}><strong>注意:</strong> 同じ名宝は1つの部隊にしか配置できません</p>
                    </div>
                    
                    <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px', marginTop: '24px'}}>基本機能</h3>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>編成画面</h4>
                    <p><strong>部隊タブ:</strong> 主城部隊(6)、分城部隊(3)、出城部隊(3)の合計12部隊を管理</p>
                    <p><strong>武将配置:</strong> 武将パネルから武将をドラッグ&ドロップで配置。主将・副将・補佐の3種類</p>
                    <p><strong>侍従配置:</strong> LR武将は自動で侍従エリアが表示。侍従を配置可能</p>
                    <p><strong>名宝配置:</strong> 主将と副将1に最大3つずつ名宝を装備可能（武器・防具・文物）</p>
                    <p><strong>陣形選択:</strong> 各部隊の陣形タイプを選択可能</p>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>⭐ ランク設定画面</h4>
                    <p><strong>プロファイル機能:</strong> 5つのプロファイル(P0-P4)で異なるランク設定を保存可能</p>
                    <p><strong>武将ランク:</strong> 各武将の星ランク(0-7)を設定</p>
                    <p><strong>名宝ランク:</strong> 各名宝の精錬ランク(0-7)とUR化状態を設定</p>
                    <p><strong>お気に入り・不使用:</strong> [★]ボタンでお気に入り登録、[×]ボタンで不使用設定</p>
                    
                    <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px', marginTop: '24px'}}>高度な機能</h3>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>編制パターン管理（10パターン）</h4>
                    <p><strong>編制タブ:</strong> 画面上部に10個の編制タブ（編制1-10）を表示</p>
                    <p><strong>編制切り替え:</strong> タブをクリックして編制を切り替え。各編制は独立した12部隊を持つ</p>
                    <p><strong>[...]メニュー:</strong></p>
                    <ul style={{marginLeft: '20px'}}>
                        <li><strong>編制名を変更:</strong> 編制に分かりやすい名前を付ける（例: 「攻撃編成」「防御編成」）</li>
                        <li><strong>他の編制からコピー:</strong> 別の編制の内容を現在の編制にコピー</li>
                        <li><strong>この編制をリセット:</strong> 全12部隊をクリア</li>
                    </ul>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>部隊テンプレート機能</h4>
                    <p><strong>[保存]ボタン:</strong> 現在の部隊構成をテンプレートとして保存</p>
                    <p><strong>[呼出]ボタン:</strong> 保存したテンプレートを別の部隊に呼び出し</p>
                    <p><strong>上書き設定:</strong></p>
                    <ul style={{marginLeft: '20px'}}>
                        <li>☑ 武将・侍従を上書き: チェックを入れると既存の武将を置き換え</li>
                        <li>☑ 名宝を上書き: チェックを入れると既存の名宝を置き換え</li>
                    </ul>
                    <p><strong>重複削除:</strong> テンプレート呼び出し時、同じ武将・名宝が他の部隊にあれば自動削除</p>
                    
                    <h4 style={{color: 'var(--text-primary)', marginTop: '16px'}}>フィルタ機能</h4>
                    <p><strong>武将フィルタ:</strong></p>
                    <ul style={{marginLeft: '20px'}}>
                        <li><strong>レア度:</strong> LR / UR</li>
                        <li><strong>兵科:</strong> 歩兵 / 弓兵 / 騎兵</li>
                        <li><strong>勢力:</strong> 董卓 / 張角 / 魏 / 蜀 / 袁紹 / 呉 / 呂布 / その他</li>
                        <li><strong>侍従:</strong> 上 / 下 / 左 / 右 / 上下 / 左右 / 右上 / 右下 / 左下</li>
                        <li><strong>★お気に入り:</strong> お気に入り登録した武将のみ表示</li>
                    </ul>
                    <p><strong>名宝フィルタ:</strong></p>
                    <ul style={{marginLeft: '20px'}}>
                        <li><strong>種類:</strong> 武器 / 防具 / 文物</li>
                        <li><strong>兵科:</strong> 歩兵 / 弓兵 / 騎兵 / 全兵科（防具・文物は全兵科で表示）</li>
                        <li><strong>勢力:</strong> 魏 / 蜀 / 袁紹 / 呉 / 他 / イベント</li>
                        <li><strong>★お気に入り:</strong> お気に入り登録した名宝のみ表示</li>
                    </ul>
                    
                    <h3 style={{color: 'var(--success)', borderBottom: '2px solid var(--success)', paddingBottom: '8px', marginTop: '24px'}}>ヒント</h3>
                    <ul style={{marginLeft: '20px', lineHeight: '1.8'}}>
                        <li><strong>データ保存:</strong> すべてのデータはブラウザに自動保存されます（localStorage使用）</li>
                        <li><strong>重複チェック:</strong> 同じ武将・名宝を複数の部隊に配置しようとすると警告が表示されます</li>
                        <li><strong>折りたたみ:</strong> 部隊名の左にあるチェックボックスで部隊を折りたたみ可能</li>
                        <li><strong>リセット:</strong> 各部隊の[リセット]ボタンで個別に部隊をクリア可能</li>
                        <li><strong>編制の使い分け:</strong> 編制1を攻撃用、編制2を防御用など、用途別に管理すると便利</li>
                        <li><strong>テンプレート活用:</strong> よく使う部隊構成はテンプレート保存しておくと効率的</li>
                    </ul>
                    
                    <div style={{marginTop: '24px', padding: '12px', background: 'var(--bg-elevated)', borderRadius: '4px', borderLeft: '3px solid var(--bordeaux)'}}>
                        <p style={{margin: 0}}><strong>バージョン情報:</strong> SANGOKUSHI HADOU v3 (v140)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * 画像URL設定モーダル
 */
function ImageSettingsModal({ show, imageUrls, onSave, onClose }) {
    const [urlText, setUrlText] = React.useState('');

    React.useEffect(() => {
        if (show) {
            const formatted = Object.entries(imageUrls)
                .map(([key, url]) => `${key}=${url}`)
                .join('\n');
            setUrlText(formatted);
        }
    }, [show]);

    if (!show) return null;

    const handleSave = () => {
        const newUrls = {};
        const lines = urlText.split('\n');

        lines.forEach(line => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return;

            const separatorIndex = trimmed.indexOf('=');
            if (separatorIndex > 0) {
                const key = trimmed.substring(0, separatorIndex).trim();
                const url = trimmed.substring(separatorIndex + 1).trim();
                if (key && url) {
                    newUrls[key] = url;
                }
            }
        });

        onSave(newUrls);
        onClose();
    };

    return (
        <div className="image-modal-overlay" onClick={onClose}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="image-modal-title">画像URL設定</h2>

                <div className="image-url-input-group">
                    <label>画像URLマッピング</label>
                    <textarea
                        value={urlText}
                        onChange={(e) => setUrlText(e.target.value)}
                        placeholder={'general_LR_1=https://i.imgur.com/xxxxx.jpg\ngeneral_UR_曹操=https://i.imgur.com/yyyyy.jpg\ntreasure_青龍偃月刀=https://i.imgur.com/zzzzz.jpg'}
                    />
                    <div className="image-url-help">
                        <strong>記述方法:</strong><br/>
                        ● 1行に1つのマッピング: <strong>キー=URL</strong><br/>
                        ● 武将のキー形式: <strong>general_レア度_ID</strong> または <strong>general_レア度_名前</strong><br/>
                        ● 名宝のキー形式: <strong>treasure_名前</strong> または <strong>treasure_種類_名前</strong><br/><br/>
                        <strong>記述例:</strong><br/>
                        general_LR_1=https://i.imgur.com/abc123.jpg<br/>
                        general_UR_曹操=https://i.imgur.com/def456.jpg<br/>
                        treasure_青龍偃月刀=https://i.imgur.com/ghi789.jpg<br/>
                        treasure_weapon_方天画戟=https://i.imgur.com/jkl012.jpg<br/><br/>
                        <strong>ヒント:</strong><br/>
                        ● #で始まる行はコメントとして無視されます<br/>
                        ● Imgurアルバムの画像を右クリック→「画像アドレスをコピー」で取得<br/>
                        ● 画像URLは i.imgur.com/xxxxx.jpg の形式
                    </div>
                </div>

                <div className="image-modal-buttons">
                    <button className="image-modal-button image-modal-button-save" onClick={handleSave}>
                        保存
                    </button>
                    <button className="image-modal-button image-modal-button-cancel" onClick={onClose}>
                        ✕ キャンセル
                    </button>
                </div>
            </div>
        </div>
    );
}
