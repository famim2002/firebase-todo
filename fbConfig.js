import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBvIzjenHYACib4TbEpHMLcztCqFDdqRfU",
  authDomain: "todo-webapp-fhy.firebaseapp.com",
  projectId: "todo-webapp-fhy",
  storageBucket: "todo-webapp-fhy.firebasestorage.app",
  messagingSenderId: "968287723192",
  appId: "1:968287723192:web:6e810203efa08fb3d69e4d",
  measurementId: "G-NV78MPWP1K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
