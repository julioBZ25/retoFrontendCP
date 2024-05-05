import * as Yup from "yup";

export interface TPayment {
  cardNumber: string
  expirationDate: string
  cvv: string
  email: string
  name: string
  documentNumber: string
}

export const schemaPayment = Yup.object().shape({
  cardNumber: Yup.string()  .matches(/^[0-9]{16}$/, 'El número de tarjeta de crédito debe tener 16 dígitos')
  .required('El número de tarjeta de crédito es obligatorio'),
  expirationDate: Yup.string().matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'La fecha de expiración debe tener el formato MM/YY')
  .test('expiration-date', 'La fecha de expiración es inválida', (value: string | undefined) => {
    if (!value) return false;
    const [month, year] = value.split('/');
    const currentDate = new Date();
    const expirationDate = new Date(parseInt(`20${year}`), parseInt(month), 1);
    return expirationDate > currentDate;
  })
  .required('La fecha de expiración es obligatoria'),
  cvv: Yup.string()
  .matches(/^[0-9]{3,4}$/, 'El CVV debe tener entre 3 y 4 dígitos')
  .required('El CVV es obligatorio'),
  name: Yup.string().required("El campo es obligatorio").max(40, "Máximo 40 caracteres."),
  email: Yup.string().email('Ingrese un email correcto.').required("El campo es obligatorio"),
  documentNumber: Yup.string()
  .matches(/^\d{8}$/, 'El documento de identidad (DNI) debe tener exactamente 8 números')
  .required('El documento de identidad (DNI) es obligatorio'),
});

export const defaultPayment = {
  cardNumber:'',
  expirationDate: '',
  cvv: '',
  name: '',
  email: '',
  documentNumber: '',
};

export const paymentDataKeys: (keyof TPayment)[] = ["email", "name", "cardNumber", "cvv", "documentNumber", "expirationDate"];
