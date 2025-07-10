import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ForeCastTypeProvider } from './context/ForeCastTypeContext.jsx';
import { LocationProvider } from './context/LocationsContext.jsx';
import { BadgeProvider } from './context/BadgeContext.jsx';
import Dashboard from './pages/Dashboard'
import { ForeCastProvider } from './context/ForecastContext.jsx';

function App() {

  return (
    <>
    <ThemeProvider>
      <ForeCastProvider>
      <ForeCastTypeProvider>
        <BadgeProvider>
          <LocationProvider>
               <Dashboard />
        </LocationProvider>
        </BadgeProvider>
      </ForeCastTypeProvider>
      </ForeCastProvider>
    </ThemeProvider>
    </>
  )
}

export default App
