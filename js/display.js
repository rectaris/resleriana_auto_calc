// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5B4BBlvp81nsRxqq_eVXWmujxH7X2OdU",
  authDomain: "webpage-database-resleriana.firebaseapp.com",
  projectId: "webpage-database-resleriana",
  storageBucket: "webpage-database-resleriana.firebasestorage.app",
  messagingSenderId: "715496776709",
  appId: "1:715496776709:web:124dac1da21f59a653286c",
  measurementId: "G-JZ6PLZ9DES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// データの取得
async function fetchData() {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = ''; // 既存のデータをクリア
    const querySnapshot = await getDocs(collection(db, 'github-pages-collection'));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const dataElement = document.createElement('div');
        dataElement.textContent = JSON.stringify(data);
        dataDiv.appendChild(dataElement);
    });
}

fetchData();