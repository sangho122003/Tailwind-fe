'use client'

import { useApiHelper } from '@/hooks/useApiHelper'
import { VideoBlockSecond } from './type'
import VideoBlockSecondForm from './VideoBlockSecondForm'
import { ERROR_MESSAGES } from '@/constants/messages'

export default function UpdateVideoBlockSecond({
  data,
  onCancel,
  onSuccess,
}: {
  data: VideoBlockSecond
  onCancel: () => void
  onSuccess: () => void
}) {
  const { patchData, error, loading, setError } = useApiHelper()

  const handleUpdate = async (url: string) => {
    const result = await patchData(`/video-block-second/${data.id}`, {
      url,
      ID_page: data.page.id,
    })

    if (result) onSuccess()
    else setError(ERROR_MESSAGES.UPDATE_FAIL)
  }

  return (
    <VideoBlockSecondForm
      initialUrl={data.url}
      onSubmit={handleUpdate}
      submitLabel="Save"
      error={error || ''}
      loading={loading}
      onCancel={onCancel}
    />
  )
}
