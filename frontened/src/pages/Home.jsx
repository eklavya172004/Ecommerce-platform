import React from 'react'
import image from '../assets/Main.png'
import { FaAngleDoubleRight } from "react-icons/fa";
import image1 from '../../public/images/image-0.jpg'
import image2 from '../../public/images/image-1.jpg'
import image3 from '../../public/images/image-2.jpg'
import image4 from '../../public/images/image-3.jpg'
import image5 from '../../public/images/image-5.jpg'
import { CiCirclePlus } from "react-icons/ci";
// import image6 from '../../public/images/image-6.jpg'

const Home = () => {
  return (
    <>
   
    <div className='container md:flex-row flex flex-col md:mt-0 mt-10 md:p-16 p-10  justify-center'>
    
        <div className='left md:p-10'>
            <div className="m-4 heading-text md:p-10 md:text-7xl  text-4xl gap-2 text-gray-600 font-bold flex flex-row md:flex-col md:gap-10">
              {/* < className='flex'> */}
              <p>Customized</p>

              <p className='md:flex gap-5'>Printed<p className='-ml-16 md:ml-0 '>
              Shirts </p></p>
              
              {/* <p> Shirts</p> */}
            </div>

            <div className="text md:ml-12 md:text-start  text-center md:text-xl text-base   text-gray-400">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel, aliquid culpa quis, ullam dolore, laborum officia totam repellendus vo</p>
            </div>

            <div className="explore md:p-12 pt-10 flex justify-center md:justify-start text-center">
                  <div className="box border-2 border-l-0 w-[50%] gap-2  border-gray-600 flex justify-center text-center  p-3 items-center">
                    <a href='/products' className='md:text-2xl text-xl text-gray-500 font-black'>Explore</a>
                    <div className='text-xl  text-gray-500'>
                    <FaAngleDoubleRight />
                    </div>
                  </div>
            </div>
        </div>
      
        <div className='right md:-mr-32 mt-5 md:mt-7'>
            <img src={image} className='w-[1020px]'/>
        </div>

    </div>

{/* PART - 1 */}

    <div className='container md:p-20 md:m-auto'>
          <div className='grid&Column '>
              {/* section - 1 */}
                <div className='md:flex-row flex flex-col max-w-full'>

              <div className="box-1">
                  <img src={image1} className='md:w-80 h-full w-full' alt="" />
              </div>

              <div className="box-2">
              <img src={image2} className='md:w-80 object-cover h-96 md:h-80' alt="" />
                </div>

                <div className="box-3">
                <img src={image3} className='md:w-[500px] w-full object-cover h-80' alt="" />
                </div>

                </div>



          {/* section - 2 */}
            <div className='md:flex-row flex flex-col'>


                  <div className="box-4">
                  <img src={image4} className='md:w-80 object-cover md:h-72' alt="" />
              </div>

              <div className="box-5">
              <img src={image5} className='w-80 h-72  object-scale-down' alt=""/>
                </div>

                <div className="box-6">
                <img src={image4} className='md:w-80 w-full md:h-72' alt="" />
                </div>

                  <div className="box-7 flex flex-col justify-center m-auto items-center">
                    <div className='text-8xl'>
                        <CiCirclePlus />
                    </div>

                    <p>Get more items</p>
                   </div>

            </div>
          </div>
    </div>
    </>
  )
}

export default Home
