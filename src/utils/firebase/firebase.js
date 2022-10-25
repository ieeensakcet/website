import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase.js

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDF62aHm_5V2gE_8yINzt4Zn1I7h0rOBzk",
//   authDomain: "ieeensakcet-7dae3.firebaseapp.com",
//   databaseURL: "https://ieeensakcet-7dae3-default-rtdb.firebaseio.com",
//   projectId: "ieeensakcet-7dae3",
//   storageBucket: "ieeensakcet-7dae3.appspot.com",
//   messagingSenderId: "263812455754",
//   appId: "1:263812455754:web:ad7165c636f46719ed35b3",
//   measurementId: "G-0P3SXGLDW8"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
