import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW0ilmGaT--ie5LvXLa2nP0iuMP0TBtw4",
  authDomain: "learn-firebase-react-e5734.firebaseapp.com",
  projectId: "learn-firebase-react-e5734",
  storageBucket: "learn-firebase-react-e5734.appspot.com",
  messagingSenderId: "96420955988",
  appId: "1:96420955988:web:390c7cec7be706634ceac1",
  measurementId: "G-PT5H3L9SN6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
