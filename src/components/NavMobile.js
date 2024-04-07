import React from 'react';

import {nav} from '../data'

const NavMobile = ({navMobile}) => {
  return <nav className={`${navMobile? "min-h-screen": "min-h-0"} w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0 lg:hidden`}>

    <ul className='flex flex-col justify-center items-center h-full gap-y-8 '>
      {
        nav.map((item,idx)=> {
          return <li key={idx}> <a href={item.href} className='text-white text-body-md '  > {item.name} </a> </li>
        })
      }
    </ul>
   <div className='-mt-44 flex justify-center  gap-x-8'>
    <button className='btn btn-lg btn-outline'>Login</button>
    <button className='btn btn-lg btn-primary'>SignUp</button>
   </div>
  </nav>;
};

export default NavMobile;
