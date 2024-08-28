import React from 'react'
import img1 from '../../assets/Retail/img1.png';
import img2 from '../../assets/Retail/img2.svg';
import img3 from '../../assets/Retail/img3.svg';
import img4 from '../../assets/Retail/img4.svg';
import img5 from '../../assets/Retail/img5.svg';
import img6 from '../../assets/Retail/img6.svg';
import img7 from '../../assets/Retail/img7.svg';
// import img8 from '../../assets/Retail/img8.svg';
const Card1 = () => {
  return (
    <div className="overflow-x-hidden w-full">
        <img srcSet={img1} className='w-screen'/>
    </div>
  )
}

export default Card1