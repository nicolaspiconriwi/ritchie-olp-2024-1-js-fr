import styles from './reports.css';

export function ReportScene() {

  const pageContent = `
      <h2>Reports</h2>
      <p>Welcome to the reports view.</p>
    `;

  const logic = () => {
    console.log("hello from reports logic");
  }

  return {
    pageContent,
    logic
  }
}