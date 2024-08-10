import React from "react";

const Region = ({
  name,
  onClick,
}: {
  name: string;
  onClick: React.Dispatch<React.SetStateAction<unknown>>;
}) => {
  return (
    <div>
      <input
        type="radio"
        name="regions"
        id={name}
        className=" appearance-none hidden"
      />
      <label
        className="text-[12px] md:text-sm"
        htmlFor={name}
        onClick={() => onClick}
      >
        {name}
      </label>
    </div>
  );
};

export default Region;
