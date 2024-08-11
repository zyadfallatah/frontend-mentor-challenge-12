import { useFilters } from "../hooks/useFilters";
import { useCountries } from "../service/countryApi";
import Country from "./Country";

const CountryList = () => {
  const { data, isLoading } = useCountries();
  const search = useFilters((state) => state.search);

  if (isLoading) return <h1>Loading...</h1>;
  console.log(search);
  return (
    <main className="grid gap-10 lg:gap-20 grid-cols-auto-4 mt-12 px-10 lg:px-0">
      {data!
        .filter((country) =>
          country.name.official.toLowerCase().includes(search.toLowerCase())
        )
        .map((e, index) => {
          return <Country country={e} key={index} />;
        })}
    </main>
  );
};

export default CountryList;
