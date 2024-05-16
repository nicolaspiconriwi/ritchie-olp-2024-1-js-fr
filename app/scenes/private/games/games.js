import loader from '../../../assets/loader.svg'

export function GameScene(){
    const pageContent = `
        <h1 id="title">Games</h1>
        <p>Here is a list of games</p>
        <img src="${loader}" alt="loader" class="loader" style="position: fixed; top: 80%; left: 50%; transform: translate(-50%, -50%); width: 150px;">
    `;

    const logic = () => {
        const title = document.getElementById('title');
        title.addEventListener('click', () => {
            alert("click")
        });
    }

    return {
        pageContent,
        logic
    }
}