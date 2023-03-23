import React from "react";
import "./firebase"
import { createRoot } from 'react-dom/client';
import "./firebase"


const rootElement = document.getElementById('app')
if(!rootElement) throw new Error("Failed to find root element")
const root = createRoot(rootElement);
root.render(<h1>Hello, world</h1>);




