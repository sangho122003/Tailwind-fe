'use client'
import TestimonialForm from './TestimonialForm'
import { useApiHelper } from '@/hooks/useApiHelper'

export default function CreateTestimonial({ pageId, onSuccess }: { pageId: number; onSuccess: () => void }) {
  const { postData, error, loading } = useApiHelper()

  const handleSubmit = async (title: string, description: string) => {
    const result = await postData('/testimonial', { title, dis: description, ID_page: pageId })
    if (result) onSuccess()
  }

  return (
    <TestimonialForm
      onSubmit={handleSubmit}
      submitLabel="Post"
      loading={loading}
      error={error || ''}
    />
  )
}
