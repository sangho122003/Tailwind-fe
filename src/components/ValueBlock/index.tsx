'use client';

import { useEffect, useState } from 'react';
import ValueDesktop, { ValueBlockData } from './ValueDesktop';
import ValueMobile from './ValueMobile';

export default function ValueBlock({ data }: { data: ValueBlockData }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1025);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return isDesktop ? <ValueDesktop data={data} /> : <ValueMobile data={data} />;
}
