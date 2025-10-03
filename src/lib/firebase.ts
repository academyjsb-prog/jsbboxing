
'use client';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  "projectId": "studio-1965453930-51650",
  "appId": "1:404906210846:web:51f116d5d084307253600f",
  "apiKey": "AIzaSyCXLRoLQZBlk6966RT5xY37aTUDfPEM43I",
  "authDomain": "studio-1965453930-51650.firebaseapp.com",
  "storageBucket": "studio-1965453930-51650.appspot.com",
  "messagingSenderId": "404906210846"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
