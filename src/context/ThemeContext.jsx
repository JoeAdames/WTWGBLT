import React, { useState, useContext, createContext  } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className={theme === 'dark' ? "bg-gray-800 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
            {children}
        </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
