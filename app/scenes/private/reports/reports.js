import './reports.css';

export function ReportScene() {
  const root = document.getElementById('root');

  root.innerHTML = `
      <nav>
        <button id="logout">Logout</button>
      </nav>
      <h2>Home</h2>
      <p>Welcome to the reports view.</p>
    `;

  document.getElementById('logout').addEventListener('click', logout);
}