'use client'
import { useState, useEffect } from 'react'
import { BenefitItemType } from './type'

type Props = {
  initialTitle: string
  initialItems: BenefitItemType[]
  onSubmit: (title: string, items: BenefitItemType[]) => Promise<void>
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
}

export default function BenefitsBlockForm({
  initialTitle,
  initialItems,
  onSubmit,
  submitLabel,
  loading = false,
  error = '',
  onCancel,
}: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [items, setItems] = useState<BenefitItemType[]>(initialItems)
  const [previews, setPreviews] = useState<(string | null)[]>([])

  useEffect(() => {
    const nextPreviews = items.map((item) => {
      if (typeof item.image === 'string') {
        return `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`
      }
      return item.image ? URL.createObjectURL(item.image) : null
    })
    setPreviews(nextPreviews)
  }, [items])

  const handleChange = (index: number, key: 'title' | 'description', value: string) => {
    const updatedItems = [...items]
    updatedItems[index][key] = value
    setItems(updatedItems)
  }

  const handleFileChange = (index: number, file: File) => {
    const updatedItems = [...items]
    updatedItems[index].image = file
    setItems(updatedItems)
  }

  const handleSubmit = async () => {
    const hasMissingFields = !title || items.some((item) => !item.title || !item.description || !item.image)
    if (hasMissingFields) return
    await onSubmit(title, items)
  }

  return (
    <div className="w-full p-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-base w-full"
        placeholder="Benefits Block Title"
      />

      {items.map((item, index) => (
        <div key={index} className="border-t pt-4 mt-4 space-y-2">
          {previews[index] && (
            <img
              src={previews[index] || ''}
              alt={`Preview ${index}`}
              className="w-32 h-32 object-cover"
            />
          )}
          <input
            value={item.title}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
            className="input-base"
            placeholder="Item Title"
          />
          <textarea
            value={item.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
            className="input-base"
            placeholder="Item Description"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFileChange(index, e.target.files[0])}
          />
        </div>
      ))}

      {error && <p className="layout-error">{error}</p>}

      <div className="flex gap-3">
        <button onClick={handleSubmit} disabled={loading} className="btn-primary">
          {submitLabel}
        </button>
        {onCancel && (
          <button onClick={onCancel} className="btn-remove">
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}
