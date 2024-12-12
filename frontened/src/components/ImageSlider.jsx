import React, { useEffect, useState } from 'react'

const ImageSlider = ({images,interval=2000}) => {

  const [currentIndex,setNextIndex] = useState(0);

  useEffect(() => {
    const sldier = setInterval(() => {
      setNextIndex((prev) => (prev+1) % images.length);
    },interval);
    
      return () => clearInterval(sldier);
  },[interval]);

  return (
    <div className='relative w-full'>
        <div className='w-full md:h-[500px] overflow-hidden'>
            <img src={images[currentIndex]} alt="" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default ImageSlider
