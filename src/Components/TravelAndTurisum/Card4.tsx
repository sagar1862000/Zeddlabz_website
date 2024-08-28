import React from "react";
import img3 from "../../assets/TravelAndTurisum/img3.svg";
const Card4 = () => {
  return (
    <div className="bg-slate-900 w-screen">
      <div className="flex sm:flex-col-reverse md:gap-16 md:flex-row w-[90%] mx-auto">
        <div className="text-center">
          <img srcSet={img3} className="md:h-[420px] md:w-[420px] sm:h-[330px] sm:w-[330px]  " />
        </div>
        <div className="flex flex-col gap-2 md:my-auto font-lato ">
          <div className="text-[#5498FE] sm:text-center md:text-left text-13xl px-6">
            Results-driven tourism solutions
          </div>
          <div className="px-6 text-white">
            <p className="text-white">
              Instead of standard marketing campaigns, we work with our clients
              to reframe, rebrand, and renew tourism strategies, experiences,
              and products to create “I want to go” buzz. We match your
              destination with specific target markets and airlines who want
              what you have, which supports a sustainable tourism industry. We
              create bespoke tourism strategies and air service marketing
              strategies to create demand for your destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
