# Que son las variables de entorno en JavaScript

Las variables de entorno en JavaScript son variables que se utilizan para almacenar información sensible o configuraciones específicas del entorno en el que se ejecuta una aplicación. Estas variables se pueden acceder desde el código JavaScript y se utilizan para configurar el comportamiento de la aplicación en función del entorno en el que se encuentra.

Las variables de entorno son útiles para separar la configuración de la aplicación de su código fuente, lo que facilita la gestión de diferentes entornos (como desarrollo, pruebas y producción) sin tener que modificar el código fuente en cada caso. Al utilizar variables de entorno, se puede mantener la configuración sensible, como claves de API o URLs de bases de datos, fuera del código fuente y protegerla de accesos no autorizados.

En JavaScript, las variables de entorno se pueden definir y acceder de varias maneras. Una forma común de definir variables de entorno es a través de un archivo `.env`, que contiene pares clave-valor de las variables de entorno. Este archivo se puede cargar en la aplicación utilizando herramientas como `dotenv` o `webpack`, que permiten acceder a las variables de entorno definidas en el archivo `.env` desde el código JavaScript.

Por ejemplo, si se tiene un archivo `.env` con las siguientes variables de entorno:

```plaintext
API_URL=https://api.example.com
API_KEY=abc123
```

Estas variables se pueden acceder en el código JavaScript de la siguiente manera:

```javascript
const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
```

De esta forma, se puede utilizar la configuración definida en las variables de entorno en la aplicación JavaScript sin tener que exponer información sensible en el código fuente.

Para node.js, se puede utilizar el paquete `dotenv` para cargar las variables de entorno definidas en un archivo `.env` en el entorno de ejecución de la aplicación. Por ejemplo, se puede instalar `dotenv` mediante npm:

```bash
npm install dotenv
```

Y luego cargar las variables de entorno en la aplicación de la siguiente manera:

```javascript
require('dotenv').config();
```

Nota* Esto no aplica para el navegador, ya que las variables de entorno son específicas de cada entorno de ejecución y no están disponibles en el navegador. Sin embargo, se pueden utilizar otras formas de configuración, como variables globales o almacenamiento local, para lograr un comportamiento similar en una aplicación web.