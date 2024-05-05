import axios from 'axios'

interface IpostCompleteResponse {
  resul_code: string
}

export const postComplete = (payload: any) => axios.post<IpostCompleteResponse>('https://cp-staging.onrender.com/v1/complete', payload)