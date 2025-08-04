import React from "react";
import Card from "./ForecastCard/Card";

export default function LongForcast({ data }) {
  return (
    <div className="flex flex-col gap-y-10">
      {data.map((chunk) => (
        <Card key={chunk.number} data={chunk} />
      ))}
    </div>
  );
}
