// DO NOT SHARE CONFIG
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX4ZHnKsWyrhrDgjJbe7Ma8ii84XPStrA",
  authDomain: "simple-dimple-auth-f2450.firebaseapp.com",
  projectId: "simple-dimple-auth-f2450",
  storageBucket: "simple-dimple-auth-f2450.firebasestorage.app",
  messagingSenderId: "684300745493",
  appId: "1:684300745493:web:b86b13dc6392de2e4dc71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);