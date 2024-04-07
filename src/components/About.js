import React from 'react';
import { about } from '../data';
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const About = () => {
  const {title, subtitle1, subtitle2, icon, link} = about
  return <section id='about' className='bg-pink-100 py-[80px] md:[110px] lg:pt-[140px] lg:pb-[180px] section'>
    <div className="container mx-auto px-20 lg:px-[135px]  ">
      {/* section title  */}
      <div className='section-title-group justify-start' data-aos="fade-up" data-aos-delay="100">
        <img src={icon} alt="img" />
        <h2 className="h2 section-title">{title}<span className='text-primary-200'>.</span></h2>
      </div>

      {/* subtitle  */}
      <p className='md:text-body-md mb-12' data-aos="fade-up" data-aos-delay="200">{subtitle1}</p>
      <p className='md:text-body-md mb-8' data-aos="fade-up" data-aos-delay="300">{subtitle2}</p>

      {/* link */}
      <div>
        <a data-aos="fade-up" data-aos-delay="400" className='link flex items-center transition-all gap-x-4 hover:gap-x-6 duration-500' href="#">{link} <IoIosArrowDroprightCircle/></a>
      </div>

      <div>

      </div>

    </div>
  </section>;
};

export default About;
