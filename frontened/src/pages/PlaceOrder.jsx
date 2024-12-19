import React, { useState } from 'react'
import CartTotal from '../components/CartTotal'
import razor from '/images/razorpay.png'
import stripe from '/images/stripe_logo.png'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const [method,setmethod] = useState('cod');
  const navigate = useNavigate();

  return (
    <div className='flex flex-col md:flex-row p-5 justify-between gap-4 pt-5 md:p-14 min-h-[400px] border-t'>
        {/* left */}
        <div className='flex flex-col gap-4 w-full md:max-w-[500px]'>

            <div className='text-xl md:text-2xl my-2'>
                <p className='text-3xl'>Delivery Information</p>
            </div>

            <div className='flex gap-3'>
                <input type="text" placeholder='First-name' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />
                <input type="text" placeholder='Last-name' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />               
            </div>  
                <input type="email" placeholder='Email-address' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />
                <input type="text" placeholder='Street-name' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />
            
            <div className='flex gap-3'>
                <input type="text" placeholder='City' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />
                <input type="text" placeholder='State' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />               
            </div>  
            <div className='flex gap-3'>
                <input type="number" placeholder='Zip-code' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />
                <input type="text" placeholder='Country' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />               
            </div>  
            <input type="number" placeholder='Phone' className='border border-gray-400 rounded py-1.5 px-3.5 w-full' />
        </div>

        <div className={`'flex' mr-6 justify-end my-20`}>
            <div className="w-[300px]  md:w-[500px]">
              <CartTotal/>
              {/* <button 
            className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            // onClick={handlePlaceOrder}
            onClick={() => navigate('/PlaceOrder')}
        >
            Place Order
        </button> */}
            </div>
          <div className='Payment mt-10'>
            <p className='text-3xl'>Payment Method</p>

            {/* payment method selection */}
                <div className='flex gap-3 flex-col md:flex-row'>
                      <div onClick={() => setmethod('razor')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
                                <p className={`${method === 'razor' ? 'bg-blue-500': '' } min-w-3.5 h-3.5 border rounded-full`}></p>
                                <img src={razor} className='h-5 mx-4' alt="" />
                      </div>
                      <div onClick={() => setmethod('stripe')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
                                <p className={`${method === 'stripe' ? 'bg-blue-500': '' } min-w-3.5 h-3.5 border rounded-full`}></p>
                                <img src={stripe} className='h-5 mx-4' alt="" />
                      </div>
                      <div onClick={() => setmethod('cod')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer`}>
                                <p className={`${method === 'cod' ? 'bg-blue-500': ''  } min-w-3.5 h-3.5 border rounded-full`}></p>
                                  <p>CASH ON DELIVERY</p>
                      </div>
                </div>
                      <button 
            className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            // onClick={handlePlaceOrder}
            onClick={() => navigate('/Orders')}
        >
            Place Order
        </button>
          </div>
          </div>


    </div>
  )
}

export default PlaceOrder
