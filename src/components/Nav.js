import React from 'react';
import { nav } from '../data';

const Nav = () => {
  return <div>
    <ul className='flex text-white gap-x-8 '>
      {
        nav.map((item,idx) => {
          return <li key={idx}> <a href={item.href} className='hover:text-primary-200 transition' > {item.name} </a></li>
        })
      }
    </ul>
  </div>;
};

export default Nav;
