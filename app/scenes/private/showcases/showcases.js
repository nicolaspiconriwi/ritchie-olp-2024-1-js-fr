export function Showcases() {
  const pageContent = `
    <h3>Bienvenidos a mi pagina de destacados</h3>
    <button id="my-btn">Click me please!</button>
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