import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const Bestsellers = ({ products }) => {

  const bestsellersMen = products.filter((best) => best.bestseller && best.category.includes("Men"));

  const bestsellerWomen = products.filter((best) => best.bestseller && best.category.includes("Women"));

  const bestsellerKids = products.filter((best) => best.bestseller && best.category.includes("Kids"));

  const bestsellerElectronics = products.filter((best) => best.bestseller && best.category.includes("Electronics"))

  const { ruppeeSign } = useContext(Context);

  const renderSection = (title,products) => (
    <div className="p-5 flex flex-col gap-6">
    {/* Header */}
    <h1 className="text-3xl font-semibold text-gray-800 text-center sm:text-left">
      {title}
    </h1>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product._id}
          className="bg-white shadow-md  rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
          to={`/product/${product._id}`}
        >
          <div className="flex flex-col items-center ">
            {/* Product Image */}
            <img
              className="w-full h-56  object-cover group-hover:opacity-90 transition-opacity duration-300"
              src={product.image[0]}
              alt={product.name}
            />
            {/* Product Name */}
            <p className="text-lg font-bold  text-gray-700">{product.name}</p>
            {/* Product rating */}
            <p className="text-lg font-bold  text-gray-700">Rating:{product.rating}</p>            

            {/* Product Price */}
            <p className="text-md font-medium text-gray-600 mt-2">
              {ruppeeSign}
              {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )

  return (
      <div>
        {bestsellersMen.length>0 && renderSection("BestSellers in Men's Collection",bestsellersMen)}
        {bestsellerWomen.length>0 && renderSection("BestSellers in Women's Collection" ,bestsellerWomen)}
        {bestsellerKids.length>0 && renderSection("BestSeller in Kids",bestsellerKids)}
        {bestsellerElectronics.length>0 && renderSection("BestSellers in Electronics",bestsellerElectronics)}
      </div>
  );
};

export default Bestsellers;
