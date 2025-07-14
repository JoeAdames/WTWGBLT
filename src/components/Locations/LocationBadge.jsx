import React from 'react'
import { useForeCast } from '../../context/ForecastContext'

export default function LocationBadge({badgeName, url}) {
  const { setUrl } = useForeCast();

  const handleClick = (e) => {
    e.preventDefault();

    setUrl(url)
  }
  
  return (
    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium me-2 my-0.5 px-2.5 py-0.5 rounded-sm dark:bg-slate-100 dark:text-slate-800" onClick={handleClick}>{badgeName}</span>
  )
}
