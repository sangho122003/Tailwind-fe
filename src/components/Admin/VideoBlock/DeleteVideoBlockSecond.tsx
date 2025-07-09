'use client'

import { VideoBlockSecond } from './type'
import { CRUD_MESSAGES } from '@/constants/messages'
import { useApiHelper } from '@/hooks/useApiHelper'

export default function DeleteVideoBlockSecond({ data, onDeleted }: {
  data: VideoBlockSecond
  onDeleted: () => void
}) {
  const { deleteData } = useApiHelper()

  const handleDelete = async () => {
    const success = await deleteData(`/video-block-second/${data.id}`, CRUD_MESSAGES.COMFIRM_DELETE)
    if (success) onDeleted()
  }

  return <button onClick={handleDelete} className="btn-remove">Delete</button>
}
