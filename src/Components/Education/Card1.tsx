import React from "react";
import img1 from "../../assets/Education/img1.png";
const Card1 = () => {
  return (
    <div
      className="bg-cover bg-center place-content-center h-[440px]"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="relative place-content-center  text-white p-6 grid md:h-[500px] ">
        <h1 className="text-xl font-bold text-center flex-col items-center justify-self-center justify-center w-3/4 md:text-31xl ">
          Innovating Education Through Technology
        </h1>
      </div>
    </div>
  );
};

export default Card1;
