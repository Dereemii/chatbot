import React from "react";
import "./firebase";
import { createRoot } from "react-dom/client";
import "./firebase";

import Chat from "./Chat"
import Home from "./Home"


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/chat",
    element: <Chat/>,
  }
]);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find root element");
const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);
