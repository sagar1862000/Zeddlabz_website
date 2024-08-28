import React from "react";
import img2 from "../../assets/TravelAndTurisum/img2.svg";
const Card3 = () => {
  return (
    <div className="bg-white w-screen">
      <div className="flex sm:flex-col md:gap-16 md:flex-row w-[90%] mx-auto">
        <div className="flex flex-col gap-2 place-content-center md:my-auto font-lato "> 
          <div className="text-[#3941FF] sm:text-center md:text-left text-13xl px-6">An integrated tourism approch</div>
          <div className="px-6">
            <p>
              We're a rare breed: tourism consultants around a strategy,
              aviation, and media core. We're the only consultancy that offers a
              full spectrum of expertise, insight, and data tools in tourism
              together with branding and air connectivity. Our expertise in
              understanding airlines, data, consumer behavior, and strategy is
              fundamental to our effectiveness in tourism consulting. We bring
              key technical specialist areas together to offer integrated and
              sustainable tourism advice, for both the private and public
              sectors.
            </p>
          </div>
        </div>
        <div className="text-center">
          <img srcSet={img2} className="md:h-[420px] md:w-[420px] sm:h-[330px] sm:w-[330px] " />
        </div>
      </div>
    </div>
  );
};

export default Card3;
