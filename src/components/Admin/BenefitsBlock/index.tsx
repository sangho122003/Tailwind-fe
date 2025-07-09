
'use client'
import { useEffect, useState } from 'react'
import api from '@/lib/api'
import { BenefitsBlockType } from './type'
import CreateBenefitsBlock from './CreateBenefitsBlock'
import ReadBenefitsBlock from './ReadBenefitsBlock'
import UpdateBenefitsBlock from './UpdateBenefitsBlock'

export default function BenefitsBlockAdminPage({ pageId }: { pageId: number }) {
  const [block, setBlock] = useState<BenefitsBlockType | null>(null)
  const [editMode, setEditMode] = useState(false)

  const fetchBlock = async () => {
    const res = await api.get(`/benefits-block/page/${pageId}`)
    setBlock(res.data[0] || null)
    setEditMode(false)
  }

  useEffect(() => {
    fetchBlock()
  }, [pageId])

  return (
    <div className="w-full ">
      <h2 className="w-ful text-center p-6 text-4xl"> <strong>BenefitsBlock</strong></h2>
      {!block && <CreateBenefitsBlock pageId={pageId} onSuccess={fetchBlock} />}
      {block && !editMode && <ReadBenefitsBlock block={block} onEdit={() => setEditMode(true)} onDeleted={fetchBlock} />}
      {block && editMode && <UpdateBenefitsBlock block={block} onSuccess={fetchBlock} onCancel={() => setEditMode(false)} setError={() => {}} />}
    </div>
  )
}