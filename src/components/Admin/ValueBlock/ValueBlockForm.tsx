'use client'

import { useState, useEffect } from 'react'
import { ERROR_MESSAGES } from '@/constants/messages'

type Props = {
  initialTitle?: string
  initialDescription: string
  initialSubTitle?: string
  onSubmit: (title: string, subTitle: string, file?: File | null) => Promise<void>
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
  isUpdate?: boolean
}

export default function HeaderBlockForm({
  initialTitle = '',
  initialSubTitle = '',
  onSubmit,
  submitLabel,
  loading = false,
  error = '',
  onCancel,
  isUpdate = false
}: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [subTitle, setSubTitle] = useState(initialSubTitle)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result as string)
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }, [file])

  const handleSubmit = async () => {
    if (!title || !subTitle || (!file && !isUpdate)) {
      alert(ERROR_MESSAGES.MISSING_DATA)
      return
    }
    await onSubmit(title, subTitle, file)
  }

  return (
    <div className=" p-6 w-full mx-auto bg-white">
      {!isUpdate && (
        <div>
          <label className="block font-medium mb-1">Upload Image</label>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-full max-w-xs h-auto object-cover rounded" />}
        </div>
      )}

      <div>
        <label className="block font-medium mb-1">Main Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Main Title"
          className="input-base w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Sub Title</label>
        <input
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          placeholder="Sub Title"
          className="input-base w-full"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex gap-3 mt-4">
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
