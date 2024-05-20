export function LanguagesByRoutesScene(params) {
    let pageContent = "<div>Solicitud invalida</div>"
    let logic = () => {}
    if(params.get('route_id')){
        const routeId = params.get('route_id')
        pageContent = `<div></div>`
        logic = () => {
            // Llamar al endpoint lenguajes por ruta
            fetch(`https://localhost:3000/challenges/languages/${routeId}`)
                .then(e => e.json())
                .then(data => {
                    //procedemos a pintar en el html
                })
        }
    }
}