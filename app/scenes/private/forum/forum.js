import styles from './forum.css';

export function ForumScene(){
  const pageContent = `
    <h2 id="my-h2">hola mundo</h2>
    <button type="button" id="my-btn">toggle</button>
  `;

  const logic = () => {
    const h2 = document.getElementById('my-h2');
    const btn = document.getElementById("my-btn");
    btn.addEventListener('click', () => {
      h2.classList.toggle(styles['bg-green'])
    })
  };

  return {
    pageContent,
    logic
  }
}