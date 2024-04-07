import React from 'react';
import { footer } from '../data';


const Footer = () => {
  const {logo, copyrightText} = footer;
  return <footer className='bg-neutral-500 h-[125px] md:h-[129px] px-5'>
    <div data-aos='fade-up' data-aos-delay="200" className="container mx-auto flex items-center justify-between h-full">
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <p className='text-neutral-300 text-sm'>{copyrightText}</p>
    </div>
  </footer>;
};

export default Footer;
