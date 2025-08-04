import React from "react";
import Forecast from "../components/Forecasting/Forecast";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import StoredLocations from "../components/Locations/StoredLocations";

export default function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen min-w-screen p-2 bg-linear-to-t from-cyan-500 via-blue-400 to-blue-600 dark:from-gray-700 dark:via-gray-900 dark:to-black flex flex-col gap-y-5">
      <Header />
      <StoredLocations />
      <Forecast />
    </div>
  );
}
