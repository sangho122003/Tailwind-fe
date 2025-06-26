type videodata = {
  urlvideo: string;
  Title: string;
  Dis: string;
};

export default function VideoBlockHead({ data }: { data: videodata }) {
  return (
    <div className="w-full min-h-auto lg:min-h-[91.2vh]">

      {/* Desktop */}
      <div className="hidden lg:flex w-full min-h-[91.2vh]">
        <VideoDesktop data={data} />
      </div>

      {/* Mobile */}
      <div className="block lg:hidden px-4 py-6">
        <VideoMobile data={data} />
      </div>
    </div>
  );
}

function VideoDesktop({ data }: { data: videodata }) {
  return (
    <>
      <div className="w-1/24" />
      <div className="w-22/24">
        <div className="h-[16.94%] w-full" />
        <div className="h-[66.10%] w-full flex">
          {/* Left: Video */}
          <div className="w-2/3 h-full">
            <iframe
              className="w-full h-full"
              src={data.urlvideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Right: Text */}
          <div className="w-1/3 h-full flex">
            <div className="w-1/10" />
            <div className="w-9/10 h-full">
              <div className="h-1/4" />
              <div className="h-1/2 flex flex-col justify-center">
                <h1 className="text-[25px] text-second font-bold leading-tight">
                  {data.Title}
                </h1>
                <p className="text-[20px] pt-4">{data.Dis}</p>
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

function VideoMobile({ data }: { data: videodata }) {
  return (
    <div className="px-[4vw] h-auto pt-3 pb-0">
      <div className="aspect-[16/9] w-full mb-2">
        <iframe
          className="w-full h-full"
          src={data.urlvideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <h1 className="text-[16px] font-semibold text-second leading-snug mb-1">
        {data.Title}
      </h1>
      <p className="text-[13px] text-black leading-snug">{data.Dis}</p>
    </div>
  );
}

