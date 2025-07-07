import React, {useState, useEffect} from 'react'
import SingleCard from './SingleCard'

export default function Forecast() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchForecasts() {
      try {
        const res = await fetch('https://api.weather.gov/gridpoints/TOP/32,81/forecast', {
        method: 'GET',
        headers: {
          'User-Agent': 'wtwgblt (jadames14@gmail.com)'
        }
      });
      const data = await res.json();
        if(!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
      setData(data)
      } catch(err){
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchForecasts();
  }, [])
  
  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error.message}</div>

  return (
    <div className='flex flex-col '>
        {data.properties.periods.map((chunk) => (
          <SingleCard key={chunk.number} data={chunk} />
        ))}
    </div>
  )
}
