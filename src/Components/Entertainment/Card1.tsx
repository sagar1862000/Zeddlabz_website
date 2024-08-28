import React from "react";
import EntertainmentVideo from "../../assets/media and entertainment.mp4";
const Card1 = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 relative">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg shadow-lg h-full w-full object-cover"
      >
        <source src={EntertainmentVideo} type="video/mp4" />
      </video>
      <h1 className="absolute text-white text-24xl sm:w-1/2 md:w-1/3 font-semibold text-center">
        Digital Diversion Your Media & IT Experts
      </h1>
    </div>
  );
};

export default Card1;
