'use client';

import { useState, useEffect } from 'react';
import Logo from '@/utils/Logo/Logo';

export default function Menu() {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
        ${hasScrolled ? 'bg-primary' : 'bg-transparent'}
        flex flex-col min-h-[90px] h-[8.46vw] max-h-[120px]
      `}
    >
      <div className="flex-1" />
      <div className="flex-1 flex px-[4.17vw]">
        <div className="flex-[5] flex items-center">
          <Logo />
        </div>
        <div className="flex-[13]" />
        <div className="flex-[4] flex items-center justify-end ">
          <button
            className="bg-[#1C8295] pl-2 pt-2 pr-2 pb-2 h-full flex items-center justify-center text-[15px] sm:text-[25px] font-semibold tracking-wide text-white whitespace-nowrap border border-transparent hover:bg-transparent hover:border-white transition-all duration-300"
          >
            SCHEDULE A CALL
          </button>
        </div>
      </div>
      <div className="flex-1" />
    </header>
  );
}
