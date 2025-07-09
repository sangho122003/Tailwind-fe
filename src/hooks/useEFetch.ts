import { useEffect, useState } from 'react';
import api from '@/lib/api';
export default function useEFetch<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await api.get(url);
        if (isMounted) {setData(response.data);}
      } catch (err) {
        if (isMounted) {setError(err);}
      } finally {
        if (isMounted) {setLoading(false)}
      }
    };
    fetchData();
    return () => { isMounted = false;}}, [url]);
  return { data, loading, error };
}
