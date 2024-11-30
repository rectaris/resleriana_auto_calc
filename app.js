// Firebaseの設定
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebaseの初期化
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// データの取得
async function fetchData() {
    const dataDiv = document.getElementById('data');
    const querySnapshot = await db.collection('github-pages-collection').get();
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const dataElement = document.createElement('div');
        dataElement.textContent = JSON.stringify(data);
        dataDiv.appendChild(dataElement);
    });
}

fetchData();