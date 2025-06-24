'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <header className="fixed top-0 left-0 w-full h-[10vh] z-50">
      {/* Overlay: show when scrolled */}
      <div
        className={`absolute inset-0 bg-primary mix-blend-multiply transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0'
          }`}
      ></div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/icon/Vector.png"
            alt="logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl md:text-3xl text-white font-light">
            340B<span className="font-extrabold">HEALTH</span>
          </h1>

        </div>

        <button className="h-[40px] md:h-[50px] bg-second text-white px-6 rounded hover:bg-keyBlue/90 transition">
          SCHEDULE CALL
        </button>
      </div>
    </header>
  );
}
