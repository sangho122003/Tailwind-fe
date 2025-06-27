'use client';

import { BenefitHeader, IconData } from './common';
import BenefitsDesktop from './BenefitsDesktop';
import BenefitsMobile from './BenefitsMobile';

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
