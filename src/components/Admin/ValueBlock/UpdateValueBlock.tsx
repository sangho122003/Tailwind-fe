'use client'
import { useApiHelper } from '@/hooks/useApiHelper'
import { useState } from 'react'
import ValueBlockForm from './ValueBlockForm'
import { ValueBlock } from './type'

export default function UpdateValueBlock({
  data,
  onCancel,
  onSuccess
}: {
  data: ValueBlock
  onCancel: () => void
  onSuccess: () => void
}) {
  const { patchData, error, setError } = useApiHelper()

  const handleUpdate = async (title: string, description: string) => {
    const payload = {
      pageId: data.page.id,
      image: data.image,
      title,
      subject: description
    }

    const result = await patchData(`/value-block`, payload)
    if (result) onSuccess()
    else setError('Update failed')
  }

  return (
    <ValueBlockForm
      initialTitle={data.title}
      initialDescription={data.subject}
      submitLabel="Update"
      onSubmit={handleUpdate}
      error={error || ''}
      onCancel={onCancel}
      isUpdate
    />
  )
}
