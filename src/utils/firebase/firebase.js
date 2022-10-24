import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF62aHm_5V2gE_8yINzt4Zn1I7h0rOBzk",
  authDomain: "ieeensakcet-7dae3.firebaseapp.com",
  databaseURL: "https://ieeensakcet-7dae3-default-rtdb.firebaseio.com",
  projectId: "ieeensakcet-7dae3",
  storageBucket: "ieeensakcet-7dae3.appspot.com",
  messagingSenderId: "263812455754",
  appId: "1:263812455754:web:ad7165c636f46719ed35b3",
  measurementId: "G-0P3SXGLDW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
export const db = getFirestore(app);
