import { videodata } from './VideoDesktopHead';

export default function VideoMobileHead({ data }: { data: videodata }) {
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
      <h1 className="text-[16px] font-semibold text-second leading-snug mb-1">
        {data.Title}
      </h1>
      <p className="text-[13px] text-black leading-snug">{data.Dis}</p>
    </div>
  );
}
