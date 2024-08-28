import React from "react";
import ZeddlabzIcon from "../../assets/ZEDDLABZ.svg";
import FacebookIcon from "../../assets/ic Facebook.svg";
import InstagramIcon from "../../assets/Frame.svg";
import LinkedInIcon from "../../assets/ic Linkedin.svg";
import TwitterIcon from "../../assets/ic Twitter.svg";

const Footer = () => {
  const columns = [
    "Company",
    "Updates",
    "Career",
    "Capabilities",
    "Prodcts",
    "Contact us",
  ];

  return (
    <footer className="text-white py-4 bg-[#060F22]">
      <div className="flex justify-between mx-auto w-screen px-4 md:px-24">
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ZeddlabzIcon}
              alt="ZeddLabz"
              className="w-[162px] h-[56px]"
            />
          </a>
        </div>
        <div>
          <div className="flex gap-2">
            {/* Facebook icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[45.74px] h-[45.74px] border-[1.96px] border-white rounded-full flex justify-center items-center">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[9.11px] h-[15.84px]"
                />
              </div>
            </a>
            {/* Instagram icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[45.74px] h-[45.74px] border-[1.96px] border-white rounded-full flex justify-center items-center">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[18.3px] h-[18.3px]"
                />
              </div>
            </a>
            {/* LinkedIn icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[45.74px] h-[45.74px] border-[1.96px] border-white rounded-full flex justify-center items-center">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="w-[15.51px] h-[15.51px]"
                />
              </div>
            </a>
            {/* Twitter icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[45.74px] h-[45.74px] border-[1.96px] border-white rounded-full flex justify-center items-center">
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="w-[16.06px] h-[16.06px]"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 font-lato">
      <div className="grid sm:grid-cols-2 sm:text-center md:text-left  md:grid-cols-6 md:!text-left gap-6">
          {Array(12)
            .fill(null)
            .map((_, idx) => (
              <div key={idx}>
                <h5 className="text-[#5498FE] font-lato font-medium text-9xl-3 mb-3 mt-8">
                  {columns[0]}
                </h5>
                {columns.slice(1).map((text, subIdx) => (
                  <p
                    key={subIdx}
                    className="text-white py-1 font-lato text-xl leading-6 mb-1"
                  >
                    <a
                      href="#"
                      className="no-underline font-lato hover:underline text-white"
                    >
                      {text}
                    </a>
                  </p>
                ))}
              </div>
            ))}
        </div>
        <hr className="border-t border-gray-500 mt-8" />
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p className="text-sm">All rights reserved @2023, ZEDDLABZ</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              <a href="#" className="text-white no-underline hover:underline">
                Terms & conditions
              </a>
              |
              <a href="#" className="text-white no-underline hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;