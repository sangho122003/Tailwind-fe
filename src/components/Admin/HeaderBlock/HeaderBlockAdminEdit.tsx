'use client';

import { useEffect, useState } from 'react';
import { useHeaderBlock } from './useHeaderBlock';
import HeaderBlockForm from './HeaderBlockForm';
import HeaderBlockView from './HeaderBlockView';
import HeaderBlockActions from './HeaderBlockActions';

export default function HeaderBlockAdminEdit({ pageId }: { pageId: number }) {
  const {
    data,
    loading,
    error,
    setError,
    setData,
    fetchBlock,
    submitBlock,
    deleteBlock,
  } = useHeaderBlock(pageId);

  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTitle2, setNewTitle2] = useState('');
  const [newFile, setNewFile] = useState<File | null>(null);

  useEffect(() => {
    fetchBlock();
  }, [fetchBlock]);

  useEffect(() => {
    if (data) {
      setNewTitle(data.title);
      setNewTitle2(data.title2);
    }
  }, [data]);

  const handleSubmit = async () => {
    if (!newTitle || !newTitle2) {
      setError('Vui lòng nhập đầy đủ tiêu đề');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', newTitle);
      formData.append('title2', newTitle2);
      if (newFile) formData.append('file', newFile);
      if (!data) formData.append('ID_page', String(pageId));

      await submitBlock(formData, !!data, data?.id);
      alert('✅ Thành công!');
      setEditMode(false);
      fetchBlock();
    } catch (err) {
      setError('❌ Thao tác thất bại');
    }
  };

  const handleDelete = async () => {
    if (!data) return;
    const confirmDel = confirm('⚠️ Bạn có chắc muốn xóa Header Block này?');
    if (!confirmDel) return;

    try {
      await deleteBlock(data.id);
      alert('🗑️ Đã xóa!');
      setData(null);
      setEditMode(false);
      setNewTitle('');
      setNewTitle2('');
      setNewFile(null);
    } catch (err) {
      setError('❌ Xóa thất bại');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🖼️ Header Block</h2>
      {loading && <p className="text-gray-500 mb-4">⏳ Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {data && !editMode ? (
        <HeaderBlockView data={data} />
      ) : (
        <HeaderBlockForm
          title={newTitle}
          setTitle={setNewTitle}
          title2={newTitle2}
          setTitle2={setNewTitle2}
          setFile={setNewFile}
        />
      )}

      <HeaderBlockActions
        isEdit={editMode}
        isLoading={loading}
        hasData={!!data}
        onEdit={() => setEditMode(true)}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
        onCancel={() => {
          setEditMode(false);
          if (data) {
            setNewTitle(data.title);
            setNewTitle2(data.title2);
            setNewFile(null);
          }
        }}
      />
    </div>
  );
}
