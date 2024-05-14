# Webpack

## ¿Qué es Webpack?

Webpack es una herramienta de empaquetado de módulos para aplicaciones web modernas. Permite a los desarrolladores dividir su código en módulos y empaquetarlos en un único archivo o varios archivos para su distribución. Webpack es ampliamente utilizado en el desarrollo de aplicaciones web para gestionar dependencias, optimizar el rendimiento y automatizar tareas de construcción.

## ¿Por qué usar Webpack?

Webpack ofrece varias ventajas para el desarrollo de aplicaciones web:

- **Gestión de dependencias**: Webpack permite importar y exportar módulos de forma sencilla, lo que facilita la gestión de dependencias en el código.
- **Optimización de código**: Webpack puede optimizar el código de la aplicación, eliminando código muerto, reduciendo el tamaño de los archivos y mejorando el rendimiento.
- **Carga de módulos**: Webpack puede cargar diferentes tipos de módulos, como JavaScript, CSS, imágenes y fuentes, lo que facilita la integración de diferentes tipos de recursos en la aplicación.
- **Configuración personalizada**: Webpack permite configurar diferentes aspectos del proceso de empaquetado, como la optimización, la generación de código fuente y la gestión de activos.
- **Integración con otros paquetes**: Webpack se puede integrar con otros paquetes y herramientas, como Babel, TypeScript y ESLint, para mejorar la funcionalidad y la calidad del código.
- **Automatización de tareas**: Webpack puede automatizar tareas de construcción, como la minificación de archivos, la generación de mapas de origen y la optimización de activos, lo que facilita el proceso de desarrollo.
- **Servidor de desarrollo**: Webpack proporciona un servidor de desarrollo integrado que permite probar la aplicación en un entorno local y realizar cambios en tiempo real.

Puede que en este momento estes pensando, bueno, y para que quiero gestionar dependencias, cargar modulos, que es un servidor de desarrollo, etc. Bueno, la respuesta es que Webpack te permite hacer todo esto y mucho más de una manera sencilla y eficiente. Al utilizar Webpack, puedes optimizar tu flujo de trabajo, mejorar el rendimiento de tus aplicaciones y mantener tu código organizado y limpio.

## ¿Cómo funciona Webpack?

Webpack funciona a través de un proceso de construcción que se divide en varias fases. Para ellos, vamos a seguir la configuracion de Webpack en nuestro archivo [webpack.config.js](../webpack.config.js)

1. **Entrada**(entry): El punto de entrada le dice a Webpack por dónde empezar y comienza a construir su gráfico de dependencias. En nuestro archivo de configuración, el punto de entrada se establece en './app/index.js'. Esto significa que Webpack comenzará a analizar desde index.js y rastreará todas las importaciones y requerimientos desde este archivo.

```javascript
entry: './app/index.js',
```

2. **Salida**(output): La salida le dice a Webpack dónde emitir los paquetes que crea y cómo nombrar estos archivos. En nuestro archivo de configuración, la salida se establece en './dist/main.js'. Esto significa que Webpack emitirá un archivo llamado main.js en la carpeta dist.

```javascript
output: {
  path: path.resolve(__dirname, 'dist'), // carpeta del bundle de salida
  filename: 'bundle.js', // nombre del archivo de salida
  publicPath: '/', // ruta relativa para los assets
  clean: true // limpiar la carpeta de salida antes de cada compilación
},
```

Si no le indicamos un nombre de archivo, Webpack generará un archivo llamado 'main.js' por defecto en la carpeta 'dist'. Tambien podemos cambiar el nombre de la carpeta de salida, cambiando la propiedad path.resolve(**dirname, 'nuevaCarpeta'). **dirname es una variable global de Node.js que hace referencia al directorio actual del archivo.

3. **Módulos**(modules): En esta sección, definimos cómo diferentes tipos de archivos deben ser tratados. Por ejemplo, los archivos JavaScript son manejados por babel-loader para transpilación, los archivos CSS son manejados por style-loader y css-loader para inyectar CSS en el DOM, y los archivos de imagen son manejados por el sistema de recursos para copiarlos correctamente al directorio de salida.

