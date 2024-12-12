import React, { useRef } from 'react'
import {useInView} from 'react-intersection-observer';

const AutoPlay = ({src}) => {
    const videoRef = useRef(null);
    const {ref,inView } = useInView({
        threshold:0.2,
    });

React.useEffect(() => {
    
    if(videoRef.current){
        if(inView){
            videoRef.current.play();
        }else{
            videoRef.current.pause();
        }
    }

},[inView]);

  return (
    <div ref={ref} className='md:h-[500px] object-cover'>
        <video src={src}
                ref={videoRef}
                controls={false}
                muted
                loop
                className='md:absolute md:w-[100%] md:h-[100%] inset-0 md:rounded-3xl object-cover'
            ></video>
    </div>
  )
}

export default AutoPlay
