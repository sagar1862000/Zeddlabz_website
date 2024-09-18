import React from "react";
import img1 from "../../assets/Retail/img1.png";
import img2 from "../../assets/Retail/img2.svg";
import img3 from "../../assets/Retail/img3.svg";
import img4 from "../../assets/Retail/img4.svg";
import img5 from "../../assets/Retail/img5.svg";
import img6 from "../../assets/Retail/img6.svg";
import img7 from "../../assets/Retail/img7.svg";
// import img8 from '../../assets/Retail/img8.svg';
import './style.css'
const Card1 = () => {
  return (
    <div className="relative overflow-x-hidden w-full">
      <img srcSet={img1} className="w-screen" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <p className="md:text-24xl sm:text-5xl my-[1px] font-semibold animate-slide-in animate-slide-in-1">
          Redefine Success with
        </p>
        <p className="md:text-24xl sm:text-5xl  my-[1px] font-semibold animate-slide-in animate-slide-in-2">
          Retail Consulting Firms
        </p>
        <p className="md:text-24xl sm:text-5xl  my-[1px] font-semibold animate-slide-in animate-slide-in-3">
          Focused on Your
        </p>
        <p className="md:text-24xl sm:text-5xl  my-[1px] font-semibold animate-slide-in animate-slide-in-4">Vision</p>
      </div>
    </div>
  );
};

export default Card1;
