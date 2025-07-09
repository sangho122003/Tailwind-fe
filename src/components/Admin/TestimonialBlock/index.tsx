  'use client';

  import { useEffect, useState } from 'react';
  import api from '@/lib/api';
  import { Testimonial } from './type';
  import CreateTestimonial from './CreateTestimonial';
  import ReadTestimonial from './ReadTestimonial';
  import UpdateTestimonial from './UpdateTestimonial';

  export default function TestimonialAdminPage({ pageId }: { pageId: number }) {
    const [data, setData] = useState<Testimonial | null>(null);
    const [editMode, setEditMode] = useState(false);
    const fetchData = async () => {
      const res = await api.get(`/testimonial/page/${pageId}`);
      setData(res.data[0] || null);
      setEditMode(false);
    };
    useEffect(() => {
      fetchData();
    }, [pageId]);
    return (
      <div className="w-full ">
        <h2 className="w-ful text-center p-6 text-4xl"><strong>TestimonialBlock</strong></h2>
        {!data && <CreateTestimonial pageId={pageId} onSuccess={fetchData} />}
        {data && !editMode && (<ReadTestimonial data={data} onEdit={() => setEditMode(true)} onDeleted={fetchData} />)}
        {data && editMode && (
          <UpdateTestimonial data={data} onCancel={() => setEditMode(false)} onSuccess={fetchData} />
        )}
      </div>
    );
  }
