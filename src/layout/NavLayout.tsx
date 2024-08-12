import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <NavBar />
      <div className="px-4 md:px-20 pb-[45px]">
        <div className="max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default NavLayout;
