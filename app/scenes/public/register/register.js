import styles from './register.css';

export async function RegisterPage() {
    const root = document.getElementById('root');
    root.innerHTML = `
        <div class="${styles["my-div"]} ${styles["my-border"]}">Hola mundo</div>
        <p>Esta es la vista para registrarse</p>
        <button id="register">Registrarse</button>
        `;

    //logic
    const myBtn = document.querySelector('#register');
    myBtn.addEventListener('click', () => {
        alert('Registrado');
    });
}