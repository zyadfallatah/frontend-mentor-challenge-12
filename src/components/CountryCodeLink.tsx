import { Link } from "react-router-dom";
import { useCountryCode } from "../service/countryApi";

const CountryCodeLink = ({ countryCode }: { countryCode: string }) => {
  const { data, isLoading } = useCountryCode(countryCode);
  if (isLoading) return <h1 className="dark:text-white-color">...</h1>;
  const [country] = data!;

  return (
    <Link
      to={`/frontend-mentor-challenge-12/${country.name.official}`}
      className="text-center min-w-24 py-[2px] bg-white-color dark:bg-dark-color shadow-sm"
    >
      {countryCode}
    </Link>
  );
};

export default CountryCodeLink;
