'use client';

import { useEffect, useState } from 'react';
import { overlayColor } from '@/utils/color';

type DataHead = {
  image: string;
  Title: string;
  Title2: string;
};

export default function HeaderBlock({ data }: { data: DataHead }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1025);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return isDesktop ? <HeaderDesktop data={data} /> : <HeaderMobile data={data} />;
}


function HeaderDesktop({ data }: { data: DataHead }) {
  return (
    <div
      style={{ backgroundImage: `url(${data.image})` }}
      className="w-full h-screen bg-cover bg-right bg-no-repeat relative"
    >
  
      <div className={`h-[20vh] w-full ${overlayColor}`} />
      <div className="relative h-[70vh] w-full flex">
        <div className={`h-full w-1/24 ${overlayColor}`} />
        <div className={`h-full w-8/24 ${overlayColor}`} />
        <div className="h-full w-14/24" />
        <div className={`h-full w-1/24 ${overlayColor}`} />

        <div className="absolute z-10 top-0 left-[4.1667%] w-[33.3333%] h-full flex flex-col justify-center">
          <p className="text-[5vw] font-gothic text-white">{data.Title}</p>
          <p className="text-[120px] text-secondary font-fave">{data.Title2}</p>
        </div>
      </div>
      <div className={`h-[10vh] w-full ${overlayColor}`} />
    </div>
  );
}


function HeaderMobile({ data }: { data: DataHead }) {
  return (
    <div
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: '200% 100%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative w-full h-[66.6667vh] overflow-hidden bg-no-repeat bg-cover"
    >
   
      <div className={`absolute inset-x-0 top-0 h-1/2 ${overlayColor}`} />
      <div className={`absolute top-1/2 left-0 w-3/24 h-3/10 ${overlayColor}`} />
      <div className={`absolute top-1/2 right-0 w-2/24 h-3/10 ${overlayColor}`} />
      <div className={`absolute bottom-0 inset-x-0 h-1/5 ${overlayColor}`} />

      
      <div className="relative z-10 px-[4.1667%] pt-[20vh] h-1/2 flex flex-col">
        <p className="text-5xl md:text-6xl font-gothic text-white">{data.Title}</p>
        <p className="text-6xl md:text-7xl text-accent font-fave italic">{data.Title2}</p>
      </div>

      
      <div className="h-3/10" />
      <div className="h-1/5" />
    </div>
  );
}
