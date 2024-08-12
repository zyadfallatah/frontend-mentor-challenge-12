import SerachBar from "../components/SerachBar";
import DropDownRegions from "./DropDownRegions";

const Filters = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-10 justify-between mt-6 lg:mt-12">
      <SerachBar />
      <DropDownRegions />
    </div>
  );
};

export default Filters;
