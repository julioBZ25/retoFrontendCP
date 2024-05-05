import React from 'react'
import { getPayUPayment } from '../services/postPayUPayment'
import { postComplete } from '../services/postComplete'

interface IhandlePayU {
  totalPrice: string
  name: string
  documentNumber: string
  email: string
  cardNumber: string
  cvv: string
  expirationDate: string
}

const usePayment = () => {
  const handlePayU = async ({totalPrice, name, documentNumber, email, cardNumber, cvv, expirationDate}:IhandlePayU) => {
    try {
      // const res = await getPayUPayment()
      const res = {
        email,
        name,
        documentNumber,
        operationDate: '123456789',
        transactionId: '123456789'
      }
      const resComplete = await postComplete(res)
      return resComplete.data.resul_code
    } catch (error) {
      console.error(error)
    } 
  }
  return {
    handlePayU
  }
}

export default usePayment