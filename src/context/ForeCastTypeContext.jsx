import React, { useState, useContext, createContext  } from 'react';


const ForeCastTypeContext = createContext();

export const ForeCastTypeProvider = ({children}) => {
    const [foreCastType, setForeCastType] = useState("Today");

    const toggleForeCastType = () => setForeCastType((prev) => prev === "Today" ? "Weekly" : "Today");

    return (
        <ForeCastTypeContext.Provider value={{foreCastType, toggleForeCastType}}>
                {children}
        </ForeCastTypeContext.Provider>
    )
}

export const useForeCastType = () => useContext(ForeCastTypeContext);
