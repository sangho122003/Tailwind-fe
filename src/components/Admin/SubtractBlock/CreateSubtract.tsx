'use client'

import { useState } from 'react'
import { useApiHelper } from '@/hooks/useApiHelper'
import SubtractForm from './SubtractForm'
import { ERROR_MESSAGES } from '@/constants/messages'
export default function CreateSubtract({
  pageId,
  onSuccess,
}: {
  pageId: number
  onSuccess: () => void
}) {
  const { postData, error, setError } = useApiHelper()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async ({
    title,
    dis,
    file,
  }: {
    title: string
    dis: string
    file: File | null
  }) => {
    if (!title || !dis || !file) {
      setError(ERROR_MESSAGES.MISSING_DATA)
      return
    }
    const formData = new FormData()
    formData.append('pageId', String(pageId))
    formData.append('title', title) 
    formData.append('dis', dis)
    formData.append('image', file)
    try {
      setLoading(true)
      console.log(formData)
      await postData('/subtract/', formData, true)

    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SubtractForm
      onSubmit={handleSubmit}
      submitLabel="Post"
      error={error || ''}
      loading={loading}
    />
  )
}
