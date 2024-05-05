import * as Yup from "yup";

export interface TUser {
  email: string
  name: string
}

export const schemaUser = Yup.object().shape({
  name: Yup.string().required("El campo es obligatorio").max(40, "Máximo 40 caracteres."),
  email: Yup.string().required("El campo es obligatorio").email('Ingrese un email correcto.')
});

export const defaultUser = {
  name: '',
  email: ''
};

export const userDataKeys: (keyof TUser)[] = ["email", "name"];
