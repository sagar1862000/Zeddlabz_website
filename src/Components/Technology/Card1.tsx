import React from "react";
import img1 from "../../assets/Technology/img1.svg";
const Card1 = () => {
  const gradientStyle = {
    background: "linear-gradient(to right,#9795FF, #FFFFFF, #BE9FFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div
      className="relative bg-cover bg-center grid  place-content-center "
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="relative grid place-content-center  text-white p-6 gap-2 md:h-[500px] ">
        <h1
          className="text-31xl w-3/4 grid justify-self-center font-medium font-lato text-center"
          style={gradientStyle}
        >
          Developing Solutions for the Future
        </h1>
        <p className="text-white text-2xl font-lato text-center px-16">
          Help your business to grow with best Tech Solutions
        </p>
      </div>
    </div>
  );
};

export default Card1;
