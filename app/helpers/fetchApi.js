import { handleError } from './handle-error';

export async function fetchApi(url, options) {
  const allOptions = {
    ...options,
    signal: AbortSignal.timeout(3000),
  };
  try {
    const response = await fetch(url, allOptions);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    handleError(error);
  }
}
