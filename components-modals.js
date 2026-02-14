// モーダルコンポーネント群
// 依存: React (グローバル), styles.css (モーダル共通クラス)

/**
 * Google Drive連携ダイアログ
 */
function GDriveDialog({ show, onClose, lastSync, onSave, onLoad }) {
    if (!show) return null;

    return (
        <div className="modal-overlay modal-overlay--top">
            <div className="modal-panel modal-panel--accent">
                <h2 style={{color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                    Google Drive連携
                </h2>
                
                <div className="help-info-box">
                    <p style={{marginBottom: '16px'}}>
                        Google Driveを使ってデータを同期できます。
                    </p>
                    
                    <h3 style={{color: 'var(--text-primary)', fontSize: '16px', marginBottom: '12px'}}>使い方</h3>
                    
                    <div className="help-instructions">
                        <p className="help-step-title">1. データを保存（家のPC）</p>
                        <p className="help-step-content" style={{marginBottom: '8px'}}>
                            ① 「Google Driveへ保存」をクリック<br/>
                            ② ダウンロードされたファイル「hadou-formation-sync.json」をGoogle Driveにアップロード<br/>
                            　（推奨：「hadou-formation」フォルダを作成）
                        </p>
                        
                        <p className="help-step-title help-step-title--spaced">2. データを読み込み（職場のPC）</p>
                        <p className="help-step-content">
                            ① Google Driveから「hadou-formation-sync.json」をダウンロード<br/>
                            ② 「Google Driveから読み込み」をクリック<br/>
                            ③ ダウンロードしたファイルを選択
                        </p>
                    </div>
                    
                    {lastSync && (
                        <p className="sync-status">
                            ✓ 最終同期: {new Date(lastSync).toLocaleString('ja-JP')}
                        </p>
                    )}
                </div>
                
                <div className="modal-actions modal-actions--spread">
                    <button onClick={onSave} className="modal-btn modal-btn--action modal-btn--primary">
                        Google Driveへ保存
                    </button>
                    <button onClick={onLoad} className="modal-btn modal-btn--action modal-btn--success">
                        Google Driveから読み込み
                    </button>
                </div>
                
                <button onClick={onClose} className="modal-btn modal-btn--full">
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
        <div className="modal-overlay">
            <div className="modal-panel">
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
                <div className="modal-actions">
                    <button onClick={onClose} className="modal-btn">キャンセル</button>
                    <button onClick={onSave} className="modal-btn modal-btn--success">保存</button>
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
        <div className="modal-overlay">
            <div className="modal-panel">
                <h3 style={{color: 'var(--text-primary)', marginBottom: '16px'}}>テンプレートを呼び出し</h3>
                
                {!hasTemplates ? (
                    <p style={{color: 'var(--text-muted)', marginBottom: '20px'}}>保存されたテンプレートがありません</p>
                ) : (
                    <>
                        <div className="template-list">
                            {Object.entries(templates).map(([key, template]) => (
                                <div key={key} className="template-item">
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
                                    <button onClick={() => onDelete(key)} className="modal-btn modal-btn--danger-sm">
                                        削除
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        <div className="template-options">
                            <div className="template-option-row">
                                <label className="template-option-label">
                                    <input
                                        type="checkbox"
                                        checked={overwriteGenerals}
                                        onChange={(e) => onOverwriteGeneralsChange(e.target.checked)}
                                    />
                                    武将・侍従を上書き
                                </label>
                            </div>
                            <div className="template-option-row">
                                <label className="template-option-label">
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
                
                <div className="modal-actions">
                    <button onClick={onClose} className="modal-btn">キャンセル</button>
                    {hasTemplates && (
                        <button onClick={onLoad} className="modal-btn modal-btn--primary">呼び出し</button>
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
        <div className="modal-overlay modal-overlay--high" onClick={onClose}>
            <div className="modal-panel modal-panel--help" style={{borderColor: 'var(--accent)'}} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 style={{color: 'var(--accent)', margin: 0}}>
                        {titles[helpType] || ''}
                    </h3>
                    <button onClick={onClose} className="modal-close-btn">×</button>
                </div>
                
                {helpType === 'general' && (
                    <div className="help-content">
                        <div className="help-section">
                            <p className="help-item-title">ドラッグ&ドロップ</p>
                            <p className="help-item">武将を左パネルから部隊の枠にドラッグして配置</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">ダブルクリック</p>
                            <p className="help-item">• 武将をダブルクリック → 空きスロットに自動配置</p>
                            <p className="help-item">• 配置済み武将をダブルクリック → 削除</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">入れ替え</p>
                            <p className="help-item">武将同士をドラッグ&ドロップで入れ替え可能</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">侍従配置</p>
                            <p className="help-item">LR武将のみ侍従として配置可能。ダブルクリックで自動配置</p>
                        </div>
                    </div>
                )}
                
                {helpType === 'treasure' && (
                    <div className="help-content">
                        <div className="help-section">
                            <p className="help-item-title">配置可能な場所</p>
                            <p className="help-item">• 主将：武器・防具・文物を各1つずつ（最大3つ）</p>
                            <p className="help-item">• 副将1：武器・防具・文物を各1つずつ（最大3つ）</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">ドラッグ&ドロップ</p>
                            <p className="help-item">名宝を左パネルから装備枠にドラッグして配置</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">ダブルクリック</p>
                            <p className="help-item">• 名宝をダブルクリック → 種類に応じた空きスロットに自動配置</p>
                            <p className="help-item">• 配置済み名宝をダブルクリック → 削除</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title" style={{color: 'var(--rarity-ur)'}}>注意</p>
                            <p className="help-item">同じ名宝は1つの部隊にしか配置できません</p>
                        </div>
                    </div>
                )}
                
                {helpType === 'pattern' && (
                    <div className="help-content">
                        <div className="help-section">
                            <p className="help-item-title">5つの編制パターン</p>
                            <p className="help-item">各編制は独立した12部隊を管理。用途別に使い分けが可能</p>
                            <p className="help-item-note">例：編制1=攻撃用、編制2=防御用、編制3=イベント用</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">[...]メニュー</p>
                            <p className="help-item">• <strong>編制名を変更：</strong>分かりやすい名前を付ける</p>
                            <p className="help-item">• <strong>他の編制からコピー：</strong>別の編制の内容をコピー</p>
                            <p className="help-item">• <strong>この編制をリセット：</strong>全12部隊をクリア</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">切り替え</p>
                            <p className="help-item">タブをクリックで編制を切り替え。データは自動保存</p>
                        </div>
                    </div>
                )}
                
                {helpType === 'template' && (
                    <div className="help-content">
                        <div className="help-section">
                            <p className="help-item-title">保存</p>
                            <p className="help-item">部隊の[保存]ボタンで現在の構成をテンプレートとして保存</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">呼出</p>
                            <p className="help-item">部隊の[呼出]ボタンで保存したテンプレートを呼び出し</p>
                            <p className="help-item-note">上書き設定：武将・名宝の上書き有無を選択可能</p>
                        </div>
                        <div className="help-section">
                            <p className="help-item-title">重複削除</p>
                            <p className="help-item">テンプレート呼び出し時、同じ武将・名宝が他の部隊にあれば自動削除</p>
                            <p className="help-item-note">例：部隊1の張飛を部隊2に呼び出すと、部隊1の張飛は自動削除</p>
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
        <div className="modal-overlay modal-overlay--top" onClick={onClose}>
            <div className="modal-panel modal-panel--large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header" style={{marginBottom: '20px'}}>
                    <h2 style={{margin: 0}}>三国志覇道 編成支援ツール 使い方ガイド</h2>
                    <button onClick={onClose} className="modal-close-btn modal-close-btn--lg">×</button>
                </div>
                
                <div className="help-body">
                    <h3 className="help-category">基本操作</h3>
                    
                    <h4 className="help-subtitle">武将・名宝の配置</h4>
                    <div className="help-section">
                        <p><strong>ドラッグ&ドロップ:</strong> 武将/名宝を左パネルから部隊エリアにドラッグして配置</p>
                        <p><strong>ダブルクリック:</strong> 武将/名宝をダブルクリックで自動的に空きスロットに配置</p>
                        <p><strong>削除:</strong> 配置済みの武将/名宝をダブルクリックで削除</p>
                        <p><strong>入れ替え:</strong> 武将同士、名宝同士をドラッグ&ドロップで入れ替え可能</p>
                    </div>
                    
                    <h4 className="help-subtitle">武将配置の詳細</h4>
                    <div className="help-section">
                        <p><strong>主将:</strong> 各部隊に1名必須。ダブルクリックで主将エリアに配置</p>
                        <p><strong>副将:</strong> 副将1、副将2の2つのスロット。ダブルクリックで空きスロットに配置</p>
                        <p><strong>補佐:</strong> 補佐1、補佐2の2つのスロット。ダブルクリックで空きスロットに配置</p>
                        <p><strong>侍従:</strong> LR武将のみ配置可能。ダブルクリックで自動配置</p>
                    </div>
                    
                    <h4 className="help-subtitle">名宝配置の詳細</h4>
                    <div className="help-section">
                        <p><strong>主将の名宝:</strong> 武器・防具・文物を各1つずつ、最大3つまで配置可能</p>
                        <p><strong>副将1の名宝:</strong> 武器・防具・文物を各1つずつ、最大3つまで配置可能</p>
                        <p><strong>自動配置:</strong> 名宝をダブルクリックすると、種類に応じた空きスロットに自動配置</p>
                        <p style={{color: 'var(--rarity-ur)'}}><strong>注意:</strong> 同じ名宝は1つの部隊にしか配置できません</p>
                    </div>
                    
                    <h3 className="help-category help-category--spaced">基本機能</h3>
                    
                    <h4 className="help-subtitle">編成画面</h4>
                    <p><strong>部隊タブ:</strong> 主城部隊(6)、分城部隊(3)、出城部隊(3)の合計12部隊を管理</p>
                    <p><strong>武将配置:</strong> 武将パネルから武将をドラッグ&ドロップで配置。主将・副将・補佐の3種類</p>
                    <p><strong>侍従配置:</strong> LR武将は自動で侍従エリアが表示。侍従を配置可能</p>
                    <p><strong>名宝配置:</strong> 主将と副将1に最大3つずつ名宝を装備可能（武器・防具・文物）</p>
                    <p><strong>陣形選択:</strong> 各部隊の陣形タイプを選択可能</p>
                    
                    <h4 className="help-subtitle">⭐ ランク設定画面</h4>
                    <p><strong>プロファイル機能:</strong> 5つのプロファイル(P0-P4)で異なるランク設定を保存可能</p>
                    <p><strong>武将ランク:</strong> 各武将の星ランク(0-7)を設定</p>
                    <p><strong>名宝ランク:</strong> 各名宝の精錬ランク(0-7)とUR化状態を設定</p>
                    <p><strong>お気に入り・不使用:</strong> [★]ボタンでお気に入り登録、[×]ボタンで不使用設定</p>
                    
                    <h3 className="help-category help-category--spaced">高度な機能</h3>
                    
                    <h4 className="help-subtitle">編制パターン管理（10パターン）</h4>
                    <p><strong>編制タブ:</strong> 画面上部に10個の編制タブ（編制1-10）を表示</p>
                    <p><strong>編制切り替え:</strong> タブをクリックして編制を切り替え。各編制は独立した12部隊を持つ</p>
                    <p><strong>[...]メニュー:</strong></p>
                    <ul className="help-indent">
                        <li><strong>編制名を変更:</strong> 編制に分かりやすい名前を付ける（例: 「攻撃編成」「防御編成」）</li>
                        <li><strong>他の編制からコピー:</strong> 別の編制の内容を現在の編制にコピー</li>
                        <li><strong>この編制をリセット:</strong> 全12部隊をクリア</li>
                    </ul>
                    
                    <h4 className="help-subtitle">部隊テンプレート機能</h4>
                    <p><strong>[保存]ボタン:</strong> 現在の部隊構成をテンプレートとして保存</p>
                    <p><strong>[呼出]ボタン:</strong> 保存したテンプレートを別の部隊に呼び出し</p>
                    <p><strong>上書き設定:</strong></p>
                    <ul className="help-indent">
                        <li>☑ 武将・侍従を上書き: チェックを入れると既存の武将を置き換え</li>
                        <li>☑ 名宝を上書き: チェックを入れると既存の名宝を置き換え</li>
                    </ul>
                    <p><strong>重複削除:</strong> テンプレート呼び出し時、同じ武将・名宝が他の部隊にあれば自動削除</p>
                    
                    <h4 className="help-subtitle">フィルタ機能</h4>
                    <p><strong>武将フィルタ:</strong></p>
                    <ul className="help-indent">
                        <li><strong>レア度:</strong> LR / UR</li>
                        <li><strong>兵科:</strong> 歩兵 / 弓兵 / 騎兵</li>
                        <li><strong>勢力:</strong> 董卓 / 張角 / 魏 / 蜀 / 袁紹 / 呉 / 呂布 / その他</li>
                        <li><strong>侍従:</strong> 上 / 下 / 左 / 右 / 上下 / 左右 / 右上 / 右下 / 左下</li>
                        <li><strong>★お気に入り:</strong> お気に入り登録した武将のみ表示</li>
                    </ul>
                    <p><strong>名宝フィルタ:</strong></p>
                    <ul className="help-indent">
                        <li><strong>種類:</strong> 武器 / 防具 / 文物</li>
                        <li><strong>兵科:</strong> 歩兵 / 弓兵 / 騎兵 / 全兵科（防具・文物は全兵科で表示）</li>
                        <li><strong>勢力:</strong> 魏 / 蜀 / 袁紹 / 呉 / 他 / イベント</li>
                        <li><strong>★お気に入り:</strong> お気に入り登録した名宝のみ表示</li>
                    </ul>
                    
                    <h3 className="help-category help-category--spaced">ヒント</h3>
                    <ul className="help-indent" style={{lineHeight: '1.8'}}>
                        <li><strong>データ保存:</strong> すべてのデータはブラウザに自動保存されます（localStorage使用）</li>
                        <li><strong>重複チェック:</strong> 同じ武将・名宝を複数の部隊に配置しようとすると警告が表示されます</li>
                        <li><strong>折りたたみ:</strong> 部隊名の左にあるチェックボックスで部隊を折りたたみ可能</li>
                        <li><strong>リセット:</strong> 各部隊の[リセット]ボタンで個別に部隊をクリア可能</li>
                        <li><strong>編制の使い分け:</strong> 編制1を攻撃用、編制2を防御用など、用途別に管理すると便利</li>
                        <li><strong>テンプレート活用:</strong> よく使う部隊構成はテンプレート保存しておくと効率的</li>
                    </ul>
                    
                    <div className="help-version">
                        <p><strong>バージョン情報:</strong> SANGOKUSHI HADOU v3 (v140)</p>
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
                        キャンセル
                    </button>
                </div>
            </div>
        </div>
    );
}
