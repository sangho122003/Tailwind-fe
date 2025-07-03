

import BenefitsBlock from '@/components/BenefitsBlock';
import Footer from '@/components/Footer/Footer';
import HeaderBlock from '@/components/HeaderBlock';
import Menu from '@/components/Menu/Menu';
import TestimonialBlock from '@/components/TestimonialBlock';
import ValueBlock from '@/components/ValueBlock';
import VideoBlock from '@/components/VideoBlock/VideoBlock';
import VideoBlockHead from '@/components/VideoBlockHead';

const res = await fetch('http://localhost:8080/index/csuite', {
  cache: 'no-store',
});
const datafetch = await res.json();
export const metadata = {
  title: `${datafetch.page.url}`
};
export default async function Home() {
  return (
    <div className="relative">
      <Menu />
      <main>
        <HeaderBlock data={datafetch.headerBlocks[0]} />
        <VideoBlockHead data={datafetch.videoBlocks[0]} />
        <ValueBlock data={datafetch.valueBlocks[0]} />
        <BenefitsBlock data={datafetch.benefitsBlocks[0]} />
        <TestimonialBlock data={datafetch.testimonialBlocks[0]} />
        <VideoBlock data={datafetch.videoBlockSeconds[0]} />
      </main>
      <Footer />
    </div>
  );
}
