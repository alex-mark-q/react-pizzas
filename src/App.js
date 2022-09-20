import './App.css'

import React from 'react'
import { Routes, Route } from "react-router-dom"
import { HOME } from './constants/index'
import { Home, NotFound } from './pages'

export default function App() {
  return (

    <Routes>
      <Route path = { HOME } element = { <Home /> } />
      <Route path="*" element = { <NotFound /> } />
    </Routes>

    // <Routes>
    //   <Route path="/" element={<App />} />
    // </Routes>

  )
}