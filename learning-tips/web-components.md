# Web components en JavaScript

Los Web Components son un conjunto de tecnologías que permiten la creación de componentes personalizados y reutilizables en aplicaciones web. Están formados por cuatro tecnologías principales:

- **Custom Elements**: Permite definir elementos HTML personalizados con su propio comportamiento y estilo.
- **Shadow DOM**: Proporciona un ámbito de encapsulación para los estilos y el comportamiento de un componente.
- **HTML Templates**: Permite definir fragmentos de código HTML que se pueden clonar y reutilizar en un componente.
- **HTML Imports**: Proporciona una forma de importar y reutilizar componentes en diferentes archivos HTML.

## Custom Elements

Los Custom Elements permiten definir elementos HTML personalizados con su propio comportamiento y estilo. Para crear un Custom Element, se debe extender la clase `HTMLElement` y registrar el nuevo elemento con el método `customElements.define()`.

```javascript

class MyElement extends HTMLElement {
  constructor() {
    super();

    // Crear un fragmento de HTML para encapsular el contenido del elemento
    const template = document.createDocumentFragment();
    const container = document.createElement('div');
    container.innerHTML = `
      <style>
        /* Estilos del componente */
        :host {
          display: block;
          border: 2px solid #333;
          padding: 20px;
          margin-top: 10px;
        }
        h1 {
          font-size: 20px;
          color: blue;
        }
      </style>
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
    
    // Insertar el contenido del fragmento en el elemento custom
    template.appendChild(container);
    this.appendChild(template);
  }
}

customElements.define('my-element', MyElement);
```

O para los que prefieren prototypos:

```javascript

// Crear un nuevo objeto que hereda de HTMLElement
const MyElement = Object.create(HTMLElement.prototype);

// Definir el constructor
MyElement.createdCallback = function() {
  // Crear un fragmento de HTML para encapsular el contenido del elemento
  const template = document.createDocumentFragment();
  const container = document.createElement('div');
  container.innerHTML = `
    <style>
      /* Estilos del componente */
      div {
        border: 2px solid #333;
        padding: 20px;
        margin-top: 10px;
      }
      h1 {
        font-size: 20px;
        color: blue;
      }
    </style>
    <div>
      <h1>Hello, World!</h1>
    </div>
  `;
  
  // Insertar el contenido del fragmento en el elemento custom
  template.appendChild(container);
  this.appendChild(template);
};

// Registrar el nuevo elemento
document.registerElement('my-element', {
  prototype: MyElement
});
```

De modo que podemos llamar a nuestro elemento en el HTML de la siguiente manera:

```html
<my-element></my-element>
```

O en otros archivos js:

```javascript

import './my-element.js';

const myElement = document.createElement('div');
myElement.innerHTML = '<my-element></my-element>';

```

## Shadow DOM

El Shadow DOM proporciona un ámbito de encapsulación para los estilos y el comportamiento de un componente. Permite ocultar la implementación interna de un componente y evitar conflictos con los estilos de la página principal.

Para crear un Shadow DOM, se debe utilizar el método `attachShadow()` en el constructor del Custom Element.

```javascript

class MyElement extends HTMLElement {
  constructor() {
    super();

    // Crear un Shadow DOM para encapsular el contenido del elemento
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.innerHTML = `
      <style>
        /* Estilos del componente */
        div {
          border: 2px solid #333;
          padding: 20px;
          margin-top: 10px;
        }
        h1 {
          font-size: 20px;
          color: blue;
        }
      </style>
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
    
    // Insertar el contenido en el Shadow DOM
    shadowRoot.appendChild(container);
  }
}

customElements.define('my-element', MyElement);
```

O para los que prefieren prototypos:

```javascript

// Crear un nuevo objeto que hereda de HTMLElement
const MyElement = Object.create(HTMLElement.prototype);

// Definir el constructor
MyElement.createdCallback = function() {
  // Crear un Shadow DOM para encapsular el contenido del elemento
  const shadowRoot = this.createShadowRoot();
  const container = document.createElement('div');
  container.innerHTML = `
    <style>
      /* Estilos del componente */
      div {
        border: 2px solid #333;
        padding: 20px;
        margin-top: 10px;
      }
      h1 {
        font-size: 20px;
        color: blue;
      }
    </style>
    <div>
      <h1>Hello, World!</h1>
    </div>
  `;
  
  // Insertar el contenido en el Shadow DOM
  shadowRoot.appendChild(container);
};

// Registrar el nuevo elemento
document.registerElement('my-element', {
  prototype: MyElement
});
```

## HTML Templates

Los HTML Templates permiten definir fragmentos de código HTML que se pueden clonar y reutilizar en un componente. Se pueden utilizar para definir la estructura de un componente y clonarla dinámicamente en el Shadow DOM.

```javascript

class MyElement extends HTMLElement {
  constructor() {
    super();

    // Crear un Shadow DOM para encapsular el contenido del elemento
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        /* Estilos del componente */
        div {
          border: 2px solid #333;
          padding: 20px;
          margin-top: 10px;
        }
        h1 {
          font-size: 20px;
          color: blue;
        }
      </style>
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
    
    // Clonar el contenido del template en el Shadow DOM
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-element', MyElement);
```

Entedamos como es esto de diferente a lo anterior:

- 1. Se crea un template con el contenido del componente.
- 2. Se clona el contenido del template en el Shadow DOM.
- 3. Se añade el contenido clonado al Shadow DOM.

## HTML Imports

Los HTML Imports permiten importar y reutilizar componentes en diferentes archivos HTML. Se pueden utilizar para importar los estilos y scripts necesarios para un componente y reutilizarlos en diferentes páginas web.

```html
<link rel="import" href="my-element.html">
```

O en JavaScript:

```javascript

const link = document.createElement('link');
link.rel = 'import';
link.href = 'my-element.html';
document.head.appendChild(link);

```

De que se trata esto anterior:

- 1. Se crea un elemento `link` con el atributo `rel` igual a `import` y el atributo `href` con la URL del archivo HTML a importar.
- 2. Se añade el elemento `link` al `head` del documento.
