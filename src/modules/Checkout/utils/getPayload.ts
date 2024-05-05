import { formatExpirationDate } from "./formatExpirationDate";
import { TPayment, paymentDataKeys } from "./schema";

interface IgetPayload {
  changedFields: Partial<Readonly<{
    cardNumber?: boolean | undefined;
    expirationDate?: boolean | undefined;
    cvv?: boolean | undefined;
    email?: boolean | undefined;
    name?: boolean | undefined;
    documentNumber?: boolean | undefined;
}>>
  values: TPayment
}

export const getPayload = ({changedFields, values}:IgetPayload) => {
  const payload: { [key: string]: any } = {};
  for (const currentKey in changedFields) {
    const key = currentKey as keyof TPayment;
    if (paymentDataKeys.includes(key) && changedFields[key]) {
      if (key === 'expirationDate') payload[key] = formatExpirationDate(values[key])
      else payload[key] = values[key];
    }
    payload['name'] = values.name
    payload['email'] = values.email
  }
  return payload
}