import React from 'react'
import Locations from '../components/Locations/Locations';
import Forecast from '../components/Forecasting/Forecast'
import { useTheme } from '../context/ThemeContext';
import { ForeCastProvider } from '../context/ForecastContext';



export default function Dashboard() {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className={`bg-${theme}`}>
    <button onClick={toggleTheme}>Toggle Theme: {theme} </button>
    <Locations />
    <ForeCastProvider >
        <Forecast  />
    </ForeCastProvider>
    </div>
  )
}
