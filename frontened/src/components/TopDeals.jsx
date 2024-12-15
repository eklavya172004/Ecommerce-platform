import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const TopDeals = ({ products }) => {
  const topdeals = products.filter((product) => product.topDeal);
  const { ruppeeSign } = useContext(Context);

  return (
    <div className='p-5 flex flex-col gap-3'>
      <h1 className='text-2xl text-gray-600 font-semibold'>Top Deals</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {topdeals.map((product) => (
          <Link key={product._id} className='group text-gray-600 cursor-pointer' to={`/product/${product._id}`}>
            <div className='relative overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl'>
              <img
                className='w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300'
                src={product.image[0]} // Assuming product.image is an array, use the first image
                alt={product.name}
              />
              <div className='p-4'>
                <p className='text-xl font-semibold text-gray-800'>{product.name}</p>
                <p className='text-lg font-medium text-gray-500'>{ruppeeSign}{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
