import React from "react";
import img6 from "../../assets/img6.svg";
const Card5 = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-slate-900 font-lato ">
      <div className="self-stretchmy-auto max-md:max-w-full">
        <div className="flex sm:flex-col-reverse md:flex-row gap-3 w-11/12 max-md:flex-col mx-auto ">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pr-16 pl-16 w-full max-w-[760px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap w-full max-md:max-w-full">
                  <div className="flex flex-col grow shrink px-3">
                    <div className="flex flex-col font-lato w-full max-md:max-w-full">
                      <div className="w-full text-24xl font-bold font-lato tracking-tighter ">
                        Engage your digital
                        transformation.
                      </div>
                      <div className="mt-6 w-full text-mini  max-md:max-w-full">
                        The right technology partner gets you where your
                        customers expect you to
                        be.
                      </div>
                      <div className="flex flex-col items-start mt-6 w-full text-lg font-extrabold leading-none text-center max-md:max-w-full">
                        <div className="flex flex-col max-w-full">
                          <div className="px-6 py-2 rounded-6xs border-white border-solid border-[3px] max-md:px-5">
                            Connect with us today
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={img6}
              className="object-contain grow w-full aspect-[1.29] rounded-[32px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
