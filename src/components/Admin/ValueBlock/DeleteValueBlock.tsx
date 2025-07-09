'use client'
import { ValueBlock } from './type'
import { CRUD_MESSAGES } from '@/constants/messages'
import { useApiHelper } from '@/hooks/useApiHelper'
export default function DeleteValueBlock({ data, onDeleted }: { data: ValueBlock; onDeleted: () => void }) {
  const { deleteData } = useApiHelper()

  const handleDelete = async () => {
    const success = await deleteData(`/value-block/${data.id}`, CRUD_MESSAGES.COMFIRM_DELETE)
    if (success) onDeleted()
  }

  return <button onClick={handleDelete} className="btn-remove">Delete</button>
}
