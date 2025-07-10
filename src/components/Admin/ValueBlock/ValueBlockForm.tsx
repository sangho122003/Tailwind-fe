'use client'

import { useState, useEffect } from 'react'
import { ERROR_MESSAGES } from '@/constants/messages'
import { Props } from './type'
export default function ValueBlockForm({
  initialTitle = '',
  initialDescription = '',
  onSubmit,
  submitLabel,
  loading = false,
  error = '',
  onCancel,
  isUpdate = false
}: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)
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
    if (!title || !description || (!file && !isUpdate)) {
      alert(ERROR_MESSAGES.MISSING_DATA)
      return
    }
    await onSubmit(title, description, file)
  }

  return (
    <div className="p-6 w-full mx-auto bg-white">
      {!isUpdate && (
        <div>
          <label className="block font-medium mb-1">Upload Image</label>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-full max-w-xs h-auto object-cover rounded" />}
        </div>
      )}

      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="input-base w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="input-base w-full"
        />
      </div>

      {error && <p className="layout-error">{error}</p>}

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
