// Firebase設定と初期化
const firebaseConfig = {
  apiKey: "AIzaSyB3NkJoizpAx1ONXk_rMQ704kYY17hmvV0",
  authDomain: "hadou-v140.firebaseapp.com",
  projectId: "hadou-v140",
  storageBucket: "hadou-v140.firebasestorage.app",
  messagingSenderId: "288530815170",
  appId: "1:288530815170:web:ed65fbbeb664f4e33ac35b",
  measurementId: "G-XT1YCK4VZB"
};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firestore同期関数
const FirebaseSync = {
  // データを保存
  async saveData(data) {
    try {
      await db.collection('hadou-data').doc('main').set({
        ...data,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error('Firebase保存エラー:', error);
      alert('Firebaseへの保存に失敗しました。通信環境を確認してください。');
      return false;
    }
  },

  // データを読み込み
  async loadData() {
    try {
      const doc = await db.collection('hadou-data').doc('main').get();
      if (doc.exists) {
        return doc.data();
      }
      return null;
    } catch (error) {
      console.error('Firebase読み込みエラー:', error);
      alert('Firebaseからのデータ読み込みに失敗しました。通信環境を確認してください。');
      return null;
    }
  },

  // リアルタイム同期を監視
  watchChanges(callback) {
    return db.collection('hadou-data').doc('main').onSnapshot((doc) => {
      if (doc.exists) {
        callback(doc.data());
      }
    }, (error) => {
      console.error('Firebaseリアルタイム同期エラー:', error);
      alert('Firebaseのリアルタイム同期でエラーが発生しました。ページを再読み込みしてください。');
    });
  }
};
