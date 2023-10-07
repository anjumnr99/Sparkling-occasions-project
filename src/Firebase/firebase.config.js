// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";







const firebaseConfig = {
  apiKey: "AIzaSyAicqdCwsHw8bKufU7kTil5lauBqWwAOh4",
  authDomain: "sparkling-occasions-project.firebaseapp.com",
  projectId: "sparkling-occasions-project",
  storageBucket: "sparkling-occasions-project.appspot.com",
  messagingSenderId: "502787963804",
  appId: "1:502787963804:web:f11571ee74f81ddbc82659"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;