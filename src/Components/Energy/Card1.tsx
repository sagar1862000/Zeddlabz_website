import React from "react";
import img1 from "../../assets/Energy/img1.svg";
const Card1 = () => {
  return (
    <div
      className="bg-cover bg-center place-content-center h-[500px]"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* <div className="relative place-content-center  text-white p-6 grid md:h-[500px] ">
        <h1 className="text-xl font-bold text-center flex-col items-center justify-self-center justify-center w-3/4 md:text-31xl ">
          Zedd Labz here with Expert Energy Solutions
        </h1>
      </div> */}
    </div>
  );
};

export default Card1;
