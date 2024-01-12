// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBgSuJfKC_n1MFniaabECKRYPIXR8TXKgY",
  authDomain: "agent-6ea8d.firebaseapp.com",
  projectId: "agent-6ea8d",
  storageBucket: "agent-6ea8d.appspot.com",
  messagingSenderId: "646107823266",
  appId: "1:646107823266:web:f3c338c1434bbb0965abfb",
  measurementId: "G-3QVFK2NV03",
};
// const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
