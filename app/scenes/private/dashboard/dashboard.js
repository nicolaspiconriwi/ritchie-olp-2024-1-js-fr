export function DashboardScene(){
  const root = document.getElementById('root');
  root.innerHTML = `
    <nav>
      <button id="logout">Logout</button>
    </nav>
    <h2>Dashboard</h2>
    <p>Welcome to the dashboard view.</p>
  `;

  document.getElementById('logout').addEventListener('click', logout);
}