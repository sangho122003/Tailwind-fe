'use client'

import { useState } from 'react'
import { ERROR_MESSAGES } from '@/constants/messages'
import { Props } from './type'

export default function VideoBlockForm({
  initialUrl = '',
  initialTitle = '',
  initialDescription = '',
  onSubmit,
  submitLabel,
  loading = false,
  error = '',
  onCancel
}: Props) {
  const [url, setUrl] = useState(initialUrl)
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)

  const handleSubmit = async () => {
    if (!url || !title || !description) {
      alert(ERROR_MESSAGES.MISSING_DATA)
      return
    }
    await onSubmit(url, title, description)
  }

  return (
    <div className="w-full flex flex-col gap-4 p-6">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="YouTube URL"
        className="input-base w-full"
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="input-base w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="input-base w-full"
      />
      {error && <p className="layout-error">{error}</p>}
      <div className="flex gap-2">
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