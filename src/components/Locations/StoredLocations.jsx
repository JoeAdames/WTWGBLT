import React, {useState} from 'react'
import LocationBadge from './LocationBadge'

export default function StoredLocations({badges}) {
    
  return (
    <div className='flex items-center max-w-sm mx-auto my-2 md:'>
        {badges.map((badge, index) => (
            <LocationBadge key={index} badgeText={badge}/>
            ))}
    </div>
  )
}
