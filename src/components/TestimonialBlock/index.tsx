import TestimonialDesktop from './TestimonialDesktop';
import TestimonialMobile from './TestimonialMobile';

export type TestimonialData = {
  title: string;
  title2: string;
  dis: string;
  dis2: string;
  dis3: string;
};

export default function TestimonialBlock({ data }: { data: TestimonialData }) {
  return (
    <div className="w-full bg-[#197D90] text-white">
      <TestimonialDesktop data={data} />
      <TestimonialMobile data={data} />
    </div>
  );
}
