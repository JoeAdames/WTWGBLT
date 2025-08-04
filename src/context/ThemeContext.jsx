import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDayTime, setIsDayTime] = useState(null);

  const theme = isDayTime ? "light" : "dark";

  return (
    <ThemeContext.Provider value={{ isDayTime, setIsDayTime }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
