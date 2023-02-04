import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className={`${isOpen? 'right-0': '-right-full'} w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw]
    xl:max-w-[30vw] lg:px-[35px] transition-all duration-300 px-4 z-20`}>
      <div className='flex items-center justify-between border-b py-6'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[450px] 
                     overflow-y-auto overflow-x-hidden border-b-2'>
          {cart.map((item)=>{
          return <CartItem item={item} key={item.id}/>
          })}
      </div>
      <div className='mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='font-semibold'>
            <span className='mr-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={() => clearCart()} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 
          flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
