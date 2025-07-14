import React from 'react'
import Card from './ForecastCard/Card';

export default function LongForcast({data}) {
  return (
    <> 
        {data.map((chunk) => (
          <Card key={chunk.number} data={chunk} />
        ))}
        </>
  )
}
