import React from 'react'
import img2 from "../../assets/PublicSector/img2.svg";
import img3 from "../../assets/PublicSector/img3.svg";
import img4 from "../../assets/PublicSector/img4.svg";
import img5 from "../../assets/PublicSector/img5.svg";
import img6 from "../../assets/PublicSector/img6.svg";
import img7 from "../../assets/PublicSector/img7.svg";
import img8 from "../../assets/PublicSector/img8.svg";
import img9 from "../../assets/PublicSector/img9.svg";

const Card4 = () => {
  const Cards = [
    {
      Img: img2,
      Title: "Organization Strategy",
      Description:
        "Build end-to-end strategic solutions that align your structure, people and business processes and workflows.",
    },
    {
      Img: img3,
      Title: "Assessment & Succession",
      Description:
        "Identify the talent you need compared to the talent you have and discover how to close the gaps.",
    },
    {
      Img: img4,
      Title: "Talent Acquisition",
      Description:
        "Attract and retain the right people at every level of your organization by leveraging our scientific research and practical experience.",
    },
    {
      Img: img5,
      Title: "Leadership & Professional Development",
      Description:
        "Unlock the potential of everyone in your organization, from executives to new hires, to thrive in today’s challenging business environment via targeted learning programs.",
    },
    {
      Img: img6,
      Title: "Total Rewards",
      Description:
        "Create flexible, competitive total rewards strategies that attract, engage and motivate a diverse workforce.",
    },
    {
      Img: img7,
      Title: "Business Transformation",
      Description:
        "Build the mindset, skills, structure and culture to transform your organization.",
    },
    {
      Img: img8,
      Title: "Intelligence Cloud",
      Description:
        "Our AI platform pulls together market intelligence and data to provide insights and recommend actions.",
    },
    {
      Img: img9,
      Title: "Board & CEO Services",
      Description:
        "There is no more powerful combination - or one more fundamental to the success of any enterprise - than the partnership between a CEO and the board.",
    },
  ];
  return (
    <div className="flex flex-col items-center bg-slate-900 text-center text-white w-screen">
    <div className="flex flex-col w-5/6 gap-12 font-lato place-content-center text-center justify-center ">
      <div className="flex gap-4 flex-col ">
        <div className=" text-center place-content-cente py-3 font-normal leading-none">
          <div className="w-full text-center text-9xl-3">What we do</div>
        </div>
        <div className="flex flex-col pb-4 w-full text-lg font-light leading-7">
          <div className="px-5 w-full max-md:max-w-full">
            We work across the range of public service systems, bringing
            together public, not-for- profit and commercial partners to solve
            the biggest challenges in our society.
          </div>
          <div className="px-px mt-6 w-full max-md:max-w-full">
            Our public service consultants can help you attract, develop and
            retain best-in-class talent for your organization. Adjusting to
            constant disruptions requires an agile pipeline of leadership
            talent prepared to weather the storm. We work with you to assess
            the full spectrum of your talent-related needs. We help your
            leaders to be even more effective. And we support culture
            transformation to improve services at a national and local level.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col w-[180px] pb-12 border-4 border-[#606967]"
          >
            <div className="flex flex-col w-full ">
              <div className="flex flex-col items-start pb-2">
                <img
                  loading="lazy"
                  srcSet={card.Img}
                  className="object-contain aspect-[1.12] w-[45px]"
                />
              </div>
              <div className="mt-6 text-lg leading-loose text-white">
                {card.Title}
              </div>
              <div className="mt-8 text-base leading-6 text-white">
                {card.Description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Card4