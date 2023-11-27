
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHzASi6Gev0kIS51Rp1Kx-g_c60Bf681I",
  authDomain: "fir-module51.firebaseapp.com",
  projectId: "fir-module51",
  storageBucket: "fir-module51.appspot.com",
  messagingSenderId: "509977833140",
  appId: "1:509977833140:web:352e7515e5a9612713b1e1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;