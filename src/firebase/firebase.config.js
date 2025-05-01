
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDgR3-Lark4HSsFZTQ8CTpLqKmyL9u7I50",
  authDomain: "dragon-news-breaking-project.firebaseapp.com",
  projectId: "dragon-news-breaking-project",
  storageBucket: "dragon-news-breaking-project.firebasestorage.app",
  messagingSenderId: "1016142160392",
  appId: "1:1016142160392:web:6aae2d0045fe01eddc67bd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);