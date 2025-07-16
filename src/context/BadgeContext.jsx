import React, { useState, useContext, createContext } from "react";

const BadgeContext = createContext();

export const BadgeProvider = ({ children }) => {
  const [badges, setBadges] = useState([]);

  const updateOrAddBadge = (newbadge) => {
    setBadges((prev) => {
      const exists = prev.some((badge) => badge.name === newbadge.name);

      if (exists) {
        // Update existing object
        return prev.map((badge) =>
          badge.name === newbadge.name ? { ...badge, ...newbadge } : badge
        );
      } else {
        // Add new object
        return [newbadge, ...prev];
      }
    });
  };

  const setActiveBadge = (name) => {
    setBadges((prev) =>
      prev.map((badge) =>
        badge.name.toLowerCase() === name
          ? { ...badge, selected: true }
          : { ...badge, selected: false }
      )
    );
  };

  return (
    <BadgeContext.Provider
      value={{ badges, setBadges, updateOrAddBadge, setActiveBadge }}
    >
      {children}
    </BadgeContext.Provider>
  );
};

export const useBadges = () => useContext(BadgeContext);
