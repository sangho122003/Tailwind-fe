'use client'

import VideoBlockForm from './VideoBlockForm'
import { useApiHelper } from '@/hooks/useApiHelper'
import { ERROR_MESSAGES } from '@/constants/messages'

export default function CreateVideoBlock({ pageId, onSuccess }: { pageId: number; onSuccess: () => void }) {
  const { postData, error, setError } = useApiHelper()

  const handleSubmit = async (url: string, title: string, description: string) => {
    if (!url || !title || !description) return setError(ERROR_MESSAGES.MISSING_DATA)
    const result = await postData('/video-block', { urlvideo: url, title, dis: description, ID_page: pageId })
    if (result) onSuccess()
  }

  return <VideoBlockForm onSubmit={handleSubmit} submitLabel="Post" error={error || ""} />
}