```javascript
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
    { test: /\.css$/, use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]},
    { test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource', generator: { filename: 'assets/images/[hash][ext][query]' } }
  ]
},
```

Notas importante:

- La extension .js en la propiedad test: /\.js$/ indica que se aplicará la regla a todos los archivos con extensión .js. La propiedad exclude: /node_modules/ indica que no se aplicará la regla a los archivos dentro de la carpeta node_modules.

- Cuando mandamos a llamar un archivo .js dentro de otro archivo, no utilizamos la extension .js, por ejemplo: import { saludar } from './saludar';. Y por que? Porque Webpack ya sabe que debe buscar un archivo con extension .js en la configuración de los módulos.

- La propiedad use: { loader: 'babel-loader' } indica que se utilizará el loader babel-loader para transpilar los archivos JavaScript.

- La propiedad test: /\.css$/ indica que se aplicará la regla a todos los archivos con extensión .css.

- La propiedad use: ['style-loader', 'css-loader'] indica que se utilizarán los loaders style-loader y css-loader para manejar los archivos CSS.

4. **Loaders**: Los loaders son utilizados por Webpack para procesar diferentes tipos de archivos y convertirlos en módulos que pueden ser incluidos en el paquete final. Los loaders se configuran en la sección de módulos y se utilizan para transformar archivos de diferentes formatos, como JavaScript, CSS, imágenes y fuentes.

Por ejemplo, babel-loader transforma el codigo javascript moderno en un codigo javascript compatible con versiones anteriores de los navegadores. css-loader interpreta la regla css @import y url() y resuelve las importaciones de archivos CSS y resolvera las dependencias.

5. **Plugins**: Los plugins se utilizan para extender las capacidades de Webpack. Utilizas HtmlWebpackPlugin para generar un archivo HTML que incluye automáticamente todos tus paquetes de Webpack. Esto es esencial para SPA donde el HTML sirve como punto de entrada.

- Entendamos a los plugins como una forma de extender las capacidades de Webpack. Por ejemplo, el plugin HtmlWebpackPlugin se utiliza para generar un archivo HTML que incluye automáticamente todos los paquetes de Webpack. Esto es esencial para SPA donde el HTML sirve como punto de entrada.

- Además los plugins son la columna vertebral de Webpack, ya que permiten realizar tareas como la optimización, la generación de código fuente y la gestión de activos. Mientras que los loaders se utilizan para transformar ciertos tipos de modulos, los plugins se pueden utilizar para realizar tareas como:

  - Generar archivos HTML.
  - Minificar archivos CSS y JavaScript.
  - Optimizar imágenes.
  - Crear variables de entorno.
  - Crear bundles de código separados.
  - Y mucho más.

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html'
  })
],
```

6. **Modo**(mode): El modo le dice a Webpack si está en modo de desarrollo o producción. En modo de desarrollo, Webpack se enfoca en la velocidad y la experiencia del desarrollador. En modo de producción, Webpack se enfoca en la optimización y el rendimiento.

```javascript
mode: 'development',
```

7. **DevServer**: Configuramos un servidor de desarrollo local que sirve nuestra aplicación desde el directorio dist. Habilita compresión y utiliza el puerto 9000. Además, historyApiFallback se configura para soportar la navegación de SPA, asegurándose de que todas las solicitudes de navegación devuelvan index.html.

```javascript

devServer: {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
  historyApiFallback: { index: '/index.html' }
},
```

Estas son las fases principales de cómo funciona Webpack. A medida que Webpack procesa su configuración, crea un gráfico de dependencias y emite un paquete optimizado en la carpeta de salida. Webpack es una herramienta poderosa que puede ayudarte a optimizar tu flujo de trabajo y mejorar el rendimiento de tus aplicaciones web.
