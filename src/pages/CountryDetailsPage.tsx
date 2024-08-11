import { Link, useParams } from "react-router-dom";
import { useCountry } from "../service/countryApi";
import BackButton from "../components/BackButton";

const CountryDetailsPage = () => {
  return (
    <div className="text-white-color py-10 lg:py-20">
      <BackButton />
    </div>
  );
};

export default CountryDetailsPage;
