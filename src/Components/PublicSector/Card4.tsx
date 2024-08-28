import React from "react";
import img11 from "../../assets/PublicSector/img11.png";
import img12 from "../../assets/PublicSector/img12.svg";
import img13 from "../../assets/PublicSector/img13.svg";
import img14 from "../../assets/PublicSector/img14.svg";
import img15 from "../../assets/PublicSector/img15.svg";
const Card4 = () => {
  const Cards = [
    {
      img: img12,
      PhotoDescription: "This Week in Leadership",
      Title: "Wanted (Maybe): Laid-OffTechies",
      Description:
        "Non-tech companies want to hirerecently laid-off tech workers, but culture and pay issues could stand in…",
    },
    {
      img: img13,
      PhotoDescription: "People, Planet & Profit",
      Title: "2 steps to start your ESG initiative",
      Description:
        "Senior Principal Kurt Groeninger talks about creating the foundation for your ESG strategy by setting up the right…",
    },
    {
      img: img14,
      PhotoDescription: "People, Planet & Profit",
      Title: "Why focus on ESG & Sustainability now?",
      Description:
        "Non-tech companies want to hirerecently laid-off tech workers, but culture and pay issues could stand in…",
    },
    {
      img: img15,
      PhotoDescription: "People, Planet & Profit",
      Title: "The benefits of solid ESG programs",
      Description:
        "Non-tech companies want to hirerecently laid-off tech workers, but culture and pay issues could stand in…",
    },
    {
      img: img12,
      PhotoDescription: "This Week in Leadership",
      Title: "Making Federal Leaders Future Ready",
      Description:
        "In the next two years, we will see more change than we have in the last ten.",
    },
    {
      img: img13,
      PhotoDescription: "This Week in Leadership",
      Title: "The New Vaccine Rollout: Will It Work?",
      Description:
        "Our look—from a supply chain perspective—at President Biden “unprecedented” vaccination plan.",
    },
    {
      img: img14,
      PhotoDescription: "This Week in Leadership",
      Title: "The Inauguration Ends. The Onboarding Begins.",
      Description:
        "How the thousands of new US officials who are starting their jobs now have the same mission as their corporate…",
    },
    {
      img: img15,
      PhotoDescription: "This Week in Leadership",
      Title: "The Coronavirus Crisis: Are Leaders Ready?",
      Description:
        "NThe outbreak has spread so fast. Do leaders have enough supply-chain contingencies for a global epidemic?",
    },
    {
      img: img15,
      PhotoDescription: "This Week in Leadership",
      Title: "The Coronavirus Crisis: Are Leaders Ready?",
      Description:
        "NThe outbreak has spread so fast. Do leaders have enough supply-chain contingencies for a global epidemic?",
    },
    
  ];
  return (
    <div
      className=""
      style={{ backgroundImage: `url(${img11})`, backgroundSize: "cover" }}
    >
      <div className="w-11/12 mx-auto gap-6 rounded-lg grid grid-cols-2 md:grid-cols-3 py-6">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-6xs grid mx-auto place-content-center font-lato text-black"
          >
            <div className="grid grid-col gap-2 place-content-center mx-auto">
              <div className="flex justify-center w-full">
                <img srcSet={card.img} className=""  />
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
  );
};

export default Card4;
