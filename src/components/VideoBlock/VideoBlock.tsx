type video = {
  url: string;
};

export default function VideoBlock({ data }: { data: video }) {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center px-4 sm:px-10">
      {/* Top spacer */}
      <div className="w-full h-[5vh]"></div>

      {/* "Schedule a Call" for mobile - show only on small screens */}
      <div className="block lg:hidden  w-full h-[21vh] flex">
        {/* Left spacer - 2.5/24 = 10.4167% */}
        <div className=" hidden lg:blockw-[10.4167%]"></div>

        {/* Schedule block - 13/24 = 54.1667% */}
        <div className="w-[54.1667%] h-full relative flex flex-col justify-between text-center">
          <span className="w-full h-1/2 flex items-center text-second font-gothic text-[10vh] font-bold uppercase">
            SCHEDULE
          </span>
          <span className="w-full h-1/2 flex items-center font-fave text-primary text-[12vh] font-bold">
            a Call
          </span>
        </div>

        {/* Phần còn lại giống layout desktop để giữ cân bằng flex */}
        <div className="w-[2.0833%]"></div>
        <div className="w-[25%]"></div>
        <div className="w-[8.3333%]"></div>
      </div>

      {/* Video block */}
      <div className="w-full h-[50vh] flex">
        {/* Left spacer (≈ 2.5/24 = 10.4167%) */}
        <div className="hidden lg:block w-[10.4167%] h-full"></div>

        {/* Video iframe */}
        <div className="w-full lg:w-[54.1667%] h-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/rnQESaOAlBI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Middle spacer */}
        <div className="hidden lg:block w-[2.0833%] h-full"></div>

        {/* Right block with SCHEDULE a Call — only show on desktop */}
        <div className="hidden lg:flex w-[25%] h-full items-center justify-center">
          <div className="w-[24vh] h-[21vh] flex flex-col justify-between text-center">
            <span className="w-full h-1/2 flex items-center text-second font-gothic text-[10vh] font-bold uppercase">
              SCHEDULE
            </span>
            <span className="w-full h-1/2 flex items-center font-fave text-primary text-[12vh] font-bold">
              a Call
            </span>
          </div>
        </div>

        {/* Right spacer */}
        <div className="hidden lg:block w-[8.3333%] h-full"></div>
      </div>

      {/* Bottom spacer */}
      <div className="w-full h-[5vh]"></div>
    </div>
  );
}
