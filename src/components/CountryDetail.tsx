import { CountrySchema } from "../service/countryApi";
import CountryInfo from "./CountryInfo";
import CountryCodeLink from "./CountryCodeLink";

const getUnknownObjectValues = function (object: object) {
  return Object.values(object);
};

const CountryDetail = ({ country }: { country: CountrySchema }) => {
  const isCountryWithBorders = country.borders !== undefined;

  return (
    <div className="flex flex-col items-center lg:flex-row gap-11 xl:gap-36 mt-16 text-dark-color dark:text-white-color">
      <img
        className="lg:w-[42.25%]"
        src={country.flags.svg}
        alt={`${country.name.official} flag`}
      />
      <div className="flex flex-col gap-8 xl:py-10">
        <h1 className="lg:text-[2rem] font-extrabold">
          {country.name.official}
        </h1>
        <div className="flex flex-col gap-8 xl:flex-row xl:justify-evenly text-sm lg:text-[18px]">
          <div className="space-y-2 lg:space-y-5">
            <CountryInfo title="Native Name" info={country.name.official} />
            <CountryInfo title="Population" info={country.population} />
            <CountryInfo title="Region" info={country.region} />
            <CountryInfo title="Sub Region" info={country.subregion!} />
            <CountryInfo title="Capital" info={country.capital} />
          </div>
          <div className="space-y-2 lg:space-y-5">
            <CountryInfo title="Top Level Domain" info={country.cca2} />
            <CountryInfo
              title="Currencies"
              info={getUnknownObjectValues(country.currencies).map(
                (currnecy) => {
                  return currnecy.name + " ";
                }
              )}
            />
            <CountryInfo
              title="Languages"
              info={getUnknownObjectValues(country.languages).map((lang) => {
                return lang + " ";
              })}
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center gap-4">
          <h3 className="text-[1rem] ">Border Countries: </h3>
          <div className="max-w-[400px] flex flex-wrap gap-[10px]">
            {isCountryWithBorders ? (
              country.borders?.map((border, index) => {
                return <CountryCodeLink countryCode={border} key={index} />;
              })
            ) : (
              <span className="text-red-400">
                No Borders With {country.name.official}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
