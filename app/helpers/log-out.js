import { navigateTo } from "../Router";

export function logOut() {
  localStorage.removeItem('token');
  navigateTo('/login');
}