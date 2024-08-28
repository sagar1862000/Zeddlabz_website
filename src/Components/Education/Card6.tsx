import React from "react";
import img6 from "../../assets/Education/img6.svg";
const Card6 = () => {
  return (
    <div className="bg-white w-screen font-lato">
      <div className="flex sm:flex-col-reverse my-10 py-10 md:flex-row rounded-13xl sm:mx-10 md:mx-40 bg-[linear-gradient(to_right,_#140B42,_#005587)]">
        <div className="h-96 w-96 sm:text-center md:text-left sm:mx-auto">
          <img srcSet={img6} className="h-96 w-96 sm:text-center md:text-left" />
        </div>
        <div className="flex flex-col text-white sm:text-center md:text-left place-content-center gap-3 px-12">
          <div className="font-bold text-9xl-3 sm:text-center md:text-left">Work smarter, not harder</div>
          <div className="">
            Reimagine a smarter, more productive future with an intelligent
            customer engagement platform that transforms the work of life
            science teams for real results.
          </div>
          <div className="sm:text-center md:text-left ">
            <button className="bg-white sm:text-center md:text-left rounded-28xl-5 px-4 py-2 text-black font-semibold ">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
