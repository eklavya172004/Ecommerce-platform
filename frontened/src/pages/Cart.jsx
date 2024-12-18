import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {products,ruppeeSign,cartItems,addtocart,removefromCart} = useContext(Context);
  const navigate = useNavigate();
  const [cartData,setCartData] = useState([]);

      useEffect(() => {

        const temp = [];

            for(const items in cartItems){
                for(const item in cartItems[items]){
                    if(cartItems[items][item]){
                        temp.push({
                          _id:items,
                          size:item,
                          quantity:cartItems[items][item]
                        })
                    }
                }
            }
            setCartData(temp);
      },[cartItems]);

  return (
    <div className='p-5 flex flex-col  items-start'>
        <p className='text-3xl'>Your Orders</p>
          <div className='pt-5 w-full'>
              {
                cartData.map((item,index) => {
                  const productData = products.find((products) => products._id === item._id);

                  return (
                    <div
                    key={index}
                    className="border-t  border-b flex flex-wrap md:flex-nowrap justify-between items-center py-4 md:gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-20 md:w-24">
                      <img
                        className="w-full h-20 object-cover rounded-lg"
                        src={productData.image[0]}
                        alt={productData.name}
                      />
                    </div>
            
                    {/* Product Name */}
                    <div className="flex md:flex-1  flex-col ">
                      <p className="text-gray-800 text-base   md:text-xl font-semibold">
                        {productData.name}
                      </p>
                      <p className="text-gray-500 text-sm md:text-base">Size: {item.size}</p>
                    </div>
            
                    {/* Quantity and Price */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                      <p className="text-gray-700 text-sm md:text-base">
                        Quantity: <input readOnly type='number' value={item.quantity} className="font-medium read-only: border max-w-10 md:max-w-20 px-1 md:px-2 py-1"/>
                      </p>
                      <p className="text-gray-900 font-semibold text-lg md:text-lg">
                        {ruppeeSign}{productData.price}
                      </p>
                    </div>
            
                    {/* Remove Button */}
                    <button
                      onClick={() => addtocart(item._id,item.size)} className="bg-gray-500 hover:bg-red-600 text-white px-5   py-2 rounded-lg text-sm transition duration-300 ease-in-out"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => removefromCart(item._id,item.size)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition duration-300 ease-in-out"
                    >
                      Remove
                    </button>
                  </div>

                  )

                })
              }
          </div>

          <div className={`${cartData.length>0? 'flex':'hidden'} m-auto justify-end my-20`}>
            <div className="w-[300px]  md:w-[500px]">
              <CartTotal />
              <button 
            className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            // onClick={handlePlaceOrder}
            onClick={() => navigate('/PlaceOrder')}
        >
            Place Order
        </button>
            </div>
          </div>
    </div>
  )
}

export default Cart
