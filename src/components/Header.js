import React, { useEffect, useState } from 'react';
import { header } from '../data';

import Nav from './Nav'
import NavMobile from './NavMobile'
import {RiMenu4Fill, RiCloseFill} from 'react-icons/ri'



const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [navMobile, setNavMobile] = useState(false)

  const {logo, btnLoginText, btnSignupText} = header

  // scroll event
  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false) ;
    })
  })

  return <header className={`${isActive? "bg-neutral-500 py-4" : "bg-transparent py-5"} fixed max-w-[1440px] mx-auto top-0 left-0 right-0 flex justify-between z-30  items-center px-5 lg:px-12 transition-all duration-300 `}>
    {/* logo  */}
    <a href="#">
      <img src={logo} alt="/" />
    </a>
    {/* initially hidden - show on desktop  */}
    <div className='hidden lg:block'>
    <Nav/>
    </div>


    {/*btn: initially hidden - show on desktop  */}
    <div className='hidden lg:flex gap-x-4'>
      <button className='btn btn-lg btn-outline'>{btnLoginText}</button >
      <button className='btn btn-lg btn-primary'>{btnSignupText}</button>
    </div>

    {/*nav menu btn -> initially hidden - show on desktop  */}
    <div onClick={()=> setNavMobile(!navMobile)} className='lg:hidden cursor-pointer hover:text-green-800/80 transition text-3xl text-primary-200'>
      {navMobile? <RiCloseFill/> :<RiMenu4Fill/>  }
      
    </div>

    {/* nav mobile-  hiden on desktop */}
    <NavMobile navMobile={navMobile} />
    
    
    </header>;
};

export default Header;
