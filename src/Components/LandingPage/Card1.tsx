import React from "react";
import lendingVideo from "../../assets/lendingVideo.mp4";
import "./style.css";
const Card1 = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg shadow-lg h-full w-full object-cover"
      >
        <source src={lendingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="gap-4 absolute text-center   text-white inset-0 grid place-content-center justify-self-center justify-center items-center sm:w-[90%] md:w-[75%]">
        <h1 className="animate-heading  w-full text-35xl font-extrabold ">
          <span className="span-1">Skyrocket</span> &nbsp;
          <span className="span-2">your B2B</span> &nbsp;
          <br/>
          <span className="span-3">Business</span> &nbsp;
        </h1>
        <p className="span-4  text-13xl font-bold ">with our Ready-made Business Packages</p>
      </div>
    </div>
  );
};

export default Card1;
