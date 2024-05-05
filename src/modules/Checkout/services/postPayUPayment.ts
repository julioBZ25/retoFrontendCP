import axios from 'axios'

interface IpostPayUPaymentResponse {
}

export const postPayUPayment = (payload: any) => axios.post('https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi', payload, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})