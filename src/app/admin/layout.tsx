  // src/app/admin/layout.tsx
  'use client';
  import useAuthGuard from '@/hooks/useAuthGuard';
  import { useRouter } from 'next/navigation';
  import Sidebar from '@/components/Admin/SideBar';
  import { ReactNode } from 'react';
  export default function AdminLayout({ children }: { children: ReactNode }) {
    useAuthGuard();
    const router = useRouter();
    const handleLogout = () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      router.push('/login');
    };
    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar/>
        <div className="flex-1 flex flex-col">
          <header className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Admin Page</h1>
            <div className='w-40 mr-10'>
              <button onClick={handleLogout} className="btn-remove">Logout</button>
            </div>
          </header>
          <main className="flex-1 px-6 py-8 overflow-y-auto max-h-[calc(99vh-4rem)]">
            {children}
          </main>
        </div>
      </div>
    );
  }
