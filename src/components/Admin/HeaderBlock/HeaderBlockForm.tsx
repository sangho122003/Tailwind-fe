'use client';
import { useState, useEffect } from 'react';

type Props = {
  initialTitle: string;
  initialTitle2: string;
  onSubmit: (data: { title: string; title2: string; file: File | null }) => Promise<void>;
  onCancel?: () => void;
  submitLabel: string;
  error?: string;
  loading?: boolean;
};

export default function HeaderBlockForm({
  initialTitle,
  initialTitle2,
  onSubmit,
  onCancel,
  submitLabel,
  error,
  loading = false,
}: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [title2, setTitle2] = useState(initialTitle2);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    await onSubmit({ title, title2, file });
  };

  return (
    <div className="w-full p-6 flex gap-5 flex-col">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-base"
        placeholder="Main Title"
      />
      <input
        value={title2}
        onChange={(e) => setTitle2(e.target.value)}
        className="input-base"
        placeholder="Sub Title"
      />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

      {error && <p className="layout-error">{error}</p>}

      <div className="flex gap-3">
        <button onClick={handleSubmit} disabled={loading} className="btn-primary">
          {submitLabel}
        </button>
        {onCancel && (
          <button onClick={onCancel} className="btn-remove">Cancel</button>
        )}
      </div>
    </div>
  );
}
