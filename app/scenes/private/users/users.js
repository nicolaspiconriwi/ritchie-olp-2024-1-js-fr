import { navigateTo } from '../../../Router';
import styles from './users.css';

export function UserScene(params) {

    let pageContent = `
    <h2 class=${styles['page-title']}>Bienvenido a usuarios</h2>
    <p>Desde Usuarios</p>
    <div id="user-info" class="${styles['user-info']}"></div>
    <div class="${styles.loader}" id="loader"></div>
`;

    let logic = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await resp.json();
        const userInfo = document.getElementById('user-info');
        userInfo.innerHTML = `
        <table class="${styles['user-table']}">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${users.map(user => `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td><button id="${user.id}" class="${styles['btn-see-more']}">Ver más</button></td>
                </tr>`).join('')}
            </tbody>
        </table>
        `;

        document.querySelectorAll(`.${styles['btn-see-more']}`).forEach(btn => {
            btn.addEventListener('click', (e) => {
                navigateTo(`/dashboard/users?id=${e.target.id}`);
            });
        });

        document.querySelector(`#loader`).classList.add(styles.hidden);
    }

    if (params.get('id')) {
        const userId = params.get('id');
        pageContent = `
        <h2 class=${styles['page-title']}>Información del Usuario</h2>
        <div id="user-info" class="${styles['user-info']}"></div>
        <div class="${styles.loader}" id="loader"></div>
        `;

        logic = async () => {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const user = await resp.json();
            const userInfo = document.getElementById('user-info');
            userInfo.innerHTML = `
            <table class="${styles['user-details-table']}">
                <tr><th>ID</th><td>${user.id}</td></tr>
                <tr><th>Name</th><td>${user.name}</td></tr>
                <tr><th>Username</th><td>${user.username}</td></tr>
                <tr><th>Email</th><td>${user.email}</td></tr>
                <tr><th>Address</th><td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td></tr>
                <tr><th>Geo</th><td>${user.address.geo.lat}, ${user.address.geo.lng}</td></tr>
                <tr><th>Phone</th><td>${user.phone}</td></tr>
                <tr><th>Website</th><td>${user.website}</td></tr>
                <tr><th>Company</th><td>${user.company.name}</td></tr>
                <tr><th>Catch Phrase</th><td>${user.company.catchPhrase}</td></tr>
                <tr><th>BS</th><td>${user.company.bs}</td></tr>
            </table>
            `;
            document.querySelector(`#loader`).classList.add(styles.hidden);
        }
    }

    return {
        pageContent,
        logic
    }
}
