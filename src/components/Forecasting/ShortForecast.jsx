import React from 'react'
import Card from './ForecastCard/Card'

export default function ShortForecast({current, later}) {
  return (
    <>
      <Card data={current} />
      <Card data={later} />
    </>
  )
}
