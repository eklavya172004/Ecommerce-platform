import React from 'react'
import image from '../assets/Main.png'

const Home = () => {
  return (
    <div className='container md:flex-row flex flex-col  p-16 justify-center '>
        
        <div className='left p-10'>
            <div className="heading-text p-10 text-7xl text-gray-600 font-bold flex flex-col gap-10">
              <p>Customized</p>

              <p>Printed Shirts</p>
            </div>

            <div className="text ml-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel, aliquid culpa quis, ullam dolore, laborum officia totam repellendus vo</p>
            </div>

            <div className="explore p-10">
                  <div className="box">
                    <p>Explore</p>
                  </div>
            </div>
        </div>

        <div className='right -mr-32  '>
            <img src={image} className='w-[1020px]'/>
        </div>

    </div>
  )
}

export default Home
