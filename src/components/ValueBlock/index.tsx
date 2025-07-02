'use client';

export type ValueBlockData = {
  Title: string;
  url: string;
  Title2: string;
  subject: string;
};

export default function ValueBlock({ data }: { data: ValueBlockData }) {
  return (
    <div className="relative w-full h-screen">
      <div
        style={{ backgroundImage: `url(${data.url})` }}
        className={`
          absolute inset-0
          bg-left bg-cover bg-no-repeat
          lg:bg-[position:left_center] 
          lg:bg-[size:auto] 
          lg:bg-no-repeat
        `}
      />
      <div
        style={{ backgroundImage: `url(${data.url})` }}
        className={`
          absolute inset-0
          bg-[size:200%_100%]
          bg-[position:left_center]
          bg-no-repeat
          lg:hidden
        `}
      />
      <div className="hidden lg:grid grid-cols-24 h-full w-full absolute inset-0">
        <div className="col-span-1 bg-secondary bg-opacity-60 mix-blend-multiply" />
        <div className="col-span-21 relative">
          <div className="absolute top-0 w-full h-4/10 bg-secondary bg-opacity-60 mix-blend-multiply" />
          <div className="absolute top-4/10 w-full h-5/10 flex">
            <div className="w-1/2" />
            <div className="w-1/2 bg-secondary bg-opacity-60 mix-blend-multiply" />
          </div>
          <div className="absolute top-4/10 left-1/2 w-1/2 h-5/10 flex">
            <div className="w-2/10" />
            <div className="w-8/10 flex items-center">
              <div className="w-full h-[80%] flex flex-col gap-4">
                <div className="flex-[1] flex items-center justify-center p-2">
                  <h3 className="text-white leading-tight line-clamp-3 text-[clamp(1rem,3vw,3rem)]">
                    {data.Title2}
                  </h3>
                </div>
                <div className="flex-[2] flex items-center justify-center p-2">
                  <h3 className="text-white">{data.subject}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-1/10 bg-secondary bg-opacity-60 mix-blend-multiply" />
        </div>
        <div className="col-span-2 bg-secondary bg-opacity-60 mix-blend-multiply" />
      </div>
      <div className="lg:hidden grid grid-rows-[40vh_30vh_30vh] h-full w-full absolute inset-0">
        <div className="row-span-1 w-full flex bg-info mix-blend-multiply">
          <div className="w-1/24" />
          <div className="w-21/24" />
          <div className="w-2/24" />
        </div>
        <div className="row-span-1 w-full flex">
          <div className="w-3/24 bg-info mix-blend-multiply" />
          <div className="w-19/24" />
          <div className="w-2/24 bg-info mix-blend-multiply" />
        </div>
        <div className="row-span-1 w-full flex bg-info mix-blend-multiply">
          <div className="w-1/24" />
          <div className="w-21/24" />
          <div className="w-2/24" />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col">
        <div className="hidden lg:flex flex-col h-full">
          <div className="h-4/10 flex items-center pl-[4.1667%]">
            <div className="flex flex-col text-left ">
              <p className="text-white font-gothic text-[50px] leading-tight">
                VALUE OF 340B HEALTH
              </p>
              <p className="text-secondary font-fave text-[100px] leading-tight">
                Membership
              </p>
            </div>
          </div>
          <div className="h-6/10" />
        </div>
        <div className="lg:hidden flex flex-col h-full">
          <div className="h-[40vh] flex items-center pl-[4.1667%]">
            <div className="flex flex-col mr-[1%]">
              <p className="text-white font-gothic text-[48.5px] leading-tight ">
                VALUE OF 340B HEALTH
              </p>
              <p className="text-accent font-fave text-[100px] leading-tight">
                Membership
              </p>
            </div>
          </div>
          <div className="h-[30vh]" />
          <div className="h-[30vh] flex flex-col pl-[4.1667%]">
            <div className="h-1/3 flex items-center">
              <h3 className="text-white uppercase text-[clamp(20px,3vw,3rem)] leading-tight font-bold line-clamp-3">
                {data.Title2}
              </h3>
            </div>
            <div className="h-2/3 flex items-center">
              <h3 className="text-white">{data.subject}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}