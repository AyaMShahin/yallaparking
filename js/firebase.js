// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcj8TjVRWi4l0zbI6p5IU7qgooNPxnSpw",
  authDomain: "yallaparking-1.firebaseapp.com",
  projectId: "yallaparking-1",
  storageBucket: "yallaparking-1.appspot.com",
  messagingSenderId: "172933458681",
  appId: "1:172933458681:web:c2d94f6bc0fbc286dd5028",
  measurementId: "G-KP0WQR4PVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const googleBtn = document.querySelector(".google");
googleBtn.addEventListener("click", (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // name = displayName
      // email = email
      // photo = photoURL

      alert(user.displayName + " you have successfully logged in 😍");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorMessage + " Please login with a valid Gmail 😔");
    });
});
