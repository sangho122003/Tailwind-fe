import React from 'react';

interface Props {
  isEdit: boolean;
  isLoading: boolean;
  hasData: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function HeaderBlockActions({
  isEdit,
  isLoading,
  hasData,
  onEdit,
  onDelete,
  onSubmit,
  onCancel,
}: Props) {
  return (
    <div className="flex justify-end gap-3 mt-4">
      {hasData && !isEdit ? (
        <>
          <button onClick={onEdit} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
            ✏️ Cập nhật
          </button>
          <button onClick={onDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow">
            🗑️ Xóa
          </button>
        </>
      ) : (
        <>
          <button
            onClick={onSubmit}
            disabled={isLoading}
            className={`${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow`}
          >
            💾 {hasData ? 'Lưu' : 'Thêm Header'}
          </button>
          {hasData && (
            <button onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded shadow">
              ❌ Hủy
            </button>
          )}
        </>
      )}
    </div>
  );
}
