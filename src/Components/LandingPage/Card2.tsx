import React, { useEffect } from "react";
import img4 from "../../assets/LandingPage/img4.svg";

const Card2 = () => {
  const Cards1 = [
    {
      Title: "Digital experience",
      Description:
        "Deliver great experiences that have the power to inspire and engage users, create brand loyalty, and increase revenue.",
    },
    {
      Title: "Digital experience",
      Description:
        "Deliver great experiences that have the power to inspire and engage users, create brand loyalty, and increase revenue.",
    },
  ];

  const Cards2 = [
    {
        Title: "Digital experience",
        Description:
          "Deliver great experiences that have the power to inspire and engage users, create brand loyalty, and increase revenue.",
      },
      {
        Title: "Digital experience",
        Description:
          "Deliver great experiences that have the power to inspire and engage users, create brand loyalty, and increase revenue.",
      },
  ];
  useEffect(() => {
    const rowElements = [
      document.getElementById("card-row1"),
      document.getElementById("card-row2"),
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    });

    rowElements.forEach((rowElement) => {
      if (rowElement) {
        observer.observe(rowElement);
      }
    });

    return () => {
      rowElements.forEach((rowElement) => {
        if (rowElement) {
          observer.unobserve(rowElement);
        }
      });
    };
  }, []);

  return (
    <div className="bg-slate-900 w-screen font-lato">
      <div className="grid grid-flow-row py-12">
        <div className="grid py-auto text-center text-13xl text-white">
          Our moto
        </div>
        <div
          id="card-row1"
          className="w-11/12 mx-auto gap-4 rounded-lg grid grid-cols-2 py-6 opacity-0 transform translate-y-10 transition-all duration-500 delay-400"
        >
          {Cards1.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-6xs grid py-6 mx-auto place-content-center font-lato text-black"
            >
              <div className="grid grid-cols-1 gap-2 place-content-center mx-auto">
                <div className="w-full flex justify-center">
                  <img srcSet={img4} />
                </div>
                <div className="w-full flex justify-center">{card.Title}</div>
                <div className="w-7/12 text-center mx-auto flex justify-center">
                  {card.Description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          id="card-row2"
          className="w-11/12 mx-auto gap-4 rounded-lg grid grid-cols-2 py-6 opacity-0 transform translate-y-10 transition-all duration-500 delay-400"
        >
          {Cards2.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-6xs grid py-6 mx-auto place-content-center font-lato text-black"
            >
              <div className="grid grid-cols-1 gap-2 place-content-center mx-auto">
                <div className="w-full flex justify-center">
                  <img srcSet={img4} />
                </div>
                <div className="w-full flex justify-center">{card.Title}</div>
                <div className="w-7/12 text-center mx-auto flex justify-center">
                  {card.Description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
