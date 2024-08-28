import React from "react";
import img2 from "../../assets/Energy/img2.svg";
const Card3 = () => {
  return (
    <div className="w-screen bg-slate-900">
      <div className="flex gap-12 py-12 sm:flex-col md:flex-row w-[90%] mx-auto">
        <div className="h-[400px] md:w-1/2">
          <img srcSet={img2} className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-3 md:w-1/2 px-8 text-white font-Poppins">
          <div className="text-9xl-3 sm:text-center md:text-left font-bold">Solar PV</div>
          <div className="sm:text-center md:text-left font-normal">
            With a proven track record of delivering several projects globally,
            SgurrEnergy is highly proficient and competent in executing
            projects. As big enterprises are entering the solar landscape along
            with prominent financial corporations that see a lucrative business
            case and are willing to finance solar projects, holds quite a
            promise for Solar PVs future.
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

export default Card3;
