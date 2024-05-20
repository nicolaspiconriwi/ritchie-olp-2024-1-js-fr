import styles from './showcases.css';
import myImage from './my-image.jpg';

export function Showcases() {
  const pageContent = `
    <div class="${styles.container}">Contenedor inicial</div>
    <h3>Bienvenidos a mi pagina de destacados</h3>
    <button id="my-btn">Click me please!</button>
    <img src="${myImage}" alt="My image" />
  `;

  const logic = () => {
    const myBtn = document.getElementById('my-btn');
    myBtn.addEventListener('click', () => {
      alert('You clicked me!');
    });
  }

  return {
    pageContent,
    logic
  }
}