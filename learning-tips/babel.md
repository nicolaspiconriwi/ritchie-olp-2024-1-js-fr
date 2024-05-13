# Que es babel en JavaScript?

Babel es una herramienta que nos permite transformar nuestro código JavaScript de última generación (ES6, ES7, ES8, etc) a una versión que los navegadores puedan entender.

## ¿Por qué necesitamos Babel?

Los navegadores no soportan todas las características de JavaScript de última generación, por lo que necesitamos una herramienta que nos permita escribir código moderno y transformarlo a una versión que los navegadores puedan entender.

## ¿Cómo funciona Babel?

Babel funciona a través de plugins que se encargan de transformar nuestro código. Por ejemplo, si queremos transformar código de ES6 a ES5, necesitamos un plugin que se encargue de realizar esta transformación.

## ¿Cómo instalar Babel?

Para instalar Babel, necesitamos instalarlo a través de npm. Podemos instalar Babel de la siguiente manera:

```bash
npm install --save-dev @babel/core @babel/cli
```

Una vez instalado, podemos utilizar Babel a través de la línea de comandos o configurarlo en nuestro proyecto.

## Configuracion de Babel

Para configurar Babel en nuestro proyecto, necesitamos crear un archivo `.babelrc` en la raíz de nuestro proyecto. En este archivo, podemos configurar los plugins que queremos utilizar y las transformaciones que queremos realizar.

Por ejemplo, si queremos transformar código de ES6 a ES5, podemos configurar Babel de la siguiente manera:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Con esta configuración, Babel utilizará el preset `@babel/preset-env` para transformar nuestro código de ES6 a ES5.

Pero por si solo Babel no puede hacer mucho, necesitamos instalar plugins adicionales para que Babel pueda transformar nuestro código de manera efectiva. Aqui es donde entra webpack.

- Para recordar que es webpack, puedes visitar el siguiente [link](webpack.md)

## Integración de Babel con Webpack

Webpack es una herramienta de empaquetado de módulos que nos permite gestionar dependencias, optimizar el rendimiento y automatizar tareas de construcción en nuestras aplicaciones web. Al integrar Babel con Webpack, podemos utilizar Babel para transformar nuestro código y Webpack para empaquetarlo en un único archivo o varios archivos.

Para integrar Babel con Webpack, necesitamos instalar los siguientes paquetes:

```bash
npm install --save-dev @babel/preset-env @babel/preset-react babel-loader
```

Una vez instalados los paquetes, podemos configurar Babel en nuestro archivo de configuración de Webpack (`webpack.config.js`). Por ejemplo, si queremos utilizar Babel para transformar código de ES6 a ES5, podemos configurar Webpack de la siguiente manera:

```javascript

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

Con esta configuración, Webpack utilizará Babel para transformar cualquier archivo JavaScript que coincida con la expresión regular `/\.js$/` y que no esté en la carpeta `node_modules`. Babel utilizará el preset `@babel/preset-env` para realizar la transformación.

## Todas las configuraciones de Babel y Webpack

Para obtener más información sobre cómo configurar Babel y Webpack, puedes visitar la documentación oficial de Babel y Webpack:

- [Documentación de Babel](https://babeljs.io/docs/en/)
- [Documentación de Webpack](https://webpack.js.org/concepts/)

Veamos algunos ejemplos de configuraciones de Babel y Webpack en la práctica.

```json
//.babelrc
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

```javascript
//webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
};
```

Con estas configuraciones, Babel transformará nuestro código de ES6 a ES5 y utilizará el plugin `@babel/plugin-proposal-class-properties` para transformar propiedades de clase en nuestro código. Y... que son las propiedades de clase? Puedes visitar el siguiente [link](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)