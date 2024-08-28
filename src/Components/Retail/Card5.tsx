import React from "react";
import img8 from "../../assets/Retail/img8.svg";
import img9 from "../../assets/Retail/img9.svg";
import img10 from "../../assets/Retail/img10.svg";
import img11 from "../../assets/Retail/img11.svg";
import img12 from "../../assets/Retail/img12.svg";
import img13 from "../../assets/Retail/img13.svg";
const Card5 = () => {
  const card = [
    {
      img: img8,
      title: "Auto and Auto Ancillary",
      description:
        "On the manufacturing side, the auto and auto ancillary industry is highly sensitive to market demand and supply. Manufacturing is market- driven.",
    },
    {
      img: img9,
      title: "Pharmaceutical Manufacturing",
      description:
        "Today, pharmaceutical companies are steadily seeing falling profits and rising costs. The root of the problem can often be traced back to a number of varied reasons.",
    },
    {
      img: img10,
      title: "Textiles",
      description:
        "Textile manufacturing plants are highly sensitive to demand/supply currents. Production tends to take place in large batches through capital- intensive machinery.",
    },
    {
      img: img11,
      title: "Engineering",
      description:
        "With rapidly developing technology and infrastructure, there is a boom in the need for engineering companies capable of efficiently delivering projects.",
    },
    {
      img: img12,
      title: "Equipment Manufacturing",
      description:
        "Equipment management companies have a trend of showing sales growth without concurrent profit growth.",
    },
    {
      img: img13,
      title: "Consumer Goods and Retail",
      description:
        "On the Operation and Supply Chain side, consumer and retail goods have a low customer tolerance time. Further, they are greatly impacted by seasonality.",
    },
  ];
  return (
    <div className="flex flex-col  bg-slate-900 font-lato">
      <div className="flex flex-col gap-4 justify-center items-start py-10 w-full max-md:max-w-full">
        <div className="flex flex-col grow shrink items-center px-3.5 mx-auto text-center ">
          <div className="flex flex-col items-center mx-auto max-w-full">
            <div className="text-12xl-3 sm:1/2 md:w-[45%] px-6 py-3 font-bold leading-10 text-[#5498FE] max-md:max-w-full">
              Expertise of Zeddlabz Across Key Industries
            </div>
            <div className="mt-2 text-xl leading-7 w-2/3 text-white max-md:max-w-full">
              We implement strategies to meet the unique needs & challenges of
              various industries, driving growth and innovation in each
              specialized field
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {card.map((item, index) => (
            <div key={index} className="flex flex-col sm:w-1/2 md:w-1/3 p-10">
              <img
                loading="lazy"
                srcSet={item.img}
                className="object-contain max-w-full rounded-lg "
              />
              <div className="mt-4 text-xl font-semibold text-[#5498FE]">
                {item.title}
              </div>
              <div className="mt-4 text-lg text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card5;
