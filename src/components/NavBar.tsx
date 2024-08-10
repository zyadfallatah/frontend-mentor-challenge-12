import Theme from "./Theme";

const NavBar = () => {
  return (
    <header className="relative flex justify-between px-4 py-8 md:px-20 bg-white dark:bg-dark-color">
      <h1 className="font-extrabold text-[14px] md:text-2xl dark:text-white">
        Where in the world?
      </h1>
      <Theme />
    </header>
  );
};

export default NavBar;
