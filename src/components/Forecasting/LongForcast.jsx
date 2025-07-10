import React from 'react'
import SingleCard from '../SingleCard';

export default function LongForcast({data}) {
  return (
    <div>
        {data.map((chunk) => (
          <SingleCard key={chunk.number} data={chunk} />
        ))}
        </div>
  )
}
