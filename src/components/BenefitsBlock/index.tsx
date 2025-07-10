'use client';
import Image from 'next/image';
import { BenefitsBlockData } from './type';

export default function BenefitsBlock({ data }: { data: BenefitsBlockData }) {
  const icons = data.items;
  return (
    <section className="w-full py-8 px-5 pl-6 lg:py-37.5 lg:px-35">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row md:gap-4 lg:mb-16a mb-16  ">
          <div className="w-full md:w-1/2 text-left p">
            <h2 className=" font-bold leading-tight">
              <span className="text-secondary text-6xl">Key</span>{' '}
              <span className="text-[#E46F24] text-[85px] md:text-[85] font-fave italic">
                Benefits
              </span>
            </h2>
          </div>  
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-infotertiary uppercase text-secondary font-extrabold text-xl lg:text-3xl leading-snug ml-0 lg:ml-6">
              {data.title}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row h-auto lg:h-35 gap-4 lg:gap-6 items-start lg:items-center">
                <div className="relative w-30 h-30 p-0.5 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${icon.image}`} alt={icon.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="  text-[32px] w-2/3 font-omnes text-ink text-left">
                  <strong>{icon.title}</strong>
                </h3>
              </div>
              <p className="text-ink lg:text-base text-2xl leading-relaxed">{icon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
