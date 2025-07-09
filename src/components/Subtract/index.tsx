'use client';
import { useEffect, useState } from 'react';
import { overlayColor } from '@/utils/color';
type dataSubtract = {
  id: number;
  image: string;
  title: string;  
  dis: string;
};
export default function Subtract({ data }: { data: dataSubtract }) {
  const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`
  return (<div
    className="
        relative w-full max-h-231 bg-no-repeat h-screen
        bg-[length:200%_100%] lg:bg-cover bg-[position:right_center] lg:bg-right 
      "
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className='w-full h-full flex '>
      <div className='w-full h-full lg:h-full lg:w-7/12 lg:relative lg:overlay-yellow '>
        <div className='w-full h-1/3 lg:h-1/3 relative overlay-yellow'>
          <div className="relative px-[4vw] z-10 pt-15  pl:pt-25 w-full h-full">
            <div className='w-full h-auto mb-16'>
              <p className="text-6xl md:text-6xl uppercase lg:text-8xl font-gothic text-white">
                STAY INFORMED WITH
              </p>
              <p className="text-6xl md:text-7xl lg:text-9xl text-accent font-fave italic lg:not-italic">
                360B Updates
              </p>
            </div>
          </div>
        </div>
        <div className='w-full h-1/3 flex lg:hidden'>
          <div className='w-2/10 h-full relative overlay-yellow'></div>
          <div className='w-7/10 h-full'></div>
          <div className='w-1/10 h-full relative overlay-yellow'></div>
        </div>
        <div className='w-full h-1/3 lg:h-2/3 lg:py-15 relative overlay-yellow'>
          <div className='w-full h-auto lg:pr-32 xl:pr-52 2xl:pr-72 px-[4vw] lg:p-15 z-10 lg:pl-15 relative p-2'>
            <h1 className='text-white text-4xl lg:text-6xl font-gothic'>{data.title}</h1>
            <p className='text-white text-sm lg:mt-2'>{data.dis}</p>
          </div>
        </div>
      </div>
      <div className='w-5/12 h-full hidden lg:flex'>
        <div className='w-8/10 h-full'>
          <div className='w-full h-1/10 relative overlay-yellow'></div>
          <div className='w-full h-8/10'></div>
          <div className='w-full h-1/10 relative overlay-yellow'></div>
        </div>
        <div className='w-2/10 h-full relative overlay-yellow'></div>
      </div>
    </div>

  </div>)
}
