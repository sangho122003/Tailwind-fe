'use client';
import useEFetch from '@/hooks/useEFetch';
import { ERROR_MESSAGES } from '@/constants/messages';
import HeaderBlock from '@/components/HeaderBlock';
import VideoBlockHead from '@/components/VideoBlockHead';
import ValueBlock from '@/components/ValueBlock';
import BenefitsBlock from '@/components/BenefitsBlock';
import TestimonialBlock from '@/components/TestimonialBlock';
import VideoBlock from '@/components/VideoBlock/VideoBlock';
import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Menu/Menu';
import Subtract from '@/components/Subtract';
export default function PageClient({ page }: { page: string }) {
  const { data, error } = useEFetch(`/index/${page}`); 
  if (error || !data) return <p className="layout-error">{ERROR_MESSAGES.LOAD_FAILED}</p>;
  return (
    <div className="relative">
      <Menu />
      <main>
        {data.headerBlocks?.[0] && <HeaderBlock data={data.headerBlocks[0]} />}
        {data.videoBlocks?.[0] && <VideoBlockHead data={data.videoBlocks[0]} />}
        {data.valueBlocks?.[0] && <ValueBlock data={data.valueBlocks[0]} />}
        {data.benefitsBlocks?.[0] && <BenefitsBlock data={data.benefitsBlocks[0]} />}
        {data.testimonialBlocks?.[0] && <TestimonialBlock data={data.testimonialBlocks[0]} />}
        {data.subtract?.[0] && <Subtract data={data.subtract[0]} />}
        {data.videoBlockSeconds?.[0] && <VideoBlock data={data.videoBlockSeconds[0]} />}
      </main>
      <Footer />
    </div>
  );
}
