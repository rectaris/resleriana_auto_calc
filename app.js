// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5B4BBlvp81nsRxqq_eVXWmujxH7X2OdU",
  authDomain: "webpage-database-resleriana.firebaseapp.com",
  projectId: "webpage-database-resleriana",
  storageBucket: "webpage-database-resleriana.firebasestorage.app",
  messagingSenderId: "715496776709",
  appId: "1:715496776709:web:124dac1da21f59a653286c",
  measurementId: "G-JZ6PLZ9DES"
};

// Firebaseの初期化
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// データの登録
document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    try {
        await db.collection('github-pages-collection').add({
            name: name,
            age: parseInt(age)
        });
        alert('データが登録されました');
        fetchData(); // データの再取得
    } catch (error) {
        console.error('Error adding document: ', error);
    }
});

// データの取得
async function fetchData() {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = ''; // 既存のデータをクリア
    const querySnapshot = await db.collection('github-pages-collection').get();
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const dataElement = document.createElement('div');
        dataElement.textContent = JSON.stringify(data);
        dataDiv.appendChild(dataElement);
    });
}

fetchData();