import React from 'react'
import Locations from '../components/Locations/Locations';
import Forecast from '../components/Forecasting/Forecast'
import { useTheme } from '../context/ThemeContext';
import Toggle from '../components/Toggle';




export default function Dashboard() {
    const { theme, toggleTheme } = useTheme();
    

  return (
    <div className={`bg-${theme} container`}>
    <Toggle handleClick={toggleTheme} current={theme} style={'flex justify-end max-w-xl mx-auto'}/>
    <Locations />
    <Forecast  />
    </div>
  )
}
