  'use client';

  import { useState, useEffect } from 'react';
  import { ChevronRight, ChevronDown, User, LayoutDashboard, Pencil, Trash2, Plus } from 'lucide-react';
  import Link from 'next/link';
  import axios from 'axios';

  interface PageItem {
    id: number;
    url: string;
  }

  export default function Sidebar() {
    const [isPageOpen, setIsPageOpen] = useState(false);
    const [pages, setPages] = useState<PageItem[]>([]);

    useEffect(() => {
      const fetchPages = async () => {
        const token = localStorage.getItem('access_token');
        if (!token) return;

        try {
          const res = await axios.get('http://localhost:8080/page/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = res.data;
          const formatted = data.map((page: any) => ({
            id: page.id,
            url: page.url,
          }));
          setPages(formatted);
        } catch (err) {
          console.error('Failed to fetch pages', err);
        }
      };

      fetchPages();
    }, []);

    const handleDelete = async (id: number) => {
      const confirm = window.confirm('Bạn có chắc muốn xoá trang này không?');
      if (!confirm) return;

      try {
        const token = localStorage.getItem('access_token');
        await axios.delete(`http://localhost:8080/page/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPages(pages.filter((p) => p.id !== id));
      } catch (err) {
        console.error('Xoá thất bại:', err);
        alert('Xoá không thành công.');
      }
    };

    return (
      <aside className="w-64 h-screen bg-gray-900 text-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-10 text-center tracking-widest">ADMIN</h2>

        <div className="space-y-2">
          <Link
            href="/admin/users"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <User size={18} />
            <span className="text-sm font-medium">Người dùng</span>
          </Link>

          <div>
            <button
              onClick={() => setIsPageOpen(!isPageOpen)}
              className="flex w-full items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <span className="flex items-center gap-3">
                <LayoutDashboard size={18} />
                <span className="text-sm font-medium">Trang</span>
              </span>
              {isPageOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {isPageOpen && (
              <div className="ml-8 mt-2 space-y-1 text-sm text-gray-300">
                {pages.map((page) => (
                  <div key={page.id} className="flex items-center justify-between group">
                    <Link href={`/admin/pages/${page.id}`} className="hover:text-white truncate">
                      {page.url}
                    </Link>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <Link href={`/admin/pages/${page.id}/edit`}>
                        <Pencil size={14} className="text-yellow-400 hover:text-yellow-300 cursor-pointer" />
                      </Link>
                      <Trash2
                        size={14}
                        onClick={() => handleDelete(page.id)}
                        className="text-red-400 hover:text-red-300 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}

                <Link
                  href="/admin/pages/create"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 mt-2"
                >
                  <Plus size={14} />
                  <span>Thêm trang</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>
    );
  }
