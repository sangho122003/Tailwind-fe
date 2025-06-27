'use client';

import { useEffect, useState } from 'react';
import SubtractDesktop from './SubtractDesktop';
import SubtractMobile from './SubtractMobile';

type dataSubtract = {
  Image: string;
  Title: string;
  dis: string;
};

export default function Subtract({ data }: { data: dataSubtract }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1050);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return isMobile ? <SubtractMobile data={data} /> : <SubtractDesktop data={data} />;
}
