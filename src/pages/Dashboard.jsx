import React from 'react'
import Locations from '../components/Locations/Locations';
import Forecast from '../components/Forecasting/Forecast'
import { useTheme } from '../context/ThemeContext';
import Toggle from '../components/Toggle';




export default function Dashboard() {
    const { theme, toggleTheme } = useTheme();

    

  return (
    <div className="min-h-screen p-2 bg-linear-to-t from-cyan-200 via-blue-400 to-indigo-600 dark:from-gray-700 dark:via-gray-900 dark:to-black">
    <Toggle handleClick={toggleTheme} current={theme}/>
    <Locations />
    <Forecast  />
    </div>
  )
}