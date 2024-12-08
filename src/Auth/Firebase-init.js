// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGgga3kuE9d_2bOk4JmH4vYc-ts1yyfhA",
  authDomain: "visa-navigate-6d091.firebaseapp.com",
  projectId: "visa-navigate-6d091",
  storageBucket: "visa-navigate-6d091.firebasestorage.app",
  messagingSenderId: "7346470209",
  appId: "1:7346470209:web:5efa8108c60ad4865135c0"
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth ;
