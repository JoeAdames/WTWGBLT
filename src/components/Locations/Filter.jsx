import React, {useState} from 'react'
import { useLocation } from '../../context/LocationsContext';

export default function Filter({badges, onSetBadges}) {
  const { setLocation } = useLocation();
  const [userInput, setUserInput] = useState(""); 


    const handleChange = (e) => {
      setUserInput(e.target.value);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(userInput);
    setUserInput("")
  }


  return (
      <form className="flex items-center max-w-sm mx-auto my-2" onSubmit={handleSubmit}>   
          <label className="sr-only">Search</label>
          <div className="relative w-full">
              <input type="text" id="simple-search" value={userInput} className="border border-gray-300 text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="City, State" onChange={handleChange} required />
          </div>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
          </button>
      </form>
  )
}
