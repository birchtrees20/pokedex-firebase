// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmAHBEV0HZmemQqYqcKJSjDqxfWVLQpI",
  authDomain: "pokedex-178cd.firebaseapp.com",
  projectId: "pokedex-178cd",
  storageBucket: "pokedex-178cd.appspot.com",
  messagingSenderId: "42294582616",
  appId: "1:42294582616:web:c8a0d8ef3da5acb0a6d92d",
  measurementId: "G-WDMTBHY48L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}

//const analytics = getAnalytics(app);