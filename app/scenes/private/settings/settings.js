import { DashboardLayout } from '../../../components/layout/private/dashboard/dashboard-layout';
import styles from './settings.css';

export function SettingsScene() {

  const pageContent = `
      <h2>Settings</h2>
      <p>Welcome to the settings view.</p>
    `;

  const logic = () => {
    console.log("hello from settings logic");
  }

  return {
    pageContent,
    logic
  }
}