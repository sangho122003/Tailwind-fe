'use client'

import DeleteSubtract from './DeleteSubtract'
import { dataSubtract } from './type'

export default function ReadSubtract({
  data,
  onEdit,
  onDeleted
}: {
  data: dataSubtract
  onEdit: () => void
  onDeleted: () => void
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-xl">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border-b w-1/4">Image</th>
            <th className="px-4 py-2 border-b w-1/4">Title</th>
            <th className="px-4 py-2 border-b w-2/4">Description</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`}
                alt="Subtract"
                className="w-64 h-32 object-cover rounded border"
              />
            </td>
            <td className="px-4 py-2 border-b font-semibold">{data.title}</td>
            <td className="px-4 py-2 border-b">{data.dis}</td>
            <td className="px-4 py-2 border-b space-x-2">
              <button onClick={onEdit} className="btn-second">Edit</button>
              <DeleteSubtract id={data.id} onDelete={onDeleted} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
