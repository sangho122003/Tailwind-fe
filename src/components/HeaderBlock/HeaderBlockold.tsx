'use client';

import Image from 'next/image';

type DataHead = {
  image: string;
  Title: string;
  Title2: string;
};

export default function HeaderBlockold({ data }: { data: DataHead }) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${data.image})` }}
        className="
              w-full h-screen
              bg-cover
              bg-right
              bg-no-repeat
            "
      >
        <div className="w-full h-full">
          <div className="relative flex">
            <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
            <div className="relative flex flex-1">
            </div>
            <div className="relative flex flex-1 justify-end p-[7.5vh]">
            </div>
          </div>
          <div className="hidden md:flex flex-col md:flex-row w-full h-[85%]">
            <div className="relative flex flex-col items-start justify-center w-fit max-w-[100%] px-[5vh]">
              <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
              <h1 className="relative z-10 text-white text-4xl md:text-6xl">{data.Title}</h1>
              <h1 className="relative z-10 text-head font-fave text-9xl md:text-7xl">{data.Title2}</h1>
            </div>
            <div className="flex flex-1">
              <div className="w-full h-full">
                <div className="w-[60%] h-[70%]"></div>
                <div className="w-full h-[30%] bg-primary mix-blend-multiply"></div>
              </div>
              <div className="w-[20%] h-full bg-primary mix-blend-multiply"></div>
            </div>
          </div>
          <div className="block md:hidden w-full h-[85%] flex items-center justify-center">
            <div className="w-full h-full relative">
              <div className="relative w-full h-[20vh] p-[1vh]">
                <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
                <div className="relative z-10">
                  <h1 className="text-white text-4xl md:text-6xl ">{data.Title}</h1>
                  <h1 className="text-head font-fave text-5xl md:text-7xl">{data.Title2}</h1>
                </div>
              </div>
              <div className="w-full h-[60%] flex">
                <div className="w-[10vh] h-full bg-primary mix-blend-multiply"></div>
                <div className="flex-1"></div>
                <div className="w-[10vh] h-full bg-primary mix-blend-multiply"></div>
              </div>
              <div className="w-full h-[20vh] relative">
                <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
