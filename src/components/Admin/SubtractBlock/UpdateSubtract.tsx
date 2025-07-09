'use client'
import { useApiHelper } from '@/hooks/useApiHelper'
import { dataSubtract } from './type'
import SubtractForm from './SubtractForm'
import { ERROR_MESSAGES } from '@/constants/messages'

export default function UpdateSubtract({
  data,
  onCancel,
  onSuccess,
  setError,
}: {
  data: dataSubtract
  onCancel: () => void
  onSuccess: () => void
  setError: (val: string) => void
}) {
  const { patchData } = useApiHelper()

  const handleUpdate = async ({
    title,
    dis,
    file,
  }: {
    title: string
    dis: string
    file: File | null
  }) => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('dis', dis)
    if (file instanceof File) {
      formData.append('image', file)
    }

    const result = await patchData(`/subtract/${data.id}`, formData, true)
    if (result) {
      onSuccess()
    } else {
      setError(ERROR_MESSAGES.UPDATE_FAIL)
    }
  }

  return (
    <SubtractForm
      initialTitle={data.title}
      initialDis={data.dis}
      onSubmit={handleUpdate}
      submitLabel="Save"
      onCancel={onCancel}
    />
  )
}
