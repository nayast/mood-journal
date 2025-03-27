// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADSEgO095ESV7g_tw6GdpdGU5W3XIifhI",
  authDomain: "mood-journal-9d3cd.firebaseapp.com",
  databaseURL: "https://mood-journal-9d3cd-default-rtdb.firebaseio.com",
  projectId: "mood-journal-9d3cd",
  storageBucket: "mood-journal-9d3cd.firebasestorage.app",
  messagingSenderId: "17375803720",
  appId: "1:17375803720:web:3b6f77bf5905fbb033db7d",
  measurementId: "G-0MVTN4HRNM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);