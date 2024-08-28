import React from "react";
import img1 from "../../assets/Health/img1.svg";
import img2 from "../../assets/Health/img2.svg";
import img3 from "../../assets/Health/img3.svg";
const Card2 = () => {
  const Cards = [
    {
      Img: img1,
      Title: "Accelerating innovation",
      Description:
        "We strive to be innovative in everything we do from leveraging new technologies to finding smarter ways of working.",
    },
    {
      Img: img2,
      Title: "Creating a healthier world",
      Description:
        "Together with customers and partners, we re committed to driving healthcare innovations that improve health for patients and populations everywhere.",
    },
    {
      Img: img3,
      Title: "Connected Intelligence",
      Description:
        "Advancing health and improving patient outcomes starts with intelligently connecting the right technology, insights, and stakeholders.",
    },
  ];
  return (
    <div className="flex overflow-hidden flex-col place-content-center justify-center items-end py-6 bg-slate-900 ">
      <div className="">
        <div className="flex gap-5 max-md:flex-col">
          {Cards.map((card, index) => (
            <div key={index} className=" font-Noto gap-1  place-content-center  flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div>
                <img srcSet={card.Img} className="h-96 w-96" />
              </div>
              <div className="text-9xl-3 text-[#5498FE] w-11/12 mx-auto ">{card.Title}</div>
              <div className="text-white w-11/12 mx-auto">{card.Description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
