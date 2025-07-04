import { useState, useCallback } from 'react';
import axios from 'axios';
import { HeaderBlock } from './types';

const getToken = () =>
  typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

export function useHeaderBlock(pageId: number) {
  const [data, setData] = useState<HeaderBlock | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBlock = useCallback(async () => {
    const token = getToken();
    if (!token) return setError('⚠️ Cần đăng nhập');

    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8080/header-block/page/${pageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const block = res.data[0];
      setData(block || null);
    } catch (err) {
      setError('❌ Không thể tải dữ liệu');
    } finally {
      setLoading(false);
    }
  }, [pageId]);

  const submitBlock = async (
    formData: FormData,
    isUpdate: boolean,
    id?: number
  ) => {
    const token = getToken();
    if (!token) throw new Error('⚠️ Token không hợp lệ');

    const url = isUpdate
      ? `http://localhost:8080/header-block/${id}`
      : `http://localhost:8080/header-block`;

    const method = isUpdate ? axios.patch : axios.post;

    return method(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const deleteBlock = async (id: number) => {
    const token = getToken();
    if (!token) throw new Error('⚠️ Token không hợp lệ');
    return axios.delete(`http://localhost:8080/header-block/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return { data, loading, error, setError, setData, fetchBlock, submitBlock, deleteBlock };
}
