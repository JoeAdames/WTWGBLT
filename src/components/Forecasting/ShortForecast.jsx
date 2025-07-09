import React from 'react'
import SingleCard from '../SingleCard'

export default function ShortForecast({current, later}) {
  return (
    <div>
      <SingleCard data={current} />
      <SingleCard data={later} />
    </div>
  )
}
