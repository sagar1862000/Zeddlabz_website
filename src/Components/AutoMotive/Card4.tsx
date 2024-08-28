import React from "react";
import img1 from "../../assets/AutoMotive/img1.svg";
import img2 from '../../assets/AutoMotive/img2.svg'
const Card4 = () => {
  return (
    <div className="bg-white w-screen font-inter">
      <div className="flex sm:flex-col md:gap-16 md:flex-row w-[90%] mx-auto">
        <div className="text-center">
          <img srcSet={img1} className="h-[420px] w-[420px]" />
        </div>
        <div className="flex flex-col gap-2  place-content-center my-auto ">
          <div className="text-[#5498FE] text-5xl">Connected</div>
          <div>
            <p>
              The uptake of service-based applications and solutions by the
              automotive industry has heavily impacted the ways in which
              customers interact with their vehicles.
            </p>
            <p>
              Automotive connectivity facilitates in-vehicle HMI technologies
              like virtual personal assistants and AI-based infotainment
              systems, and turns the vehicle into a key part of the consumer's
              digital life.
            </p>
          </div>
          <div className="flex gap-4 flex-row mt-auto mb-3 sm:text-center md:text-left">
            <div className="flex place-content-center sm:text-center md:text-left py-1 text-[#003F72] font-semibold ">
              Learn more
            </div>
            <div className="flex place-content-end">
              <img srcSet={img2} className="mt-[6px] h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
