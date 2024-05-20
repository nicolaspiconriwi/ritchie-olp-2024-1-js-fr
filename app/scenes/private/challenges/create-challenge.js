import Quill from 'quill';  // Importa Quill desde node_modules
import 'quill/dist/quill.snow.css';
//import 'quill/dist/quill.bubble.css'; // para el tema bubble
import { ToolbarContainer } from './components/toolbar-container';
import styles from './challenge.css';
import { fetchApi } from '../../../helpers/fetch-api';
import { navigateTo } from '../../../Router';


export function CreateChallengeScene() {
    // Inicializa el contenedor HTML para el editor y un botón para guardar el contenido
    const editorContent = `<div id="editor" class="${styles.editor}"></div>`
    const pageContent = `
    <h1>Crear un nuevo reto</h1>
    <form id="create-challenge-form">
        <div class="${styles["challenge_title-container"]}">
            <label for="title">Título</label>
            <input type="text" id="title" name="title" class="${styles["challenge_title-input"]}">
        </div>
        <div class="${styles["challenge_description-container"]}">
            <label>Descripción</label>
            <textarea id="description" name="description" class="${styles["challenge_description-input"]}"></textarea>
        </div>
        
        <div class="${styles["description-container"]}">
            <label>Descripción del reto</label>
            <div class="${styles["action-buttons"]}">
                <button id="saveButton" type="button">Guardar</button>
                <button type="submit">Publicar</button>
            </div>
        </div>
        ${ToolbarContainer()}
        ${editorContent}
    </form>
    `;

    const persistContent = (quill) => {
        const content = quill.getContents();  // Obtén el contenido como Delta
        localStorage.setItem('quillContent', JSON.stringify(content));
    }

    // Lógica para inicializar y configurar Quill
    const logic = () => {
        // Quill.register('modules/formula', MathQuillBlot);
        // Espera a que el DOM esté completamente cargado
        const quill = new Quill('#editor', {
            modules: {
                toolbar: '#toolbar-container',
            },
            placeholder: 'Crea tu mejor reto aquí...',
            theme: 'snow',
            // modules: {
            //     formula: true,
            // }
        });

        // Listener para manejar el guardado del contenido
        document.querySelector('#saveButton')
            .addEventListener('click', () => {
                persistContent(quill);
                alert('Contenido guardado con éxito');
            });

        // Listener para manejar la publicación del contenido, o sea, enviar a base de datos.
        document.querySelector('#create-challenge-form')
            .addEventListener('submit', async (e) => {
                // Evita que el formulario se envíe
                e.preventDefault();
                // Valida que el título y la descripción no estén vacíos
                const titleValue = document.querySelector('#title').value;
                const descriptionValue = document.querySelector('#description').value;
                if (!titleValue) {
                    alert('Por favor, ingresa un título para tu reto');
                    return;
                }
                if(!descriptionValue) {
                    alert('Por favor, ingresa una descripción para tu reto');
                    return;
                }
                persistContent(quill);
                if (!localStorage.getItem('quillContent')) {
                    alert('Por favor, ingresa una descripción para tu reto');
                    return;
                }
                if (confirm("¿Estás seguro de que deseas publicar el reto?")) {
                    // Aquí va la lógica para enviar el contenido a la base de datos
                    try {
                        const data = {
                            title: titleValue,
                            content: localStorage.getItem('quillContent'),
                            description: descriptionValue
                        }
                        const response = await fetchApi('http://localhost:4000/api/challenges', {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            }
                        });
                        console.log(response);
                        alert('Reto publicado con éxito');
                        document.querySelector('#create-challenge-form').reset(); // Resetea el formulario
                        navigateTo('/dashboard/challenges');
                    } catch (error) {
                        alert('Ha ocurrido un error al publicar el reto. Por favor, inténtalo de nuevo más tarde.');
                        console.error('Error al publicar el reto:', error);
                    }
                } });
    };

    // Retorna el contenido de la página y la función de lógica
    return {
        pageContent,
        logic
    }
}
