import React, { useState } from "react";

const Toggle = ({ handleClick, current, style }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleClick();
  };

  return (
    <div className={style}>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={current}
          className="sr-only peer"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-sky-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-200 dark:peer-checked:bg-indigo-800"></div>
      </label>
      <div className="pl-1 text-slate-400">{current}</div>
    </div>
  );
};

export default Toggle;
