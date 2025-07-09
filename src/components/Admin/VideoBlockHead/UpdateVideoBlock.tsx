'use client';

import { useApiHelper } from '@/hooks/useApiHelper';
import { VideoBlock } from './type';
import VideoBlockForm from './VideoBlockForm';
import { ERROR_MESSAGES } from '@/constants/messages';

export default function UpdateVideoBlock({
  data,
  onCancel,
  onSuccess
}: {
  data: VideoBlock;
  onCancel: () => void;
  onSuccess: () => void;
}) {
  const { patchData, error, loading, setError } = useApiHelper();

  const handleUpdate = async (url: string, title: string, description: string) => {
    const result = await patchData(`/video-block/${data.id}`, {
      urlvideo: url,
      title,
      dis: description
    });

    if (result) {
      onSuccess();
    } else {
      setError(ERROR_MESSAGES.UPDATE_FAIL);
    }
  };

  return (
    <VideoBlockForm
      initialUrl={data.urlvideo}
      initialTitle={data.title}
      initialDescription={data.dis}
      onSubmit={handleUpdate}
      submitLabel="Save"
      onCancel={onCancel}
      error={error || ''}
      loading={loading}
    />
  );
}
