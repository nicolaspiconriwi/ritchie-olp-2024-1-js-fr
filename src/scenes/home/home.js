import './home.css';

if (!customElements.get('home-scene')) {
  class HomeScene extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const wrapper = document.createElement('div');

      wrapper.innerHTML = `
        <h1>Home</h1>
        <p>Welcome to the Home Scene</p>
      `;
      shadow.appendChild(wrapper);
    }
  }

  customElements.define('home-scene', HomeScene);
}