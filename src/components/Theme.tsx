import { useEffect, useState } from "react";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      return;
    }
    document.body.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:size-5"
      >
        <path
          className="fill-[#111517] dark:fill-white dark:stroke-white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.84257 9.052C6.73486 9.052 4.21543 6.74226 4.21543 3.89457C4.21543 2.82024 4.57343 1.82526 5.18514 1C2.75229 1.75612 1 3.86498 1 6.35045C1 9.47079 3.75943 12 7.16286 12C9.87429 12 12.1757 10.3945 13 8.16362C12.1 8.72383 11.0129 9.052 9.84257 9.052Z"
          fill="white"
          stroke="#111517"
        />
      </svg>

      <p className="font-semibold text-[12px] md:text-[1rem] dark:text-white">
        Dark Mode
      </p>
    </div>
  );
};

export default Theme;
