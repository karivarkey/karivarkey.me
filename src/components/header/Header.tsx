import logo from "./../../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center px-4 ">
      <div className="flex flex-row items-center justify-center py-4 gap-4">
        <img src={logo} alt="logo" className="h-10 sm:h-20 w-auto" />
        <div className="text-theme-red font-poppins font-semibold sm:text-lg text-sm ml-2 sm:tracking-[0.5rem] tracking-[0.2rem]">
          KARIVARKEY
        </div>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-theme-red font-poppins font-normal text-xl text-end">
          KARIVARKEY
        </h1>
        <h1 className="text-theme-red font-poppins font-bold text-2xl">
          Geevarghese Regi
        </h1>
      </div>
      <div className="sm:hidden flex flex-row w-1/2 justify-between text-white font-poppins font-semibold">
        {["HOME", "PROJECTS", "CONTACT"].map((item, index) => (
          <a
            key={index}
            href=""
            className="relative text-white hover:text-theme-red transition-colors duration-200"
          >
            {item}
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-theme-red transition-all duration-300 ease-in-out hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
