import React from "react";
import HealthVideo from "../../assets/Health/medical.mp4";

const Card1 = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg shadow-lg h-full w-screen object-cover"
      >
        <source src={HealthVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Card1;
