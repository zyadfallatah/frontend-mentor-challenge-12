import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      className="flex gap-2 items-center w-fit px-6 py-1 text-sm font-light bg-white-color dark:bg-dark-color 
    text-dark-alt-color dark:text-light-color rounded-sm"
      to="/frontend-mentor-challenge-12"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="call-made">
          <path
            className=" fill-black dark:fill-white"
            id="Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
            fill="white"
          />
        </g>
      </svg>
      Back
    </Link>
  );
};

export default BackButton;
