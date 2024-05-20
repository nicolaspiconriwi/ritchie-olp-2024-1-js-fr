import { handleError } from "./handle-error";

// Helper para realizar peticiones HTTP
export async function fetchApi(url, options = {}) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        handleError(error, "from fetchApi helper");
    }
}