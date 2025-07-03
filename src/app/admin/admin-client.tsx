'use client';

import useAuthGuard from '@/hooks/useAuthGuard';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Admin/SideBar';

export default function AdminClient() {
  useAuthGuard();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Trang Quản trị</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Đăng xuất
          </button>
        </header>
        <main className="flex-1 px-6 py-8">
          <div className="bg-white rounded-xl shadow p-8 min-h-[60vh] flex items-center justify-center border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">Hello ADMIN</p>
          </div>
        </main>
      </div>
    </div>
  );
}
