
import { initializeApp } from "firebase/app";
import {getDatabase,getStorage} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcL0SCE3ptl98V8R2tMdhy-qX493ochvw",
  authDomain: "apride-123.firebaseapp.com",
  databaseURL: "https://apride-123.firebaseio.com",
  projectId: "apride-123",
  storageBucket: "apride-123.appspot.com",
  messagingSenderId: "690486761416",
  appId: "1:690486761416:web:e19504052e546c382a92fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);

