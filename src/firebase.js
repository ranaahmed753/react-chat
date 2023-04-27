import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD69nnYpd1gfcJ34nbsfwKq9qRLwMFcvf0",
    authDomain: "react-chat-app-9f858.firebaseapp.com",
    projectId: "react-chat-app-9f858",
    storageBucket: "react-chat-app-9f858.appspot.com",
    messagingSenderId: "849092836164",
    appId: "1:849092836164:web:bc17f5ec47d01d3ba9b511",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
