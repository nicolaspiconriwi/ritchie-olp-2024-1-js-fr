import './login-form.css';

if (!customElements.get('login-form')) {
  class LoginForm extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const form = document.createElement('form');

      form.innerHTML = `
        <h2>Login hola</h2>
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button type="submit">Login</button>
      `;
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = shadow.getElementById('username').value;
        const password = shadow.getElementById('password').value;
        const success = await this.login(username, password);
        if (success[0]) {
          this.dispatchEvent(new CustomEvent('login-success', { bubbles: true }));
        } else {
          alert(success[1]);
        }
      });
      shadow.appendChild(form);
    }

    async login(email, password) {
      try {
        const response = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token);
          return true;
        } else {
          console.error('Error de autenticación:', data.message);
          return [false, `Error de autenticación: ${data.message}`]
        }
      } catch (err) {
        console.error('Error en la solicitud de inicio de sesión:', err);
        return [false, `Error de autenticación: ${err?.message}`];
      }
    }
  }

  customElements.define('login-form', LoginForm);
}
