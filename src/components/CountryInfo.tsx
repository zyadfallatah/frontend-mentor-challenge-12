const CountryInfo = ({
  title,
  info,
}: {
  title: string;
  info: string | number | string[];
}) => {
  return (
    <p className="font-light text-black-color dark:text-white-color">
      <b className="font-semibold">{title}: </b>
      {info}
    </p>
  );
};

export default CountryInfo;
