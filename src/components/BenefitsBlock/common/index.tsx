'use client';
import Image from 'next/image';

export type IconData = {
  Image: string;
  title: string;
  dis: string;
};

export function BenefitHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 space-y-2 md:space-y-0 mb-6">
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
          <span className="text-keySecond">Key</span>{' '}
          <span className="text-[#E46F24] text-[48px] md:text-[60px] font-fave italic">
            Benefits
          </span>
        </h2>
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-keySecond uppercase font-extrabold text-[15px] md:text-[20px] leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}

export function BenefitItem({ icon }: { icon: IconData }) {
  return (
    <div className="space-y-2">
      <div className="inline-flex items-center gap-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={icon.Image}
            alt={icon.title}
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-ink">{icon.title}</h3>
      </div>
      <p className="text-ink text-base leading-relaxed w-fit">{icon.dis}</p>
    </div>
  );
}
