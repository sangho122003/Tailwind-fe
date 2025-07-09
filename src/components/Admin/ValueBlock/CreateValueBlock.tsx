'use client'
import ValueBlockForm from './ValueBlockForm'
import { useApiHelper } from '@/hooks/useApiHelper'
import { ERROR_MESSAGES } from '@/constants/messages'

export default function CreateValueBlock({ pageId, onSuccess }: { pageId: number; onSuccess: () => void }) {
  const { postData, error } = useApiHelper()

  const handleSubmit = async (title: string, description: string, file?: File | null) => {
    if (!file || !title || !description) throw new Error(ERROR_MESSAGES.MISSING_DATA)
    const formData = new FormData()
    formData.append('pageId', pageId.toString())
    formData.append('image', file)
    formData.append('title', title)
    formData.append('subject', description)
    const result = await postData('/value-block', formData, true)
    if (result) onSuccess()
  }

  return <ValueBlockForm submitLabel="Post" onSubmit={handleSubmit} error={error || ""} />
}
