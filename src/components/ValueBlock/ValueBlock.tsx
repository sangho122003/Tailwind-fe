"use client";
import { useState, useEffect } from 'react';
type ValueBlockData = {
  Title: string;
  url: string;
  Title2: string;
  subject: string;
};

export default function ValueBlock({ data }: { data: ValueBlockData }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1025);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (!isDesktop) {
    if (!isDesktop) {
      return (
        <div
          style={{ backgroundImage: `url(${data.url})` }}
          className="relative w-full h-screen bg-left bg-cover bg-no-repeat"
        >
          {/* === Block 1: Top === */}
          <div className="w-full h-[40vh] bg-keyBlue flex mix-blend-multiply">
            <div className="w-1/24 h-full"></div>
            <div className="w-21/24 h-full"></div>
            <div className="w-2/24 h-full"></div>
          </div>
          {/* Content TOP tách riêng, giữ tỉ lệ */}
          <div className="absolute top-0 w-full h-[40vh] flex">
            <div className="w-1/24 h-full"></div>
            <div className="w-21/24 h-full flex flex-col justify-center">
              <p className="text-white font-gothic text-[50px] leading-tight">
                VALUE OF 340B HEALTH
              </p>
              <p className="text-second font-fave text-[100px] leading-tight">
                Membership
              </p>
            </div>
            <div className="w-2/24 h-full"></div>
          </div>

          {/* === Block 2: Middle === */}
          <div className="w-full h-[30vh]">
            <div className="z-10 w-full h-full flex">
              <div className="w-3/24 h-full bg-keyBlue mix-blend-multiply"></div>
              <div className="w-19/24 h-full"></div>
              <div className="w-2/24 h-full bg-keyBlue mix-blend-multiply"></div>
            </div>
          </div>

          {/* === Block 3: Bottom === */}
          <div className="w-full h-[30vh] flex bg-keyBlue mix-blend-multiply">
            <div className="w-1/24 h-full"></div>
            <div className="w-21/24 h-full"></div>
            <div className="w-2/24 h-full"></div>
          </div>
          {/* Content BOTTOM tách riêng, giữ tỉ lệ */}
          <div className="absolute bottom-0 w-full h-[30vh] flex">
            <div className="w-1/24 h-full"></div>
            <div className="w-21/24 h-full flex flex-col">
              <div className="w-full h-1/3 flex items-center">
                <strong><h3
                  className="
      text-white
      leading-tight
      line-clamp-3
      text-[clamp(2rem,3vw,3rem)]
    "
                >
                  {data.Title2}
                </h3></strong>
              </div>

              <div className="w-full h-2/3 flex items-center">
                <h3 className="text-white">{data.subject}</h3>
              </div>
            </div>
            <div className="w-2/24 h-full"></div>
          </div>
        </div>
      );
    }


  }
  return (
    <div
      style={{ backgroundImage: `url(${data.url})` }}
      className="relative w-full h-screen bg-left bg-cover bg-no-repeat"
    >
      <div className="w-full h-full flex">
        <div className="w-1/24 h-full bg-keySecond mix-blend-multiply"></div>

        <div className="w-21/24 h-full relative">
          {/* ✅ Top overlay FIXED */}
          <div className="w-full h-4/10 relative">
            {/* Layer màu blend */}
            <div className="absolute inset-0   font-fave bg-keySecond mix-blend-multiply"></div>

            {/* Layer chữ KHÔNG blend */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex flex-col text-left pl-0">
                <p className="text-white font-gothic text-[50px] leading-tight">
                  VALUE OF 340B HEALTH
                </p>
                <p className="  text-second font-fave text-[100px] leading-tight">
                  Membership
                </p>
              </div>
            </div>
          </div>

          {/* Middle block with blended color */}
          <div className="w-full h-5/10 flex">
            <div className="w-1/2 h-full"></div>
            <div className="w-1/2 h-full bg-keySecond mix-blend-multiply"></div>

            {/* ✅ Content layer TRÊN overlay */}
            <div className="absolute top-[40%] left-1/2 w-1/2 h-5/10 flex">
              <div className="w-2/10 h-full"></div>
              <div className="w-8/10 h-full flex items-center">
                <div className="w-full h-[80%] flex flex-col gap-4">
                  <div className="flex-[1] flex items-center justify-center p-2">
                    <h3
                      className="
                        text-white
                        leading-tight
                        line-clamp-3
                        text-[clamp(1rem,3vw,3rem)]
                      "
                    >
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

          {/* Bottom overlay */}
          <div className="w-full h-1/10 bg-keySecond mix-blend-multiply"></div>
        </div>

        <div className="w-2/24 h-full bg-keySecond mix-blend-multiply"></div>
      </div>
    </div>
  );
}
