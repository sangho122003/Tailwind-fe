  'use client'

  import { useEffect, useState } from 'react'
  import { dataSubtract } from './type'
  import CreateSubtract from './CreateSubtract'
  import ReadSubtract from './ReadSubtract'
  import UpdateSubtract from './UpdateSubtract'
  import api from '@/lib/api'
import { ERROR_MESSAGES } from '@/constants/messages'

  export default function SubtractAdminPage({ pageId }: { pageId: number }) {
    const [data, setData] = useState<dataSubtract | null>(null)
    const [editMode, setEditMode] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await api.get(`/subtract/page/${pageId}`)
        setData(res.data[0] || null)
        setEditMode(false)
      } catch {
        setError(ERROR_MESSAGES.LOAD_FAILED)
      } finally {
        setLoading(false)
      }
    }

    useEffect(() => {
      fetchData()
    }, [pageId])

    return (
      <div className="w-full">
        <h2 className="text-center p-6 text-4xl font-bold">Subtract Block</h2>
        {error && <p className="layout-error">{error}</p>}
        {!data && <CreateSubtract pageId={pageId}  onSuccess={fetchData} />}
        {data && !editMode && (
          <ReadSubtract data={data} onEdit={() => setEditMode(true)} onDeleted={fetchData} />
        )}
        {data && editMode && (
          <UpdateSubtract
            data={data}
            onCancel={() => setEditMode(false)}
            onSuccess={fetchData}
            setError={setError}
          />
        )}
      </div>
    )
  }
