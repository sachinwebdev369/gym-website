import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation' 
import { Navigation } from 'swiper';

const CommunitySlider = ({ testimonials }) => {
  
  return <Swiper  modules={Navigation} slidesPerView={3} spaceBetween={32} >
    {
      testimonials.map((testimonial, idx)=> {
        const {image, name, message} = testimonial
        return <SwiperSlide key={idx}>
          <div className="relative">
            {/* image  */}
            <div>
             <img src={image} alt="img" />
            </div>
          </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default CommunitySlider;
