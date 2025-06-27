'use client';
import Image from 'next/image';
import { IconData } from './common';

export default function BenefitsMobile({ icons }: { icons: IconData[] }) {
  return (
    <div className="flex flex-col gap-20 md:hidden">
      {icons.map((icon, idx) => (
        <div key={idx} className="flex flex-col items-start space-y-4">
          <div className="w-[118px] h-[118px] relative">
            <Image
              src={icon.Image}
              alt={icon.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-ink ">{icon.title}</h3>
          <p className="text-ink text-base leading-relaxed ">{icon.dis}</p>
        </div>
      ))}
    </div>
  );
}
