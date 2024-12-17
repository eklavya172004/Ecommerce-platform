import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/Context';
import { FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import startimage from '/images/star_icon.png'
import { FiMapPin } from 'react-icons/fi';
import stardull from '/images/star_dull_icon.png'

const Product = () => {

  const {id} = useParams();
  const {products,ruppeeSign,delivery_charges} = useContext(Context);
  const [productdata,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [selectSize,setSize] = useState('');
  const [active,setActive] = useState('');

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
    <div className='border-t-2  pt-5 h-full mb-10 transition-opacity ease-in duration-500 opacity-100'>
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
                  <div className='flex-1 flex flex-col gap-2 md:pl-0 pl-3'>
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
                    <div className='mt-2 flex '>
                        <p className='text-3xl'>{ruppeeSign} {productdata.price}</p>
                        {/* to be get updated */}
                        <div>
                        <p className='ml-1 roboto-regular text-xl text-gray-400 line-through'>{ruppeeSign}250</p>
                        </div>
                    </div>
                    
                       

                    <div className='flex flex-col gap-4 my-1'>
                      <p>Select Size</p>
                      <div className='flex gap-2'>
                          {productdata.sizes.map((size,index) => (
                            <button key={index} onClick={() => setSize(size)} className={`border py-2 px-3 bg-gray-300 text-black ${size===selectSize ? 'border-blue-400':'border-white'}`}>{size}</button> 
                          ))}
                      </div>
                      

                  <div className='addToCart flex gap-4 mt-5 md:justify-start md:mr-0 mr-2'>
                        <button className='AddToCart roboto-bold font-bold p-3 rounded-xl w-full text-white  md:w-64 bg-orange-500 text-lg md:text-2xl '>
                            <p>Add to cart</p>
                        </button>
                        <button className='AddToCart roboto-medium font-bold w-full md:w-64 p-3  rounded-xl bg-whilte border  border-black text-lg md:text-2xl '>
                            <p>Buy Now</p>
                        </button>
                  </div>

                  <div className="pincode-checker flex items-center gap-3 mt-4 rounded-lg ">
                  <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-2 ">
                    <FiMapPin className="text-orange-500 text-xl" />
                    <input
                      type="text"
                      className="roboto-regular w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                      placeholder="Enter your pincode"
                    />
                  </div>
                  <button className="roboto-medium text-white rounded-lg text-sm px-4 py-2 bg-orange-500 hover:bg-orange-600 transition">
                    Check
                  </button>
                </div>

                  <div className='deliveryCharges'>
                        <p className='text-red-500'>Delivery charges:</p>
                        <p className='roboto-regular'>{ruppeeSign}{delivery_charges}</p>
                  </div>

                  
                    <div className='lato-regular pr-2 md:mt-2'>
                      <p className='font-bold '>About this product:</p>
                      {productdata.description}
                    </div>
                    </div>
                    <hr className='w-11/12  border-t-2 border-gray-200' />

                    <div className='flex roboto-regular flex-col ml-4 text-sm md:mt-3  text-gray-400'>
                        <ul className='list-disc'>
                          <li>100% Original product</li>
                          <li>Cash on delivery available on this product.</li>
                          <li>Easy return and exchange policy available within 7 days.</li>
                        </ul>
                    </div>

                  </div>
          </div>

          {/* description and product highlights */}
          {/* will further style this description page */}
          <div className=' p-2 flex flex-col mt-10'>
            <div className='flex'>

            <div className='description'>
                  <p onClick={() => setActive('description')} className='text-base px-3 py-2 roboto-medium cursor-pointer border border-gray-400 '>Highlights</p>
            </div>

            <div className='reviews'>
                  <div className=''>
                          <p onClick={() => setActive('reviews')} className='text-base border-l-0 border cursor-pointer roboto-medium border-gray-400 px-3 py-2'>Reviews({productdata.reviews.length})</p>
                  </div>
            </div>

            </div>

            <div className='showingDescription h-full w-full p-3 mt-3'>
                          {active === 'description' ? (
                            productdata.features && productdata.features.length > 0 ? (
                              <ul className='list-disc pl-4'>
                                {productdata.features.map((item, key) => (
                                  <li key={key} className='text-gray-700'>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-500">No features available for this product.</p>
                            )
                          ) : active === 'reviews' ? (
                            productdata.reviews && productdata.reviews.length > 0 ? (
                              <div className='space-y-4'>
                                {productdata.reviews.map((review, key) => (
                                  <div key={key} className='p-4 border rounded-lg shadow-sm'>
                                    <div className='flex items-center'>
                                      <span className='font-semibold text-gray-800'>{review.user}</span>
                                      <div className='ml-2 flex items-center'>
                                        {[...Array(5)].map((_, i) => (
                                          <span
                                            key={i}
                                            className={`${
                                              i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                                            }`}
                                          >
                                            ★
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <p className='text-gray-600 mt-2'>{review.comment}</p>
                                    <p className='text-sm text-gray-400 mt-1'>{review.date}</p>
                                  </div>
                                ))}
                              </div>
                            ): (
                              <p className='text-gray-500'>No reviews are available</p>
                            )
                          ) : null}
</div>
          </div>

        {/* Related products page*/}
        
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
