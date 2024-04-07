import React from 'react';
import WorkoutSlider from "./WorkoutSlider"
import { workouts } from '../data';
const Workouts = () => {
  const {title, icon} = workouts
  return <section id="workouts" className='section'>
    <div data-aos="fade-up" data-aos-delay="200" className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'>
    <img src={icon} alt="" />
    <h2 className='section-title h2'>{title}</h2>
    </div>
    {/* slider  */}
    <div>
      <WorkoutSlider/>
    </div>
  </section>
};

export default Workouts;
