type DataHead = {
  image: string;
  Title: string;
  Title2: string;
};
import {overlayColor} from "@/utils/color";
export default function HeaderMobile({ data }: { data: DataHead }) {
  return (
    <div
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: '200% 100%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative w-full h-[66.6667vh] overflow-hidden bg-no-repeat bg-cover"
    >
      <div className={`absolute inset-x-0 top-0 h-1/2 ${overlayColor}`} />
      <div className={`absolute top-1/2 left-0 w-3/24 h-3/10 ${overlayColor}`} />
      <div className={`absolute top-1/2 right-0 w-2/24 h-3/10 ${overlayColor}`} />
      <div className={`absolute bottom-0 inset-x-0 h-1/5 ${overlayColor}`} />
      <div className="relative z-10 px-[4.1667%] pt-[20vh] h-1/2 flex flex-col">
        <p className="text-5xl md:text-6xl font-gothic text-white">{data.Title}</p>
        <p className="text-6xl md:text-7xl text-head font-fave italic">{data.Title2}</p>
      </div>
      <div className="h-3/10" />
      <div className="h-1/5" />
    </div>
  );
}
