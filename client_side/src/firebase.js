
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // const firebaseConfig = {
// // //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //   apiKey: "AIzaSyDZE8moSoV2McUbZfJne2GjBpjGifarJVw",
// //   authDomain: process.env.REACT_APP_Firebase_Auth_Domain,
// //   projectId: process.env.REACT_APP_Firebase_ProjectId,
// //   storageBucket: process.env.REACT_APP_Firebase_StorageBucket,
// //   messagingSenderId: process.env.REACT_APP_Firebase_MessagingSenderId,
// //   appId: process.env.REACT_APP_Firebase_AppId,
// //   measurementId: process.env.REACT_APP_Firebase_MeasurementId
// // };
// // Import the functions you need from the SDKs you need

// const firebaseConfig = {
//   apiKey: "AIzaSyDZE8moSoV2McUbZfJne2GjBpjGifarJVw",
//   authDomain: "uniquebeautysalon-b42d3.firebaseapp.com",
//   projectId: "uniquebeautysalon-b42d3",
//   storageBucket: "uniquebeautysalon-b42d3.firebasestorage.app",
//   messagingSenderId: "738775058283",
//   appId: "1:738775058283:web:e546eeb05c413a87a72e2e",
//   measurementId: "G-WCDS1FM8S2"
// };

// // Initialize Firebase


// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZE8moSoV2McUbZfJne2GjBpjGifarJVw",
  authDomain: "uniquebeautysalon-b42d3.firebaseapp.com",
  projectId: "uniquebeautysalon-b42d3",
  storageBucket: "uniquebeautysalon-b42d3.firebasestorage.app",
  messagingSenderId: "738775058283",
  appId: "1:738775058283:web:e546eeb05c413a87a72e2e",
  measurementId: "G-WCDS1FM8S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db =getFirestore(app)


 export { auth, db  };