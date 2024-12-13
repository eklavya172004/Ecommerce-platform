import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Bestsellers from '../components/Bestsellers';
import TopDeals from '../components/TopDeals';



const AllProducts = () => {

    const {products} = useContext(Context);
    const [value, setValue] = React.useState([0, 1000]);
    const [activeTab,setActiveTab] = useState('bestseller');

    const valuetext = (value) => `${value}`;

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // handling the subcategory
    const [selectedCategory,setSubcategory] = useState([]);
    
    const handleCat = (e) => {
        const category = e.target.value;
        setSubcategory((prev) => prev.includes(category)? prev.filter((cat) => cat!==category):[...prev,category]
        )};

        const subCategories = {
          Men: ['Top-wear', 'Bottom-wear', 'Inner-wear'],
          Women: ['Top-wear', 'Bottom-wear', 'Dresses'],
          Kids: ['Toys', 'Clothing', 'Books'],
      };
  

    return (
    <div className='flex'> 

    {/* categories and filters */}
        <div className='leftSide p-3 flex flex-col gap-5'>

              <div className='flex-col flex justify-center border border-b-gray-30 p-3 items-start '>
                <p className='text-gray-600 font-bold font-serif mb-4'>Filters</p>

              
                  {['Men','Women','Kids','Electronics','Books','Cosmetics'].map((category) => (
                            <div key={category} className='flex gap-2 justify-center items-center font-mono'>
                                <input type="checkbox"
                                onChange={handleCat}
                                checked={selectedCategory.includes(category)}
                                value={category}/>
                                {category}
                                  </div>

                ))}
              </div>

              <div className=''>
                <p>
                  Range
                </p>
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

              {/* sub-category */}
              {
                selectedCategory.length>0 &&( <div className='border border-b-gray-30 p-3'>

                  <div className='flex-col flex justify-center items-start '>
    
                    <p className=
                   {`text-gray-600 font-bold font-serif mb-4`}>Sub-category</p>
    
                        {selectedCategory.map((category) => subCategories[category]?.map((sub) => (
                          
                            <div key={sub} className='flex gap-2 justify-center items-center font-mono'>
                                    <input type="checkbox" value={sub}/>{sub}
                              </div>
                        )))}
                  </div>
    
                  </div>)
              }
             
        </div>

        <div className='maincontent flex flex-col justify-start items-start'>
              <nav className='p-5'>
                  <div className='flex gap-5'>
                        <p className={`hover:cursor-pointer text-xl ${activeTab === 'bestseller'? 'text-pink-500 ': 'text-gray-500' }`} onClick={() => setActiveTab('bestseller')}>BestSellers</p>
                        <p className={`hover:cursor-pointer text-xl ${activeTab === 'topdeals' ? 'text-pink-500' : 'text-gray-500'}`} onClick={() => setActiveTab('topdeals')}>Top-Deals</p>
                  </div>
              </nav>

              <div className='p-3'>
                  {activeTab === 'bestseller' && <Bestsellers products={products} />}
                  {activeTab === 'topdeals' && <TopDeals products={products} />}
              </div>
        </div>
    </div>
  )
}

export default AllProducts
