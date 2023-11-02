// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urbanshelter-d73dd.firebaseapp.com",
  projectId: "urbanshelter-d73dd",
  storageBucket: "urbanshelter-d73dd.appspot.com",
  messagingSenderId: "874317223974",
  appId: "1:874317223974:web:4d46ef3ab01796c2f8aee7",
  measurementId: "G-MTBZZNX749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;