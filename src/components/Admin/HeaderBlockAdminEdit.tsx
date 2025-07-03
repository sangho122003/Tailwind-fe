'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface HeaderBlock {
  id: number;
  image: string;
  title: string;
  title2: string;
  page: {
    id: number;
    name: string;
    url: string;
  };
}
const getToken = () => typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

export default function HeaderBlockAdminEdit({ pageId }: { pageId: number }) {
  const [data, setData] = useState<HeaderBlock | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTitle2, setNewTitle2] = useState('');
  const [newFile, setNewFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBlock = async () => {
    const token = getToken();
    if (!token) {
      setError('⚠️ Bạn cần đăng nhập để thực hiện thao tác này.');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8080/header-block/page/${pageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const block = res.data[0];
      if (block) {
        setData(block);
        setNewTitle(block.title.trim());
        setNewTitle2(block.title2.trim());
      }
    } catch (err) {
      console.error(err);
      setError('Không thể tải dữ liệu HeaderBlock');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlock();
  }, [pageId]);

  const handleSubmit = async () => {
    const token = getToken();
    if (!token) {
      setError('⚠️ Không có token xác thực. Hãy đăng nhập lại.');
      return;
    }

    if (!newTitle || !newTitle2) {
      setError('Vui lòng nhập đầy đủ tiêu đề');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title', newTitle);
      formData.append('title2', newTitle2);
      if (newFile) formData.append('file', newFile);

      if (data) {
        await axios.patch(`http://localhost:8080/header-block/${data.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        formData.append('ID_page', String(pageId));
        await axios.post(`http://localhost:8080/header-block`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      alert('✅ Thành công!');
      setEditMode(false);
      fetchBlock();
    } catch (err) {
      console.error(err);
      setError('Thao tác thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🖼️ Header Block</h2>

      {loading && <p className="text-gray-500 mb-4">⏳ Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {data && !editMode && (
        <>
          <img
            src={`http://localhost:8080${data.image}`}
            alt="Header"
            className="rounded-md max-h-64 object-cover mb-4 border"
          />
          <p className="text-lg font-semibold text-gray-800 mb-2">{data.title}</p>
          <p className="text-gray-600 mb-4">{data.title2}</p>
        </>
      )}

      {(editMode || !data) && (
        <>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Tiêu đề chính:</label>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Nhập tiêu đề chính"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Tiêu đề phụ:</label>
            <input
              value={newTitle2}
              onChange={(e) => setNewTitle2(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Nhập tiêu đề phụ"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Ảnh:</label>
            <input type="file" onChange={(e) => setNewFile(e.target.files?.[0] || null)} />
          </div>
        </>
      )}

      <div className="flex justify-end gap-3">
        {data && !editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
          >
            ✏️ Cập nhật
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            } bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow`}
          >
            💾 {data ? 'Lưu' : 'Thêm Header'}
          </button>
        )}
      </div>
    </div>
  );
}
