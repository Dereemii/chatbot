
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home"
import Chat from "./Chat"
import React from "react";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/chat",
      element: <ProtectedRoute children={<Chat/>}/>,
    }
  ]);

