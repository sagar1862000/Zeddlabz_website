import React from 'react'
import img1 from '../../assets/Insurance/img1.svg'
const Card1 = () => {
  return (
    <div
      className="bg-cover bg-center place-content-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="relative place-content-center  text-black p-6 grid md:h-[500px] sm:h-[500px] ">
        <h1 className="text-xl font-semibold text-center font-Inder flex-col items-center justify-self-center justify-center w-3/4 md:text-31xl ">
          INSURANCE
        </h1>
      </div>
    </div>
  )
}

export default Card1