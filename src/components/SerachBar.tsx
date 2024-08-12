import { useFilters } from "../hooks/useFilters";

const SerachBar = () => {
  const { search, setSearch } = useFilters();

  return (
    <div className="flex items-center md:max-w-[480px] bg-white-color dark:bg-dark-color px-8 gap-6 rounded-[5px]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
          fill="#B2B2B2"
        />
      </svg>
      <input
        value={search}
        type="text"
        placeholder="Search for a country…"
        className="w-full block text-[12px] md:text-sm min-h-12 outline-0 bg-white-color dark:bg-dark-color
        dark:text-white-color "
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SerachBar;
