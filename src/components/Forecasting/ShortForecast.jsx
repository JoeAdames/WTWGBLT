import React from "react";
import Card from "./ForecastCard/Card";

export default function ShortForecast({ current, later }) {
  return (
    <div className="flex flex-col gap-y-10">
      <Card data={current} />
      <Card data={later} />
    </div>
  );
}
