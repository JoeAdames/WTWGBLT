import React, { useState } from "react";
import LocationBadge from "./LocationBadge";
import { useBadges } from "../../context/BadgeContext";

export default function StoredLocations() {
  const { badges } = useBadges();

  return (
    <div className="flex items-center max-w-sm mx-auto flex-wrap">
      {badges.map((badge, index) => (
        <LocationBadge
          key={index}
          badgeName={badge.name}
          url={badge.url}
          selected={badge.selected}
        />
      ))}
    </div>
  );
}
