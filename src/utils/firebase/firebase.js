import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase.js

const firebaseConfig = {
  apiKey: process.env.DEV_API_KEY,
  authDomain: process.env.DEV_AUTH_DOMAIN,
  databaseURL: process.env.DEV_DATABASE_URL,
  projectId: process.env.DEV_PROJECT_ID,
  storageBucket: process.env.DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.DEV_MESSAGING_SENDER_ID,
  appId: process.env.DEV_APP_ID,
  measurementId: process.env.DEV_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
export const db = getFirestore(app);
