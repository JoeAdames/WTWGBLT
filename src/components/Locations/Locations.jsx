import React, {useState, useContext, useEffect} from 'react'
import Filter from './Filter'
import StoredLocations from './StoredLocations'

export default function Locations() {
    const [badges , setBadges] = useState([])
  return (
    <div className='my-3'>
    <Filter onSetBadges={setBadges} badges={badges}/>
    <StoredLocations badges={badges}/>
    </div>
  )
}
