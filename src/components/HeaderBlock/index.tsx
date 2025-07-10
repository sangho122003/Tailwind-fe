'use client';
import { DataHead } from './type';
export default function HeaderBlock({ data }: { data: DataHead }) {
  const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`;
  return (
    <div
      className="
        relative w-full h-160 lg:h-180 bg-no-repeat 
        bg-[length:200%_100%] lg:bg-cover bg-[position:right_center] lg:bg-right
      "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="hidden lg:block relative w-full h-32 overlay-yellow" />
      <div className="block h-56.5 w-full lg:flex relative lg:w-full lg:h-119">
        <div className=" lg:w-11/24 h-full overlay-yellow relative lg:flex lg:items-center ">
          <div className="relative px-[4vw] pt-21 z-10 lg:pl-15">
            <p className="text-6xl md:text-6xl lg:text-27.5 font-gothic text-white">
              {data.title}
            </p>
            <p className="text-6xl md:text-7xl lg:text-9xl text-accent font-fave italic lg:not-italic">
              {data.title2}
            </p>
          </div>

        </div>
        <div className='lg:hidden flex w-full'>
          <div className='w-2/10 h-80 relative overlay-yellow'></div>
          <div className='w-7/10'></div>
          <div className='w-1/10 h-80 relative overlay-yellow'></div>
        </div>
        <div className='lg:hidden w-full h-22.5 relative overlay-yellow '></div>
        <div className=" hidden lg:w-13/24 lg:h-full lg:flex">
          <div className="h-full w-12/13" />
          <div className="h-full w-1/13 relative overlay-yellow" />
        </div>
      </div>
      <div className="hidden lg:block relative w-full h-29 overlay-yellow" />
    </div>
  );
}