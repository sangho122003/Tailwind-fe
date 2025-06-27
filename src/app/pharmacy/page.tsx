

import BenefitsBlock from '@/components/BenefitsBlock';
import Footer from '@/components/Footer/Footer';
import HeaderBlock from '@/components/HeaderBlock';
import Menu from '@/components/Menu/Menu';
import Subtract from '@/components/Subtract';
import TestimonialBlock from '@/components/TestimonialBlock';
import ValueBlock from '@/components/ValueBlock';
import VideoBlock from '@/components/VideoBlock/VideoBlock';
import VideoBlockHead from '@/components/VideoBlockHead';

import { DATA_ARRAY } from '@/constants/data';
export const metadata = {
  title: " PHARMACY",
  description: "Improve your hospital's 340B program operations with 340B Health.",
};

export default function pharmacy() {
  const PHARMACY = DATA_ARRAY.find(item => item.type === "PHARMACY");
  return (
    <div className='relative'>
      <Menu/>
      <main>
      <HeaderBlock data={PHARMACY?.HeaderBlock} />
      <VideoBlockHead data={PHARMACY?.VideoBlock} />
      <ValueBlock data={PHARMACY?.ValueBlock} />
      <BenefitsBlock data={PHARMACY?.BenefitsBlock} />
      <TestimonialBlock data={PHARMACY?.TestimonialBlock} />
      <Subtract data={PHARMACY?.Subtract}/>
      <VideoBlock data={PHARMACY?.VideoBlockSecond} />
    </main>
     <Footer />
    </div>
  );
}
