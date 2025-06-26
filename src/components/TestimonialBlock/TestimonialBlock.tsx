type TestimonialData = {
  title: string;
  title2: string;
  dis: string;
  dis2: string;
  dis3: string;
};

function DesktopView({ data }: { data: TestimonialData }) {
  return (
    <div className="hidden lg:flex flex-col w-full h-[50vh] px-[4.17vw] py-8">
      <div className="flex flex-1">
        <div className="flex-[8] flex flex-col justify-center">
          <h1 className="text-[34px] font-extrabold uppercase leading-tight">
            {data.title}
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed">{data.title2}</p>
        </div>

        <div className="flex-[1]" /> {/* spacing */}

        <div className="flex-[12] flex flex-col justify-center">
          <h2 className="text-[24px] font-extrabold uppercase leading-tight">
            {data.dis}
          </h2>
          <p className="text-[20px] italic font-normal leading-relaxed mb-4">
            {data.dis2}
          </p>
          <p className="text-[14px]">{data.dis3}</p>
        </div>
      </div>
    </div>
  );
}

function MobileView({ data }: { data: TestimonialData }) {
  return (
    <div className="flex h-auto flex-col p-6 lg:hidden">
      <h1 className="text-[20px] font-extrabold uppercase leading-tight mb-2">
        {data.title}
      </h1>
      <p className="text-[14px] mb-4">{data.title2}</p>
      <p className="text-[20px] mb-4">{data.dis}</p>
      <p className="text-[24px] italic font-normal leading-relaxed mb-4">
        {data.dis2}
      </p>
      <p className="text-[14px]">{data.dis3}</p>
    </div>
  );
}

export default function TestimonialBlock({ data }: { data: TestimonialData }) {
  return (
    <div className="w-full bg-[#197D90] text-white">
      <DesktopView data={data} />
      <MobileView data={data} />
    </div>
  );
}
