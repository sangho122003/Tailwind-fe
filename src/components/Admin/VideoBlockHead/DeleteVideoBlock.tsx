'use client'
import { VideoBlock } from './type'
import { CRUD_MESSAGES } from '@/constants/messages'
import { useApiHelper } from '@/hooks/useApiHelper'
export default function DeleteVideoBlock({ data, onDeleted }: { data: VideoBlock; onDeleted: () => void }) {
  const { deleteData } = useApiHelper()
  const handleDelete = async () => {
    const success = await deleteData(`/video-block/${data.id}`, CRUD_MESSAGES.COMFIRM_DELETE)
    if (success) onDeleted()
  }
  return <button onClick={handleDelete} className="btn-remove">Delete</button>
}
