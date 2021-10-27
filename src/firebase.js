import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };
 const firebaseConfig = {
  apiKey: "AIzaSyDJViOO0ibaDSpEpe7dYJw0Wh33j_SHgzM",
  authDomain: "disney-clone-4e5e7.firebaseapp.com",
  projectId: "disney-clone-4e5e7",
  storageBucket: "disney-clone-4e5e7.appspot.com",
  messagingSenderId: "476000028961",
  appId: "1:476000028961:web:d76d1cc053f21744e4d660"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDJViOO0ibaDSpEpe7dYJw0Wh33j_SHgzM",
//   authDomain: "disney-clone-4e5e7.firebaseapp.com",
//   projectId: "disney-clone-4e5e7",
//   storageBucket: "disney-clone-4e5e7.appspot.com",
//   messagingSenderId: "476000028961",
//   appId: "1:476000028961:web:d76d1cc053f21744e4d660"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);





// config
// const firebaseConfig = {
//   apiKey: "AIzaSyDJViOO0ibaDSpEpe7dYJw0Wh33j_SHgzM",
//   authDomain: "disney-clone-4e5e7.firebaseapp.com",
//   projectId: "disney-clone-4e5e7",
//   storageBucket: "disney-clone-4e5e7.appspot.com",
//   messagingSenderId: "476000028961",
//   appId: "1:476000028961:web:d76d1cc053f21744e4d660"
// };