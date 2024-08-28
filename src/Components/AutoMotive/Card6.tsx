import React from "react";
import img2 from "../../assets/AutoMotive/img2.svg";
import img5 from "../../assets/AutoMotive/img5.svg";
const Card6 = () => {
  return (
    <div className="bg-white w-screen font-inter">
      <div className="flex sm:flex-col md:gap-16 md:flex-row w-[90%] mx-auto">
        <div className="text-center">
          <img srcSet={img5} className="h-[420px] w-[420px]" />
        </div>
        <div className="flex flex-col gap-2  place-content-center my-auto ">
          <div className="text-[#5498FE] text-5xl">Shared Mobility</div>
          <div>
            <p>
              Launching and scaling a successful mobility service is daunting.
              Each day, market entrants threaten traditional vehicle ownership
              models with new flavors of leasing, vehicles-as-a-service,
              commercial fleets, on-demand delivery, and various forms of
              ridesharing and carsharing services. These opportunities have
              piqued interest in the broader mobility service ecosystem overall,
              as well as the ultimate roles incumbent carmakers and disruptors
              will ultimately play.
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

export default Card6;
