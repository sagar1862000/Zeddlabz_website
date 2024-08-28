import React from 'react'
import img1 from '../../assets/Consumer/img1.svg'
const Card1 = () => {
  return (
    <div
      className="bg-cover bg-center place-content-center h-[500px] font-sans"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="relative place-content-center flex flex-col text-white p-6  md:h-[500px] ">
        <div className='w-[45%] px-4 text-lg font-semibold'>
            <p>Consumer products</p>
        </div>
        <h1 className="text-xl font-bold text-left flex-col items-center justify-self-start px-4 justify-center w-[45%] md:text-24xl ">
        “Crafting Strategies, Building Brands, Delighting Consumers."
        </h1>
      </div>
    </div>
  )
}

export default Card1