

import BenefitsBlock from '@/components/BenefitsBlock';
import Footer from '@/components/Footer/Footer';
import HeaderBlock from '@/components/HeaderBlock';
import Menu from '@/components/Menu/Menu';
import TestimonialBlock from '@/components/TestimonialBlock';
import ValueBlock from '@/components/ValueBlock';
import VideoBlock from '@/components/VideoBlock/VideoBlock';
import { DATA_ARRAY } from '@/constants/data';
import VideoBlockHead from '@/components/VideoBlockHead';
export const metadata = {
  title: " 340B Health",
  description: "Improve your hospital's 340B program operations with 340B Health.",
};
  const csuiteData = DATA_ARRAY.find(item => item.type === 'Csuite');

 export default async function Home() {
   const res = await fetch('http://localhost:8080/index/csuite', {
    cache: 'no-store', 
  });

  const datafetch = await res.json();
  return (
    <div className="relative">
      <Menu />
      <main>
        <HeaderBlock data={datafetch.headerBlocks[0]} />
        <VideoBlockHead data={datafetch.videoBlocks[0]} />
        <ValueBlock data={csuiteData?.ValueBlock} /> 
        <BenefitsBlock data={csuiteData?.BenefitsBlock} />
        <TestimonialBlock data={csuiteData?.TestimonialBlock} />
        <VideoBlock data={csuiteData?.VideoBlock} /> 
      </main>
      <Footer />
    </div>
  );
}
