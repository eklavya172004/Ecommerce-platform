// import React, { useContext, useEffect, useState } from 'react';
// import { Context } from '../context/Context';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
import Bestsellers from '../components/Bestsellers';
import TopDeals from '../components/TopDeals';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Productitem from '../components/Productitem';

// const AllProducts = () => {
//     const { products } = useContext(Context);
//     const [value, setValue] = React.useState([0, 5000]);
//     const [activeTab, setActiveTab] = useState('bestseller');
//     const [sortOption, setSortedOption] = useState("");
//     const [sortedProducts, setSortedProducts] = useState(products || []);
//     const [selectedCategory, setSelectedCategory] = useState([]);    
//     const [filter,setFilter] = useState(false);

//     const valuetext = (value) => `${value}`;

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const [isVisible, setVisible] = useState(false);

//     const handleCat = (e) => {
//         const category = e.target.value;
//         setSelectedCategory((prev) => 
//             prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
//         );
//     };

//     // Comprehensive filtering and sorting effect
//     useEffect(() => {
//         // Start with the full product list
//         let filteredProducts = [...products];

//         // Filter by category - if any categories are selected
//         if (selectedCategory.length > 0) {
//             filteredProducts = filteredProducts.filter((product) => 
//                 selectedCategory.includes(product.category)
//             );
//         }

//         // Filter by price range
//         filteredProducts = filteredProducts.filter((product) => 
//             product.price >= value[0] && product.price <= value[1]
//         );

//         // Sorting logic
//         switch (sortOption) {
//             case 'priceLowToHigh':
//                 filteredProducts.sort((a, b) => a.price - b.price);
//                 break;
//             case 'priceHighToLow':
//                 filteredProducts.sort((a, b) => b.price - a.price);
//                 break;
//             case 'latest':
//                 filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                 break;
//             case 'best-rated':
//                 filteredProducts.sort((a, b) => b.rating - a.rating);
//                 break;
//             default:
//                 break;
//         }

//         setSortedProducts(filteredProducts);
//     }, [products, selectedCategory, sortOption, value]);

//     return (
//         <div className='md:flex-row flex flex-col'> 
//             {/* Categories and filters */}
//             <div className='leftSide p-3 md:flex md:flex-col gap-5'>
//                 <div className='flex-col flex justify-center border border-b-gray-30 p-3 items-start'>
//                     <p className='text-gray-600 justify-center items-center flex font-bold font-serif mb-4'>
//                         Filters
//                         <div 
//                             onClick={() => setVisible(!isVisible)} 
//                             className='hover:cursor-pointer ml-2'
//                         >
//                             {isVisible ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
//                         </div>
//                     </p>

//                     {['Men','Women','Kids','Electronics','Books','Cosmetics'].map((category) => (
//                         <div 
//                             key={category} 
//                             className={`${isVisible ? 'flex gap-2 justify-center items-center font-mono' : 'hidden'}`}
//                         >
//                             <input 
//                                 type="checkbox"
//                                 onChange={handleCat}
//                                 checked={selectedCategory.includes(category)}
//                                 value={category}
//                             />
//                             {category}
//                         </div>
//                     ))}
//                 </div>

//                 <div>
//                     <p>Price Range</p>
//                     <Box sx={{ width: 200 }}>
//                         <Slider
//                             getAriaLabel={() => 'Price range'}
//                             value={value}
//                             onChange={handleChange}
//                             valueLabelDisplay="auto"
//                             getAriaValueText={valuetext}
//                             min={0}
//                             max={5000}
//                         />
//                     </Box>
//                 </div>
//             </div>

//             <div className='maincontent flex flex-col justify-start items-start'>
//                 <nav className="p-5 flex md:flex-row items-center w-full md:justify-between gap-4 bg-white rounded-md">
//                     <div className="flex justify-center gap-5">
//                         <p
//                             className={`hover:cursor-pointer text-lg md:text-xl font-medium transition-colors ${
//                                 activeTab === "bestseller" ? "text-pink-500 underline decoration-pink-500" : "text-gray-600 hover:text-pink-500"
//                             }`}
//                             onClick={() => setActiveTab("bestseller")}
//                         >
//                             BestSellers
//                         </p>
//                         <p
//                             className={`hover:cursor-pointer text-lg md:text-xl font-medium transition-colors ${
//                                 activeTab === "topdeals" ? "text-pink-500 underline decoration-pink-500" : "text-gray-600 hover:text-pink-500"
//                             }`}
//                             onClick={() => setActiveTab("topdeals")}
//                         >
//                             Top-Deals
//                         </p>
//                     </div>

