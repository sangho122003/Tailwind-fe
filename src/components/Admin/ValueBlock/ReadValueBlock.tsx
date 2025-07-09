'use client'
import DeleteValueBlock from './DeleteValueBlock'
import { ValueBlock } from './type'

export default function ReadValueBlock({
  data,
  onEdit,
  onDeleted
}: {
  data: ValueBlock
  onEdit: () => void
  onDeleted: () => void
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-xl">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border-b">Image</th>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Description</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b w-[250px]">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`}
                alt="Value Block"
                className="w-full max-h-40 object-cover rounded border"
              />
            </td>
            <td className="px-4 py-2 border-b font-semibold">{data.title}</td>
            <td className="px-4 py-2 border-b">{data.subject}</td>
            <td className="px-4 py-2 border-b space-x-2">
              <button onClick={onEdit} className="btn-second">Edit</button>
              <DeleteValueBlock data={data} onDeleted={onDeleted} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
