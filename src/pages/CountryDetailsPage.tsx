import { useParams } from "react-router-dom";
import { useCountry } from "../service/countryApi";
import BackButton from "../components/BackButton";
import CountryDetail from "../components/CountryDetail";

const CountryDetailsPage = () => {
  const { countryName } = useParams();

  const { data, isLoading } = useCountry(countryName!);

  if (isLoading) return <h1 className="dark:text-white">Loading...</h1>;

  const [countryDetail] = data!;

  return (
    <div className="text-white-color py-10 lg:py-20">
      <BackButton />
      <CountryDetail country={countryDetail} />
    </div>
  );
};

export default CountryDetailsPage;
