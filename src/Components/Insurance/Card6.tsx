import React from "react";
import img6 from "../../assets/Insurance/img6.svg";

const Card6 = () => {
  return (
    <div className="w-screen py-6 bg-slate-900">
      <div className="flex text-white border-solid border-1 border-white flex-col sm:w-[90%] md:w-[85%] mx-auto">
        <div className="w-1/2 py-3 flex sm:self-center md:self-start">
          <h3 className="mx-auto">PROTECTION, RETIREMENT AND SAVINGS</h3>
        </div>
        <div className="flex gap-2 sm:flex-col md:flex-row">
          <div className="md:w-1/2 flex sm:justify-center md:justify-start">
            <img srcSet={img6} className="h-[90%] w-[90%] object-left" />
          </div>
          <div className="md:w-1/2 px-2 flex flex-col font-inter">
            <p className="leading-[25px] sm:w-[80%] sm:mx-auto md:mx-0 md:w-[70%]">
              The life & retirement market is essential to the economy and
              provides security throughout peoples' lifespans. This complex
              industry is highly regulated and has suffered from ultra-low
              interest rates over the past decade. Capco helps life & retirement
              firms transform their operations by partnering on provocative,
              game-changing business strategies, distribution enablement,
              digital experience, and operational efficiencies across the
              insurance{" "}
              <span className="text-2xl">exciting new propositions.</span>
            </p>
            <div className=" mb-3 sm:text-center md:text-left">
              <button className="bg-transparent  sm:text-center md:text-left border-2 border-white px-3 py-1 text-white font-semibold ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
