import React from 'react'
import img7 from '../../assets/Energy/img7.svg'
import img8 from '../../assets/Energy/img8.svg'
import img9 from '../../assets/Energy/img9.svg'
import img10 from '../../assets/Energy/img10.svg'
const Card8 = () => {
    const Cards = [
        { Img: img7, Title: "2016", Description: "Established to drive change" },
        {
          Img: img10,
          Title: "10x",
          Description: "Client’s average return on investment",
        },
        {
          Img: img8,
          Title: "20",
          Description: "Projects succeeded with our business model",
        },
        {
          Img: img9,
          Title: "15",
          Description: "Team members working towards your profits",
        },
      ];
      return (
        <div className="flex flex-col justify-center text-center bg-slate-900 ">
          <div className="flex gap-8 py-6 flex-wrap items-center justify-center">
            {Cards.map((card, index) => (
              <div
                key={index}
                className="flex font-lato flex-col gap-3 gap items-center h-[160px] w-[237px]"
              >
                <div className="h-10 ">
                  <img loading="lazy" srcSet={card.Img} className="" />
                </div>
                <div className="text-13xl font-bold leading-none text-[#5498FE] max-md:text-4xl">
                  {card.Title}
                </div>
                <div className="self-stretch text-mini font-extrabold text-[#2D64B7] ">
                  {card.Description}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Card8