// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

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

// データの登録
document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    try {
        await addDoc(collection(db, 'github-pages-collection'), {
            name: name,
            age: parseInt(age)
        });
        alert('データが登録されました');
    } catch (error) {
        console.error('Error adding document: ', error);
    }
});