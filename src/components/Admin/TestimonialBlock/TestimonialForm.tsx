'use client'
import { useState } from 'react'

interface TestimonialFormProps {
  initialTitle?: string
  initialDescription?: string
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
  onSubmit: (title: string, description: string) => Promise<void>
}

export default function TestimonialForm({
  initialTitle = '',
  initialDescription = '',
  submitLabel,
  loading = false,
  error = '',
  onCancel,
  onSubmit,
}: TestimonialFormProps) {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)

  const handleSubmit = async () => {
    if (!title || !description) return
    await onSubmit(title, description)
  }

  return (
    <div className="p-6 w-full flex gap-5 flex-col">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-base "
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-base w-full"
        placeholder="Description"
      />
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
