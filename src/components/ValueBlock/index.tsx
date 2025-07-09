  'use client';

  export type ValueBlockData = {
    id: string;
    title: string;
    image: string;
    subject: string;
  };

  export default function ValueBlock({ data }: { data: ValueBlockData }) {
    return (
      <div className="relative w-full h-screen">
        <div
          style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image})` }}
          className="absolute inset-0 w-full bg-left bg-no-repeat lg:bg-[position:left_center] bg-[size:200%_100%]  lg:bg-cover"
        />
        <div className="w-full h-3/10 relative overlay-blue lg:h-4/10">
          <div className="flex flex-col z-10 relative p-[4vw]">
            <p className="text-white font-gothic text-6xl leading-[1.1] pr-25">VALUE OF 340B HEALTH</p>
            <p className="text-accent font-fave text-[86px] leading-[1] mt-5 lg:mt-0">Membership</p>
          </div>
        </div>
        <div className="w-full h-full lg:flex lg:6/10">
          <div className="lg:block lg:w-1/2 lg:h-full">
            <div className="w-full h-3/6 flex">
              <div className="w-1/12 h-full relative overlay-blue"/>
              <div className="w-8.5/12 h-full"/>
              <div className="w-1.5/12 h-full relative overlay-blue"/>
            </div>
            <div className="w-full h-1/10 relative overlay-blue"/>
          </div>
          <div className="w-full h-7/20 flex lg:hidden">
            <div className='w-2/10 h-full relative overlay-blue'/>
            <div className='w-7/10'/>
            <div className='w-1/10 h-full relative overlay-blue'/>
          </div>
          <div className="w-full h-7/20 flex overlay-blue lg:w-1/2 lg:h-3/5 relative px-5 pb-7 pt-16 lg:pr-35 lg:pb-35">
            <div className="w-full text-left z-10 relative">
              <h3 className="text-white lg:text-3xl uppercase text-xl font-bold leading-tight mb-4">
                {data.title}
              </h3>
              <p className="text-white lg:text-lg text-xs">{data.subject}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
