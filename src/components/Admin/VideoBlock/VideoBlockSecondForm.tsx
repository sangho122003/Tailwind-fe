'use client'

import { useState } from 'react'
import { ERROR_MESSAGES } from '@/constants/messages'
import { Props } from './type'
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
