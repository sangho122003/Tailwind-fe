'use client';

import Image from 'next/image';

type IconData = { Image: string; title: string; dis: string };

type BenefitsBlockData = {
  Title: string;
  icon1: IconData;
  icon2: IconData;
  icon3: IconData;
  icon4: IconData;
};

export default function BenefitsBlock({ data }: { data: BenefitsBlockData }) {
  return (
    <section className="w-full py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ===== Heading row ===== */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 text-center md:text-left p-[10vh]">
            <h2 className="text-[48px] font-bold">
              <span className="text-keySecond">KEY</span>{' '}
              <span className="text-[#E46F24] text-[60px] font-fave italic">Benefits</span>
            </h2>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left p-[10vh]">
            <h3 className="text-keySecond uppercase font-extrabold text-[15px] md:text-[20px] leading-tight">
              {data.Title}
            </h3>
          </div>
        </div>

        {/* ===== Icon blocks ===== */}
        <div className="grid md:grid-cols-2 gap-20">
          {[ [data.icon1, data.icon2], [data.icon3, data.icon4] ].map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-10">
              {group.map((icon, i) => (
                <div key={i} className="space-y-2">
                  {/* Container để giữ width cho cả cụm */}
                  <div className="inline-flex items-center gap-6">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-full ${groupIdx === 1 ? 'bg-[#71C1B3]' : ''}`}>
                      <Image src={icon.Image} alt={icon.title} width={68} height={68} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1E1E1E]">{icon.title}</h3>
                  </div>
                  {/* p width đúng bằng container */}
                  <p className="text-[#1E1E1E] text-base leading-relaxed w-fit">
                    {icon.dis}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
