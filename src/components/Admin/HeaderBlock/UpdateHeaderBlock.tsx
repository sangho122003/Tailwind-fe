'use client';
import { useApiHelper } from '@/hooks/useApiHelper'
import { HeaderBlock } from './type';
import HeaderBlockForm from './HeaderBlockForm';
import { ERROR_MESSAGES } from '@/constants/messages';

export default function UpdateHeaderBlock({
  data,
  onCancel,
  onSuccess,
  setError,
}: {
  data: HeaderBlock;
  onCancel: () => void;
  onSuccess: () => void;
  setError: (val: string) => void;
}) {
  const { patchData } = useApiHelper()

  const handleUpdate = async ({
    title,
    title2,
    file,
  }: {
    title: string;
    title2: string;
    file: File | null;
  }) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('title2', title2);
    if (file) formData.append('file', file);

    const result = await patchData(`/header-block/${data.id}`, formData, true);
    if (result) {
      onSuccess();
    } else {
      setError(ERROR_MESSAGES.UPDATE_FAIL);
    }
  };

  return (
    <HeaderBlockForm
      initialTitle={data.title}
      initialTitle2={data.title2}
      onSubmit={handleUpdate}
      submitLabel="Save"
      onCancel={onCancel}
    />
  );
}
