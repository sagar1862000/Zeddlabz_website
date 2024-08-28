import React, { useEffect } from 'react'
import img1 from '../../assets/PublicSector/img1.svg'

const Card1 = () => {
    useEffect(()=>{
        console.log('hhhh');
    })
  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <img srcSet={img1} className='w-screen'/>
    </div>
  )
}

export default Card1