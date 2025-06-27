'use client';
import {overlayColor} from "@/utils/color";

type dataSubtract = {
  Image: string;
  Title: string;
  dis: string;
};

export default function SubtractDesktop({ data }: { data: dataSubtract }) {;

  return (
    <div
      style={{ backgroundImage: `url(${data.Image})` }}
      className="w-full h-screen bg-cover bg-right bg-no-repeat relative"
    >
      <div className={`h-[10vh] w-full ${overlayColor}`} />
      <div className="relative h-[80vh] w-full flex">
        <div className={`h-full w-1/24 ${overlayColor}`} />
        <div className={`h-full w-14/24 ${overlayColor}`} />
        <div className="h-full w-8/24" />
        <div className={`h-full w-1/24 ${overlayColor}`} />

        <div className="absolute z-10 top-0 left-[4.1667%] w-[58.3333%] h-full flex flex-col justify-center">
          <div className="w-full flex flex-col">
            <h1 className="uppercase text-[100px] font-gothic text-white leading-none">
              Stay Informed With
            </h1>
            <h1 className="font-fave text-[100px] text-head leading-none">
              340B Updates
            </h1>
          </div>
          <div className="w-full mt-4 flex">
            <div className="w-3/4 flex flex-col">
              <span className="text-white text-[40px] leading-tight">{data.Title}</span>
              <span className="text-white">{data.dis}</span>
            </div>
            <div className="w-1/4" />
          </div>
        </div>
      </div>
      <div className={`h-[10vh] w-full ${overlayColor}`} />
    </div>
  );
}
