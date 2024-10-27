// src/components/signin/firebaseConfig.js
import { getAuth } from 'firebase/auth';
import FIREBASECONFIG from '../Settings';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
// const app = initializeApp(FIREBASECONFIG);
// const analytics = getAnalytics(app);

const app = initializeApp(FIREBASECONFIG);
const auth = getAuth(app);
export { app, auth };
