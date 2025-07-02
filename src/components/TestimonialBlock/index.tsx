'use client';

export type TestimonialData = {
  title: string;
  title2: string;
  dis: string;
  dis2: string;
  dis3: string;
};

export default function TestimonialBlock({ data }: { data: TestimonialData }) {
  return (
    <div className="w-full bg-[#197D90] text-white px-6 lg:px-[4.17vw] py-16">
      <div className="flex flex-col lg:flex-row w-full gap-12">
        {/* Left Text Section */}
        <div className="lg:flex-[8] flex flex-col justify-center">
          <h1 className="text-[20px] lg:text-[34px] font-extrabold uppercase leading-tight">
            {data.title}
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed">{data.title2}</p>
        </div>

        {/* Right Testimonial Section */}
        <div className="lg:flex-[12] flex flex-col justify-center">
          <p className="text-[18px] lg:text-[24px] font-omnes leading-relaxed mb-4">
            “{data.dis}”
          </p>
          <p className="text-[16px] lg:text-[20px] italic font-normal leading-relaxed mb-2">
            {data.dis2}
          </p>
          <p className="text-[14px]">{data.dis3}</p>
        </div>
      </div>
    </div>
  );
}
