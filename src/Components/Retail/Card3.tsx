import React from "react";
import img6 from "../../assets/Retail/img6.svg";

const Card3 = () => {
  const Cards = [
    {
      Title: "Inefficiencies in Manufacturing Operations",
      Discription:
        "Operational inefficiencies can lead to escalated production costs and reduced competitiveness.",
    },
    {
      Title: "Supply Chain Disruptions",
      Discription:
        "Disruptions in supply chain can cause significant production delays and lost revenue.",
    },
    {
      Title: "Cost Management in Production",
      Discription:
        "Poor cost management often results in diminished profit margins and financial instability.",
    },
    {
      Title: "New Product Development Challenges",
      Discription:
        "Challenges in product development can delay market entry, giving competitors an advantage.",
    },
    {
      Title: "Quality Control Issues",
      Discription:
        "Quality issues can damage a company reputation and lead to customer loss.",
    },
    {
      Title: "Market Reach Limitations",
      Discription:
        "Limited market reach restricts business growth and potential revenue streams.",
    },
  ];
  return (
    <div className="flex flex-col bg-slate-900 font-lato py-12 ">
      <div className="w-11/12 mx-auto">
        <div className="w-3/4 mx-auto">
          <div className="self-center text-13xl font-bold leading-none text-center text-white max-md:max-w-full">
            Navigating Business Challenges
          </div>
          <div className="self-center w-3/5 mx-auto mt-2 text-2xl font-bold leading-7 text-center text-blue-400">
            ZeddLabz Ensures Identifying and Overcoming Your Operational Hurdles
          </div>
        </div>
        <div className="mt-12 w-full">
          <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-2">
            {Cards.map((card, index) => (
              <div className="flex overflow-hidden flex-col mx-auto w-full bg-white rounded-lg border-b border-white shadow-lg ">
                <div className="flex gap-4 self-start text-xl font-semibold leading-snug text-gray-900">
                  <img
                    loading="lazy"
                    srcSet={img6}
                    className="object-contain shrink-0 w-10 h-full aspect-square"
                  />
                  <div className="flex-auto my-auto">{card.Title}</div>
                </div>
                <div className="self-end mt-2 pl-16 text-lg leading-7 text-black font-hairline max-md:max-w-full">
                  {card.Discription}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
