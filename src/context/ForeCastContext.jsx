import React, { useState, useContext, createContext  } from 'react';


const ForeCastContext = createContext();

export const ForeCastProvider = ({children}) => {
    const [foreCastType, setForeCastType] = useState("short");

    const toggleForeCastType = () => setForeCastType((prev) => prev === "short" ? "long" : "short");

    return (
        <ForeCastContext.Provider value={{foreCastType, toggleForeCastType}}>
            <div>
                {children}
            </div>
        </ForeCastContext.Provider>
    )
}

export const useForeCastType = () => useContext(ForeCastContext);
