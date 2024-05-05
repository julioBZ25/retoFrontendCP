import axios from 'axios'
import { ICandy } from '../types'

interface IgetCandiesResponse {
  items: ICandy[]
}

export const getCandies = () => axios.get<IgetCandiesResponse>('https://cp-staging.onrender.com/v1/candystore')