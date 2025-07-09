'use client'
import { useApiHelper } from '@/hooks/useApiHelper'
import BenefitsBlockForm from './BenefitsBlockForm'
import { BenefitsBlockType, BenefitItemType } from './type'

export default function UpdateBenefitsBlock({
  block,
  onSuccess,
  onCancel,
  setError,
}: {
  block: BenefitsBlockType
  onSuccess: () => void
  onCancel: () => void
  setError: (msg: string) => void
}) {
  const { patchData } = useApiHelper()

  const handleSubmit = async (title: string, items: BenefitItemType[]) => {
    const formData = new FormData()
    formData.append('title', title)
    items.forEach((item) => {
      if (item.image instanceof File) {
        formData.append('images', item.image)
      }
    })
    formData.append(
      'items',
      JSON.stringify(
        items.map(({ title, description }) => ({
          title,
          description,
        }))
      )
    )

    const result = await patchData(`/benefits-block/${block.id}`, formData, true)
    if (result) {
      onSuccess()
    } else {
      setError('Update failed')
    }
  }

  return (
    <BenefitsBlockForm
      initialTitle={block.title}
      initialItems={block.items}
      onSubmit={handleSubmit}
      submitLabel="Save"
      onCancel={onCancel}
      error=""
    />
  )
}
