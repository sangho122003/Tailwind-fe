'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface VideoBlock {
  id: number;
  urlvideo: string;
  title: string;
  dis: string;
  page: {
    id: number;
    name: string;
    url: string;
  };
}

const getToken = () =>
  typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

export default function VideoBlockAdminEdit({ pageId }: { pageId: number }) {
  const [data, setData] = useState<VideoBlock | null>(null);
  const [urlvideo, setUrlVideo] = useState('');
  const [title, setTitle] = useState('');
  const [dis, setDis] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchVideoBlock = async () => {
    const token = getToken();
    if (!token) return setError('⚠️ Bạn cần đăng nhập');

    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8080/video-block/page/${pageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const video = res.data[0];
      if (video) {
        setData(video);
        setUrlVideo(video.urlvideo);
        setTitle(video.title.trim());
        setDis(video.dis.trim());
      } else {
        setData(null);
        setUrlVideo('');
        setTitle('');
        setDis('');
      }
    } catch (err) {
      console.error(err);
      setError('Không thể tải dữ liệu VideoBlock');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideoBlock();
  }, [pageId]);

  const handleSave = async () => {
    const token = getToken();
    if (!token) return setError('⚠️ Token không hợp lệ');

    if (!urlvideo || !title || !dis) {
      return setError('⚠️ Vui lòng nhập đầy đủ thông tin');
    }

    const body = { urlvideo, title, dis };

    try {
      setLoading(true);

      if (data) {
        await axios.patch(`http://localhost:8080/video-block/${data.id}`, body, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(`http://localhost:8080/video-block`, { ...body, ID_page: pageId }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      alert('✅ Thành công');
      setEditMode(false);
      fetchVideoBlock();
    } catch (err) {
      console.error(err);
      setError('❌ Thao tác thất bại');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const token = getToken();
    if (!token || !data) return;

    if (!confirm('❗Bạn có chắc muốn xóa?')) return;

    try {
      setLoading(true);
      await axios.delete(`http://localhost:8080/video-block/${data.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('🗑️ Xóa thành công');
      setData(null);
      setUrlVideo('');
      setTitle('');
      setDis('');
      setEditMode(false);
    } catch (err) {
      console.error(err);
      setError('❌ Xóa thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">🎬 Video Block</h2>

      {loading && <p className="text-gray-500">⏳ Đang xử lý...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {(editMode || !data) && (
        <>
          <div className="mb-4">
            <label className="block font-medium mb-1">URL Video:</label>
            <input
              value={urlvideo}
              onChange={(e) => setUrlVideo(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="https://youtube.com/embed/..."
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Tiêu đề:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Nhập tiêu đề"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Mô tả:</label>
            <textarea
              value={dis}
              onChange={(e) => setDis(e.target.value)}
              className="border rounded px-3 py-2 w-full"
              placeholder="Nhập mô tả"
            />
          </div>
        </>
      )}

      {!editMode && data && (
        <div className="space-y-3">
          <iframe
            className="w-full aspect-video rounded"
            src={data.urlvideo}
            title="Video Block"
            allowFullScreen
          />
          <p className="text-lg font-semibold">{data.title}</p>
          <p className="text-gray-600">{data.dis}</p>
        </div>
      )}

      <div className="flex justify-end gap-3 mt-4">
        {data && !editMode ? (
          <>
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              ✏️ Chỉnh sửa
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              🗑️ Xóa
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              💾 {data ? 'Lưu' : 'Thêm mới'}
            </button>
            {data && (
              <button
                onClick={() => {
                  setEditMode(false);
                  setUrlVideo(data.urlvideo);
                  setTitle(data.title);
                  setDis(data.dis);
                }}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                ❌ Hủy
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
