import React from 'react'
import { useForeCast } from '../../context/ForecastContext'

export default function LocationBadge({badgeName, url}) {
  const { setUrl } = useForeCast();

  const handleClick = (e) => {
    e.preventDefault();

    setUrl(url)
  }
  
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300" onClick={handleClick}>{badgeName}</span>
  )
}
