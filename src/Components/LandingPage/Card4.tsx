import React from "react";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";

const Card4 = () => {
  return (
    <div
      className=' w-full relative bg-white flex flex-row items-start justify-start pt-[99px] sm:px-[20px] md:px-[62px] pb-[61.4px] box-border leading-[normal] tracking-[normal] text-left text-mini text-black font-lato mq450:pl-5 mq450:pr-5 mq450:box-border'
    >
      <img
        className="h-full w-full !m-[0] absolute right-[0px] bottom-[-4.3px] left-[0px] max-w-full overflow-hidden object-cover"
        alt=""
        src={img3}
      />
      <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(36.5px)] px-6 rounded-xl sm:w-[98%] md:w-11/12 mx-auto  py-8 bg-white bg-opacity-50 backdrop-blur-lg flex-col box-border gap-2  z-[1]">
        <div className="w-[132px] flex flex-row items-start justify-start py-0 px-px box-border">
          <div className="flex-1 relative tracking-[2.1px] leading-[24px] uppercase font-semibold">
            Who we are
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-8 pl-px pr-0 box-border max-w-full text-5xl text-mediumslateblue">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className=" py-3 w-4/6 text-9xl-3 font-bold ">
              <p className="font-lato">
                We build greater futures through innovation and collective
                knowledge.
              </p>
            </div>
            <div className="self-stretch relative text-mini tracking-[1px] leading-[32px] my-1 w-3/4  font-semibold text-gray-500 ">
              <p className="">
                ZeddLabz is an IT services, consulting and business solutions
                organization that has been partnering with many of the world's
                largest businesses in their transformation journeys for over 9 years.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[12.7px] text-mid-4">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[0.5px] leading-[32px]">
              Get to know us
            </div>
          </div>
          <img className="h-10 w-10 relative rounded-21xl" alt="" src={img5} />
        </div>
      </div>
    </div>
  );
};

export default Card4;
