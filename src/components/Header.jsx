import React from "react";
import Toggle from "./Toggle";
import { useForeCastType } from "../context/ForeCastTypeContext";
import Filter from "./Locations/Filter";

export default function Header() {
  const { toggleForeCastType, foreCastType } = useForeCastType();
  return (
    <header className="py-6">
      <div className="flex flex-col gap-y-2 justify-evenly items-center sm:flex-row">
        <h1 className="text-3xl font-bold tracking-tight leading-snug text-white">
          WTWGBLT?
        </h1>
        <Filter />
        <Toggle
          handleClick={toggleForeCastType}
          current={foreCastType}
          style={"flex justify-end pl-3"}
        />
      </div>
    </header>
  );
}
