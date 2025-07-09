'use client'

import { useEffect, useState } from 'react'
import api from '@/lib/api'
import { VideoBlock } from './type'
import CreateVideoBlock from './CreateVideoBlock'
import ReadVideoBlock from './ReadVideoBlock'
import UpdateVideoBlock from './UpdateVideoBlock'

export default function VideoBlockAdminPage({ pageId }: { pageId: number }) {
  const [data, setData] = useState<VideoBlock | null>(null)
  const [editMode, setEditMode] = useState(false)

  const fetchData = async () => {
    const res = await api.get(`/video-block/page/${pageId}`)
    setData(res.data[0] || null)
    setEditMode(false)
  }

  useEffect(() => {
    fetchData()
  }, [pageId])

  return (
    <div className="w-full">
        <h2 className="w-ful text-center p-6 text-4xl"> <strong>Frist VideoBlock</strong></h2>
      {!data && <CreateVideoBlock pageId={pageId} onSuccess={fetchData} />}
      {data && !editMode && (
        <ReadVideoBlock data={data} onEdit={() => setEditMode(true)} onDeleted={fetchData} />
      )}
      {data && editMode && (
        <UpdateVideoBlock
          data={data}
          onCancel={() => setEditMode(false)}
          onSuccess={fetchData}
        />
      )}
    </div>
  )
}
