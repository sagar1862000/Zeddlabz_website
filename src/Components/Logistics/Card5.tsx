import React from "react";
import img7 from "../../assets/Logistics/Img7.svg";
import img1 from "../../assets/Logistics/img1.svg";
import img2 from "../../assets/Logistics/img2.svg";
import img3 from "../../assets/Logistics/img3.svg";
import img4 from "../../assets/Logistics/img4.svg";
import img5 from "../../assets/Logistics/img5.svg";
import img6 from "../../assets/Logistics/img6.svg";
import card from "@material-tailwind/react/theme/components/card";
const Card5 = () => {
  const Cards = [
    { img: img1, title: "Safe Package" },
    { img: img2, title: "Ship Everyware" },
    { img: img3, title: "Global Tracking" },
    { img: img4, title: "24/7 Support" },
    { img: img5, title: "In Time Delivery" },
    { img: img6, title: "Transparant Pricing" },
  ];
  return (
    <div className="w-screen bg-white">
      <div className="w-full flex sm:flex-col md:flex-row">
        <div className="w-full bg-[#091242] flex place-content-center ">
          <div className="items-center flex place-content-center">
            <img srcSet={img7} className="mr-[-150px] h-[500px] w-[600px]" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col px-24 py-24 gap-4">
            <div className="font-Rubik border-gradient text-[#1C1F35] w-fit px-4 font-semibold bg-[#E8E8E880] ">
              Why Choose
            </div>
            <div className="text-13xl font-lato text-[#1C1F35]">
              We create opportunity to reach potential
            </div>
            <div className="font-lato text-[#666C89]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </div>
            <div className="grid font-Rubik grid-cols-2">
              {Cards.map((card, index) => (
                <div
                  key={index}
                  className="flex  my-2 mx-2  gap-2 flex-row"
                >
                  <div className="bg-gradient-to-r from-[#29FFE5] to-[#5AA5EB] rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
                    <img
                      srcSet={card.img}
                      className="object-center w-[50%] h-[50%]"
                    />
                  </div>
                  <div className="flex h-12 justify-center items-center">
                    <p className="text-center flex  pt-3 items-center text-[#1C1F35] font-[480px] text-lg ">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
