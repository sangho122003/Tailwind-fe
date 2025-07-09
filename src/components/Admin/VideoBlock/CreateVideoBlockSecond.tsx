'use client'

import VideoBlockSecondForm from './VideoBlockSecondForm'
import { useApiHelper } from '@/hooks/useApiHelper'
import { ERROR_MESSAGES } from '@/constants/messages'

export default function CreateVideoBlockSecond({ pageId, onSuccess }: { pageId: number; onSuccess: () => void }) {
  const { postData, error } = useApiHelper()

  const handleSubmit = async (url: string) => {
    if (!url) throw new Error(ERROR_MESSAGES.MISSING_DATA)
    const result = await postData('/video-block-second', { url, ID_page: pageId })
    if (result) onSuccess()
  }

  return <VideoBlockSecondForm onSubmit={handleSubmit} submitLabel="Post" error={error || ""} />
}