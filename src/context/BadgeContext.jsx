import React, { useState, useContext, createContext } from "react";

const BadgeContext = createContext();

export const BadgeProvider = ({ children }) => {
  const [badges, setBadges] = useState([]);

  return (
    <BadgeContext.Provider value={{ badges, setBadges }}>
      {children}
    </BadgeContext.Provider>
  );
};

export const useBadges = () => useContext(BadgeContext);
