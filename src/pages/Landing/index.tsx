import Header from "../../components/header/Header";
import HomeBg from "../../assets/home.png";
import HomeMobileBg from "../../assets/home-mobile.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <div
      className="min-h-screen h-dvh flex flex-col justify-between bg-theme-black"
      style={{
        backgroundImage: `url(${
          window.innerWidth <= 640 ? HomeMobileBg : HomeBg
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="flex-1 items-center justify-end hidden sm:flex">
        <Sidebar />
      </div>
      <div className="font-2xl line-clamp-1 text-white text-center text-4xl font-poppins font-bold sm:line-clamp-3 sm:hidden block">
        Geevarghese <span className="text-theme-red">Regi</span>
        <div className="items-center justify-center flex flex-col">
          <div className="sm:hidden flex">
            <div className="font-poppins font-semibold text-3xl leading-tight">
              <span className="animate-text-glow whitespace-nowrap">
                Full Stack Dev From{" "}
                <span className="font-bold text-theme-red">IN</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/12 px-10 sm:my-5 items-end">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
