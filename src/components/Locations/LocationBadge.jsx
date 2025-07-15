import React, { useEffect } from "react";
import { useForeCast } from "../../context/ForecastContext";
import { useLocation } from "../../context/LocationsContext";
import { useBadges } from "../../context/BadgeContext";

export default function LocationBadge({ badgeName, url, selected }) {
  const { setUrl } = useForeCast();
  const { location, setLocation } = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    setUrl(url);
  };

  // useEffect(() => {
  //   function selectBadge() {
  //     badgeName == location ? (selected = true) : (selected = false);
  //   }
  //   selectBadge();
  // }, []);

  return (
    <span
      className={
        selected
          ? "bg-slate-50/15 text-white text-xs border border-white font-medium me-2 my-0.5 px-2.5 py-0.5 rounded-sm dark:bg-slate-100/15 dark:text-white"
          : "bg-slate-50/15 text-white text-xs font-medium me-2 my-0.5 px-2.5 py-0.5 rounded-sm dark:bg-slate-100/15 dark:text-white"
      }
      onClick={handleClick}
    >
      {badgeName}
    </span>
  );
}
