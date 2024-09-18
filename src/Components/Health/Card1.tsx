import React from "react";
import HealthVideo from "../../assets/Health/medical.mp4";
import './style.css'
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
      <div className="gap-4 absolute text-center text-white inset-0 grid place-content-center justify-self-center justify-center items-center sm:w-[90%] md:w-[75%]">
        <h1 className="animate-heading fade-In  w-full text-31xl font-bold ">
          Connecting Modern technology to Advance health care
        </h1>
      </div>
    </div>
  );
};

export default Card1;
