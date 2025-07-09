'use client'
import {useState} from 'react'
import api from '@/lib/api'
import { CRUD_MESSAGES, ERROR_MESSAGES } from '@/constants/messages'
export function useApiHelper<T=any>(){
  const [error,setError]=useState<string|null>(null)
  const [loading,setLoading]=useState(false)
  const getAuthHeaders=(isFormData=false)=>{
    const token=typeof window!=='undefined'?localStorage.getItem('access_token'):null
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': isFormData?'multipart/form-data':'application/json'
    }
  }
  const postData=async(url:string,data:any,isFormData=false):Promise<T|null>=>{
    try{
      setLoading(true)
      setError(null)
      const headers=getAuthHeaders(isFormData)
      const res=await api.post<T>(url,data,{headers})
      return res.data
    }catch(e:any){
      console.error(e)
      setError(ERROR_MESSAGES.Fail_SEND_DATA)
      return null
    }finally{setLoading(false)}
  }

  const getData=async(url:string):Promise<T|null>=>{
    try{
      setLoading(true)
      setError(null)
      const headers=getAuthHeaders()
      const res=await api.get<T>(url,{headers})
      return res.data
    }catch(e:any){
      console.error(e)
      setError(ERROR_MESSAGES.LOAD_FAILED)
      return null
    }finally{setLoading(false)}
  }
const patchData = async (url: string, data: any, isFormData = false): Promise<T | null> => {
  try {
    setLoading(true)
    setError(null)
    const headers = getAuthHeaders(isFormData)
    const res = await api.patch<T>(url, data, { headers })
    return res.data
  } catch (e: any) {
    console.error(e)
    setError(ERROR_MESSAGES.FAIL_UPDATE_DATA || 'Update failed')
    return null
  } finally {
    setLoading(false)
  }
}

  const deleteData=async(url:string,confirmMsg=CRUD_MESSAGES.COMFIRM_DELETE):Promise<boolean>=>{
    if(!confirm(confirmMsg))return false
    try{
      setLoading(true)
      setError(null)
      const headers=getAuthHeaders()
      await api.delete(url,{headers})
      return true
    }catch(e:any){
      console.error(e)
      setError(ERROR_MESSAGES.FAIL_DELETE)
      return false
    }finally{setLoading(false)}
  }
  return{postData,getData,deleteData,error,loading,setError,patchData}
}
