'use client';

import { useEffect, useState } from 'react';

export type ValueBlockData = {
  Title: string;
  url: string;
  Title2: string;
  subject: string;
};

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

function ValueDesktop({ data }: { data: ValueBlockData }) {
  return (
    <div
      style={{ backgroundImage: `url(${data.url})` }}
      className="relative w-full h-screen bg-left bg-cover bg-no-repeat"
    >
      <div className="w-full h-full flex">
        {/* Left overlay */}
        <div className="w-1/24 h-full bg-secondary bg-opacity-60 mix-blend-multiply" />

        <div className="w-21/24 h-full relative">
          {/* Top Title */}
          <div className="w-full h-4/10 relative">
            <div className="absolute inset-0 font-fave bg-secondary bg-opacity-60 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center">
              <div className="flex flex-col text-left pl-0">
                <p className="text-white font-gothic text-[50px] leading-tight">
                  VALUE OF 340B HEALTH
                </p>
                <p className="text-secondary font-fave text-[100px] leading-tight">
                  Membership
                </p>
              </div>
            </div>
          </div>

          {/* Middle Content */}
          <div className="w-full h-5/10 flex">
            <div className="w-1/2 h-full" />
            <div className="w-1/2 h-full bg-secondary bg-opacity-60 mix-blend-multiply" />

            <div className="absolute top-[40%] left-1/2 w-1/2 h-5/10 flex">
              <div className="w-2/10 h-full" />
              <div className="w-8/10 h-full flex items-center">
                <div className="w-full h-[80%] flex flex-col gap-4">
                  <div className="flex-[1] flex items-center justify-center p-2">
                    <h3 className="text-white leading-tight line-clamp-3 text-[clamp(1rem,3vw,3rem)]">
                      {data.Title2}
                    </h3>
                  </div>
                  <div className="flex-[2] flex items-center justify-center p-2">
                    <h3 className="text-white">{data.subject}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Block */}
          <div className="w-full h-1/10 bg-secondary bg-opacity-60 mix-blend-multiply" />
        </div>

        {/* Right overlay */}
        <div className="w-2/24 h-full bg-secondary bg-opacity-60 mix-blend-multiply" />
      </div>
    </div>
  );
}



// -------- Mobile Component --------
function ValueMobile({ data }: { data: ValueBlockData }) {
  return (
    <div
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: '200% 100%',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative w-full h-screen bg-left bg-cover bg-no-repeat"
    >
      {/* Top block */}
      <div className="w-full h-[40vh] bg-info flex mix-blend-multiply">
        <div className="w-1/24" />
        <div className="w-21/24" />
        <div className="w-2/24" />
      </div>
      <div className="absolute top-0 w-full h-[40vh] flex">
        <div className="w-1/24" />
        <div className="w-21/24 flex flex-col justify-center">
          <p className="text-white font-gothic text-[50px] leading-tight">
            VALUE OF 340B HEALTH
          </p>
          <p className="text-accent font-fave text-[100px] leading-tight">
            Membership
          </p>
        </div>
        <div className="w-2/24" />
      </div>

      {/* Middle block */}
      <div className="w-full h-[30vh] flex">
        <div className="w-3/24 bg-info mix-blend-multiply" />
        <div className="w-19/24" />
        <div className="w-2/24 bg-info mix-blend-multiply" />
      </div>

      {/* Bottom block */}
      <div className="w-full h-[30vh] flex bg-info mix-blend-multiply">
        <div className="w-1/24" />
        <div className="w-21/24" />
        <div className="w-2/24" />
      </div>
      <div className="absolute bottom-0 w-full h-[30vh] flex">
        <div className="w-1/24" />
        <div className="w-21/24 flex flex-col">
          <div className="w-full h-1/3 flex items-center">
            <h3 className="text-white uppercase text-[clamp(20px,3vw,3rem)] leading-tight font-bold line-clamp-3">
              {data.Title2}
            </h3>
          </div>
          <div className="w-full h-2/3 flex items-center">
            <h3 className="text-white">{data.subject}</h3>
          </div>
        </div>
        <div className="w-2/24" />
      </div>
    </div>
  );
}
