import VideoDesktopHead, { videodata } from './VideoDesktopHead';
import VideoMobileHead from './VideoMobileHead';

export default function VideoBlockHead({ data }: { data: videodata }) {
  return (
    <div className="w-full min-h-auto lg:min-h-[91.2vh]">
      {/* Desktop */}
      <div className="hidden lg:flex w-full min-h-[91.2vh]">
        <VideoDesktopHead data={data} />
      </div>

      {/* Mobile */}
      <div className="block lg:hidden px-[4.17vw] py-6">
        <VideoMobileHead data={data} />
      </div>
    </div>
  );
}
