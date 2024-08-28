import React from "react";
import img10 from "../../assets/Entertainment/Img10.svg";
const Card6 = () => {
  return (
    <div className="bg-white w-screen">
      <div className="w-[90%] py-12 mx-auto flex md:flex-row sm:flex-col">
        <div className="md:w-[60%]">
          <div className="font-inter sm:text-center md:text-left">
            <div className="text-[#2D2D2D] text-9xl-3 font-semibold">
              Contact us
            </div>
            <div className="text-[#2D2D2D] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="flex py-6 flex-col w-full max-md:ml-0 font-inter max-md:w-full">
            <div className="flex gap-4 flex-col md:w-[80%] max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 items-start gap-2 basis-0 w-full max-md:pr-5">
                <div className="self-start text-[#2D2D2D] font-medium text-lg ">
                  Name
                </div>
                <input
                  type="text"
                  className="w-full h-11 border-[#2D2D2D] border-1  text-lg leading-loose border-solid  rounded-lg  text-black px-3 bg-white"
                />
              </div>
              <div className="flex flex-col w-full gap-2  grow shrink-0 items-start basis-0  rounded-lg  max-md:pr-5">
                <div className="self-start text-[#2D2D2D] font-medium text-lg  ">
                  Email
                </div>
                <input
                  type="text"
                  className="w-full h-11 border-[#2D2D2D] border-1  text-lg leading-loose border-solid  rounded-lg  text-black px-3 bg-white"
                />
              </div>

              <div className="flex flex-col gap-2  grow shrink-0 items-start basis-0 w-full max-md:pr-5">
                <div className="self-start text-[#2D2D2D] font-medium text-lg ">
                  Message
                </div>
                <textarea
                  rows={7}
                  className="w-full h-[120px] border-[#2D2D2D] border-1  text-lg leading-loose border-solid rounded-lg  text-black px-3 bg-white"
                />
              </div>
              <div className="flex items-center place-content-start text-[#2D2D2D]">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="form-checkbox h-5 w-5  text-blue-600"
                />
                <label className="ml-2 text-[#2D2D2D]">
                  I accept the Terms
                </label>
              </div>

              <div className="self-start bg-[#1C4CBF] px-5 py-3 text-mini  font-normal tracking-widest font-Poppins leading-none text-center text-white uppercase whitespace-nowrap rounded-[15px] max-md:px-5 cursor-pointer">
                Submit
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[40%]">
          <img srcSet={img10} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Card6;
