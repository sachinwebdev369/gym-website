import React from 'react';
import { faq } from '../data';
import Accordion from "./Accordion"

const Faq = () => {
  const { icon, title, accordions} = faq
  return <section className=' section pt-[480px] lg:pt-[200px]' id='faq' >
    <div className='mx-auto max-w-[768px] lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1170px] lg:pt-6 mb-[80px] lg:mb-0'>
      {/* title */}
      <div className='section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0 '>
        <img src={icon} alt="" className='lg:hidden' />
        <h2 className='section-title h2 lg:mt-[100px]'>{title} <span className='text-primary-200'>.</span></h2>
      </div>
      {/* accordian list  */}
      <div className='flex flex-col gap-y-4 px-4' data-aos="fade-up" data-aos-offset="300" data-aos-delay="200">
        {
          accordions.map((accordion, idx)=> {
            return <Accordion accordion={accordion} key={idx} />
          })
        }
      </div>
    </div>
  </section>;
};

export default Faq;
