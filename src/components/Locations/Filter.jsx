import React, { useState } from "react";
import { useLocation } from "../../context/LocationsContext";
import { useBadges } from "../../context/BadgeContext";

export default function Filter({ badges, onSetBadges }) {
  const { setLocation } = useLocation();
  const [userInput, setUserInput] = useState("");
  const { updateOrAddBadge, setActiveBadge } = useBadges();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOrAddBadge({ name: userInput });
    setActiveBadge(userInput);
    setLocation(userInput);
    setUserInput("");
  };

  return (
    <form
      className="flex justify-center max-w-sm mx-auto my-2"
      onSubmit={handleSubmit}
    >
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          value={userInput}
          className="bg-slate-50 border border-slate-300 dark:border-slate-700 text-sm rounded-lg block w-full ps-10 p-2.5 text-slate-400 dark:text-slate-400"
          placeholder="City, State"
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium bg-amber-200 rounded-lg border border-slate-700 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}
