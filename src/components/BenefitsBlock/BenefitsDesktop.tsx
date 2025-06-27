'use client';
import { IconData, BenefitItem } from './common';

export default function BenefitsDesktop({ icons }: { icons: IconData[] }) {
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
