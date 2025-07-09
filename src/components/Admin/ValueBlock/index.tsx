'use client'
import { useEffect, useState } from 'react'
import api from '@/lib/api'
import { ValueBlock } from './type'
import CreateValueBlock from './CreateValueBlock'
import ReadValueBlock from './ReadValueBlock'
import UpdateValueBlock from './UpdateValueBlock'

export default function ValueBlockAdminPage({ pageId }: { pageId: number }) {
  const [data, setData] = useState<ValueBlock | null>(null)
  const [editMode, setEditMode] = useState(false)

  const fetchData = async () => {
    const res = await api.get(`/value-block/page/${pageId}`)
    setData(res.data[0] || null)
    setEditMode(false)
  }

  useEffect(() => {
    fetchData()
  }, [pageId])

  return (
    <div className="w-full">
      <h2 className="w-ful text-center p-6 text-4xl"> <strong>ValuBlock</strong></h2>
      {!data && <CreateValueBlock pageId={pageId} onSuccess={fetchData} />}
      {data && !editMode && (
        <ReadValueBlock
          data={data}
          onEdit={() => setEditMode(true)}
          onDeleted={fetchData}
        />
      )}
      {data && editMode && (
        <UpdateValueBlock
          data={data}
          onCancel={() => setEditMode(false)}
          onSuccess={fetchData}
        />
      )}
    </div>
  )
}
