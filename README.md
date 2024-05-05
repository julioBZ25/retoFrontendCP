# Reto Frontend CP

Este proyecto es una aplicación web desarrollada con Vite & React.js que incluye las siguientes vistas: inicio, inicio de sesión, dulcería y proceso de compra para el reto técnico de CP.

## Cómo Iniciar el Proyecto

1. **Clonar el Repositorio**:
```
git clone <URL del repositorio>
```
2. **Instalar Dependencias**:
```
cd nombre-del-proyecto
npm install
```
3. **Iniciar el Servidor de Desarrollo**:
 ```
npm run dev
```
5. **Acceder a la Aplicación**:
Una vez que el servidor esté en funcionamiento, la aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Vistas Trabajadas

- **Home**: Página principal de la aplicación con las películas disponibles.
- **Login**: Vista para que los usuarios inicien sesión en la aplicación.
- **Dulcería**: Vista que muestra una selección de productos disponibles en la dulcería.
- **Checkout**: Vista donde se puede realizar el pago de los productos.

# Notas
- Es necesario generar un archivo env.js dentro de src/utils. Este archivo debe de tener el siguiente formato:
```
let env = {
  API_KEY: "XXXXX",
  AUTH_DOMAIN: "XXXXX",
  PROJECT_ID: "XXXXX",
  STORAGE_BUCKET: "XXXXX",
  MESSAGING_SENDER_ID: "XXXXX",
  APP_ID: "XXXXX",
};
export default env;
```
