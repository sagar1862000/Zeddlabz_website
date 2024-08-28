import img7 from "../../assets/img7.svg";
const Card6 = () => {
  return (
    <div className="flex justify-center items-center bg-slate-900 font-lato ">
      <div className="self-stretchmy-auto max-md:max-w-full">
        <div className="flex gap-3 w-11/12 max-md:flex-col mx-auto ">
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={img7}
              className="object-contain grow w-full aspect-[1.29] rounded-[32px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pr-16 pl-16 w-full max-w-[760px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap w-full max-md:max-w-full">
                  <div className="flex flex-col grow shrink px-3">
                    <div className="flex flex-col font-lato w-full max-md:max-w-full">
                      <div className="flex flex-col items-start w-full text-lg font-extrabold leading-none text-center max-md:max-w-full">
                        <div className="flex flex-col max-w-full">
                          <div className="max-md:px-5 text-[#2CB9FF]">
                            Customer Support
                          </div>
                        </div>
                      </div>
                      <div className="w-full text-24xl font-bold leading-11 font-lato tracking-tighter ">
                        Adobe Experience Cloud migration: Web development and
                        A/B testing.
                      </div>
                      <div className="mt-6 w-full text-mini  max-md:max-w-full">
                        ZeddLabz experts helped the Microsoft 365 team migrate
                        to Adobe Experience Cloud. Find out how we helped
                        deliver tailored functionality, speedier modifications,
                        and first-class customer experiences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg font-lato my-12 py-8 sm:w-screen md:w-3/5 mx-auto">
          <div className="flex flex-col font-lato  w-full text-black max-md:max-w-full">
            <div className="flex flex-col pb-4 justify-center items-center  w-full text-3xl leading-none max-md:max-w-full">
              <div className="px-0.5  max-w-full font-semibold text-2xl ">
                We believe in defining the future
              </div>
            </div>
            <div className=" text-mini text-center max-md:max-w-full font-normal px-24">
              With this insurgent mindset, we help companies at every step of
              their digital transformation journeys, from building and scaling
              cutting-edge technology solutions to transforming legacy IT
              infrastructure into digital platforms.
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
