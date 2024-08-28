import React from "react";
import img6 from "../../assets/AutoMotive/img6.svg";
import img4 from '../../assets/AutoMotive/img4.svg'
const Card7 = () => {
  return (
    <div className="bg-slate-900 w-screen font-inter">
      <div className="flex sm:flex-col md:gap-16 md:flex-row w-[90%] mx-auto">
        <div className="flex flex-col gap-2  place-content-center my-auto ">
          <div className="text-[#5498FE] text-5xl">Autonomous</div>
          <div className="text-white">
            <p>
              Automation is one of the biggest drivers of change within the
              mobility sector, promising to deliver safer, more efficient, and
              more affordable movement of goods and people. This major
              transformation also comes with significant risks and
              uncertainties.While full AVs may be in their infancy and their
              deployment limited, disruption at scale is hitting fast and hard.
            </p>
          </div>
          <div className="flex gap-4 flex-row mt-auto mb-3 sm:text-center md:text-left">
            <div className="flex place-content-center sm:text-center md:text-left py-1 text-[#5498FE] font-semibold ">
              Learn more
            </div>
            <div className="flex place-content-end">
              <img srcSet={img4} className="mt-[6px] h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <img srcSet={img6} className="h-[420px] w-[420px]" />
        </div>
      </div>
    </div>
  );
};

export default Card7;
