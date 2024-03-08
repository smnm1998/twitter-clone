import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCt-fAmQKwKF3clIbOoqNqRfcuUWVOPTAo",
    authDomain: "ntwitter-reloaded-92a4e.firebaseapp.com",
    projectId: "ntwitter-reloaded-92a4e",
    storageBucket: "ntwitter-reloaded-92a4e.appspot.com",
    messagingSenderId: "645095939485",
    appId: "1:645095939485:web:487c3860ce2d97e06a2374"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);