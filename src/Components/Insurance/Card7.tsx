import React from "react";
import img7 from "../../assets/Insurance/img7.svg";
const Card7 = () => {
  return (
    <div className="w-screen py-6 bg-slate-900">
      <div className="flex text-white border-solid border-1 border-white flex-col sm:w-[90%] md:w-[85%] mx-auto">
        <div className="w-1/2 py-3 flex sm:self-center md:self-end ">
          <h3 className="mx-auto">REINSURANCE</h3>
        </div>
        <div className="flex gap-6 sm:flex-col md:flex-row w-[90%] mx-auto">
          <div className="flex flex-col gap-3 md:w-1/2 px-8 text-white font-Poppins">
            <div className="sm:text-center leading-[25px] md:text-left font-normal">
              The complexity of reinsurance creates a significant barrier to
              entry, with the need to intelligently assess the rationale and
              opportunities for risk diversification becoming extremely
              important. Meanwhile, the emergence of insurance-linked securities
              as an alternative form of reinsurance capital has placed greater
              pressure on rates. We help reinsurers handle their vast amounts of
              data, which provide analytics to support decision-making around
              technology investment and portfolio and <span className="text-2xl">risk management.</span>
            </div>
            <div className=" mb-3 sm:text-center md:text-left">
              <button className="bg-transparent  sm:text-center md:text-left border-2 border-white px-3 py-1 text-white font-semibold ">
                READ MORE
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex sm:justify-center md:justify-start">
            <img srcSet={img7} className="h-[90%] w-[90%] object-left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card7;
