import React, {useState, useContext, useEffect} from 'react'
import Filter from './Filter'
import StoredLocations from './StoredLocations'


export default function Locations() {

  return (
    <div className='my-3'>
    <Filter />
    <StoredLocations/>
    </div>
  )
}
