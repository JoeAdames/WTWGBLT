import React, { useState, useContext, createContext  } from 'react';


const ForeCastContext = createContext();

export const ForeCastProvider = ({children}) => {
    const [foreCastType, setForeCastType] = useState("Today");

    const toggleForeCastType = () => setForeCastType((prev) => prev === "Today" ? "Weekly" : "Today");

    return (
        <ForeCastContext.Provider value={{foreCastType, toggleForeCastType}}>
            <div>
                {children}
            </div>
        </ForeCastContext.Provider>
    )
}

export const useForeCastType = () => useContext(ForeCastContext);
