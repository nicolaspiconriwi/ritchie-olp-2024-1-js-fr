export function formValidator(...fields) {
  return fields.every((field) => field.trim()); // Devuelve true si todos los campos tienen contenido
}