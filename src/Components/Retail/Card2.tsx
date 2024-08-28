import React from "react";
import img2 from "../../assets/Retail/img2.svg";
import img3 from "../../assets/Retail/img3.svg";
import img4 from "../../assets/Retail/img4.svg";
import img5 from "../../assets/Retail/img5.svg";
const Card2 = () => {
  const Cards = [
    { Img: img2, Title: "2016", Description: "Established to drive change" },
    {
      Img: img3,
      Title: "10x",
      Description: "Client’s average return on investment",
    },
    {
      Img: img4,
      Title: "20",
      Description: "Projects succeeded with our business model",
    },
    {
      Img: img5,
      Title: "15",
      Description: "Team members working towards your profits",
    },
  ];
  return (
    <div className="flex flex-col justify-center text-center bg-white ">
      <div className="flex gap-8 py-6 flex-wrap items-center justify-center">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="flex font-lato flex-col gap-3 gap items-center h-[160px] w-[237px]"
          >
            <div className="h-10 ">
              <img loading="lazy" srcSet={card.Img} className="" />
            </div>
            <div className="text-13xl font-bold leading-none text-slate-900 max-md:text-4xl">
              {card.Title}
            </div>
            <div className="self-stretch text-mini font-extrabold text-blue-800">
              {card.Description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
