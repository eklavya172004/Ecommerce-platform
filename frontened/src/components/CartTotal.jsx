import React, { useContext } from 'react'
import { Context } from '../context/Context'

const CartTotal = () => {

    const {ruppeeSign,delivery_charges,totalamount} = useContext(Context);

  return (
          <div className='w-full'>
                <div className='text-2xl'>
                        <p>Cart Total</p>
                </div>

                    <div className='w-full flex flex-col gap-2 mt-10 text-xl'>
                            <div className='flex justify-between'>
                                <p>SubTotal</p>
                                <p>{ruppeeSign}{totalamount()}.00</p>
                            </div>

                            <hr />

                            <div className='flex justify-between'>
                                    <p>Shipping Fee</p>
                                    <p>{ruppeeSign}{delivery_charges}</p>
                            </div>

                            <hr />

                            <div className='flex justify-between'>
                                <p>Total</p>
                                <p>{ruppeeSign}{totalamount() === 0 ? 0 :totalamount()+delivery_charges}</p>
                            </div>
                    </div>
    </div>
  )
}

export default CartTotal
