import React from 'react'
import { banner } from '../data'

const Banner2 = () => {
    const {titlePart1, titlePart2, subtitle, textBtn } = banner;

  return (
    <section className='bg-neutral-500 h-[789px]'>
        <div className='container mx-auto h-full'>
            <div className='flex h-full items-center relative -space-x-48 lg:-space-x-24'>
                {/* text  */}
                <div className='flex-1 text-white pl-6 lg:pl-0 z-10'>
                <h1 className='h1 text-white mb-8'>
                    {titlePart1} <br /> 
                    <span className='text-primary-200'>{titlePart2}</span>
                </h1>
                <p className='max-w-[415px] text-body-md lg:texxt-body-lg mb-8 '>{subtitle}</p>
                <button className='btn btn-sm lg:btn-lg btn-secondary'>{textBtn} </button>
                </div>
                {/* image  */}
                <div className='bg-blue-300 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1'></div>
            </div>

        </div>

      
    </section>
  )
}

export default Banner2
