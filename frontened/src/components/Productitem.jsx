import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

const Productitem = ({ products }) => {
  const { ruppeeSign } = useContext(Context);

  if (!products || products.length === 0) {
    return <p>No products available</p>; // Or any other fallback UI
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product._id} className="text-gray-600 cursor-pointer" to={`/product/${product._id}`}>
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-4 transition-all hover:scale-105 transform duration-300">
            <img
              className="w-full h-56 object-cover rounded-lg mb-4 transition-all ease-in-out hover:scale-105"
              src={product.image}
              alt={product.name}
            />
            <p className="text-xl font-bold text-gray-800 truncate">{product.name}</p>
            <p className="text-lg font-medium text-gray-500">{ruppeeSign}{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Productitem;
