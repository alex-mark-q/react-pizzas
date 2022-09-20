import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { render } from "react-dom"

import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );
