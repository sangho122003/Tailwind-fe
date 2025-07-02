'use client';

import Image from 'next/image';

export type IconData = {
  Image: string;
  title: string;
  dis: string;
};

type BenefitsBlockData = {
  Title: string;
  icon1: IconData;
  icon2: IconData;
  icon3: IconData;
  icon4: IconData;
};

export default function BenefitsBlock({ data }: { data: BenefitsBlockData }) {
  const icons = [data.icon1, data.icon2, data.icon3, data.icon4];

  return (
    <section className="w-full py-20 px-6 md:px-[139px]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:gap-4 space-y-2 md:space-y-0 mb-6">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
              <span className="text-secondary">Key</span>{' '}
              <span className="text-[#E46F24] text-[48px] md:text-[60px] font-fave italic">
                Benefits
              </span>
            </h2>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-infotertiary uppercase font-extrabold text-[15px] md:text-[20px] leading-snug">
              {data.Title}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex items-center h-[140px] gap-6">
                <div className="relative w-[118px] h-[118px] rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={icon.Image}
                    alt={icon.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-lg font-semibold text-ink">
                  {icon.title}  
                </h3>
              </div>
              <p className="text-ink text-base leading-relaxed">{icon.dis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
