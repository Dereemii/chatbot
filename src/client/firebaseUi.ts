import { getAuth, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";

export const initializeFirebaseUI = () => {
  const auth = getAuth();
  const ui = new firebaseui.auth.AuthUI(auth);

  ui.start("#firebaseui-auth-container", {
    signInSuccessUrl: "/chat",
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
        const loader = document.getElementById("loader");
        if (loader) {
          loader.style.display = "none";
        }
      },
    },
    signInOptions: [EmailAuthProvider.PROVIDER_ID],
    signInFlow: "popup",
    // Other config options...
  });
};
