import { Dispatch, SetStateAction } from "react";

type MobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div className="sm:hidden relative">
      {/* Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-2xl"
      >
        ☰
      </button>

      {/* Animated Dropdown */}
      <div
        className={`absolute top-14 right-4 bg-black text-white flex flex-col p-4 rounded-lg shadow-lg space-y-2 
        transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {["HOME", "PROJECTS", "CONTACT"].map((item, index) => (
          <a
            key={index}
            href=""
            className="hover:text-theme-red transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
