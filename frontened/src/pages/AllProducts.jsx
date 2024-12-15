import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Bestsellers from '../components/Bestsellers';
import TopDeals from '../components/TopDeals';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Productitem from '../components/Productitem';

const AllProducts = () => {
    const {products} = useContext(Context);
    const [value, setValue] = React.useState([0, 5000]);
    const [activeTab,setActiveTab] = useState('bestseller');
    const [sortOption,setSortedOption] = useState("");
    const [sortedProducts, setSortedProducts] = useState(products || []);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState([]);    
    
    const subCategories = {
      Men: ['Topwear', 'Bottomwear', 'Innerwear'],
      Women: ['Women-Bottom', 'Dresses'],
      Kids: ['Toys', 'Clothing', 'Books'],
      Electronics: ['Audio', 'Gadgets'],
      Books: ['Fiction', 'NonFiction'],
      Cosmetics: ['Skincare', 'Makeup']
    };

    const valuetext = (value) => `${value}`;

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [isVisible, setVisible] = useState(false);
    
    const handleCat = (e) => {
      const category = e.target.value;
      setSelectedCategory((prev) => 
        prev.includes(category) ? prev.filter((cat) => cat !== category): [...prev, category]
      );
    };
      
    const handleSubcat = (e) => {
      const subCat = e.target.value;
      setSelectedSubcategory((prev) => 
        prev.includes(subCat)
          ? prev.filter((cat) => cat !== subCat)
          : [...prev, subCat]
      );
    }
      
    // Comprehensive filtering and sorting effect
    useEffect(() => {
      // Start with the full product list
      let filteredProducts = [...products];

      // Filter by category - if any categories are selected
      if (selectedCategory.length > 0) {
        filteredProducts = filteredProducts.filter((product) => 
          selectedCategory.includes(product.category)
        );
      }

      // Filter by subcategory if any subcategories are selected
      if (selectedSubcategory.length > 0) {
        filteredProducts = filteredProducts.filter((product) => 
          selectedSubcategory.some((subCat) => 
            product.subCategory && product.subCategory.includes(subCat)
          )
        );
      }

      // Filter by price range
      filteredProducts = filteredProducts.filter((product) => 
        product.price >= value[0] && product.price <= value[1]
      );

      // Sorting logic
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
    }, [products, selectedCategory, selectedSubcategory, sortOption, value]);

    // Render available subcategories based on selected main categories
    const renderSubcategories = () => {
      const availableSubcategories = selectedCategory.flatMap(category => 
        subCategories[category] || []
      );

      return availableSubcategories.length > 0 ? (
        <div className='border border-b-gray-30 p-3'>
          <div className='flex-col flex justify-center items-start'>
            <p className='text-gray-600 font-bold font-serif mb-4'>Sub-category</p>
            {availableSubcategories.map((sub) => (
              <div 
                key={sub} 
                className='flex gap-2 justify-center items-center font-mono'
              >
                <input 
                  type="checkbox"
                  value={sub}
                  onChange={handleSubcat}
                  checked={selectedSubcategory.includes(sub)}
                />
                {sub}
              </div>
            ))}
          </div>
        </div>
      ) : null;
    };

    return (
        <div className='md:flex-row flex flex-col'> 
            {/* Categories and filters */}
            <div className='leftSide p-3 md:flex md:flex-col gap-5'>
                <div className='flex-col flex justify-center border border-b-gray-30 p-3 items-start'>
                    <p className='text-gray-600 justify-center items-center flex font-bold font-serif mb-4'>
                        Filters
                        <div 
                            onClick={() => setVisible(!isVisible)} 
                            className='hover:cursor-pointer ml-2'
                        >
                            {isVisible ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </p>

                    {['Men','Women','Kids','Electronics','Books','Cosmetics'].map((category) => (
                        <div 
                            key={category} 
                            className={`${isVisible ? 'flex gap-2 justify-center items-center font-mono' : 'hidden'}`}
                        >
                            <input 
                                type="checkbox"
                                onChange={handleCat}
                                checked={selectedCategory.includes(category)}
                                value={category}
                            />
                            {category}
                        </div>
                    ))}
                </div>

                <div>
                    <p>Price Range</p>
                    <Box sx={{ width: 200 }}>
                        <Slider
                            getAriaLabel={() => 'Price range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={5000}
                        />
                    </Box>
                </div>

                {/* Dynamic Subcategories */}
                {renderSubcategories()}
            </div>

            <div className='maincontent flex flex-col justify-start items-start'>
                <nav className="p-5 flex md:flex-row items-center w-full md:justify-between gap-4 bg-white rounded-md">
                    <div className="flex justify-center gap-5">
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

                    <div className="flex justify-center md:justify-end">
                        <select
                            id="sort-options"
                            onChange={(e) => setSortedOption(e.target.value)}
                            className="border rounded-md text-gray-600 text-base md:text-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        >
                            <option value="" className="text-gray-500">Sort</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="latest">Top Latest</option>
                            <option value="best-rated">High to Low Ratings</option>
                        </select>
                    </div>
                </nav>

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