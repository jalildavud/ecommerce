import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';

const Product = ({product}) => {

  const {addToCart} = useContext(CartContext);
  const {id, image, category, title, price} = product;
  return (
    <div>
      <div className='border border-purple-300 h-[300px] mb-4 overflow-hidden
      relative group transition' key={product.id}>
        <div className='w-full h-full flex justify-center items-center'>
          <div>
            <img src={image} alt="" className='max-h-[160px] group-hover:scale-125
            transition duration-300'/>
          </div>
          <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex
          flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100
          transition-all duration-300'>
            <button>
              <div className='flex justify-center items-center bg-red-500
               text-white w-12 h-12' onClick={()=>addToCart(product,id)}>
               <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='flex justify-center items-center
            drop-shadow-xl w-12 h-12 bg-white'>
               <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className='text-sm capitalize text-gray-500'>
          {category}
        </div>
        <Link to={`/product/${id}`}>
           <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold '>$ {price}</div>
      </div>
    </div>
  )
}

export default Product;
