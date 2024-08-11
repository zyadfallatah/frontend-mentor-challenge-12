// https://restcountries.com/v3.1/all {API endpoint}
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type CountrySchema = {
  population: number;
  region: string;
  capital: string;
  name: { official: string };
  flags: { png: string; svg: string };
  subregion?: string;
  currencies: { currency: { name: string } };
  languages: object;
  border?: string[];
};

export const useCountry = function (countryName: string) {
  const query = useQuery({
    queryKey: ["Country", countryName],
    queryFn: async () => {
      return await axios
        .get<CountrySchema[]>(
          `https://restcountries.com/v3.1/name/${countryName}`
        )
        .then((res) => {
          return res.data;
        });
    },
  });

  return query;
};

export const useCountries = function () {
  const query = useQuery({
    queryKey: ["Country"],
    queryFn: async () => {
      return await axios
        .get<CountrySchema[]>("https://restcountries.com/v3.1/all")
        .then((res) => {
          return res.data;
        });
    },
  });

  return query;
};
