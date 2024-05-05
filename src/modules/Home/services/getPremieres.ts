import axios from 'axios'
import { IPremiere } from '../types'

interface IgetPremieresResponse {
  premieres: IPremiere[]
}

export const getPremieres = () => axios.get<IgetPremieresResponse>('https://cp-staging.onrender.com/v1/premieres')