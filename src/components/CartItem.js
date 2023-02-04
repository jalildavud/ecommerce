import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdClose,IoIosAdd, IoIosRemove} from 'react-icons/io';
import { CartContext } from '../context/CartContext';

const CartItem = ({item}) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full 
    font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${item.id}`}>
          <img src={item.image} alt="" className='max-w-[80px]' />
        </Link>
        <div className='w-full flex flex-col'>

          <div className='flex justify-between'>
            <div className='flex'>
            <Link to={`/product/${item.id}`} className='text-sm uppercase 
            font-medium max-w-[240px] hover:underline'>{item.title}</Link>
            </div>
            <div className='text-xl cursor-pointer'>
              <IoMdClose onClick={()=> removeFromCart(item.id)} className='text-gray-500 hover:text-red-500 transition '/>
            </div>
          </div>
          <div className='flex items-center mt-2'>
            <div className='flex items-center border px-1 '>
              <div onClick={()=>decreaseAmount(item.id)} className='flex-1 cursor-pointer hover:text-red-500'>
                <IoIosRemove />
              </div>
              <div className='flex-1 px-2'>
                {item.amount}
              </div>
              <div onClick={()=>increaseAmount(item.id)} className='cursor-pointer hover:text-green-500'>
                <IoIosAdd />
              </div>
            </div>
            <div className='flex flex-1 justify-around items-center'>
              $ {item.price}
            </div>
            {/* Make the price 2 decimals */}
            <div className='flex flex-1 justify-end'>
              {`$ ${parseFloat(item.price * item.amount).toFixed(2)}`}
            </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
