type TestimonialData = {
  title: string;
  title2: string;
  dis: string;
  dis2: string;
  dis3: string;
};

export default function TestimonialMobile({ data }: { data: TestimonialData }) {
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
