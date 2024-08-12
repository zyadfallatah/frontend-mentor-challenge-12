import { useState } from "react";
import Region from "./Region";
import { useFilters } from "../hooks/useFilters";
const DropDownRegions = () => {
  const { region } = useFilters();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div
      className="relative flex justify-between items-center px-6 py-4 bg-white-color dark:bg-dark-color dark:text-white-color 
      w-[200px] rounded-[5px] cursor-pointer"
      onClick={() => setIsDropDownOpen(!isDropDownOpen)}
    >
      <h3 className="text-[12px] md:text-sm">
        {region === "" ? "Filter by Region" : region}
      </h3>
      <svg
        className={isDropDownOpen ? "rotate-90" : ""}
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="expand-more">
          <path
            className="fill-[#111517] dark:fill-white"
            id="Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.875 0.875L4 3.75L1.125 0.875L0.25 1.75L4 5.5L7.75 1.75L6.875 0.875Z"
          />
        </g>
      </svg>

      {isDropDownOpen && (
        <div
          className="absolute w-full left-0 top-[4rem] bg-white-color 
        dark:bg-dark-color dark:text-white-color px-6 py-4 space-y-2 rounded-[5px]"
        >
          <Region name="Africa" onClick={() => setIsDropDownOpen(false)} />
          <Region name="Americas" onClick={() => setIsDropDownOpen(false)} />
          <Region name="Asia" onClick={() => setIsDropDownOpen(false)} />
          <Region name="Europe" onClick={() => setIsDropDownOpen(false)} />
          <Region name="Oceania" onClick={() => setIsDropDownOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default DropDownRegions;
