import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { BsBag } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {

  const [ isActive, setIsActive ] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount} = useContext(CartContext);

  //event listener
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} 
    fixed w-full z-10 transition-all`}>
      <div className='container flex mx-auto items-center justify-between h-full max-w-sm md:max-w-6xl'>
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt="" />
          </div>
        </Link>
        <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl'/>
          <div className='bg-red-500 absolute -right-2 -bottom-2 rounded-full justify-center items-center
          w-[18px] h-[18px] text-[12px] flex'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
