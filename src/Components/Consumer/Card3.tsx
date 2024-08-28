import React from "react";
import img2 from "../../assets/Consumer/img2.svg";
import img3 from "../../assets/Consumer/img3.svg";

const Card3 = () => {
  return (
    <div className="w-screen bg-slate-900 font-Noto">
      <div className="flex sm:flex-col md:flex-row text-white">
        <div className="flex flex-col py-12 place-content-center  md:w-1/2 bg-gradient-to-br from-[#140B42] to-[#005587]">
          <div className="w-[60%] mx-auto flex flex-col gap-3  ">
            <img srcSet={img2} className="w-96 sm:self-center md:self-start" />
            <div className="text-9xl-3 font-bold sm:text-center  md:text-left">
              Insights Library
            </div>
            <div className="text-mini font-normal  sm:self-center md:self-left">
              Find out about the latest from IQVIA data scientists, doctors,
              researchers, and other experts on the topics that matter to you.
            </div>
            <div className=" mt-3 sm:text-center md:text-left">
              <button className="bg-[#0C7BC0]   sm:text-center md:text-left rounded-28xl-5 px-4 py-2 text-white font-semibold ">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-12 place-content-center  md:w-1/2 bg-[#2B3A42]">
          <div className="w-[60%] mx-auto flex flex-col gap-3  ">
            <img srcSet={img3} className="w-96 sm:self-center md:self-start" />
            <div className="text-9xl-3 font-bold sm:text-center  md:text-left">
              IQVIA Institute
            </div>
            <div className="text-mini font-normal  sm:self-center md:self-left">
              The IQVIA Institute for Human Data Science contributes to the
              advancement of human health globally.
            </div>
            <div className=" mt-3 sm:text-center md:text-left">
              <button className="bg-[#0C7BC0]   sm:text-center md:text-left rounded-28xl-5 px-4 py-2 text-white font-semibold ">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
