import styles from './users.css';

export function UserScene() {
    const pageContent = `
        <h2 class=${styles['page-title']}>Bienvenido a usuarios</h2>
        <p></p>
        <div></div>
    `;

    const logic = () => {
        console.log('UserScene logic');
    }

    return {
        pageContent,
        logic
    }
}