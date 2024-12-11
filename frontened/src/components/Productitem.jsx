import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

const Productitem = ({id,price,image,name}) => {
  const {ruppeeSign} = useContext(Context);

  return (
    <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden flex flex-col text-center'>
          <img className='w-50 h-50 hover:scale-100 transition ease-in-out' src={image} alt="" />
            <p className='text-xl font-bold text-gray-600'>{name}</p>
              <p className='text-sem font-medium'>{ruppeeSign}{price}</p>
        </div>  
    </Link>
  )
}

export default Productitem
