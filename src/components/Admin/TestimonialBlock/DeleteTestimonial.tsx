'use client'
import { Testimonial } from './type'
import { useApiHelper } from '@/hooks/useApiHelper'
import { CRUD_MESSAGES } from '@/constants/messages'

export default function DeleteTestimonial({
  data,
  onDeleted
}: {
  data: Testimonial
  onDeleted: () => void
}) {
  const { deleteData } = useApiHelper()

  const handleDelete = async () => {
    const success = await deleteData(`/testimonial/${data.id}`, CRUD_MESSAGES.COMFIRM_DELETE)
    if (success) onDeleted()
  }

  return <button onClick={handleDelete} className="btn-remove">Delete</button>
}
