'use client';

import useEFetch from '@/hooks/useEFetch';

import BenefitsBlock from '@/components/BenefitsBlock';
import Footer from '@/components/Footer/Footer';
import HeaderBlock from '@/components/HeaderBlock';
import Menu from '@/components/Menu/Menu';
import TestimonialBlock from '@/components/TestimonialBlock';
import ValueBlock from '@/components/ValueBlock';
import VideoBlock from '@/components/VideoBlock/VideoBlock';
import VideoBlockHead from '@/components/VideoBlockHead';

export default function Home() {
  const { data, loading, error } = useEFetch('http://localhost:8080/index/csuite');

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (error || !data) return <p className="p-10 text-red-500 text-center">Failed to load data</p>;

  return (
    <div className="relative">
      <Menu />
      <main>
        {data.headerBlocks?.[0] && <HeaderBlock data={data.headerBlocks[0]} />}
        {data.videoBlocks?.[0] && <VideoBlockHead data={data.videoBlocks[0]} />}
        {data.valueBlocks?.[0] && <ValueBlock data={data.valueBlocks[0]} />}
        {data.benefitsBlocks?.[0] && <BenefitsBlock data={data.benefitsBlocks[0]} />}
        {data.testimonialBlocks?.[0] && <TestimonialBlock data={data.testimonialBlocks[0]} />}
        {data.videoBlockSeconds?.[0] && <VideoBlock data={data.videoBlockSeconds[0]} />}

      </main>
      <Footer />
    </div>
  );
}
