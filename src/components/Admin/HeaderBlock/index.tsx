'use client';
import { useEffect, useState } from 'react';
import { HeaderBlock } from './type';
import CreateHeaderBlock from './CreateHeaderBlock';
import ReadHeaderBlock from './ReadHeaderBlock';
import UpdateHeaderBlock from './UpdateHeaderBlock';
import DeleteHeaderBlock from './DeleteHeaderBlock';
import api from '@/lib/api';
export default function HeaderBlockAdminPage({ pageId }: { pageId: number }) {
  const [data, setData] = useState<HeaderBlock | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/header-block/page/${pageId}`);
      setData(res.data[0] || null);
      setEditMode(false);
    } catch {
      setError('Không thể tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {fetchData();}, [pageId]);
  return (
    <div className="w-full">
      <h2 className="w-ful text-center p-6 text-4xl"> <strong>Header Block</strong></h2>
      {error && <p className="layout-error">{error}</p>}
      {!data && <CreateHeaderBlock pageId={pageId} onSuccess={fetchData} />}
      {data && !editMode && (<ReadHeaderBlock data={data} onEdit={()=>setEditMode(true)} onDeleted={fetchData}/>)}
      {data && editMode && (<UpdateHeaderBlock data={data}onCancel={()=>setEditMode(false)}onSuccess={fetchData}setError={setError}/>)}
    </div>
  );
}
