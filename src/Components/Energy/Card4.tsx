import React from "react";
import img3 from "../../assets/Energy/img3.svg";

const Card4 = () => {
  return (
    <div className="w-screen bg-white">
      <div className="flex gap-12 py-12 sm:flex-col md:flex-row w-[90%] mx-auto">
        <div className="flex flex-col gap-3 md:w-1/2 px-8 text-black font-Poppins">
          <div className="text-9xl-3 sm:text-center md:text-left font-bold">
            Wind Energy
          </div>
          <div className="sm:text-center md:text-left font-normal">
            SgurrEnergy has gained significant recognition in the wind power
            sector. The combination of recent shifts in government policy and
            continuous advancements in wind turbine technology has significantly
            enhanced the appeal of wind farm development across various scales.
          </div>
          <div className="place-content-end mt-auto mb-3 sm:text-center md:text-left">
            <button className="bg-transparent  sm:text-center md:text-left border-1 border-black px-3 py-1 font-semibold ">
              READ MORE
            </button>
          </div>
        </div>
        <div className="h-[400px] md:w-1/2">
          <img srcSet={img3} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Card4;
