// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcmEsDaanePw7EwtWajqpMHlJYQVCXQ_A",
  authDomain: "s0125-dream-tourism-a10-mod-57.firebaseapp.com",
  projectId: "s0125-dream-tourism-a10-mod-57",
  storageBucket: "s0125-dream-tourism-a10-mod-57.appspot.com",
  messagingSenderId: "827971104796",
  appId: "1:827971104796:web:a6eae36fb70080a2456fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;