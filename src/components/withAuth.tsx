import { useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '@/lib/api';

export function withAuth(WrappedComponent: React.ComponentType) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
        return;
      }
      const verifyToken = async () => {
        try {
          await api.get('/auth/me');
        } catch (err) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          router.push('/login');
        }
      };
      verifyToken();
    }, [router]);
    return <WrappedComponent {...props} />;
  };
}