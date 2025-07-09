import React, {useState, useEffect} from 'react'
import LongForcast from './LongForcast';
import ShortForecast from './ShortForecast';
import { useForeCastType } from '../../context/ForecastContext';


export default function Forecast() {
  const {foreCastType, toggleForeCastType} = useForeCastType();

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
      <button onClick={toggleForeCastType}>Forecast-Type: {foreCastType} </button>
        {foreCastType == "short" ? <ShortForecast current={data.properties.periods[0]} later={data.properties.periods[1]}/> : <LongForcast data={data} /> }
    </div>
  )
}
