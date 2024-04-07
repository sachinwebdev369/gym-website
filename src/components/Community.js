import React from 'react';
import { community } from '../data';
import CommunitySlider from './CommunitySlider'

const Community = () => {
  const { icon, title, testimonials } = community;
  return <section className='section relative ' id='community' >
    <div className="container mx-auto ">
      <div className='flex px-4 '>
      {/*sec title  */}
      <div className='section-title-group max-w-[240px] mx-auto   lg:mx-0'>
        <img src={icon} alt="" />
        <h2 className='h2 section-title '>{title} <span className='text-primary-200'>.</span></h2>
      </div>
      {/* slider  */}
      <div className=' sm:w-[1140px] lg:w-[940px] absolute  top-48 -right-[370px] lg:top-0   lg:-right-[200px] w-[700px]'>
        <CommunitySlider testimonials={testimonials}/>
      </div>
      </div>
    </div>
  </section>;
};

export default Community;
