import React from "react";
import img7 from "../../assets/Retail/img7.svg";
const Card4 = () => {
  const Cards = [
    {
      Id: "1",
      Title: "Enhanced Operational Efficiency",
      Description:
        "Our clients experience significant improvements in manufacturing processes, leading to increased productivity and efficiency.",
    },
    {
      Id: "2",
      Title: "Cost Reduction and Profitability",
      Description:
        "Strategic solutions we create & implement effectively reduce operational costs and enhance overall profitability.",
    },
    {
      Id: "3",
      Title: "Innovation in Product Development",
      Description:
        "Guidance in developing new products within limited resources, fosters innovation and competitiveness.",
    },
    {
      Id: "4",
      Title: "Supply Chain Optimization",
      Description:
        "Tailored strategies when implemented, streamline supply chain management, improve product availability and market responsiveness.",
    },
  ];
  return (
    <div className="flex flex-col justify-center font-lato  items-center bg-white max-md:px-5">
      <div className="flex flex-col items-center w-11/12 mx-auto">
        <div className="w-full gap-2 flex flex-col py-12">
          <div className="text-9xl-3 font-bold text-center w-1/3 mx-auto text-[#111827] max-md:max-w-full">
            Transformative Benefits of Engaging ZeddLabz
          </div>
          <div className="text-lg font-semibold leading-none w-5/6 mx-auto text-center text-[#374151] max-md:max-w-full">
            Realizing Tangible Gains in Your Manufacturing Operations
          </div>
        </div>
        <div className="my-12">
          <div className="flex gap-3 max-md:flex-col">
            <div className="flex gap-4 flex-col md:w-[45%] ">
              {Cards.map((card, index) => (
                <div className="flex flex-col font-bold ">
                  <div>
                    <div className="flex gap-4 self-start">
                      <div className=" w-8 h-8 text-2xl place-content-center text-center leading-none whitespace-nowrap text-[#CBB9B9] bg-[#386DBD] rounded-full">
                        {card.Id}
                      </div>
                      <div className="flex-auto my-auto text-lg leading-snug text-[#111827]">
                        {card.Title}
                      </div>
                    </div>
                    <div className="self-end ml-16 text-mini leading-6 text-[#374151] max-md:max-w-full">
                      {card.Description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col ml-5 md:w-[55%] max-md:ml-0 \">
              <img loading="lazy" srcSet={img7} className="grow w-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card4;
