// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRGq9aqJOiTCsEJ_mpRo4bx1YPtGCV4Ko",
    authDomain: "the-news-dragon-7251a.firebaseapp.com",
    projectId: "the-news-dragon-7251a",
    storageBucket: "the-news-dragon-7251a.appspot.com",
    messagingSenderId: "591387334206",
    appId: "1:591387334206:web:ae97814dcc134bf497a36f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;