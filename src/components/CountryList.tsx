import { useFilters } from "../hooks/useFilters";
import { useCountries } from "../service/countryApi";
import Country from "./Country";

const CountryList = () => {
  const { data, isLoading } = useCountries();
  const { search, region } = useFilters();

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <main className="grid gap-10 lg:gap-20 md:grid-cols-2 xl:grid-cols-4 mt-12 px-10 lg:px-0">
      {data!
        .filter(
          (country) =>
            country.name.official
              .toLowerCase()
              .includes(search.toLowerCase()) && country.region.includes(region)
        )
        .map((e, index) => {
          return <Country country={e} key={index} />;
        })}
    </main>
  );
};

export default CountryList;
