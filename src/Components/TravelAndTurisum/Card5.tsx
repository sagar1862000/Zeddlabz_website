import React from "react";
import img3 from "../../assets/TravelAndTurisum/img3.svg";
const Card5 = () => {
  return (
    <div className="bg-white w-screen">
      <div className="flex sm:flex-col md:gap-16 md:flex-row w-[90%] mx-auto">
        <div className="flex flex-col gap-2 place-content-center md:my-auto font-lato ">
          <div className="text-[#3941FF] sm:text-center md:text-left text-13xl px-6">
            Data, analytics, and customer behavior tools
          </div>
          <div className="px-6">
            <p>
              We use our NetWorks® planning software to model air service
              scenarios, based on algorithms used by airlines to make route
              decisions. We access in-the-moment social media data from Google
              Analytics, Forward Keys, Talkwalker, and many other sources to
              understand what customers are looking for in travel and tourism.
              We also lead virtual or in-person Spark Labs workshops to identify
              problems and design innovative solutions, and provide a suite of
              proprietary tools for risk reduction and climate resilience
              efforts.
            </p>
          </div>
        </div>
        <div className="text-center">
          <img srcSet={img3} className="md:h-[420px] md:w-[420px] sm:h-[330px] sm:w-[330px] " />
        </div>
      </div>
    </div>
  );
};

export default Card5;
