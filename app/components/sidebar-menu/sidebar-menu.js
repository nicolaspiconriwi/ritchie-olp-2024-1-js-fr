import './sidebar-menu.css';

if (!customElements.get('sidebar-menu')) {
  class SidebarMenu extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const sidebar = document.createElement('aside');

      sidebar.innerHTML = `
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      `;
      shadow.appendChild(sidebar);
    }
  }

  customElements.define('sidebar-menu', SidebarMenu);
}
