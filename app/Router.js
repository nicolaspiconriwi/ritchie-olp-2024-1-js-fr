import { DashboardLayout } from './components/layout/private/dashboard/dashboard-layout';
import { routes } from './helpers/routes';

const API_URL = 'http://localhost:4000/api/auth/verify-token';

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

// Navegar a una nueva ruta
export function navigateTo(path) {
  console.log("navigating to path");
  window.history.pushState({}, '', window.location.origin + path);
  Router();
}

// Verificar la autenticación y redirigir
async function checkAuth(path) {
  const token = localStorage.getItem('token');

  // Si no hay token, redirigir a login
  if (!token) return navigateTo('/login');

  const [isValid] = await verifyToken(token);

  // Token no válido, redirigir a login
  if (!isValid) return navigateTo('/login');

  // Redirigir al dashboard si se intenta acceder al login o a la raíz
  if (path === '/login' || path === '/') {
    navigateTo('/dashboard');
    return;
  }

  const privateRoute = routes.private.find((r) => r.path === path);
  if (!privateRoute) return navigateTo('/dashboard'); // Redirigir a dashboard si la ruta privada no existe

  // Ejecutar componente privado correspondiente
  const { pageContent, logic } = privateRoute.component();
  DashboardLayout(pageContent, logic);
}

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

// Manejar el evento de retroceso/avance en el navegador
window.onpopstate = Router;
