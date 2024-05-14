import { Router } from "./Router";
import './components/navigation-bar'

export function App() {
    const appContainer = document.getElementById('root');
    if (!appContainer) {
        throw new Error('App container not found');
    }
    Router();
}