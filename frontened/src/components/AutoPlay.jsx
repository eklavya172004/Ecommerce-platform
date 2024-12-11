import React, { useRef } from 'react'
import {useInView} from 'react-intersection-observer';

const AutoPlay = ({src,width,height}) => {
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
    <div ref={ref} style={{width,height}}>
        <video src={src}
                ref={videoRef}
                controls={false}
                muted
                width='100%'
                height='100%'
                loop
                className='absolute inset-0 md:rounded-3xl object-cover'
            ></video>
    </div>
  )
}

export default AutoPlay
