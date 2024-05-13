# XHR, jQuery.ajax, Superagent, Request, Got, Axios, Fetch API

A lo largo del curso, hemos escuchado a nuestro team leader hablar sobre las diferentes maneras de hacer peticiones HTTP en JavaScript. Algunas de las librerías que hemos mencionado son XHR, jQuery.ajax, Superagent, Request, Got, Axios y Fetch API. Pero, ¿cuál es la diferencia entre todas estas librerías y cuál deberíamos utilizar en nuestros proyectos?

## XHR

XMLHttpRequest (XHR) es un objeto que proporciona funcionalidades para realizar peticiones HTTP y HTTPS. Es compatible con todos los navegadores modernos y es la forma más básica de hacer peticiones HTTP en JavaScript. Aquí tienes un ejemplo de cómo hacer una petición GET con XHR:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();
```

## jQuery.ajax

jQuery.ajax es un método de la librería jQuery que simplifica la realización de peticiones HTTP en JavaScript. Es una forma más sencilla y legible de hacer peticiones que XHR. Aquí tienes un ejemplo de cómo hacer una petición GET con jQuery.ajax:

```javascript
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: function(data) {
    console.log(data);
  }
});
```

## Superagent

Superagent es una librería de cliente HTTP para Node.js y los navegadores que proporciona una API similar a jQuery.ajax pero con algunas mejoras. Es una librería muy popular y fácil de usar. Aquí tienes un ejemplo de cómo hacer una petición GET con Superagent:

```javascript
superagent
  .get('https://api.example.com/data')
  .end(function(err, res) {
    console.log(res.body);
  });
```

## Request

Request es una librería de cliente HTTP para Node.js que proporciona una API similar a Superagent pero con algunas diferencias. Es una librería muy potente y flexible que se puede utilizar para hacer todo tipo de peticiones HTTP. Aquí tienes un ejemplo de cómo hacer una petición GET con Request:

```javascript

const request = require('request');

request('https://api.example.com/data', function(err, res, body) {
  console.log(JSON.parse(body));
});
```

## Got

Got es una librería de cliente HTTP para Node.js que proporciona una API similar a Request pero con algunas mejoras. Es una librería muy ligera y rápida que se puede utilizar para hacer peticiones HTTP de forma sencilla. Aquí tienes un ejemplo de cómo hacer una petición GET con Got:

```javascript

const got = require('got');

got('https://api.example.com/data').then(response => {
  console.log(response.body);
});
```

## Axios

Axios es una librería de cliente HTTP para Node.js y los navegadores que proporciona una API similar a Superagent pero con algunas mejoras. Es una librería muy popular y fácil de usar que se puede utilizar para hacer peticiones HTTP de forma sencilla. Aquí tienes un ejemplo de cómo hacer una petición GET con Axios:

```javascript

axios.get('https://api.example.com/data').then(response => {
  console.log(response.data);
});
```

## Fetch API

Fetch API es una API nativa de JavaScript que proporciona una forma moderna y potente de hacer peticiones HTTP en el navegador. Es compatible con todos los navegadores modernos y es la forma recomendada de hacer peticiones HTTP en JavaScript. Aquí tienes un ejemplo de cómo hacer una petición GET con Fetch API:

```javascript

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Conclusión

En resumen, XHR es la forma más básica de hacer peticiones HTTP en JavaScript, jQuery.ajax es una forma más sencilla y legible de hacer peticiones, Superagent y Request son librerías de cliente HTTP para Node.js con API similares, Got es una librería ligera y rápida para hacer peticiones HTTP, Axios es una librería popular y fácil de usar para hacer peticiones HTTP y Fetch API es una API nativa de JavaScript para hacer peticiones HTTP en el navegador. La elección de la librería dependerá de tus necesidades y preferencias, pero todas ellas son buenas opciones para hacer peticiones HTTP en JavaScript.