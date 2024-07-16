import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLI0TjTu-htYfvDe0czCfotKCGzmkkrns",
  authDomain: "netflix123-4c96a.firebaseapp.com",
  projectId: "netflix123-4c96a",
  storageBucket: "netflix123-4c96a.appspot.com",
  messagingSenderId: "984412110966",
  appId: "1:984412110966:web:9db0be4960ff9e16849f57",
  measurementId: "G-G9CBBKMR3B"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
