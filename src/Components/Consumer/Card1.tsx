import React from "react";
import img1 from "../../assets/Consumer/img1.svg";
import productionVideo from "../../assets/production.mp4";
const Card1 = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg shadow-lg h-full w-full object-cover"
      >
        <source src={productionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="gap-4 absolute text-center text-white inset-0 grid place-content-center justify-self-start justify-start sm:w-[90%] md:w-[50%] px-12">
        <p className="span-4 text-left text-9xl-3 font-bold ">Consumer products</p>
        <h1 className="animate-heading text-left  w-full text-24xl font-extrabold ">
          “Crafting Strategies, Building Brands, Delighting Consumers."
        </h1>
      </div>
    </div>
  );
};

export default Card1;