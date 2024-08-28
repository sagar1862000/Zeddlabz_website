import React from "react";
import img2 from "../../assets/Insurance/img2.svg";
import img3 from "../../assets/Insurance/img3.png";
const Card2 = () => {
  return (
    <div className="bg-slate-900 w-screen">
      <div className="relative md:w-[70%] sm:w-[70%] self-center mx-auto bg-slate-300">
        <img
          srcSet={img3}
          className="w-full h-full sm:-mt-[20px] md:-mt-[50px]"
        />
        <div className="absolute inset-0 px-4 flex flex-col text-white font-lato -mt-[45px]">
          <div className="text-xl w-[40%]">GLOBAL INSURANCE SURVEY 2023</div>
          <div className="">
            Our latest insurance research surveys 13,750 policy holders across
            14 markets, with expert insights on how data and personalisation are
            key to insurers' success in a digitalized and competitive
            marketplace. Read our individual market reports to find out more.
          </div>
          <div className="place-content-end mt-auto mb-3 sm:text-center md:text-left">
            <button className="bg-transparent  sm:text-center md:text-left border-2 border-white px-3 py-1 text-white font-semibold ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
