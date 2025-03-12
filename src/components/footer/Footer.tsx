import Github from "./../../assets/github.svg";
import Gmail from "./../../assets/gmail.svg";
import Instagram from "./../../assets/instagram.svg";
import Linkedin from "./../../assets/linkedin.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full text-white py-4 px-6 flex flex-col bg-gradient-to-b from-transparent to-black sm:flex-row items-center justify-center sm:justify-between">
      {/* Desktop text (Hidden on small screens) */}
      <div className="hidden sm:flex">
        <div className="font-poppins font-semibold text-3xl flex flex-col leading-tight">
          <span className="animate-text-glow">Full Stack Dev</span>
          <span className="font-light text-[#C0C0C0] text-2xl">
            From <span className="font-bold text-theme-red text-2xl">IN</span>
          </span>
        </div>
      </div>

      {/* Icons (Always Visible, Centered on Mobile) */}
      <div className="flex flex-row gap-5 items-center justify-center ">
        <a href="https://www.instagram.com/karivarkey/" target="_blank">
          <img
            src={Instagram}
            alt="Instagram"
            className="h-8 w-8 transition-all duration-300 transform hover:scale-110"
          />
        </a>
        <a href="https://github.com/karivarkey" target="_blank">
          <img
            src={Github}
            alt="Github"
            className="h-8 w-8 transition-all duration-300 transform hover:scale-110"
          />
        </a>
        <a href="mailto:karivarkey@gmail.com" target="_blank">
          <img
            src={Gmail}
            alt="Gmail"
            className="h-8 w-8 transition-all duration-300 transform hover:scale-110"
          />
        </a>
        <a href="https://www.linkedin.com/in/karivarkey/" target="_blank">
          <img
            src={Linkedin}
            alt="Linkedin"
            className="h-8 w-8 transition-all duration-300 transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
