import { navigateTo } from '../../../Router';
import styles from './posts.css'
import { helperContent } from './utils';

export function PostScene(params) {

    let pageContent = `
        ${helperContent}
    `;

    let logic = async () => {
        const $myContent = document.getElementById('content');
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await resp.json()
        console.log(posts);
        $myContent.innerHTML = `
            ${posts.map(e => `
                <div class="${styles.title}">${e.title}</div>
                <div>${e.body}</div>
                <button id=${e.id} class="my-click-elements">${e.userId}</button>
            `).join('')}
        `;

        document.querySelectorAll('.my-click-elements').forEach(singleButton =>
            singleButton.addEventListener('click', (e) => navigateTo(`/dashboard/posts?id=${e.target.id}`)))
    }

    if(params.get('id')){
        pageContent = `${helperContent}`
        logic = () => {
            console.log(document.getElementById('content'), "desde content");
        }
    }

    return {
        pageContent,
        logic
    }
}