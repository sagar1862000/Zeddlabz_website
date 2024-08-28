import React, { useState } from "react";
import ZeddlabzIcon from "../../assets/ZEDDLABZ.svg";
import Personal from "./Personal";
import Business from "./Business";
import WhatWeDo from "./WhatWeDo";
import Company from "./Company";

const Navbar = () => {
  const [activeMatrix, setActiveMatrix] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility on small screens

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  const NavItem = [
    { Title: "Industries" },
    { Title: "Business" },
    { Title: "What We Do" },
    { Title: "Company" },
  ];
  const handleClick = (label: string) => {
    console.log("label : ", label);
    setActiveMatrix((prev) => (prev === label ? "" : label));
  };

  const close = () => {
    setActiveMatrix("");
  };

  return (
    <>
      <div className="absolute bg-transparent w-screen z-20 md:backdrop-blur-lg overflow-x-hidden">
        <div
          className={`flex flex-row gap-6 place-content-center justify-items-center  md:flex-row justify-between  px-3 
           md:flex`}
        >
          <div className="flex place-content-center  ">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={ZeddlabzIcon}
                alt="ZeddLabz"
                className="mx-auto brightness-150 contrast-125  "
              />
            </a>
          </div>
          <div className="flex  sm:gap-1 md:gap-24 flex-row md:flex-row">
            {NavItem.map((item) => (
              <button
                key={item.Title}
                className="text-white cursor-pointer bg-transparent font-lato font-medium text-xl leading-7"
                onClick={() => handleClick(item.Title)}
              >
                {item.Title}
              </button>
            ))}
          </div>
          <div className="flex place-content-center mt-3 mx-3">
            <button className="border-2 flex cursor-pointer text-center place-content-center bg-transparent border-white rounded-[12px] text-white font-inter font-medium text-base leading-6 w-[138px] h-[30px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {activeMatrix === "Industries" && <Personal onClose={close} />}
      {/* {activeMatrix === "Business" && <Business onClose={close} />}
      {activeMatrix === "What We Do" && <WhatWeDo onClose={close} />}
      {activeMatrix === "Company" && <Company onClose={close} />} */}
    </>
  );
};

export default Navbar;
