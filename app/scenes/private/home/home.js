import './home.css';

export function HomeScene() {

  const pageContent = `
    <h2>Home</h2>
    <p>Welcome to the home view.</p>
  `;

  const logic = () => {
    const h2Element = document.querySelector('h2');
    h2Element.addEventListener('click', () => {
      alert('Hello from the home view');
    });
  };

  return {
    pageContent,
    logic
  }
}
