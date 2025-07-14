import React, { useState, useContext, createContext  } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDayTime, setIsDayTime] = useState(null)
    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light");
    // isDayTime ? 'light' : 'dark'
    return (
        <ThemeContext.Provider value={{isDayTime, setIsDayTime, toggleTheme}}>
        <div data-theme={theme}>
            {children}
        </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
