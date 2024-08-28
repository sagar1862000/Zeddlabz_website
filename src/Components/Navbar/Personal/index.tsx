import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
interface PersonalProps {
  onClose: () => void; // Prop for closing the Personal component
}

const Personal: React.FC<PersonalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const NavbarDetails = [
    "Finance",
    "Technology",
    "Logistics",
    "Public Sector",
    "Travel & Tourism",
    "Health Care",
    "Retail",
    "Education",
    "Consumer",
    "Energy",
    "Auto Motive",
    "Insurance",
    "Entertainment & Media",
  ];

  const handleItemClick = (item: any) => {
    const value = item;
    console.log('my value : ', value)
    switch (value) {
      case "Finance":
        navigate("/finance");
        break;
      case "Technology":
        navigate("/Technology");
        break;
      case "Logistics":
        navigate("/Logistics");
        break;
      case "Public Sector":
        navigate("/PublicSector");
        break;
      case "Travel & Tourism":
        navigate("/TravelAndTurisum");
        break;
      case "Health Care":
        navigate("/Health");
        break;
      case "Retail":
        navigate("/Retail");
        break;
      case "Education":
        navigate("/Education");
        break;
      case "Consumer":
        navigate("/Consumer");
        break;
      case "Energy":
        navigate("/Energy");
        break;
      case "Auto Motive":
        navigate("/AutoMotive");
        break;
      case "Insurance":
        navigate("/Insurance");
        break;
      case "Entertainment & Media":
        navigate("/Entertainment");
        break;
      default:
        // Handle default case if necessary
        break;
    }
    
    onClose();
  };

  return (
    <div className="pt-12  bg-transparent text-white absolute w-full z-10 bg-opacity-100 backdrop-blur-xl">
      <div className="flex flex-row  font-lato mx-auto py-6 w-[80%] gap-32">
        <div className="w-[45%] my-auto ">
          <div className="bg-[#5090F0] gap-4 flex flex-col px-6 mx-auto ">
            <div className="border-white border-solid  border-b-2">
              <h2 className="text-center" >
                Navigate the Future with Expert Insights on Industry
                Transformations
              </h2>
            </div>
            <div className="text-center">
              Explore our latest thought leadership, groundbreaking ideas, and
              strategic insights on the critical issues shaping the future of
              industries and consulting. Empower your business with the
              knowledge to lead in a rapidly evolving landscape.
            </div>
          </div>
        </div>
        <div className="flex w-[55%]">
          <div className="grid grid-cols-2 gap-3 ">
            {NavbarDetails.map((section, index) => (
              <div key={index} className=" h-[10px] ">
                <p key={index} onClick={() => handleItemClick(section)} className="font-normal cursor-pointer font-lato items-center flex text-xl list-none text-left">
                  {section}
                </p>
              </div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
  {NavbarDetails.map((section, index) => (
    <div key={index}>
      <h2 className="font-extrabold font-lato text-13xl text-[#5498FE]">
                    {section.Title}
                  </h2> 
      <text className="font-normal font-lato text-5xl list-none text-left ">
        {section}
        {section.Items.map((item, idx) => (
                      <li className=" text-left cursor-pointer" key={idx}  onClick={() => handleItemClick(item)}>{item}</li>
                    ))}
      </text>
    </div>
  ))}
</div> */
}
