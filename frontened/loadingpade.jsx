import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <motion.header
        className="text-center p-10 bg-blue-600 text-white w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Welcome to ShopCart</h1>
        <p className="text-xl mt-2">The best deals, just a click away!</p>
        <Link to="/shop">
          <motion.button
            className="mt-4 py-2 px-4 bg-yellow-500 text-white rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Shop Now
          </motion.button>
        </Link>
      </motion.header>

      {/* Product Categories */}
      <motion.section
        className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {["Furniture", "Tech", "Fashion", "Books"].map((category) => (
          <motion.div
            key={category}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`https://via.placeholder.com/150?text=${category}`}
              alt={category}
              className="w-32 h-32 object-cover rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold">{category}</h3>
          </motion.div>
        ))}
      </motion.section>

      {/* Deals Section */}
      <motion.section
        className="bg-gray-200 py-10 px-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center">Today's Best Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Wireless Headphones", price: "$89.00" },
            { name: "Smartphone", price: "$599.00" },
            { name: "Laptop", price: "$999.00" },
          ].map((product, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`https://via.placeholder.com/300x200?text=${product.name}`}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-500">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 w-full text-center">
        <p>&copy; 2025 ShopCart. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
