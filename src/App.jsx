import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
    <ThemeProvider>
        <Dashboard />
    </ThemeProvider>
    </>
  )
}

export default App
