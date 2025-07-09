'use client'
import { useEffect, useState } from 'react'
import api from '@/lib/api'
import { VideoBlockSecond } from './type'
import CreateVideoBlockSecond from './CreateVideoBlockSecond'
import ReadVideoBlockSecond from './ReadVideoBlockSecond'
import UpdateVideoBlockSecond from './UpdateVideoBlockSecond'

export default function VideoBlockSecondAdminPage({ pageId }: { pageId: number }) {
  const [data, setData] = useState<VideoBlockSecond | null>(null)
  const [editMode, setEditMode] = useState(false)

  const fetchData = async () => {
    const res = await api.get(`/video-block-second/page/${pageId}`)
    setData(res.data[0] || null)
    setEditMode(false)
  }

  useEffect(() => {
    fetchData()
  }, [pageId])

  return (
    <div className="w-full ">
      <h2 className="w-ful text-center p-6 text-4xl"> <strong>Secound VideoBlock</strong></h2>
      {!data && <CreateVideoBlockSecond pageId={pageId} onSuccess={fetchData} />}
      {data && !editMode && (
        <ReadVideoBlockSecond data={data} onEdit={() => setEditMode(true)} onDeleted={fetchData} />
      )}
      {data && editMode && (
        <UpdateVideoBlockSecond data={data} onCancel={() => setEditMode(false)} onSuccess={fetchData} />
      )}
    </div>
  )
}