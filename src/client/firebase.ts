import { getAuth, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfkrC095zSKOdSjygQeRnnLDTyaCnNKSE",
  authDomain: "chatbot-61a3e.firebaseapp.com",
  projectId: "chatbot-61a3e",
  storageBucket: "chatbot-61a3e.appspot.com",
  messagingSenderId: "774237625968",
  appId: "1:774237625968:web:40f1c3347cd70e85871eb5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth()
const ui = new firebaseui.auth.AuthUI(auth)

ui.start('#firebaseui-auth-container', {
  signInSuccessUrl: "/chat" ,
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }
  },
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID
  ],
  signInFlow: 'popup'
  // Other config options...
});