import React, { useEffect, useState } from "react";
import img18 from "../../assets/TravelAndTurisum/img18.svg";
import img19 from "../../assets/TravelAndTurisum/img19.svg";
import img20 from "../../assets/TravelAndTurisum/img20.svg";
import img21 from "../../assets/TravelAndTurisum/img21.svg";
const Card6 = () => {
  const Cards = [
    {
      img: img18,
      title: "Ultimate flexibility",
      discription: "You’re in control, with free cancellation and payment.",
    },
    {
      img: img19,
      title: "Memorable experiences",
      discription: "Browse and book tours and activities so incredible.",
    },
    {
      img: img20,
      title: "Quality at our core",
      discription: "High quality standards. Millions of reviews.",
    },
    // {img:img19, title:'Memorable experiences',discription:'Browse and book tours and activities so incredible.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
    // {img:img20, title:'Quality at our core',discription:'High quality standards. Millions of reviews.'},
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Cards.length);
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-slate-900 w-screen">
      <div className="w-[90%] mx-auto flex flex:row py-16 ">
        <div className="h-[400px] w-[400px] ">
          <img srcSet={img21} className=" h-full w-full rounded-[24px] " />
        </div>
        <div
          // style={{ transform: `translateX(-${currentIndex * 230}px)` }}
          className="transition-transform duration-500 ease-in-out z-10 flex h-[240px] gap-3  items-center justify-center my-auto place-content-center flex-row text-white ml-[-12%]"
        >
          {Cards.map((card, index) => (
            <div
              key={index}
              className="flex font-inter h-full w-[230px] flex-col items-left pl-6 py-3 text-left gap-2 place-content-center bg-white rounded-[24px] text-black"
            >
              <div>
                <img srcSet={card.img} />
              </div>
              <div className="font-bold">{card.title}</div>
              <div className="text-sm">{card.discription}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card6;
