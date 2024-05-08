import './dashboard.css';
import '../home/home.js';
import '../reports/reports.js';

if (!customElements.get('dashboard-view')) {
  class DashboardView extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const wrapper = document.createElement('div');

      wrapper.innerHTML = `
        <navigation-bar></navigation-bar>
        <sidebar-menu></sidebar-menu>
        <main id="content">
          <home-scene></home-scene>
        </main>
      `;
      shadow.appendChild(wrapper);

      // Navegación entre escenas
      shadow.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
          event.preventDefault();
          const scene = event.target.getAttribute('href').substring(1);
          this.loadScene(scene);
        }
      });
    }

    loadScene(scene) {
      const content = this.shadowRoot.getElementById('content');
      switch (scene) {
        case 'home':
          content.innerHTML = `<home-scene></home-scene>`;
          break;
        case 'reports':
          content.innerHTML = `<reports-scene></reports-scene>`;
          break;
        case 'settings':
          content.innerHTML = `<settings-scene></settings-scene>`;
          break;
        case 'logout':
          this.dispatchEvent(new CustomEvent('logout', { bubbles: true }));
          break;
        default:
          content.innerHTML = `<home-scene></home-scene>`;
          break;
      }
    }

    connectedCallback() {
      this.addEventListener('logout', () => {
        document.querySelector('login-form').style.display = 'block';
        document.querySelector('dashboard-view').style.display = 'none';
      });
    }
  }

  customElements.define('dashboard-view', DashboardView);
}
