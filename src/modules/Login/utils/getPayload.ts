import React from 'react'
import { TUser, userDataKeys } from './schema';

interface IgetPayload {
  changedFields: Partial<Readonly<{
    name?: boolean;
    email?: boolean;
  }>>
  values: TUser
}

const getPayload = ({changedFields, values}:IgetPayload) => {
  const payload: { [key: string]: any } = {};
  for (const currentKey in changedFields) {
    const key = currentKey as keyof TUser;
    if (userDataKeys.includes(key) && changedFields[key]) {
      payload[key] = values[key];
    }
  }
  return payload
}

export default getPayload