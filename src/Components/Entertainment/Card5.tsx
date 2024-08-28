import React from "react";
import img1 from "../../assets/Entertainment/img1.svg";
import img2 from "../../assets/Entertainment/img2.svg";
import img3 from "../../assets/Entertainment/img3.svg";
import img4 from "../../assets/Entertainment/img4.svg";
import img5 from "../../assets/Entertainment/img5.svg";
import img6 from "../../assets/Entertainment/img6.svg";
import img7 from "../../assets/Entertainment/img7.svg";
import img8 from "../../assets/Entertainment/img8.svg";
import img9 from "../../assets/Entertainment/img9.svg";
const Card5 = () => {
  const Cards = [
    {
      img: img1,
      title:
        "Zedd Labz TEAM DESIGNS AN AGILE ROADMAP AND TRAINS OVER 50 TEAM MEMBERS FOR A Project",
      discription:
        'Zedd Labz was engaged to support an Agile culture change and provide thought leadership to enable Agile business adoption. Alongside the client Enterprise Program Management Office team, we defined and documented the target state "Agile Delivery" framework.',
    },
    {
      img: img2,
      title:
        "Zedd Labz TEAM DESIGNS AN AGILE ROADMAP AND TRAINS OVER 50 TEAM MEMBERS FOR A",
      discription:
        "Zedd Labzpartnered with a leading life insurance carrier to facilitate the planning, design, and delivery of an ecosystem that will enable growth of simplified issue products.",
    },
    {
      img: img3,
      title:
        "HOW Zedd Labz STREAMLINED PROGRAM MANAGEMENT STRUCTURE FOR INSURER",
      discription:
        "An insurer sought to launch a new distribution model to enable the sale of individual annuities through third-party distribution. The client recognized the need for a consulting partner, Zedd Labz, to provide a cohesive program management structure.",
    },
    {
      img: img4,
      title:
        "HOW Zedd Labz STREAMLINED PROGRAM MANAGEMENT STRUCTURE FOR INSURER",
      discription:
        "How Zedd labz engaged with a Fortune 100 leading U.S. life insurer to improve agile health by 34%.",
    },
    {
      img: img5,
      title:
        "HOW Zedd Labz STREAMLINED PROGRAM MANAGEMENT STRUCTURE FOR INSURER",
      discription:
        "A leading mutual insurance provider, engaged Capco, to help transition over 17,000 Advisors, Field, and Home Office Staff to Advisor360, a client-centric, planning-based technology platform.",
    },
    {
      img: img6,
      title:
        "Zedd Labz INCREASED PROFITABILITY AND ENHANCED CUSTOMER EXPERIENCE FOR GLOBAL LIFE INSURER",
      discription:
        "Zedd Labz provided thought leadership to define requirements, design future state processes, and construct a structured, holistic approach to deliver a client’s profitability objectives and increase the agent and customer experience.",
    },
    {
      img: img7,
      title: "HOW Zedd Labz REDESIGNED UNDERWRITING PROCESSES FOR D2C INSURER",
      discription:
        "Zedd Labz redesigned the underwriting processes for one of the largest U.S.-based direct-to-consumer insurance companies by utilizing their signature FutureWeekSM Rapid Process Redesign methodology to design a future-state that both complemented and integrated with the new Underwriting workbench.",
    },
    {
      img: img8,
      title:
        "How Zedd Labz Designed The Enterprise Customer Experience Strategy For A Canadian Insurance Carrier",
      discription:
        "Zedd Labz and a Canadian composite insurance carrierpartnered together to redefine their business model transitioning from traditionally transactional-led advice to a holistic-led advice approach, enabled by a broader product offering and omni-channel capabilities.  ",
    },
    {
      img: img9,
      title:
        "How Zedd Labz Set Up, Mobilized And Now Runs A Global Insurer Largest Regulatory Change Program",
      discription:
        "Our client, a major international composite insurer, required a team to manage the IFRS17 program, and create a central governance model and structure enabling and supporting the delivery of the new reporting standard for 2023.  ",
    },
  ];
  return (
    <div className="bg-slate-900 py-6 w-full font-lato text-white">
      <div className="flex flex-col w-[90%] mx-auto">
        <div className="">
          <h1 className="text-13xl text-center ">SUCCESS STORIES</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3">
          {Cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col  sm:items-center md:items-start gap-3"
            >
              <div className=" bg-slate-300">
                <img srcSet={card.img} className="w-full " />
              </div>
              <div className="text-white leading-8 font-semibold font-lato">
                {card.title}
              </div>
              <div className="pr-2 text-white font-inter leading-7 sm:text-center md:text-left">
                {card.discription}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card5;
