import React, { useEffect } from "react";
import { useForeCast } from "../../context/ForeCastContext";
import { useBadges } from "../../context/BadgeContext";

export default function LocationBadge({ badgeName, url, selected }) {
  const { setUrl } = useForeCast();
  const { setActiveBadge } = useBadges();

  const handleClick = (e) => {
    e.preventDefault();
    setActiveBadge(e.target.innerText.toLowerCase());
    setUrl(url);
  };

  return (
    <span
      className={
        selected
          ? "bg-slate-50/15 text-white text-xs border border-white font-medium me-2 my-0.5 px-3 py-1 rounded-sm dark:bg-slate-100/15 dark:text-white"
          : "bg-slate-50/15 text-white text-xs font-medium me-2 my-0.5 px-3 py-1 rounded-sm dark:bg-slate-100/15 dark:text-white"
      }
      onClick={handleClick}
    >
      {badgeName.toUpperCase()}
    </span>
  );
}
