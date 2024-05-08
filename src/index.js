import './styles/global.css';
import './components/navigation-bar/navigation-bar.js';
import './components/sidebar-menu/sidebar-menu.js';
import './components/login-form/login-form.js';
import './scenes/dashboard/dashboard.js';

const appContainer = document.getElementById('app');

const checkAuth = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const isValid = await verifyToken(token);
    if (isValid) {
      showDashboard();
    } else {
      showLoginForm();
    }
  } else {
    showLoginForm();
  }
};

const showLoginForm = () => {
  appContainer.innerHTML = `
    <login-form></login-form>
    <dashboard-view style="display: none;"></dashboard-view>
  `;

  // Simula el login y muestra el dashboard
  document.addEventListener('login-success', () => {
    showDashboard();
  });
};

const showDashboard = () => {
  const loginForm = document.querySelector('login-form');
  const dashboardView = document.querySelector('dashboard-view');
  if (loginForm) loginForm.style.display = 'none';
  if (dashboardView) dashboardView.style.display = 'block';
};

const verifyToken = async (token) => {
  try {
    const response = await fetch('http://localhost:4000/api/auth/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return response.ok && data.valid;
  } catch (err) {
    console.error('Error al verificar el token:', err);
    return false;
  }
};

checkAuth();
