import React from 'react';

interface Props {
  title: string;
  setTitle: (val: string) => void;
  title2: string;
  setTitle2: (val: string) => void;
  setFile: (file: File | null) => void;
}

export default function HeaderBlockForm({
  title,
  setTitle,
  title2,
  setTitle2,
  setFile,
}: Props) {
  return (
    <>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Tiêu đề chính:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          placeholder="Nhập tiêu đề chính"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Tiêu đề phụ:</label>
        <input
          value={title2}
          onChange={(e) => setTitle2(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          placeholder="Nhập tiêu đề phụ"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Ảnh:</label>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      </div>
    </>
  );
}
