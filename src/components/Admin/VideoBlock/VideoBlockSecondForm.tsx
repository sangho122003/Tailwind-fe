'use client'

import { useState } from 'react'
import { ERROR_MESSAGES } from '@/constants/messages'

type Props = {
  initialUrl?: string
  onSubmit: (url: string) => Promise<void>
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
}

export default function VideoBlockSecondForm({
  initialUrl = '',
  onSubmit,
  submitLabel,
  loading = false,
  error = '',
  onCancel
}: Props) {
  const [url, setUrl] = useState(initialUrl)

  const handleSubmit = async () => {
    if (!url) {
      alert(ERROR_MESSAGES.MISSING_DATA)
      return
    }
    await onSubmit(url)
  }

  return (
    <div className="w-full gap-5 flex flex-col p-6">
      <input  
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://www.youtube.com/embed/abc123"
        className="input-base w-full"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
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
