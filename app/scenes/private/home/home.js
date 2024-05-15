import './home.css';
import { ReportScene} from '../reports'

export function HomeScene() {

  const footer = `
  <footer><p>All rights reserved.</p></footer>
  `;

  const pageContent = `
    <h2>Home</h2>
    <p>Welcome to the home view.</p>
    ${footer}
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
