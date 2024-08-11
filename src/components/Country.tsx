import { Link } from "react-router-dom";
import { CountrySchema } from "../service/countryApi";

const Country = ({ country }: { country: CountrySchema }) => {
  return (
    <Link to={`/frontend-mentor-challenge-12/${country.name.official}`}>
      <div
        className="bg-white-color dark:bg-dark-color text-dark-color dark:text-white-color min-h-[336px] rounded-b-[5px]
    cursor-pointer"
      >
        <img
          className=" w-full h-[10rem] object-cover rounded-t-[5px]"
          src={country.flags.svg}
          alt={`${country.name.official} Flag}`}
        />
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-[18px] font-extrabold leading-5 mb-4">
            {country.name.official}
          </h2>
          <div className="text-sm">
            <p>
              <b>Population: </b>
              {country.population}
            </p>
            <p>
              <b>Region: </b>
              {country.region}
            </p>
            <p>
              <b>Capital: </b>
              {country.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;