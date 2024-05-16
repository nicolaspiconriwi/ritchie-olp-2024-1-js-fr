import { logOut } from "../../../helpers";
import styles from './profile.css';
import loader from '../../../assets/loader.svg';

export const ProfileScene = () => {
    // Crear la maquetacion
    const pageContent = `
    <div class="${styles.container}">
    <h1 id="title">Perfil</h1>
    <p>Esta es la vista de perfil</p>
    <button id="logout">Cerrar sesión</button>
    <img src="${loader}" alt="loader" />
    </div>
`;

    const logic = () => {
        const myTitle = document.querySelector('#title');
        myTitle.addEventListener('click', () => {
            alert('Hola mundo');
        });

        const myBtn = document.getElementById('logout');
        myBtn.addEventListener('click', () => {
            console.log("click");
        });
    }

    return { pageContent, logic };
}