'use client';
import {overlayColor} from "@/utils/color";

type dataSubtract = {
  Image: string;
  Title: string;
  dis: string;
};

export default function SubtractMobile({ data }: { data: dataSubtract }) {

  return (
    <div
      style={{
        backgroundImage: `url(${data.Image})`,
        backgroundSize: '200% 150%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
    >
      <div className={`w-full h-[25vh] ${overlayColor}`} />
      <div className="absolute top-0 left-0 w-full h-[25vh] z-10 flex flex-col justify-center px-6">
        <h1 className="uppercase text-[40px] font-gothic text-white leading-none">
          Stay Informed With
        </h1>
        <h1 className="font-fave text-[40px] text-head leading-none">340B Updates</h1>
      </div>

      <div className={`w-full h-[35vh] flex`}>
        <div className={`h-full w-1/10 ${overlayColor}`} />
        <div className={`h-full w-8/10`} />
        <div className={`h-full w-1/10 ${overlayColor}`} />
      </div>

      <div className={`w-full h-[40vh] ${overlayColor}`} />
      <div className="absolute bottom-0 left-[4%] w-[75%] h-[40vh] z-10 flex flex-col justify-start">
        <span className="text-white text-[25px] leading-tight">{data.Title}</span>
        <span className="text-white mt-3">{data.dis}</span>
      </div>
    </div>
  );
}
