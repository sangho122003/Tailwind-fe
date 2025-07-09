
import { BenefitsBlockType } from './type'
import DeleteBenefitsBlock from './DeleteBenefitsBlock'

export default function ReadBenefitsBlock({ block, onEdit, onDeleted }: {
  block: BenefitsBlockType
  onEdit: () => void
  onDeleted: () => void
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-xl">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Picture</th>
            <th className="px-4 py-2 border-b">Title Item</th>
            <th className="px-4 py-2 border-b">Describe</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {block.items.map((item, i) => (
            <tr key={i}>
              {i === 0 && (
                <td className="px-4 py-2 border-b font-semibold" rowSpan={block.items.length}>
                  {block.title}
                </td>
              )}
              <td className="px-4 py-2">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`}
                  alt={item.title}
                  className="w-10 h-10"
                />
              </td>
              <td className="px-4 py-2 border-b">{item.title}</td>
              <td className="px-4 py-2 border-b">{item.description}</td>
              {i === 0 && (
                <td className="px-4 py-2 border-b" rowSpan={block.items.length}>
                  <button onClick={onEdit} className="btn-second">Edit</button>
                  <DeleteBenefitsBlock id={block.id} onDelete={onDeleted} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}