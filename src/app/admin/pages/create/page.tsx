'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleCreate = async () => {
    if (!title || !url) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      const token = localStorage.getItem('access_token');
      await axios.post(
        'http://localhost:8080/page',
        {
          name: url,
          url: title,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      router.push('/admin'); // hoặc router.refresh() nếu bạn dùng layout dynamic
    } catch (err) {
      console.error(err);
      setError('Tạo trang thất bại');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">📝 Tạo Trang Mới</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-5">
        <label className="block text-gray-600 font-medium mb-1">Tên Trang</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ví dụ: Power, Low, (trừ admin, login, hoặc các trang có sẵn)"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-1">Đường Dẫn (URL)</label>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">http://localhost:3000/</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="ten-trang-moi"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      <button
        onClick={handleCreate}
        className="w-full bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded transition"
      >
        ➕ Thêm Mới
      </button>
    </div>
  );
}
