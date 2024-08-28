import React from "react";
import img9 from "../../assets/Insurance/img9.svg";
import img10 from "../../assets/Insurance/img10.svg";
import img11 from "../../assets/Insurance/img11.svg";
const Card10 = () => {
  const cards = [
    {
      img: img9,
      date: "17 July 2024",
      title: "INSURANCE",
      discription:
        "Our 2023 Global Insurance Survey captures responses from 13,750 consumers across 14 individual markets and 15 demographic groups. These survey findings inform insights and recommendations from Capco’s local insurance experts on the key roles of data and personalization as insurers map their optimal path forward in an increasingly digitalized and competitive marketplace.",
    },
    {
      img: img10,
      date: "21 July 2024",
      title: "EMBRACING DATA TO IMPROVE INSURER EXPOSURE MANAGEMENT",
      discription:
        "This paper discusses the challenges insurers face in establishing a fit-for-purpose exposure management framework to make better data-driven decisions.",
    },
    {
      img: img11,
      date: "25 July 2024",
      title:
        "FUTURE HEALTH INSURANCE IN ASIA-PACIFIC: THE DIGITAL AND DATA REVOLUTION",
      discription:
        "Asia-Pacific's health insurers are adopting increasingly ambitious data-driven, digitally-enabled business models that emphasize risk prevention, as our new white paper explores with the help of two industry leaders in this space, Roche and AIA.",
    },
  ];
  return (
    <div className="flex flex-col w-screen bg-slate-900 font-lato">
      <div className="w-[50%] text-13xl my-12 mx-auto font-extrabold text-center text-white ">
        RELATED INSIGHTS
      </div>
      <div className="flex md:gap-6 sm:gap-24 sm:flex-col w-[85%] mx-auto py-4 md:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:w-1/3 sm:items-center md:items-start gap-3"
          >
            <div className=" bg-slate-300">
              <img srcSet={card.img} className="w-full " />
            </div>
            <div className="text-[#005F65] font-lato">{card.date}</div>
            <div className="text-white font-semibold font-lato">
              {card.title}
            </div>
            <div className="pr-2 text-white font-inter sm:text-center md:text-left">
              {card.discription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card10;
