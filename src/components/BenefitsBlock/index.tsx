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
  const icons: IconData[] = [data.icon1, data.icon2, data.icon3, data.icon4];

  return (
    <section className="w-full py-20 px-6 md:px-[139px]">
      <div className="max-w-6xl mx-auto space-y-16">
        <BenefitHeader title={data.Title} />
        <BenefitsDesktop icons={icons} />
        <BenefitsMobile icons={icons} />
      </div>
    </section>
  );
}

// Header
function BenefitHeader({ title }: { title: string }) {
  return (
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
        <h3 className="text-infotertiary  uppercase font-extrabold text-[15px] md:text-[20px] leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}

// Desktop View
function BenefitsDesktop({ icons }: { icons: IconData[] }) {
  const groups = [icons.slice(0, 2), icons.slice(2)];
  return (
    <div className="hidden md:grid md:grid-cols-2 gap-20">
      {groups.map((group, idx) => (
        <div key={idx} className="space-y-10">
          {group.map((icon, i) => (
            <BenefitItem key={i} icon={icon} />
          ))}
        </div>
      ))}
    </div>
  );
}

// Mobile View
function BenefitsMobile({ icons }: { icons: IconData[] }) {
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

// Benefit Item
function BenefitItem({ icon }: { icon: IconData }) {
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
