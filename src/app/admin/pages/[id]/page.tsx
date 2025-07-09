'use client';
import { use } from 'react';
import VideoBlockAdminPage from '@/components/Admin/VideoBlockHead';
import TestimonialAdminPage from '@/components/Admin/TestimonialBlock';
import VideoBlockSecondAdminPage from '@/components/Admin/VideoBlock';
import ValueBlockAdminPage from '@/components/Admin/ValueBlock';
import BenefitsBlockAdminPage from '@/components/Admin/BenefitsBlock';
import HeaderBlockAdminPage from '@/components/Admin/HeaderBlock';
import SubtractAdminPage from '@/components/Admin/SubtractBlock';
interface PageProps {params: Promise<{id: string}>}
export default function AdminPage({ params }: PageProps) {
  const { id } = use(params);
  const pageId = +id;
  return (
    <div className="p-6 space-y-6">
      <div className="card-admin"><HeaderBlockAdminPage pageId={pageId}/></div>
      <div className="card-admin"><VideoBlockAdminPage pageId={pageId}/></div>
      <div className="card-admin"><ValueBlockAdminPage pageId={pageId}/></div>
      <div className="card-admin"><BenefitsBlockAdminPage pageId={pageId}/></div>
      <div className="card-admin"><TestimonialAdminPage pageId={pageId}/></div>
      <div className="card-admin"><SubtractAdminPage pageId={pageId}/></div>
      <div className="card-admin"><VideoBlockSecondAdminPage pageId={pageId}/></div>
    </div>
  );
}
