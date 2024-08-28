import React from "react";

const Card9 = () => {
  return (
    <div className="flex overflow-hidden flex-col py-10 bg-white font-lato ">
      <div className="flex sm:flex-col w-[90%] mx-auto  md:flex-row items-center max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col sm:gap-0 md:gap-3 sm:mb-4  max-w-full  mx-6">
          <div className="sm:text-13xl md:text-24xl font-bold w-[85%] self-center leading-[45px] sm:text-center md:text-left text-gray-900 ">
            Let ZeddLabz Boost Your Business
          </div>
          <div className="self-center sm:text-center md:text-left text-lg leading-7 w-[85%]  text-[#4B5563] max-md:mt-10">
            Contact Us for Expert Consultation Let us Implement Your Growth
            Booster Plan!
          </div>
        </div>
        <div className="flex flex-col self-center gap-8 px-8 py-7 max-w-full text-gray-300 rounded-xl bg-indigo-950 shadow-[8px_10px_4px_rgba(0,0,0,0.25)] w-[608px] max-md:px-5">
          <div className="self-start w-[90%] mx-auto text-2xl font-semibold leading-none text-white">
            Reach Out Today!
          </div>
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex gap-4  w-[90%] flex-col mx-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 items-start gap-2 basis-0 w-full max-md:pr-5">
                <div className="self-start text-xs text-white">
                  Company Name*
                </div>
                <input
                  type="text"
                  className="w-full h-11 text-lg leading-loose text-black px-3 rounded-lg  bg-white"
                />
              </div>
              <div className="flex flex-col w-full gap-2  grow shrink-0 items-start basis-0  rounded-lg  max-md:pr-5">
                <div className="self-start text-xs text-white">
                  Mobile Number*
                </div>
                <input
                  type="text"
                  className="w-full h-11  text-lg leading-loose border-solid  rounded-lg  text-black px-3 bg-white"
                  defaultValue="+91 "
                  onFocus={(e) => {
                    e.target.setSelectionRange(
                      e.target.value.length,
                      e.target.value.length
                    );
                  }}
                />
              </div>

              <div className="flex flex-col gap-2  grow shrink-0 items-start basis-0 w-full max-md:pr-5">
                <div className="self-start text-xs text-white">Work Mail*</div>
                <input
                  type="text"
                  className="w-full h-11  text-lg leading-loose border-solid rounded-lg  text-black px-3 bg-white"
                />
              </div>

              <div className="self-center bg-[#5498FE] px-5 py-3 text-mini  font-normal tracking-widest font-Poppins leading-none text-center text-white uppercase whitespace-nowrap rounded-3xl max-md:px-5 cursor-pointer">
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card9;
