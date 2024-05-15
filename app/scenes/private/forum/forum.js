import styles from './forum.css';

export function ForumScene(){
    const pageContent = `
    <h2 class=${styles.container} id="my-h2">Forum</h2>
    <p class=${styles["bg-red"]}>Welcome to the home view.</p>
    <em class="${styles["bg-green"]}">Hola mundo</em>
  `;

  const logic = () => {
    const h2 = document.getElementById('my-h2');
    h2.addEventListener('click', () => {
      alert('Hello, World!');
    });
  };

  return {
    pageContent,
    logic
  }
}