//                     <div className="flex justify-center md:justify-end">
//                         <select
//                             id="sort-options"
//                             onChange={(e) => setSortedOption(e.target.value)}
//                             className="border rounded-md text-gray-600 text-base md:text-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//                         >
//                             <option value="" className="text-gray-500">Sort</option>
//                             <option value="priceLowToHigh">Price: Low to High</option>
//                             <option value="priceHighToLow">Price: High to Low</option>
//                             <option value="latest">Top Latest</option>
//                             <option value="best-rated">High to Low Ratings</option>
//                         </select>
//                     </div>
//                 </nav>

//                 <div className='p-3'>
//                     {activeTab === 'bestseller' && <Bestsellers products={sortedProducts} />}
//                     {activeTab === 'topdeals' && <TopDeals products={sortedProducts} />}
//                     {activeTab === '' && <Productitem products={sortedProducts} />}
//                 </div>
//             </div>  
//         </div>
//     );
// }

// export default AllProducts;
// import React from 'react'

// const AllProducts = () => {
//   return   return (
//         <div className='md:flex-row flex flex-col'> 
//             {/* Categories and filters */}
//             <div className='leftSide p-3 md:flex md:flex-col gap-5'>
//                 <div className='flex-col flex justify-center border border-b-gray-30 p-3 items-start'>
//                     <p className='text-gray-600 justify-center items-center flex font-bold font-serif mb-4'>
//                         Filters
//                         <div 
//                             onClick={() => setVisible(!isVisible)} 
//                             className='hover:cursor-pointer ml-2'
//                         >
//                             {isVisible ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
//                         </div>
//                     </p>

//                     {['Men','Women','Kids','Electronics','Books','Cosmetics'].map((category) => (
//                         <div 
//                             key={category} 
//                             className={`${isVisible ? 'flex gap-2 justify-center items-center font-mono' : 'hidden'}`}
//                         >
//                             <input 
//                                 type="checkbox"
//                                 onChange={handleCat}
//                                 checked={selectedCategory.includes(category)}
//                                 value={category}
//                             />
//                             {category}
//                         </div>
//                     ))}
//                 </div>

//                 <div>
//                     <p>Price Range</p>
//                     <Box sx={{ width: 200 }}>
//                         <Slider
//                             getAriaLabel={() => 'Price range'}
//                             value={value}
//                             onChange={handleChange}
//                             valueLabelDisplay="auto"
//                             getAriaValueText={valuetext}
//                             min={0}
//                             max={5000}
//                         />
//                     </Box>
//                 </div>
//             </div>

//             <div className='maincontent flex flex-col justify-start items-start'>
//                 <nav className="p-5 flex md:flex-row items-center w-full md:justify-between gap-4 bg-white rounded-md">
//                     <div className="flex justify-center gap-5">
//                         <p
//                             className={`hover:cursor-pointer text-lg md:text-xl font-medium transition-colors ${
//                                 activeTab === "bestseller" ? "text-pink-500 underline decoration-pink-500" : "text-gray-600 hover:text-pink-500"
//                             }`}
//                             onClick={() => setActiveTab("bestseller")}
//                         >
//                             BestSellers
//                         </p>
//                         <p
//                             className={`hover:cursor-pointer text-lg md:text-xl font-medium transition-colors ${
//                                 activeTab === "topdeals" ? "text-pink-500 underline decoration-pink-500" : "text-gray-600 hover:text-pink-500"
//                             }`}
//                             onClick={() => setActiveTab("topdeals")}
//                         >
//                             Top-Deals
//                         </p>
//                     </div>

//                     <div className="flex justify-center md:justify-end">
//                         <select
//                             id="sort-options"
//                             onChange={(e) => setSortedOption(e.target.value)}
//                             className="border rounded-md text-gray-600 text-base md:text-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//                         >
//                             <option value="" className="text-gray-500">Sort</option>
//                             <option value="priceLowToHigh">Price: Low to High</option>
//                             <option value="priceHighToLow">Price: High to Low</option>
//                             <option value="latest">Top Latest</option>
//                             <option value="best-rated">High to Low Ratings</option>
//                         </select>
//                     </div>
//                 </nav>

//                 <div className='p-3'>
//                     {activeTab === 'bestseller' && <Bestsellers products={sortedProducts} />}
//                     {activeTab === 'topdeals' && <TopDeals products={sortedProducts} />}
//                     {activeTab === '' && <Productitem products={sortedProducts} />}
//                 </div>
//             </div>  
//         </div>
//     );
// }

// export default AllProducts
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
// import Bestsellers from "../components/Bestsellers";

