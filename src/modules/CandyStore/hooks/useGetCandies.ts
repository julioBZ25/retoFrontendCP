import React, { useState } from 'react'
import { getCandies } from '../services/getCandies'
import { CANDY_STATUS, ICandy } from '../types'

const useGetCandies = () => {
  const [status, setStatus] = useState<CANDY_STATUS>('loading')
  const [candies, setCandies] = useState<ICandy[] | null>(null)
  const handleGetCandies = async () => {
    setStatus('loading')
    try {
      const res = await getCandies()
      setCandies(res.data.items)
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }
  return {
    handleGetCandies,
    candies,
    status
  }
}

export default useGetCandies