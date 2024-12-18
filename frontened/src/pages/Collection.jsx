import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

const Collection = () => {
    const {products} = useContext(Context);
    const [showFilter,setShowFilter] = useState(false);

  return (
    <div className='flex flex-col md:flex-row gap-1 md:gap-10 pt-10 border-t'>
        {/* filter options */}
            <div className='min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters</p>
                    {/* Category filter */}
                        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'' : 'hidden'} md:block`} >
                            <p className='mb-3 text-sm font-medium'>Categories</p>
                                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                                    <p>
                                        
                                    </p>
                                </div>
                        </div>
            </div>
    </div>
  )
}

export default Collection
