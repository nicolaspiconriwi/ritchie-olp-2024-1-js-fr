import Quill from "quill";
import { fetchApi } from "../../../helpers/fetch-api";

export function ModuleCreateScene() {
    const editorQuill = `<div id="editor"></div>`
    const pageContent = `
    ${editorQuill}
    <form id="my-form">
        <label for="input-name">Titulo</label>
        <input type="text" placeholder="jhondoe@gmail.com" id="input-name"/>
        <label for="input-description">Descripcion</label>
        <input type="text" placeholder="Escribe aqui algo..." id="input-description"/>
        <button type="submit">Crear modulo</button>
    </form>`
    const logic = () => {

        const quill = new Quill('#editor', {
            // modules: {
            //     toolbar: '#toolbar-container',
            // },
            placeholder: 'Crea tu mejor reto aquí...',
            theme: 'snow',
            // modules: {
            //     formula: true,
            // }
        });

        const $myForm = document.getElementById('my-form');
        $myForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const $inputName = document.getElementById('input-name');
            const $inputDescription = document.getElementById('input-description');
            if (!$inputName.value || !$inputDescription.value) {
                alert('Por favor rellena todos los campos')
                return;
            }
            const $quill = quill.getContents();
            const data = {
                name: $inputName.value,
                description: $inputDescription.value,
                id_language: "1",
                content: JSON.stringify($quill)
            }
            console.log(data);
            const myData = JSON.stringify(data);
            try {
                const resp = await fetchApi('http://localhost:4000/api/modules', {
                    method: 'POST',
                    body: myData,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                console.log(resp)

            } catch (error) {
                console.log(error);
            }
        })
    }
    return {
        pageContent,
        logic
    }
}