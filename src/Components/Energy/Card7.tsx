import React from "react";
import img6 from "../../assets/Energy/img6.svg";

const Card7 = () => {
  return (
    <div className="w-screen bg-slate-900">
      <div className="flex gap-12 py-12 sm:flex-col md:flex-row w-[90%] mx-auto">
        <div className="h-[400px] md:w-1/2">
          <img srcSet={img6} className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-3 md:w-1/2 px-8 text-white font-Poppins">
          <div className="text-9xl-3 sm:text-center md:text-left font-bold">
            Green Hydrogen
          </div>
          <div className="sm:text-center md:text-left font-normal">
            Hailed as a future fuel, hydrogen has a tremendous potential as a
            source of energy. Being the most inflammable element on earth,
            designing engineering solutions comes with its own challenges.
            Hydrogen is a great alternative to the conventional fossil fuels,
            which gives only water as a by—product on combustion.
          </div>
          <div className="place-content-end mt-auto mb-3 sm:text-center md:text-left">
            <button className="bg-transparent  sm:text-center md:text-left border-1 border-white px-3 py-1 text-white font-semibold ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card7;
