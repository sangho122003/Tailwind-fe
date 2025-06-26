

import BenefitsBlock from '@/components/BenefitsBlock/BenefitsBlock';
import Footer from '@/components/Footer/Footer';
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock';
import Menu from '@/components/Menu/Menu';
import TestimonialBlock from '@/components/TestimonialBlock/TestimonialBlock';
import ValueBlock from '@/components/ValueBlock/ValueBlock';
import VideoBlock from '@/components/VideoBlock/VideoBlock';
import VideoBlockHead from '@/components/VideoBlockHead/VideoBlockHead';
import { DATA_ARRAY } from '@/constants/data';
export const metadata = {
  title: " 340B Health",
  description: "Improve your hospital's 340B program operations with 340B Health.",
};

export default function Home() {
    const csuite = DATA_ARRAY.find(item => item.type === "Csuite");
  return (
    <div className="relative">
      <Menu />
      <main>
        <HeaderBlock data={csuite?.HeaderBlock} />
        <VideoBlockHead data={csuite?.VideoBlock} />
        <ValueBlock data={csuite?.ValueBlock} />
        <BenefitsBlock data={csuite?.BenefitsBlock} />
        <TestimonialBlock data={csuite?.TestimonialBlock} />
        <VideoBlock data={csuite?.VideoBlockSecond} />
      </main>
      <Footer />
    </div>
  );
}
