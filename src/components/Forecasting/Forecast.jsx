import React, {useState, useEffect} from 'react'
import LongForcast from './LongForcast';
import ShortForecast from './ShortForecast';
import { useForeCastType } from '../../context/ForeCastTypeContext';
import { useForeCast } from '../../context/ForecastContext';
import Toggle from '../Toggle';


export default function Forecast() {
  const {foreCastType, toggleForeCastType} = useForeCastType();
  const {data, loading, error } = useForeCast();


  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: {error.message}</div>

  return (
    <div className='flex flex-col max-w-xl mx-auto'>
      <Toggle handleClick={toggleForeCastType}  current={foreCastType} style={'flex justify-end pl-3'}/>
        {foreCastType == "Today" ? <ShortForecast current={data.periods[0]} later={data.periods[1]}/> : <LongForcast data={data.periods} /> }
    </div>
  )
}
