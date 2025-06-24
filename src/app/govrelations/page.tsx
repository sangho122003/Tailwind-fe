

import BenefitsBlock from '@/components/BenefitsBlock/BenefitsBlock';
import Footer from '@/components/Footer/Footer';
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock';
import TestimonialBlock from '@/components/TestimonialBlock/TestimonialBlock';
import ValueBlock from '@/components/ValueBlock/ValueBlock';
import VideoBlock from '@/components/VideoBlock/VideoBlock';
import VideoBlockHead from '@/components/VideoBlockHead/VideoBlockHead';

import { DATA_ARRAY } from '@/constants/data';
import Menu from '@/components/Menu/Menu';
import Subtract from '@/components/Subtract/Subtract';
export const metadata = {
  title: " GOVRELATIONS",
  description: "Improve your hospital's 340B program operations with 340B Health.",
};
export default function govrelations() {
  const Goverment = DATA_ARRAY.find(item => item.type === "Goverment");
  return (
  <div className='relative'>
    <Menu/>
  <main>
      <HeaderBlock data={Goverment?.HeaderBlock} />
      <VideoBlockHead data={Goverment?.VideoBlock} />
      <ValueBlock data={Goverment?.ValueBlock} />
      <BenefitsBlock data={Goverment?.BenefitsBlock} />
      <TestimonialBlock data={Goverment?.TestimonialBlock} />
      <Subtract data={Goverment?.Subtract}/>
      <VideoBlock data={Goverment?.VideoBlockSecond} />
    </main>
    <Footer />
  </div>
  );
}
