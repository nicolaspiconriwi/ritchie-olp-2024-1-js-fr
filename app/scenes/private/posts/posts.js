import styles from './posts.css';

export function PostScene() {
    const pageContent = `
        <div class="${styles.container}" id="content">Hola mundo</div>
    `;

    const title = `<h1>Posts</h1>`;

    const logic = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const content = document.getElementById('content');
                content.innerHTML = `
                    <div class="${styles.container}">
                        ${title}
                        <ul>
                            ${data.map(user => `<li>${user.name}</li>`).join('')}
                        </ul>
                    </div>
                `;
            })
    }
    
    return {
        pageContent,
        logic
    }
}