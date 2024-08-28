import React from "react";
import img2 from "../../assets/Education/img2.svg";
import img3 from "../../assets/Education/img3.svg";
import img4 from "../../assets/Education/img4.svg";
const Card4 = () => {
  const cards = [
    {
      img: img2,
      title: "Higher Education",
      discription:
        "higher education, technology acts as a transformative force. It enables personalized learning experiences, fosters global connectivity, and empowers students and educators alike. From virtual classrooms to data-driven insights, technology reshapes traditional models, making education accessible, engaging, and future-ready.",
    },
    {
      img: img3,
      title: "Early Child education",
      discription:
        "early childhood education, technology plays a vital role in shaping young minds. When employed thoughtfully, it becomes a powerful tool for enhancing early learning experiences. Interactive apps, educational games, and digital storytelling engage children, fostering creativity and curiosity. However, maintaining screen time limits is crucial to strike a balance between digital exploration and real-world interactions",
    },
    {
      img: img4,
      title: "Work Force development",
      discription:
        "workforce development, technology acts as a catalyst for growth and adaptability. Organizations leverage data analytics, AI-driven tools, and online learning platforms to enhance employee skills. Automation reshapes job roles, emphasizing critical thinking and creativity. As the workforce evolves, technology ensures that learning remains continuous, preparing professionals for the dynamic demands of the modern workplace",
    },
  ];
  return (
    <div className="flex flex-col w-screen bg-white font-lato">
      <div className="w-[50%] text-13xl mx-auto font-extrabold text-center py-6 ">How we Help Our Client</div>
      <div className="flex gap-6 sm:flex-col w-[85%] mx-auto py-8 md:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col sm:items-center md:items-start gap-3"
          >
            <div className=" bg-slate-300">
              <img srcSet={card.img} className=" " />
            </div>
            <div className="text-[#5498FE] font-semibold">{card.title}</div>
            <div className="pr-2">{card.discription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card4;
