import { videodata } from "./type";

export default function VideoBlockHead({ data }: { data: videodata }) {
  return (
    <div className="w-full px-[4vw] py-6  lg:py-28">
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-0 ">
        <div className="w-full lg:w-3/5 aspect-[16/9] relative overflow-hidden mr-18">
          <iframe
            className="absolute top-0 left-0 w-full max-w-195 h-full max-h-110"
            src={data.urlvideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="w-full lg:w-2/5 flex items-center  lg:pl-0">
          <div className="w-full">
            <h1 className="text-base lg:text-3xl text-secondary font-bold  lg:leading-tight mb-2">
              {data.title}
            </h1>
            <p className="text-xs lg:text-2xl text-black lg:pt-4">
              {data.dis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
