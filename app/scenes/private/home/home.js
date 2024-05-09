import { navigateTo } from '../../../Router';
import { logOut } from '../../../helpers';
import './home.css';

export function HomeScene() {
  const root = document.getElementById('root');

  root.innerHTML = `
    <nav>
      <button id="logout">Logout</button>
      <button id="reports">Reportes</button>
    </nav>
    <h2>Home</h2>
    <p>Welcome to the home view.</p>
  `;

  document.getElementById('logout').addEventListener('click', logOut);
  document.getElementById('reports').addEventListener('click', () => navigateTo('/dashboard/reports'));
}
