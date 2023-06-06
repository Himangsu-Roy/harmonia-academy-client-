// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvy4SNdBxIHxUspJX60tniS4iw3xR3xH4",
    authDomain: "harmonia-academy.firebaseapp.com",
    projectId: "harmonia-academy",
    storageBucket: "harmonia-academy.appspot.com",
    messagingSenderId: "48528344638",
    appId: "1:48528344638:web:611de98883f34df0a3b36f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app