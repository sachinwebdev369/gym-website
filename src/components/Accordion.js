import React, { useState } from 'react';
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa"

const Accordion = ({accordion}) => {
  const [isOpen, setIsOpen] = useState(false)
  const {question, answer} = accordion


  return <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer'>
    <div className='bg-white border rounded-sm'>
      <div className='min-h-[60px] flex items-center justify-between px-8'>
        <h5 className='h6'>{question}</h5>
        <div className='text-neutral-500 text-xl'>
          {
            isOpen ? <FaChevronCircleUp/> : <FaChevronCircleDown/>
          }
        </div>
      </div>
      <div className={`  ${isOpen? 'min-h-[200px] lg:min-h-[160px]': 'min-h-0 '}  max-h-0 overflow-hidden flex justify-center transition-all px-8`}>
        <div className='mt-6 '>
        {answer}
        </div>
        </div>
    </div>
  </div>;
};

export default Accordion;
