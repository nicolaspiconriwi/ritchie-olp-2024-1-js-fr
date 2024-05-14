import styles from './sidebar-menu.css';

export function SidebarMenu(data = []) {

  const path = window.location.pathname;

  // if path === href, add active class
  data.forEach((item) => {
    if (path === item.href) {
      item.active = true;
    }
  });

  return `
    <aside class="${styles["sidebar-menu"]}">
      <ul>
        ${data.map((item) => `
          <li class="${item.active ? styles.active : ''}">
            <button id="${item.href}" type="button">${item.name}</button>
          </li>
        `).join('')}
        <li><button id="logout" type="button">Logout</button></li>
      </ul>
    </aside>
  `;
}