import React from "react";
import { useEffect } from "react";
import { initializeFirebaseUI } from "./firebaseUi";

const Home = () => {
  useEffect(() => {
    initializeFirebaseUI();
  }, []);

  return (
    <>
      <div id="firebaseui-auth-container"></div>
    </>
  );
};

export default Home;
