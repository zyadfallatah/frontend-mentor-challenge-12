import React from "react";
import { useFilters } from "../hooks/useFilters";

const Region = ({
  name,
  onClick,
}: {
  name: string;
  onClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  const { setRegion } = useFilters();
  return (
    <div
      className="text-[12px] md:text-sm cursor-pointer hover:text-blue-300"
      onClick={(e) => {
        onClick(e);
        setRegion(name);
      }}
    >
      <input
        type="radio"
        name="regions"
        id={name}
        className=" appearance-none hidden"
      />
      <label htmlFor={name} className=" cursor-pointer">
        {name}
      </label>
    </div>
  );
};

export default Region;
