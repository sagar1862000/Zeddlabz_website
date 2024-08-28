import React from "react";
import img8 from "../../assets/AutoMotive/img8.svg";
import img9 from "../../assets/AutoMotive/img9.svg";
import img10 from "../../assets/AutoMotive/img10.svg";
import img11 from "../../assets/AutoMotive/img11.svg";
import img12 from "../../assets/AutoMotive/img12.svg";
import img13 from "../../assets/AutoMotive/img13.svg";
import img14 from "../../assets/AutoMotive/img14.svg";
import img15 from "../../assets/AutoMotive/img15.svg";
import img16 from "../../assets/AutoMotive/img16.svg";
import img17 from "../../assets/AutoMotive/img17.png";
const Card8 = () => {
  const Cards = [
    {
      img: img8,
      imgText: "This Week in Leadership",
      title: "Wanted (Maybe): Laid-Off Techies",
      discription:
        "Non-tech companies want to hire recently laid-off tech workers, but culture and pay issues could stand in…",
    },
    {
      img: img9,
      imgText: "People, Planet & Profit",
      title: "2 steps to start your ESG initiative",
      discription:
        "Senior Principal Kurt Groeninger talks about creating the foundation for your ESG strategy by setting up the right…",
    },
    {
      img: img10,
      imgText: "People, Planet & Profit",
      title: "Why focus on ESG & Sustainability now?",
      discription:
        "Senior Client Partner Don Lowman talks about why stakeholders are pushing for more ESG efforts in their…",
    },
    {
      img: img11,
      imgText: "People, Planet & Profit",
      title: "The benefits of solid ESG programs",
      discription:
        "Senior Client Partner Cheryl D'Cruz- Young talks ESG and Sustainability and its impact on talent and diversity…",
    },
    {
      img: img12,
      imgText: "This Week in Leadership",
      title: "Making Federal Leaders Future Ready",
      discription:
        "In the next two years, we will see more change than we have in the last ten.",
    },
    {
      img: img13,
      imgText: "This Week in Leadership",
      title: "The New Vaccine Rollout: Will It Work?",
      discription:
        "Our look—from a supply chain perspective—at President Biden's “unprecedented” vaccination plan.",
    },
    {
      img: img14,
      imgText: "This Week in Leadership",
      title: "The Inauguration Ends. The Onboarding Begins.",
      discription:
        "How the thousands of new US officials who are starting their jobs now have the same mission as their corporate…",
    },
    {
      img: img15,
      imgText: "This Week in Leadership",
      title: "The Coronavirus Crisis: Are Leaders Ready?",
      discription:
        "The outbreak has spread so fast. Do leaders have enough supply-chain contingencies for a global epidemic?",
    },
  ];
  return (
    <div
      className="bg-cover bg-center font-lato py-4"
      style={{ backgroundImage: `url(${img17})` }}
    >
      <div className="w-[90%] mx-auto flex flex-col gap-3">
        <div className="text-white text-center text-24xl font-bold">
          Insights
        </div>
        <div className="grid gap-[16px] mr-2 sm:grid-cols-2 md:grid-cols-4">
          {Cards.map((card, index) => (
            <div key={index} className="gap-3 my-3 flex flex-col bg-white ">
              <div className="relative w-full">
                <img srcSet={card.img} className="w-full" />
                <div className="absolute bottom-0 left-0 bg-white right-0 flex items-center justify-center text-[#0A4FB6] w-[80%]">
                  {card.imgText}
                </div>
              </div>

              <div className="text-black text-xl font-semibold px-3">
                {card.title}
              </div>
              <div className="text-black text-mini my-3 font-normal px-3">
                {card.discription}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card8;
