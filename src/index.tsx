import React from 'react'
import Home from './views/Home';
import { createRoot } from 'react-dom/client'
import "./assets/style/global.css";
const root = createRoot(document.getElementById("app-root") as Element)
root.render(<Home />)


