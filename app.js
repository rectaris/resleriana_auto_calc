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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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