'use client'
import { CRUD_MESSAGES } from '@/constants/messages'
import { useApiHelper } from '@/hooks/useApiHelper'

export default function DeleteSubtract({
  id,
  onDelete,
}: {
  id: number
  onDelete: () => void
}) {
  const { deleteData } = useApiHelper()

  const handleDelete = async () => {
    const success = await deleteData(`/subtract/${id}`, CRUD_MESSAGES.COMFIRM_DELETE)
    if (success) onDelete()
  }

  return (
    <button onClick={handleDelete} className="btn-remove">
      Delete
    </button>
  )
}
