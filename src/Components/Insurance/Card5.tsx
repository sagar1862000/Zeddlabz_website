import React from "react";
import img5 from "../../assets/Insurance/img5.svg";
const Card5 = () => {
  return (
    <div className="w-screen py-6 bg-slate-900">
      <div className="flex text-white border-solid border-1 border-white flex-col sm:w-[90%] md:w-[85%] mx-auto">
        <div className="w-1/2 py-3 flex sm:self-center md:self-end ">
          <h3 className="mx-auto">COMMERCIAL AND SPECIALITY</h3>
        </div>
        <div className="flex gap-6 sm:flex-col md:flex-row w-[90%] mx-auto">
          <div className="flex flex-col gap-3 md:w-1/2 px-8 text-white font-Poppins">
            <div className="sm:text-center leading-[25px] md:text-left font-normal">
              Personal lines insurance is highly competitive and expansive as
              consumers look for multiple products to meet their specific needs.
              Businesses that profitably transition from an insurance product
              mindset to one that provides a holistic customer service
              proposition will thrive. We partner with clients to re-think their
              business models, re-design customer experiences, and launch and
              scale exciting new propositions.
            </div>
            <div className=" mb-3 sm:text-center md:text-left">
              <button className="bg-transparent  sm:text-center md:text-left border-2 border-white px-3 py-1 text-white font-semibold ">
                READ MORE
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex sm:justify-center md:justify-start">
            <img srcSet={img5} className="h-[90%] w-[90%] object-left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
