import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const TopDeals = ({products}) => {
    
  const topdeals = products.filter((product) => product.topDeal);
  const {ruppeeSign} = useContext(Context);

  return (
    <div className='p-5 flex flex-col gap-3'>
          <h1 className='text-2xl text-gray-500'>Top Deals</h1>

            <div className='flex gap-5 justify-center items-center'>
              {topdeals.map((product) => (

                  <Link className='text-gray-600 cursor-pointer' to={`/product/${product._id}`}>
                        <div className='overflow-hidden flex flex-col text-center'>
                          <img className='w-50 h-50 hover:scale-100 transition ease-in-out' src={product.image} alt="" />
                            <p className='text-xl font-bold text-gray-600'>{product.name}</p>
                              <p className='text-sem font-medium'>{ruppeeSign}{product.price}</p>
                        </div>  
                    </Link>
              ))}
            </div>
    </div>
  )
}

export default TopDeals
