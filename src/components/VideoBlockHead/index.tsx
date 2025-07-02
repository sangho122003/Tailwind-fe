'use client';

export type videodata = {
  id:string;
  urlvideo: string;
  title: string;
  dis: string;
};

export default function VideoBlockHead({ data }: { data: videodata }) {
  return (
    <div className="w-full min-h-auto lg:min-h-[91.2vh]">
      <div className="hidden lg:flex w-full min-h-[91.2vh]">
        <VideoDesktopHead data={data} />
      </div>
      <div className="block lg:hidden px-[4.17vw] py-6">
        <VideoMobileHead data={data} />
      </div>
    </div>
  );
}

function VideoDesktopHead({ data }: { data: videodata }) {
  return (
    <>
      <div className="w-1/24" />
      <div className="w-22/24">
        <div className="h-[16.94%] w-full" />
        <div className="h-[66.10%] w-full flex">
          <div className="w-2/3 aspect-[16/9] relative overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={data.urlvideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="w-1/3 h-full flex">
            <div className="w-1/10" />
            <div className="w-9/10 h-full">
              <div className="h-1/4" />
              <div className="h-1/2 flex flex-col justify-center">
                <h1 className="text-[25px] text-secondary font-bold leading-tight">
                  {data.title}
                </h1>
                <p className="text-[20px] pt-4">{data.dis}</p>
              </div>
              <div className="h-1/4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/24" />
    </>
  );
}
function VideoMobileHead({ data }: { data: videodata }) {
  return (
    <div className="h-auto pt-3 pb-0">
      <div className="aspect-[16/9] w-full mb-2">
        <iframe
          className="w-full h-full"
          src={data.urlvideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <h1 className="text-[16px] font-semibold text-secondary leading-snug mb-1">
        {data.title}
      </h1>
      <p className="text-[13px] text-black leading-snug">{data.dis}</p>
    </div>
  );
}
