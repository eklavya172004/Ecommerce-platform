import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/Context';
import { FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import startimage from '/images/star_icon.png'
import stardull from '/images/star_dull_icon.png'

const Product = () => {

  const {id} = useParams();
  const {products,ruppeeSign} = useContext(Context);
  const [productdata,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [selectSize,setSize] = useState('');

  const fetchData = async () => {
      
    products.map((data) => {
            if(data._id === id){
              setProductData(data);
              setImage(data.image[0])
              console.log(data);
              return null;
            }    
      });
  }

  useEffect(() => {
    fetchData();
  },[id,products]);


  return productdata ?  (   
    <div className='border-t-2 flex pt-5 h-full mb-10 transition-opacity ease-in duration-500 opacity-100'>
          <div className='flex gap-5 sm:gap-5 flex-col  sm:flex-row'>

            {/* product images */}
              <div className='flex-1  p-2 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[20%] w-full'>
                        {
                          productdata.image.map((image,index) => (
                              <img src={image} key={index} alt="" onClick={() => setImage(image)} className='w-[30%] sm:w-full sm:mb-3 flex-shrink-0 hover:border  hover:border-blue-500 cursor-pointer' />
                          ))
                        }
                    </div>
                    <div className='md:h-full md:w-full'>
                        {
                          <img src={image} alt="imagedisplay" className=' md:w-full md:h-[600px]  '/>
                        }
                    </div>
              </div>

              {/* Product info */}
                  <div className='flex-1 flex flex-col gap-2 md:pl-0 pl-5'>
                    <div className='md:text-3xl text-xl'>{productdata.name}</div>
                    <div className='flex items-baseline gap-5'>
                      <p className={`${productdata.bestseller?'flex':'hidden'} bg-green-500 justify-center gap-1  items-center text-white text-center   p-1`}><p className='text-base'>Best</p><p className='text-xs'><FaStar /></p></p>
                        <div className='flex gap-1 justify-center items-center mt-2'>
                          {/* <p>Reviews</p> */}
                            <img src={startimage} alt="starimage"  className='w-3'/>
                            <img src={startimage} alt="starimage"  className='w-3'/>
                            <img src={startimage} alt="starimage"  className='w-3'/>
                            <img src={startimage} alt="starimage"  className='w-3'/>
                            <img src={stardull} alt="stardull" className='w-3'/>
                            <p className='font-serif font-light'>({productdata.rating})</p>
                        </div>
                    </div>

                    <p className='text-red-400 font-serif'>In-Stock</p>
                    <div className='mt-2'>
                        <p className='text-3xl'>{ruppeeSign} {productdata.price}</p>
                    </div>
                    
                       

                    <div className='flex flex-col gap-4 my-1'>
                      <p>Select Size</p>
                      <div className='flex gap-2'>
                          {productdata.sizes.map((size,index) => (
                            <button key={index} onClick={() => setSize(size)} className={`border py-2 px-3 bg-gray-300 text-black ${size===selectSize ? 'border-blue-400':'border-white'}`}>{size}</button> 
                          ))}
                      </div>
                    <div className='lato-regular'>
                      {productdata.description}
                    </div>
                    </div>
                  </div>

          </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
