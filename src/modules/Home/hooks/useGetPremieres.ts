import React, { useState } from 'react'
import { getPremieres } from '../services/getPremieres'
import { IPremiere, PREMIERE_STATUS } from '../types'

const useGetPremieres = () => {
  const [status, setStatus] = useState<PREMIERE_STATUS>('loading')
  const [premieres, setPremieres] = useState<IPremiere[] | null>(null)
  const handleGetPremieres = async () => {
    try {
      const res = await getPremieres()
      setStatus('success')
      setPremieres(res.data.premieres)
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }
  return {
    handleGetPremieres,
    status,
    premieres,
  }
}

export default useGetPremieres