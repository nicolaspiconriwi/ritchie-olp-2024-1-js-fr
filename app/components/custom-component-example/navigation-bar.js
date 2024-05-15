import './navigation-bar.css';



if (!customElements.get('navigation-bar')) {
  class NavigationBar extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const nav = document.createElement('nav');

      nav.innerHTML = `
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      `;
      shadow.appendChild(nav);
    }
  }

  customElements.define('navigation-bar', NavigationBar);
}

/**
 * Que es un shadow root?
 * 
 * Un shadow root es un DOM independiente que se puede adjuntar a un elemento. Esto me sirve
 * para encapsular la lógica de mi componente y que no afecte al resto de la página.
 * 
 */