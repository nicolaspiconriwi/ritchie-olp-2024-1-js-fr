import loader from './assets/loader.svg'
import global from './styles/global.css';
import { App } from './App';

// Cuando cargue el archivo index.html, ejecuto lo que tiene por dentro App
document.addEventListener('DOMContentLoaded', App);
// document.body.innerHTML += `<img 
//                             src="${loader}" 
//                             alt="loader" 
//                             class="loader" 
//                             style="
//                                 position: fixed; 
//                                 top: 80%; 
//                                 left: 50%; 
//                                 transform: translate(-50%, -50%);
//                                 width: 150px;
//                             ">`;

