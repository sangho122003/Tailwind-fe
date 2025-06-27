export type videodata = {
  urlvideo: string;
  Title: string;
  Dis: string;
};

export default function VideoDesktopHead({ data }: { data: videodata }) {
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
