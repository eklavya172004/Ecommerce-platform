import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const Bestsellers = ({products}) => {

  const bestsellers = products.filter((best) => best.bestseller);
  const {ruppeeSign} = useContext(Context);

  return (
    <div className='p-5 flex flex-col gap-3'>
          <h1 className='text-2xl text-gray-500'>BestSellers</h1>

            <div className='flex gap-5 justify-center items-center'>
              {bestsellers.map((products) => (

                  <Link className='text-gray-600 cursor-pointer' to={`/product/${products._id}`}>
                        <div className='overflow-hidden flex flex-col text-center'>
                          <img className='w-50 h-50 hover:scale-100 transition ease-in-out' src={products.image} alt="" />
                            <p className='text-xl font-bold text-gray-600'>{products.name}</p>
                              <p className='text-sem font-medium'>{ruppeeSign}{products.price}</p>
                        </div>  
                    </Link>

              ))}
            </div>
    </div>
  )
}

export default Bestsellers
