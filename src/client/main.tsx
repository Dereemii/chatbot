import React from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

//Ininializar firebase
import "./firebase";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find root element");
const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);
