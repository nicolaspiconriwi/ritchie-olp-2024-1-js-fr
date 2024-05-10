project-root/
│
├── dist/                       # Carpeta de salida de archivos generados por Webpack
│
├── app/                        # Carpeta de código fuente
│   ├── assets/                 # Imágenes, fuentes, etc.
│   ├── components/             # Componentes reutilizables globales
│   │   ├── navigation-bar/     # Barra de navegación
│   │   │   ├── navigation-bar.js
│   │   │   └── navigation-bar.css
│   │   ├── sidebar-menu/       # Menú lateral
│   │   │   ├── sidebar-menu.js
│   │   │   └── sidebar-menu.css
│   │   └── login-form/         # Formulario de login
│   │       ├── login-form.js
│   │       └── login-form.css
│   ├── scenes/                 # Diferentes escenas para el dashboard
│   │   ├── dashboard/          # Vista principal del dashboard
│   │   │   ├── dashboard.html
│   │   │   ├── dashboard.js
│   │   │   ├── dashboard.css
│   │   │   └── components/
│   │   ├── home/               # Escena de Home dentro del dashboard
│   │   │   ├── home.html
│   │   │   ├── home.js
│   │   │   ├── home.css
│   │   │   └── components/
│   │   ├── reports/            # Escena de Reports dentro del dashboard
│   │   │   ├── reports.html
│   │   │   ├── reports.js
│   │   │   ├── reports.css
│   │   │   └── components/
│   │   └── settings/           # Escena de Settings dentro del dashboard
│   │       ├── settings.html
│   │       ├── settings.js
│   │       ├── settings.css
│   │       └── components/
│   ├── styles/                 # Estilos globales
│   │   └── global.css          # Estilos globales compartidos
│   └── index.js                # Archivo principal de JavaScript
|   └── App.js                  # Archivo principal de nuestra app SPA
|   └── Router.js               # Archivo de configuración de rutas de nuestra app SPA
│
├── .babelrc                    # Archivo de configuración de Babel
├── .gitignore                  # Archivo de ocultar archivos/directorios a Git
├── index.html                  # Archivo principal de HTML
├── package-lock.json           # Dependencias del proyecto con versiones exactas
├── package.json                # Dependencias del proyecto y scripts
├── webpack.config.js           # Archivo de configuración de Webpack
└── README.md                   # Documentación del proyecto
