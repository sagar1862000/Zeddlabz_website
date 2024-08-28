import React from "react";
import img4 from "../../assets/Insurance/img4.svg";
const Card4 = () => {
  return (
    <div className="w-screen py-6 bg-slate-900">
      <div className="flex text-white border-solid border-1 border-white flex-col sm:w-[90%] md:w-[85%] mx-auto">
        <div className="w-1/2 py-3 flex sm:self-center md:self-start">
          <h3 className="mx-auto">GENERAL INSURANCE</h3>
        </div>
        <div className="flex gap-2 sm:flex-col md:flex-row">
          <div className="md:w-1/2 flex sm:justify-center md:justify-start">
            <img srcSet={img4} className="h-[90%] w-[90%] object-left" />
          </div>
          <div className="md:w-1/2 px-2 flex flex-col font-inter">
            <p className="leading-[25px] sm:w-[80%] sm:mx-auto md:mx-0 md:w-[70%]">
              Personal lines insurance is highly competitive and expansive as
              consumers look for multiple products to meet their specific needs.
              Businesses that profitably transition from an insurance product
              mindset to one that provides a holistic customer service
              proposition will thrive. We partner with clients to re-think their
              business models, re-design customer experiences, and launch and
              scale <span className="text-2xl">exciting new propositions.</span>
            </p>
            <div className=" mb-3 sm:text-center md:text-left">
              <button className="bg-transparent  sm:text-center md:text-left border-2 border-white px-3 py-1 text-white font-semibold ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;

// <div className="flex flex-col w-[85%] mx-auto border-1 border-solid border-white ">
// {/* <div className=" text-white text-5xl md:w-[45%] text-center py-3">
//   GENERAL INSURANCE
// </div> */}
// <div className="flex sm:flex-col place-content-center md:flex-row">
//   <div className="md:w-[45%] flex flex-col self-center items-center">
//     <div className="text-white text-5xl text-center py-3">
//       GENERAL INSURANCE
//     </div>
//     {/* <div className="flex justify-start w-full"> */}
//       <img srcSet={img4} className="h-80 flex justify-start w-full" />
//     {/* </div> */}
//   </div>

//   <div className="text-white md:w-[55%] self-center">
//     <p className="leading-8 sm:w-[80%] sm:mx-auto md:mx-0 md:w-[70%]">
//       Personal lines insurance is highly competitive and expansive as
//       consumers look for multiple products to meet their specific needs.
//       Businesses that profitably transition from an insurance product
//       mindset to one that provides a holistic customer service
//       proposition will thrive. We partner with clients to re-think their
//       business models, re-design customer experiences, and launch and
//       scale exciting new propositions.
//     </p>
//     <div className="place-content-end mt-auto mb-3 sm:text-center md:text-left">
//       <button className="bg-transparent  sm:text-center md:text-left border-2 border-white px-3 py-1 text-white font-semibold ">
//         READ MORE
//       </button>
//     </div>
//   </div>
// </div>
// </div>
