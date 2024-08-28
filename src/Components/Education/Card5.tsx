import React from "react";
import img5 from "../../assets/Education/img5.svg";
const Card5 = () => {
  return (
    <div className="w-screen bg-slate-900 font-lato">
      <div className="flex sm:flex-col md:flex-row sm:w-[90%] py-12 gap-20 md:w-[80%] mx-auto">
        <div className="flex flex-col gap-4 place-content-center">
          <div className="text-[#5498FE] sm:text-center md:text-left text-13xl leading-[40px] font-bold">
            Remote Learning and Interactivity
          </div>
          <div className="text-white  sm:text-center md:text-left ">
            Reimagine clinical development by intelligently connecting data,
            technology, and analytics to optimize your trials. The result?
            Faster decision making and reduced risk so you can deliver life-
            changing therapies faster.
          </div>
          <div className=" sm:text-center md:text-left">
            <button className="bg-[#5498FE]   sm:text-center md:text-left rounded-28xl-5 px-4 py-2 text-white font-semibold ">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex  sm:text-center md:text-left sm:mx-auto">
          <img srcSet={img5} className="flex  sm:text-center md:text-left" />
        </div>
      </div>
    </div>
  );
};

export default Card5;
