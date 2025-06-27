'use client';

import { useEffect, useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

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
