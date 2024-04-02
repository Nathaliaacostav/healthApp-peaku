// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics} from "firebase/analytics"
import { getMessaging} from "firebase/messaging"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALJvoTLeICJTQUMCnuhzggf8L8anjzOGQ",
  authDomain: "test2-2c6f8.firebaseapp.com",
  projectId: "test2-2c6f8",
  storageBucket: "test2-2c6f8.appspot.com",
  messagingSenderId: "334625314375",
  appId: "1:334625314375:web:3a3ec2a59b838942b50362"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app)
export const messaging = getMessaging(app)