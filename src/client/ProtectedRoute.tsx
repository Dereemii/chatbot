import React from "react";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(location);
        setAuthenticated(true);
      } else {
        navigate("/");
      }
    });
  }, []);

  return authenticated ? <div> {children}</div> : null;
};

export default ProtectedRoute;
