import './App.css'

import React from 'react'
import { Routes, Route } from "react-router-dom"
import { HOME } from './constants/index'
import { Home, NotFound } from './pages'

import StyledThemeProvider from 'styles/StyledThemeProvider';

export default function App() {
  return (
    <StyledThemeProvider>
      <Routes>
        <Route path = { HOME } element = { <Home /> } />
        <Route path="*" element = { <NotFound /> } />
      </Routes>
    </StyledThemeProvider>
  )
}
