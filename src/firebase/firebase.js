
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider,OAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDfkfnJXBJKF_1v_5CzkfBJR_eC2JaT4Fg",
  authDomain: "relatev2.firebaseapp.com",
  projectId: "relatev2",
  storageBucket: "relatev2.appspot.com",
  messagingSenderId: "742196835837",
  appId: "1:742196835837:web:f591acb8abf7d1c0415594",
  measurementId: "G-NPH643FK79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');
const linkedinProvider = new OAuthProvider('linkedin.com');

// Conditionally initialize Analytics (only in the browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Export the auth and googleProvider objects
export { auth, googleProvider, facebookProvider, microsoftProvider, linkedinProvider };