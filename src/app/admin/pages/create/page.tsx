'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {ERROR_MESSAGES,CRUD_MESSAGES} from '@/constants/messages'
import {useApiHelper} from '@/hooks/useApiHelper'
export default function CreatePage(){
  const [title,setTitle]=useState('')
  const [url,setUrl]=useState('')
  const {postData,error,setError}=useApiHelper()
  const router=useRouter()
  const handleCreate=async()=>{
    if(!title||!url)return setError(ERROR_MESSAGES.PAGE_CREATION_INVALID)
    const res=await postData('/page',{name:url,url:title})
    if(res)router.push('/admin')
  }
  return(
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-ink">Create a new page</h1>
      {error&&<p className="layout-error">{error}</p>}
      <div className="mb-5">
        <label className="block text-tertiary font-medium mb-1">Name page:</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder={CRUD_MESSAGES.EXAMPLE_INPUT_CREATE_PAGE} className="input-base"/>
      </div>
      <div className="mb-6">
        <label className="block text-tertiary font-medium mb-1">Link(URL)</label>
        <div className="flex items-center space-x-2">
          <span className="text-ink">{process.env.NEXT_PUBLIC_FRONTEND_URL}/</span>
          <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Enter Page Name" className="input-base"/>
        </div>
      </div>
      <button onClick={handleCreate} className="btn-primary">ADD NEW</button>
    </div>
  )
}