const AllProducts = () => {
  const {products} = useContext(Context);
  const [showFilters,setFilters] = useState(false);
  const [sortOption, setSortedOption] = useState("");
  const [activeTab, setActiveTab] = useState('bestseller');
  // const [filterProducts,setFilter] = useState([]);
  const [sortedProducts, setSortedProducts] = useState(products || []);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [subCat,setsubcat] = useState([]);
  // const [isVisible, setVisible] = useState(false);

  const handleCat = (e) => {
            const category = e.target.value;

            setSelectedCategory((prev) => 
                prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
            );
        };

  const handleSub = (e) => {
        const subcat = e.target.value;

        setsubcat((prev) => 
          prev.includes(subcat) ? prev.filter((cat) => cat !== subcat) : [...prev,subcat]
        )
  }

  useEffect(() => {
      // setFilter(products);

      let filteredProducts = [...products];

      if (selectedCategory.length > 0) {
                    filteredProducts = filteredProducts.filter((product) => 
                        selectedCategory.includes(product.category)
                    );
                }
      
      if(subCat.length>0) {
        filteredProducts = filteredProducts.filter((product) => (
          subCat.includes(product.subCategory)
        ))
      }

      switch (sortOption) {
                    case 'priceLowToHigh':
                        filteredProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'priceHighToLow':
                        filteredProducts.sort((a, b) => b.price - a.price);
                        break;
                    case 'latest':
                        filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                        break;
                    case 'best-rated':
                        filteredProducts.sort((a, b) => b.rating - a.rating);
                        break;
                    default:
                        break;
                }
        
                setSortedProducts(filteredProducts);
  },[sortOption,products,selectedCategory,subCat]);

  return (
    <div className='flex flex-col md:flex-row gap-1 md:gap-10 pt-10 border-t'> 
        {/* filter options */}
          <div className='min-w-60 pl-2'>
          <p className='text-gray-600  items-center flex font-bold  mb-4'>
                         Filters
                         <div 
                            onClick={() => setFilters(!showFilters)} 
                            className='md:hidden hover:cursor-pointer ml-2'
                        >
                            {showFilters ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </p>
                {/* category filters */}
                  <div className={`border p-2 border-gray-400 ${showFilters? '' : 'hidden'} sm:block`}>
                        <p className='mb-3  text-sm font-medium'>Category</p>
                          <div className='flex flex-col  gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Men'} onChange={handleCat}  />Men
                            </p>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Women'} onChange={handleCat} />Women
                            </p>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Kids'} onChange={handleCat} />Kids
                            </p>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Electronics'} onChange={handleCat} />Electronics
                            </p>
                            {/* <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Men'} />Men
                            </p> */}
                          </div>
                  </div>

                  {/* subcategories */}
                  <div className={`border my-5 border-gray-400 p-2 ${showFilters? '' : 'hidden'} sm:block`}>
                        <p className='mb-3  text-sm font-medium'>Sub-category</p>
                          <div className='flex flex-col  gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Topwear'} onChange={handleSub} />Topwear
                            </p>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={handleSub}  />Bottomwear
                            </p>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Kids'} onChange={handleSub} />Kids
                            </p>
                            <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Electronics'} onChange={handleSub} />Electronics
                            </p>
                            {/* <p className='flex gap-2'>
                              <input className='w-3' type="checkbox" value={'Men'} />Men
                            </p> */}
                          </div>
                  </div>
          </div>
            {/* rightside */}

            <div className="flex flex-col">
                  <div className=" flex justify-between text-base sm:text-2xl mb-4">
                  <div className="flex justify-start pl-2 gap-5">
                         <p
                            className={`hover:cursor-pointer text-lg md:text-xl font-medium transition-colors ${
                                activeTab === "bestseller" ? "text-pink-500 underline decoration-pink-500" : "text-gray-600 hover:text-pink-500"
                            }`}
                            onClick={() => setActiveTab("bestseller")}
                        >
                            BestSellers
                        </p>
                        <p
                            className={`hover:cursor-pointer text-lg md:text-xl font-medium transition-colors ${
                                activeTab === "topdeals" ? "text-pink-500 underline decoration-pink-500" : "text-gray-600 hover:text-pink-500"
                            }`}
                            onClick={() => setActiveTab("topdeals")}
                        >
                            Top-Deals
                        </p>
                    </div>
                            <div className="flex items-center justify-center">
                         <select
                            id="sort-options"
                            onChange={(e) => setSortedOption(e.target.value)}
                            className="border rounded-md md:mr-10 mr-5 text-gray-600 text-base md:text-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="" className="text-gray-500">Sort</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="latest">Top Latest</option>
                            <option value="best-rated">High to Low Ratings</option>
                        </select>
                    </div>
                  </div>
            {/* mapping all the products */}
            <div className='p-3'>
                     {activeTab === 'bestseller' && <Bestsellers products={sortedProducts} />}
                     {activeTab === 'topdeals' && <TopDeals products={sortedProducts} />}
                     {activeTab === '' && <Productitem products={sortedProducts} />}
                 </div>
            </div>

    </div>
  )
}

export default AllProducts

