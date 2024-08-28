import React from "react";
import img11 from '../../assets/Entertainment/img11.svg'
const Card3 = () => {
  return (
    <div className="flex relative flex-col justify-center font-lato items-center px-20 py-12 leading-10 text-center text-white uppercase min-h-[646px] max-md:px-5"
    style={{
      backgroundImage: `url(${img11})`, // Corrected syntax here
      backgroundSize: "cover", // Added background size
      backgroundPosition: "center", // Added background position
      backgroundRepeat: "no-repeat", // Added background repeat
    }}
    >
      <div className="flex relative w-[90%] mx-auto flex-col">
        <div className="text-3xl tracking-[4px] max-md:max-w-full">
          <span className="font-black text-13xl">
            Featured thinking How influencer marketing is impacting brands in
            India
          </span>
        </div>
        <div className="self-center w-[95%] mx-auto mt-6 text-mini font-semibold tracking-[3px]">
          In India, influencer marketing has transformed the way brands engage
          with consumers. By leveraging the reach and authenticity of
          influencers, brands are able to connect with their target audience
          more effectively. Influencers, with their deep understanding of
          cultural nuances and preferences, create content that resonates with
          their followers, fostering trust and credibility for the brands they
          endorse. This targeted approach enables brands to reach specific
          audience segments, driving higher engagement and conversion rates.
          Additionally, collaborating with influencers results in the creation
          of compelling content that boosts brand visibility and awareness.
          Overall, influencer marketing has emerged as a powerful strategy for
          brands in India to enhance their brand-consumer relationships and
          drive business growth.
        </div>
      </div>
    </div>
  );
};

export default Card3;
