// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCERIBKQ6R4i6V-M_0aBzOXa-yfb7cRu1o",
  authDomain: "whatsappclone-cb8a5.firebaseapp.com",
  databaseURL: "https://whatsappclone-cb8a5-default-rtdb.firebaseio.com",
  projectId: "whatsappclone-cb8a5",
  storageBucket: "whatsappclone-cb8a5.firebasestorage.app",
  messagingSenderId: "520366245531",
  appId: "1:520366245531:web:4196c646d8122aba85683e"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;