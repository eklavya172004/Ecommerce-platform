import React, { useEffect, useState } from 'react'

const ImageSlider = ({images,interval=2000}) => {
    const [currentImage,setImage] = useState(0);
  
    useEffect( () =>
    {
        const slider = setInterval(() => {
            setImage((previous) => (previous+1)%images.length);
        },[interval]);

        return () => clearInterval(slider);
    },[images.length,interval]);

    const handleEnd = () => {
      if(currentImage == images.length - 1){
        setTimeout(() => {
          setImage(0);
        },10);
      }
    }

  return (
    <div className='flex overflow-hidden'>
      <div className='flex transition-transform w-full h-52 '
            style={{
              transform: `translateX(${currentImage*100}%)`,
            }}
            onTransitionEnd={handleEnd}
      >
      {
        images.map((image,index) => (
          <img src={image}
                key={index}
                className='w-[400px] h-full object-cover flex-shrink-0'          
                />
        ))
      }

      </div>
    </div>
  )
}

export default ImageSlider
