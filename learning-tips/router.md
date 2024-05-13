# Router.js

## Introduccion

El router es una herramienta que nos permite navegar entre diferentes vistas de nuestra aplicación. En este caso, vamos a analizar como funciona el Router.js creado por su team leader.

```javascript

import { routes } from './helpers/routes';

```

Importamos el objeto `routes` que contiene las rutas de nuestra aplicación.

```javascript

import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/home';
import { ReportScene } from '../scenes/private/reports';


export const routes = {
    private: [
        { path: '/dashboard', component: HomeScene },
        { path: '/dashboard/reports', component: ReportScene },
    ],
    public: [
        { path: '/login', component: LoginPage }
    ]
};

```

Esto, con la intención de que el router pueda acceder a las vistas de nuestra aplicación, las cuales están organizadas en dos grupos: `private` y `public` y cada uno de estos grupos contiene un array de rutas con su respectivo componente  del cual se hablara mas en profundidad en el archivo [components.md](components.md)

Lo que espero de ti hasta ahora, es que puedas descargar este repositorio como base para tu proyecto y mientras llegas a este punto, puedas crear tus propias rutas y componentes publicos o privados según lo requiera tu aplicación.

Bueno, continuemos con nuestro archivo Router.js

```javascript

const API_URL = 'http://localhost:4000/api/auth/verify-token';

```

Simplemente sera nuestra URL base para verificar el token del usuario.

```javascript

// Verificar token con la API
async function verifyToken(token) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return [data.valid, data];
  } catch (error) {
    console.error('Token verification failed:', error);
    return [false, { message: error.message }];
  }
}

```

Esta funciona, no necesariamente tiene que ser parte del Router, pero es una buena practica tenerla aquí, ya que es una función que se encarga de verificar el token del usuario, la cual es llamada en el archivo [App.js](app.md)

Aunque su autor, prefiere separar las responsabilidades, en una futura sesión de code review, podríamos sugerirle que esta función sea parte de un archivo `auth.js` o `api.js` para mantener la organización del código.

```javascript

// Navegar a una nueva ruta
export function navigateTo(path) {
  window.history.pushState({}, '', window.location.origin + path);
  Router();
}

```

Esta función se encarga de navegar a una nueva ruta, simplemente recibe la ruta a la cual queremos navegar y hace uso de `window.history.pushState` para cambiar la URL del navegador y luego llama a la función `Router` que se encarga de renderizar la vista correspondiente.

```javascript

// Verificar la autenticación y redirigir
async function checkAuth(path) {
  const token = localStorage.getItem('token');

  if (token) {
    const [isValid] = await verifyToken(token);
    if (isValid) {
      // Redirigir al dashboard si se intenta acceder al login o a la raíz
      if (path === '/login' || path === '/') {
        navigateTo('/dashboard');
        return;
      }

      // Ejecutar componente privado correspondiente
      const privateRoute = routes.private.find((r) => r.path === path);
      if (privateRoute) {
        privateRoute.component();
        return;
      } else {
        navigateTo('/dashboard'); // Redirigir a dashboard si la ruta privada no existe
      }
    } else {
      // Token no válido, redirigir a login
      navigateTo('/login');
    }
  } else {
    // Si no hay token, redirigir a login
    navigateTo('/login');
  }
}

```

Uh! Parece una funcion bastante larga, pero no te preocupes, vamos a analizarla paso a paso.

- 1. Primero, obtenemos el token del usuario desde el `localStorage`. Recordemos que el `localStorage` es una forma de almacenar datos en el navegador del usuario, los cuales no se eliminan al cerrar la ventana del navegador.

- 2. Luego, verificamos si el token existe, si es así, llamamos a la función `verifyToken` que se encarga de verificar si el token es valido o no. El token se considera valido si la respuesta de la API es `true`.

- 3. Si el token es valido, verificamos si la ruta del cliente a la que se intenta acceder es `/login` o `/`, en cuyo caso redirigimos al usuario al dashboard.

- 4. Si la ruta es privada, ejecutamos el componente correspondiente.

- 5. Si la ruta no es valida, redirigimos al usuario al dashboard.

- 6. Si el token no es valido, redirigimos al usuario al login.

- 7. Si no hay token, redirigimos al usuario al login.

```javascript

// Definir y manejar el router
export async function Router() {
  const path = window.location.pathname;
  console.log(path);

  // Verificar autenticación antes de decidir qué componente mostrar
  if (path === '/login' || path === '/') {
    const token = localStorage.getItem('token');
    if (token) {
      const [isValid] = await verifyToken(token);
      if (isValid) {
        navigateTo('/dashboard');
        return;
      }
    }
  }

  // Comprobar rutas públicas y privadas
  const publicRoute = routes.public.find((r) => r.path === path);
  const privateRoute = routes.private.find((r) => r.path === path);

  if (publicRoute) {
    publicRoute.component();
  } else if (privateRoute) {
    checkAuth(path);
  } else {
    console.warn('Ruta no encontrada:', path);
    navigateTo('/login');
  }
}

```

Finalmente, tenemos la función `Router` que se encarga de manejar el router de nuestra aplicación. Entendamos paso a paso lo que hace:

- 1. Obtiene la ruta actual del navegador. Recordemos que `window` es un objeto global que representa la ventana del navegador.
- 2. Verifica si la ruta es `/login` o `/`. Si es así, verifica si el token es valido y redirige al usuario al dashboard.
- 3. Comprueba si la ruta es publica o privada y ejecuta el componente correspondiente.
- 4. Si la ruta no es valida, redirige al usuario al login.
- 5. Si no se encuentra la ruta, muestra un mensaje de advertencia y redirige al usuario al login.

Y como ultimo comando:

```javascript
window.onpopstate = Router;
```

Este comando se encarga de llamar a la función `Router` cada vez que el usuario navega hacia adelante o hacia atrás en la historia del navegador, y de nuevo, se repite la función `Router` para renderizar la vista correspondiente.