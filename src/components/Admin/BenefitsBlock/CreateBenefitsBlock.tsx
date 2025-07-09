'use client'
import { useState } from 'react'
import BenefitsBlockForm from './BenefitsBlockForm'
import { BenefitItemType } from './type'
import { useApiHelper } from '@/hooks/useApiHelper'
import { ERROR_MESSAGES } from '@/constants/messages'

export default function CreateBenefitsBlock({ pageId, onSuccess }: { pageId: number; onSuccess: () => void }) {
  const { postData, error, setError, loading } = useApiHelper()

  const handleSubmit = async (title: string, items: BenefitItemType[]) => {
    if (!title || items.some((i) => !i.title || !i.description || !i.image)) {
      setError(ERROR_MESSAGES.MISSING_DATA)
      return
    }

    const form = new FormData()
    form.append('title', title)
    form.append('pageId', pageId.toString())
    items.forEach((i) => form.append('images', i.image))
    form.append('items', JSON.stringify(items.map(({ title, description }) => ({ title, description }))))

    const res = await postData('/benefits-block', form, true)
    if (res) onSuccess()
  }

  return (
    <BenefitsBlockForm
      initialTitle=""
      initialItems={[...Array(4)].map(() => ({ title: '', description: '', image: '' }))}
      onSubmit={handleSubmit}
      submitLabel="Post"
      loading={loading}
      error={error || undefined}
    />
  )
}
