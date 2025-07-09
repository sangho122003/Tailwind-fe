  'use client'

  import DeleteVideoBlockSecond from './DeleteVideoBlockSecond'
  import { VideoBlockSecond } from './type'

  export default function ReadVideoBlockSecond({
    data,
    onEdit,
    onDeleted
  }: {
    data: VideoBlockSecond
    onEdit: () => void
    onDeleted: () => void
  }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-xl">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border-b w-4/5">Video</th>
              <th className="px-4 py-2 border-b w-1/5">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='h-auto'>
              <td className="px-4 py-2 border-b w-4/5">
                <iframe
                  src={data.url}
                  className="w-100 aspect-video rounded"
                  allowFullScreen
                />
              </td>
              <td className="px-4 py-2 border-b w-1/5 space-x-2">
                <button onClick={onEdit} className="btn-second">Edit</button>
                <DeleteVideoBlockSecond data={data} onDeleted={onDeleted} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
