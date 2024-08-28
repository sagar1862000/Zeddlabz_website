import React from "react";

export const Card7 = () => {
  return (
    <div className="bg-slate-900 font-lato py-8 flex justify-center items-center ">
      <div className="flex flex-col py-12 sm:w-screen md:w-3/4 mx-auto bg-white rounded-lg max-md:max-w-full ">
        <div className="w-full text-9xl-3 leading-none text-center font-semibold text-black max-md:max-w-full">
          Our Technology & Digital Capabilities
        </div>
        <div className="pb-3 flex flex-col mt-4 w-full text-black max-md:max-w-full">
          <div className="flex flex-col justify-center items-center py-1 w-full text-3xl leading-none max-md:max-w-full">
            <div className="py-2 max-w-full text-2xl ">
              Advanced Analytics
            </div>
          </div>
          <div className=" text-mini max-md:max-w-full px-24">
            Data is no longer nice to have - it's essential for doing business.
            We help you harness its power with strategy, capability building,
            and analytics use case delivery to make better, faster decisions.
            <br />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 w-full text-black max-md:max-w-full">
          <div className="py-2 max-w-full text-3xl leading-none text-2xl ">
            Enterprise Technology
          </div>
          <div className=" text-mini  max-md:max-w-full px-24">
            Whatever your digital ambition, an optimized technology
            infrastructure is table stakes. We help you modernize your tech
            strategy architecture, and systems to support your business goals.
          </div>
        </div>
      </div>
    </div>
  );
};
