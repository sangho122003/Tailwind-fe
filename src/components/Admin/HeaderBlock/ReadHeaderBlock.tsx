import DeleteHeaderBlock from './DeleteHeaderBlock'
import { HeaderBlock } from './type'
export default function ReadHeaderBlock({
  data,
  onEdit,
  onDeleted
}: {
  data: HeaderBlock
  onEdit: () => void
  onDeleted: () => void
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-xl">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border-b">Backgroud</th>
            <th className="px-4 py-2 border-b">Main Title</th>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">
              <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`} alt="Header" className="w-64 h-32 object-cover rounded border" />
            </td>
            <td className="px-4 py-2 border-b font-semibold">{data.title}</td>
            <td className="px-4 py-2 border-b">{data.title2}</td>
            <td className="px-4 py-2 border-b space-x-2">
              <button onClick={onEdit} className="btn-second">Edit</button>
              <DeleteHeaderBlock data={data} onDeleted={onDeleted} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
