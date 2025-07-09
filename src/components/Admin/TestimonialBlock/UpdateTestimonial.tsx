'use client'
import { useApiHelper } from '@/hooks/useApiHelper'
import TestimonialForm from './TestimonialForm'
import { Testimonial } from './type'

export default function UpdateTestimonial({
  data,
  onCancel,
  onSuccess,
}: {
  data: Testimonial
  onCancel: () => void
  onSuccess: () => void
}) {
  const { patchData, error } = useApiHelper()

  const handleSubmit = async (title: string, description: string) => {
    const result = await patchData(`/testimonial/${data.id}`, {
      title,
      dis: description,
    })

    if (result) {
      onSuccess()
    }
  }

  return (
    <TestimonialForm
      initialTitle={data.title}
      initialDescription={data.dis}
      onSubmit={handleSubmit}
      submitLabel="Save"
      error={error || ''}
      onCancel={onCancel}
    />
  )
}
