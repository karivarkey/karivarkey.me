import { useState } from "react";
import logo from "./../../assets/logo.png";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-row justify-between items-center px-4 py-4">
      {/* Logo & Name */}
      <div className="flex flex-row items-center gap-4">
        <img src={logo} alt="logo" className="h-10 sm:h-20 w-auto" />
        <div className="text-theme-red font-poppins font-semibold sm:text-lg text-sm tracking-[0.2rem] sm:tracking-[0.5rem]">
          KARIVARKEY
        </div>
      </div>

      {/* Desktop Name */}
      <div className="hidden sm:block text-end">
        <h1 className="text-theme-red font-poppins font-light text-xl">
          KARIVARKEY
        </h1>
        <h1 className="text-theme-red font-poppins font-bold text-2xl">
          Geevarghese Regi
        </h1>
      </div>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Header;
