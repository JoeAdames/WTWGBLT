import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ForeCastProvider } from "./context/ForeCastContext.jsx";
import { ForeCastTypeProvider } from "./context/ForeCastTypeContext.jsx";
import { LocationProvider } from "./context/LocationsContext.jsx";
import { BadgeProvider } from "./context/BadgeContext.jsx";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <BadgeProvider>
          <ForeCastProvider>
            <LocationProvider>
              <ForeCastTypeProvider>
                <Dashboard />
              </ForeCastTypeProvider>
            </LocationProvider>
          </ForeCastProvider>
        </BadgeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
