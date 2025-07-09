'use client'
import { Testimonial } from './type'
import DeleteTestimonial from './DeleteTestimonial'

export default function ReadTestimonial({
  data,
  onEdit,
  onDeleted
}: {
  data: Testimonial
  onEdit: () => void
  onDeleted: () => void
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-xl">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Description</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b font-semibold">{data.title}</td>
            <td className="px-4 py-2 border-b">{data.dis}</td>
            <td className="px-4 py-2 border-b space-x-2">
              <button onClick={onEdit} className="btn-second">Edit</button>
              <DeleteTestimonial data={data} onDeleted={onDeleted} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
