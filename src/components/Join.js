import React from 'react';
import { join } from '../data';

const Join = () => {
  const { image, title, subtitle, btnText } = join
  return <section className='bg-neutral-500 min-h-[537px]'>
    <div className='container mx-auto'>
      {/* image text  */}
      <div className=' flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0'> 
        <div data-aos="fade-right" data-aos-offset="100" data-aos-delay="200" className='-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full'>
          <img src={image} alt="img" />
        </div>
        <div data-aos="fade-left" data-aos-offset="100" data-aos-delay="200" className='max-w-[350px] lg:max-w-[492px] ml-[30px]'>
          <h2 className='h1 text-white md:text-[60px]  md:leading-[62px] mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px] '>Want to join <span className='text-primary-200'>&</span> have fun?</h2>
          <p className='text-body-sm md:text-body-md lg:text-body-lg text-white'>{subtitle}</p>
          <button className='btn btn-secondary btn-lg'>{btnText}</button>
        </div>
      </div>
    </div>
  </section>;
};

export default Join;
