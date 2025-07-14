import React, { useState, useContext, createContext  } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDayTime, setIsDayTime] = useState(null)

    // const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider value={{isDayTime, setIsDayTime}}>
        <div className={isDayTime === false ? "bg-gray-800 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
            {children}
        </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
