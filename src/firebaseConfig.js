import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOOPtBXLIMgvJ9aVcl_Hl2PEPcYECnl_c",
  authDomain: "blendeasy.firebaseapp.com",
  projectId: "blendeasy",
  storageBucket: "blendeasy.appspot.com",
  messagingSenderId: "1014159813762",
  appId: "1:1014159813762:web:f47548fe61d1e62d8c589b",
  measurementId: "G-3D538X1FBC",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
