import React from 'react'
import SingleCard from '../SingleCard';

export default function LongForcast({data}) {
  return (
    <div>
        {data.properties.periods.map((chunk) => (
          <SingleCard key={chunk.number} data={chunk} />
        ))}
        </div>
  )
}
