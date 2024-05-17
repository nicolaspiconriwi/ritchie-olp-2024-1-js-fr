import { logOut } from "../../../helpers";
import styles from './profile.css';
import loader from '../../../assets/loader.svg';

export const ProfileScene = () => {

    //styles
    const {container} = styles;
    console.log(styles);

    // Crear la maquetacion
    const pageContent = `
    <div class="${container}">
    <h1 id="id-example">Perfil</h1>
    <p>Esta es la vista de perfil</p>
    <button id="logout" type="button">Cerrar sesión</button>
    <img src="${loader}" alt="loader" />
    </div>
`;

    const logic = () => {
        const myTitle = document.getElementById('id-example');
        myTitle.addEventListener('click', () => {
            alert('Hola mundo');
        });

        const myBtn = document.getElementById('logout');
        console.log(myBtn);
        myBtn.addEventListener('click', logOut);
    }

    return { pageContent, logic };
}