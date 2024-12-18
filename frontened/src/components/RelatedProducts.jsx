import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import Productitem from './Productitem';

const RelatedProducts = ({category,subcategory}) => {

  const {products} = useContext(Context);
  const [related,setRelated] = useState([]);

  useEffect(() => {
    if(products.length>0){

          let filterProducts = products.slice();
       
          filterProducts = filterProducts.filter((item) => category === item.category );
          filterProducts = filterProducts.filter((item) => subcategory === item.subCategory);

          setRelated(filterProducts);
    }
  },[products,category,subcategory]);

  return (
    <div className='p-5'>
          <hr className='w-full bg-gray-500' />
          <h1 className='md:text-3xl text-xl mt-3 text-left '>Related Products</h1>
          <div className='mt-3'>
              {
                  <Productitem products={related} />
              }
          </div>  
    </div>
  )
}

export default RelatedProducts
