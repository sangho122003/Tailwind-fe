import {overlayColor} from "@/utils/color";

type DataHead = {
  image: string;
  Title: string;
  Title2: string;
};

export default function HeaderDesktop({ data }: { data: DataHead }) {

  return (
    <div
      style={{ backgroundImage: `url(${data.image})` }}
      className="w-full h-screen bg-cover bg-right bg-no-repeat relative"
    >
      <div className={`h-[20vh] w-full ${overlayColor}`} />
      <div className="relative h-[70vh] w-full flex">
        <div className={`h-full w-1/24 ${overlayColor}`} />
        <div className={`h-full w-8/24 ${overlayColor}`} />
        <div className="h-full w-14/24" />
        <div className={`h-full w-1/24 ${overlayColor}`} />
        <div className="absolute z-10 top-0 left-[4.1667%] w-[33.3333%] h-full flex flex-col justify-center">
          <p className="text-[5vw] font-gothic text-white">{data.Title}</p>
          <p className="text-[120px] text-second font-fave">{data.Title2}</p>
        </div>
      </div>
      <div className={`h-[10vh] w-full ${overlayColor}`} />
    </div>
  );
}
