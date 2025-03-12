import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8} // Small sharp dot
      outerSize={8} // No soft outer glow, just a crisp dot
      color="228, 0, 55" // Red theme (E40037)
      outerAlpha={1} // Solid color (no blur)
      innerScale={1.8} // Snappy hover effect
      outerScale={3} // Slight expansion for hover
      trailingSpeed={0} // Faster response time
      clickables={["a", "button", ".custom-hover"]} // Interactive elements
      showSystemCursor={false} // Hide default cursor
      outerStyle={{
        backgroundColor: "transparent",
        border: "2px solid #E40037",
        borderRadius: "50%",
        mixBlendMode: "difference",
      }}
      innerStyle={{
        backgroundColor: "#E40037",
        borderRadius: "50%",
      }}
    />
  );
};

export default CustomCursor;
