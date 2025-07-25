'use client'

import { useState } from 'react'
import {Props} from './type'

export default function SubtractForm({
  initialTitle = '',
  initialDis = '',
  onSubmit,
  onCancel,
  submitLabel,
  error,
  loading = false,
}: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [dis, setDis] = useState(initialDis)
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = async () => {
    await onSubmit({ title, dis, file })
  }

  return (
    <div className="w-full p-6 flex gap-5 flex-col">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-base"
        placeholder="Title"
      />
      <textarea
        value={dis}
        onChange={(e) => setDis(e.target.value)}
        className="input-base"
        placeholder="Description"
        rows={4}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        accept="image/*"
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
