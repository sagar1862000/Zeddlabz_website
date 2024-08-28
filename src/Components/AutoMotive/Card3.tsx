import React from "react";
import img18 from "../../assets/AutoMotive/img18.svg";
const Card3 = () => {
  return (
    <div
      className="w-screen h-[550px] flex items-center"
      style={{
        backgroundImage: `url(${img18})`, // Corrected syntax here
        backgroundSize: "cover", // Added background size
        backgroundPosition: "center", // Added background position
        backgroundRepeat: "no-repeat", // Added background repeat
      }}
    >
      <div className="md:w-[70%] font-inter text-white sm:px-10 md:px-20 flex flex-col gap-5">
        <div className="text-13xl font-bold">Our Areas of Expertise</div>
        <div>
          <p>
            Zedd Labz - Connected, Autonomous, Shared mobility, Electric
            vehicles, and Security - have drastically affected how the
            automotive industry operates. As the ecosystem continues to evolve,
            so have emerging technologies, services, and new mobility
            experiences impacted the industry and consumers at large.
          </p>
          <p>
            However, the potential risks of implementing the wrong strategies or
            falling behind competitors are growing each day. Our experts
            exclusively focus on Zedd Labz research and providing our clients
            with critical insights into the broader markets into which they are
            deployed. By offering expert research, strategy, technical and
            testing services, SBD Automotive provides essential value to
            automotive OEMs, suppliers, investors and governments worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
