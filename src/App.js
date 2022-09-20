import logo from './logo.svg'
import './App.css'

import React from 'react'
import { Routes, Route } from "react-router-dom"
import { HOME } from './constants/index'
import { Home, NotFound } from './pages'

export default function App() {
  return (

    <Routes>
      <Route path = { HOME } component = { Home } />
      <Route component = { NotFound } />
    </Routes>

  )
}