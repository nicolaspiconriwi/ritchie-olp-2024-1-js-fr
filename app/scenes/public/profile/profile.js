import { navigateTo } from "../../../Router";
import styles from './profile.css';

export function ProfileScene() {
    const root = document.getElementById('root');

    const header = `
        <header class="${styles.container}">
            <nav>
                <ul>
                    <li><button id="profile-btn">Login</button></li>
                    <li><button id="profile-register-btn">go to register</button></li>
                </ul>
            </nav>
        </header>
    `

    root.innerHTML = `
        ${header}
    `

    const profileBtn = document.getElementById('profile-btn');
    profileBtn.addEventListener('click', () => {
        navigateTo('/login');
    });

    const profileRegisterBtn = document.getElementById('profile-register-btn');
    profileRegisterBtn.addEventListener('click', () => {
        navigateTo('/register');
    });
}