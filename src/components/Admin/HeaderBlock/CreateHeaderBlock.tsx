'use client';
import { useState } from 'react';
import { useApiHelper } from '@/hooks/useApiHelper';
import HeaderBlockForm from './HeaderBlockForm';
import { ERROR_MESSAGES } from '@/constants/messages';

export default function CreateHeaderBlock({
  pageId,
  onSuccess,
}: {
  pageId: number;
  onSuccess: () => void;
}) {
  const { postData, error, setError, loading } = useApiHelper();

  const handleCreate = async ({
    title,
    title2,
    file,
  }: {
    title: string;
    title2: string;
    file: File | null;
  }) => {
    if (!title || !title2 || !file) {
      setError(ERROR_MESSAGES.MISS_FILE);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('title2', title2);
    formData.append('file', file);
    formData.append('ID_page', String(pageId));

    const result = await postData('/header-block', formData, true);
    if (result) onSuccess();
  };

  return (
    <HeaderBlockForm
      initialTitle=""
      initialTitle2=""
      onSubmit={handleCreate}
      submitLabel="Post"
      error={error || undefined}
      loading={loading}
    />
  );
}
