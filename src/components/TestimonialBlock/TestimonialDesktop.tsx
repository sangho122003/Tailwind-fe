type TestimonialData = {
  title: string;
  title2: string;
  dis: string;
  dis2: string;
  dis3: string;
};

export default function TestimonialDesktop({ data }: { data: TestimonialData }) {
  return (
    <div className="hidden lg:flex flex-col w-full h-[50vh] px-[4.17vw] py-8">
      <div className="flex flex-1">
        <div className="flex-[8] flex flex-col justify-center">
          <h1 className="text-[34px] font-extrabold uppercase leading-tight">
            {data.title}
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed">{data.title2}</p>
        </div>

        <div className="flex-[1]" />

        <div className="flex-[12] flex flex-col justify-center">
          <h2 className="text-[24px] font-omnes leading-tight">
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
