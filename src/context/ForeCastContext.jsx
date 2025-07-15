import React, { useState, useContext, createContext, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const ForeCastContext = createContext();

export const ForeCastProvider = ({ children }) => {
  const [url, setUrl] = useState(
    "https://api.weather.gov/gridpoints/OKX/33,35/forecast"
  );
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setIsDayTime } = useTheme();

  useEffect(() => {
    async function fetchForecasts() {
      try {
        const res = await fetch(`${url}`, {
          method: "GET",
          headers: {
            "User-Agent": "wtwgblt (jadames14@gmail.com)",
          },
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        setData(data.properties);
        setIsDayTime(data.properties.periods[0].isDaytime);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchForecasts();
  }, [url]);

  return (
    <ForeCastContext.Provider value={{ data, error, loading, url, setUrl }}>
      {children}
    </ForeCastContext.Provider>
  );
};

export const useForeCast = () => useContext(ForeCastContext);
