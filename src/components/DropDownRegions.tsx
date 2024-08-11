import { useState } from "react";
import arrow from "../assets/arrow.svg";
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
      <p>
        <img src={arrow} alt="" className={isDropDownOpen ? "rotate-90" : ""} />
      </p>

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
