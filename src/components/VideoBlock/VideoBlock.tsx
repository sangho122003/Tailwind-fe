'use client';
type video = {
  id: string;
  url: string;
};
export default function VideoBlock({ data }: { data: video }) {
  return (
    <div className="w-full h-auto relative">
      <div className="w-full lg:px-36 lg:py-35 flex flex-col px-4 py-8 lg:flex-row">
        <div className="mb-7.5 lg:hidden">
          <span className="block text-secondary font-gothic text-6xl font-bold uppercase leading-none">
            SCHEDULE
          </span>
          <span className="block font-fave text-primary text-7xl font-bold leading-none">
            a Call
          </span>
        </div>
        <div className="lg:px-9 flex-1">
          <div className="w-full lg:max-w-195 lg:h-110 relative aspect-[16/9]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={data.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="hidden lg:flex w-full px-8 flex-col justify-center">
          <div>
            <span className="flex text-secondary font-gothic text-[110px] font-bold uppercase leading-none">
              SCHEDULE
            </span>
            <span className="flex font-fave text-primary text-[150px] font-bold leading-none">
              a Call
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
