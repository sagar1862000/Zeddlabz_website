import React from "react";

const Card3 = () => {
  const data = [
    {
      title: "Digital Learning Platforms:",
      discription:
        "We collaborate with schools, colleges, and educators to integrate robust digital platforms. These platforms facilitate interactive lessons, virtual classrooms, and seamless communication between teachers, students, and parents. Whether it’s a learning management system (LMS) or adaptive software, we ensure that technology enhances engagement and accessibility.",
    },
    {
      title: "Personalized Learning Paths:",
      discription:
        "Technology allows us to tailor learning experiences to individual needs. Through data analytics and artificial intelligence, we identify students’ strengths, areas for improvement, and learning preferences. Adaptive content, personalized assessments, and targeted interventions empower students to progress at their own pace.",
    },
    {
      title: "Teacher Professional Development:",
      discription:
        " Our consultancy offers training programs for educators to harness technology effectively. From mastering online teaching tools to incorporating gamified learning, we equip teachers with the skills needed to navigate the digital landscape confidently.",
    },
    {
      title: "Blended Learning Models:",
      discription:
        " We advocate for a blend of traditional and digital methods. Whether it’s flipped classrooms, hybrid courses, or project-based learning, we guide institutions in creating cohesive and engaging learning experiences that seamlessly integrate face-to-face interactions and online resources.",
    },
    {
      title: "EdTech Research and Evaluation:",
      discription:
        "  Staying informed about emerging technologies is crucial. We continuously evaluate educational apps, virtual reality experiences, and AI-driven solutions. Our goal is to recommend evidence-based tools that align with educational goals and enhance student outcomes.",
    },
    {
      title: "Equity and Inclusion:",
      discription:
        "Technology should bridge gaps, not widen them. We work towards equitable access by addressing digital divides, advocating for affordable devices, and ensuring that all students benefit from technological advancements.",
    },
  ];
  return (
    <div className="w-full bg-slate-900 text-white font-lato">
      <div className="flex border-white sm:text-center md:text-left border-2 flex-col py-6 gap-6 w-[75%] mx-auto ">
        {data.map((item, index) => (
          <div key={index} className="">
            <span className="text-4xl border-white border-2 font-bold inline-block">
              {item.title}
            </span>{" "}
            &nbsp;<span className="text-lg font-semibold"> {item.discription}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3;
