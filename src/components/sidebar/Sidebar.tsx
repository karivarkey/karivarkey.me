const Sidebar = () => {
  return (
    <div className="flex flex-col justify-around h-full font-poppins font-semibold text-white text-3xl">
      {["Home", "PROJECTS", "Contact"].map((item, index) => (
        <a
          key={index}
          className="rotate-90 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-gray-300 
                     hover:underline hover:underline-offset-4 hover:decoration-red-500"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
