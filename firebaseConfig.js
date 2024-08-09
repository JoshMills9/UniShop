
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtwoYALS7kdgmyPHoBdVUmbACttHyQB9E",
  authDomain: "unishop-824f0.firebaseapp.com",
  projectId: "unishop-824f0",
  storageBucket: "unishop-824f0.appspot.com",
  messagingSenderId: "705343259923",
  appId: "1:705343259923:web:ffebef32c8d78bfc1b46e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);