'use client';

import { overlayColor } from '@/utils/color';

type DataHead = {
  id: string;
  image: string;
  title: string;
  title2: string;
};

export default function HeaderBlock({ data }: { data: DataHead }) {
  return (
    <div
      className={`
        relative w-full 
        h-[66.6667vh] lg:h-screen 
        bg-no-repeat bg-cover 
        lg:bg-right
      `}
      style={{
        backgroundImage: `url(http://localhost:8080${data.image})`,
        backgroundSize: '200% 100%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(http://localhost:8080${data.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className={`absolute top-0 inset-x-0 h-1/2 lg:h-[20vh] ${overlayColor}`} />
      <div className={`lg:hidden absolute top-1/2 left-0 w-3/24 h-3/10 ${overlayColor}`} />
      <div className={`lg:hidden absolute top-1/2 right-0 w-2/24 h-3/10 ${overlayColor}`} />
      <div className="hidden lg:grid grid-cols-24 h-[70vh] w-full absolute top-[20vh] left-0">
        <div className={`col-span-1 ${overlayColor}`} />
        <div className={`col-span-8 ${overlayColor}`} />
        <div className="col-span-14" />
        <div className={`col-span-1 ${overlayColor}`} />
      </div>

      <div className={`absolute bottom-0 inset-x-0 justify-center h-1/5 lg:h-[10vh] ${overlayColor}`} />
      <div
        className={`
    absolute z-10
    top-0 left-0
    w-full lg:w-[33.3333%]
    h-1/2 lg:h-[70vh]
    flex flex-col justify-end
    px-6
    lg:left-[3%]
    lg:px-[1%]
  `}
      >
        <p className="text-5xl md:text-6xl lg:text-[5vw] font-gothic text-white">
          {data.title}
        </p>
        <p className="text-6xl md:text-7xl lg:text-[120px] text-accent lg:text-secondary font-fave italic lg:not-italic">
          {data.title2}
        </p>
      </div>
      <div className="lg:hidden h-3/10" />
      <div className="lg:hidden h-1/5" />
    </div>
  );
}
