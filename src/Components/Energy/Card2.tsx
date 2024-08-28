import React from "react";
import img11 from "../../assets/Energy/img11.svg";
import img12 from "../../assets/Energy/img12.svg";
import img13 from "../../assets/Energy/img13.svg";
import img14 from "../../assets/Energy/img14.svg";
import img15 from "../../assets/Energy/img15.svg";
const Card2 = () => {
  const Cards = [
    {
      img: img12,
      description: "Developers get their projects right the first time",
    },
    {
      img: img13,
      description:
        "EPC Contractors to optimize the projects by means of value engineering to save costs",
    },
    {
      img: img14,
      description:
        "Owners of existing projects improve the yield from under-performing assets",
    },
    {
      img: img15,
      description:
        "Those funding, selling or buying projects by delivering rigorous due diligence",
    },
  ];
  return (
    <div
      className="w-screen h-[550px] flex items-center"
      style={{
        backgroundImage: `url(${img11})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[85%] mx-auto  gap-2 grid grid-cols-2">
        {Cards.map((card, index) => (
          <div key={index} className="px-6 flex flex-col gap-2 text-white font-Poppins ">
            <div className="">
              <img className="" src={card.img} />
            </div>
            <div className="">
              <p className="font-semibold text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
