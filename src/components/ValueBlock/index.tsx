'use client';

export type ValueBlockData = {
  id: string;
  url: string;
  Title2: string;
  subject: string;
};

export default function ValueBlock({ data }: { data: ValueBlockData }) {
  return (
    <div
      className="relative w-full h-[66.6667vh] lg:h-screen bg-left bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: '200% 100%',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* BG full đè phía sau dành cho desktop */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(${data.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-[20vh] bg-secondary bg-opacity-60 mix-blend-multiply" />
      <div className="absolute bottom-0 inset-x-0 h-[10vh] bg-secondary bg-opacity-60 mix-blend-multiply" />
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="hidden lg:block w-1/24 h-full bg-secondary bg-opacity-60 mix-blend-multiply" />
        <div className="w-full lg:w-21/24 h-full relative">
          <div className="relative h-[40vh] lg:h-4/10">
            <div className="absolute inset-0 bg-secondary bg-opacity-60 mix-blend-multiply hidden lg:block" />
            <div className="absolute inset-0 flex items-center">
              <div className="flex flex-col text-left w-full px-[4vw] lg:pl-0">
                <p className="text-white font-gothic text-[40px] lg:text-[50px] leading-tight">
                  VALUE OF 340B HEALTH
                </p>
                <p className="text-accent lg:text-secondary font-fave text-[80px] lg:text-[100px] leading-tight">
                  Membership
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[30vh] lg:h-5/10">
            <div className="hidden lg:flex w-full h-full">
              <div className="w-1/2" />
              <div className="w-1/2 bg-secondary bg-opacity-60 mix-blend-multiply" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="w-full lg:w-8/12 px-[4vw]">
                <h3 className="text-white leading-tight line-clamp-3 text-[clamp(1rem,3vw,3rem)] font-bold">
                  {data.Title2}
                </h3>
                <p className="text-white mt-2">{data.subject}</p>
              </div>
            </div>
          </div>
          <div className="h-[30vh] lg:h-1/10 bg-secondary bg-opacity-60 mix-blend-multiply" />
        </div>
        <div className="hidden lg:block w-2/24 h-full bg-secondary bg-opacity-60 mix-blend-multiply" />
      </div>
    </div>
  );
}
