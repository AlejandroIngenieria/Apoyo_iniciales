# Actividad 4 - Desarrollo web

# Métodos de Arrays en JavaScript

## includes()
El método `includes()` verifica si un array contiene un valor específico y devuelve `true` o `false`. Es sensible a mayúsculas y minúsculas.

```js
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('Banana')); // false
```

## some()
El método some() verifica si al menos un elemento del array pasa una prueba implementada por una función de callback.
```js
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // true
```

## every()
El método every() verifica si todos los elementos del array pasan una prueba implementada por una función de callback.

```js
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
```

## filter()
El método filter() crea un nuevo array con todos los elementos que pasen una prueba implementada por una función de callback.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

## map()
El método map() crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
```js
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16]
```

## flatMap()
El método flatMap() primero mapea cada elemento utilizando una función, luego aplana el resultado en un nuevo array.

```js
const arr = [1, 2, [3, 4]];
const flatMapped = arr.flatMap(num => Array.isArray(num) ? num : [num * 2]);
console.log(flatMapped); // [2, 4, 3, 4]
```

## reduce()
El método reduce() aplica una función a un acumulador y cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

## reverse()
El método reverse() invierte el orden de los elementos de un array. Modifica el array original.

```js
const numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers); // [4, 3, 2, 1]
```
## sort()
El método sort() ordena los elementos de un array en su lugar y devuelve el array. De forma predeterminada, ordena los elementos como cadenas de texto.

```js
const numbers = [4, 2, 3, 1];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4]
```

## flat()
El método flat() crea un nuevo array aplanando los sub-arrays hasta una profundidad especificada.

```js
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]
```

## fill()
El método fill() cambia todos los elementos de un array a un valor estático desde el índice inicial hasta el índice final.

```js
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4]
```

## find()
El método find() devuelve el primer elemento que cumpla con la condición especificada en la función de callback.

```js
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
```

## findIndex()
El método findIndex() devuelve el índice del primer elemento que cumpla con la condición especificada en la función de callback.

```js
const numbers = [1, 2, 3, 4];
const index = numbers.findIndex(num => num % 2 === 0);
console.log(index); // 1
```

## forEach()
El método forEach() ejecuta una función para cada elemento del array. No devuelve un nuevo array.

```js
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2)); // 2 4 6 8
```

## concat()
El método concat() combina dos o más arrays y devuelve un nuevo array.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
```

# Grid y Flexbox en Desarrollo Web

## CSS Grid

CSS Grid es un sistema de diseño bidimensional que permite crear diseños complejos utilizando filas y columnas. Es ideal para layouts donde se requiere alinear elementos en ambas direcciones (horizontal y vertical).

### Conceptos Básicos de Grid
1. **Contenedor de Grid**: Un elemento en el que se declara `display: grid`.
2. **Filas y Columnas**: Grid organiza los elementos en filas (`rows`) y columnas (`columns`).
3. **Celdas**: Son las áreas donde los elementos del grid se colocan.

### Propiedades Principales de Grid
- `grid-template-columns`: Define el número y tamaño de las columnas.
- `grid-template-rows`: Define el número y tamaño de las filas.
- `gap`: Define el espacio entre filas y columnas.
- `grid-column` y `grid-row`: Controlan en qué fila o columna se coloca un elemento.

### Ejemplo Básico de CSS Grid

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual tamaño */
      grid-template-rows: 100px 200px; /* Primera fila de 100px y segunda de 200px */
      gap: 10px; /* Espacio de 10px entre filas y columnas */
    }

    .grid-item {
      background-color: #4CAF50;
      padding: 20px;
      text-align: center;
      color: white;
    }
  </style>
</head>
<body>

  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>

</body>
</html>
```

#### Explicación
* grid-template-columns: repeat(3, 1fr); Crea tres columnas de igual tamaño.
* grid-template-rows: 100px 200px; Crea dos filas, la primera de 100px y la segunda de 200px.
* gap: 10px; Deja un espacio de 10px entre los elementos del grid.

## Flexbox
CSS Flexbox es un sistema de diseño unidimensional que permite alinear y distribuir elementos dentro de un contenedor de manera flexible. Es ideal para layouts donde los elementos necesitan alinearse en una sola dirección, ya sea horizontal o vertical.

### Conceptos Básicos de Flexbox
* **Contenedor Flex**: Un elemento donde se declara display: flex.
* **Ejes**: El flexbox utiliza dos ejes, el eje principal (por defecto, horizontal) y el eje transversal (vertical).
* **Items Flex**: Los hijos directos del contenedor flex se distribuyen a lo largo del eje principal.
### Propiedades Principales de Flexbox
* **flex-direction**: Define la dirección en la que se colocan los elementos (por defecto, row).
* **justify-content**: Alinea los elementos a lo largo del eje principal.
* **align-items**: Alinea los elementos a lo largo del eje transversal.
* **flex-wrap**: Permite que los elementos se ajusten en varias líneas si es necesario.
### Ejemplo Básico de CSS Flexbox
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .flex-container {
      display: flex;
      justify-content: space-between; /* Espacio igual entre elementos */
      align-items: center; /* Alinea los elementos verticalmente al centro */
      height: 200px;
      background-color: lightblue;
    }

    .flex-item {
      background-color: #4CAF50;
      padding: 20px;
      color: white;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>

</body>
</html>
```

#### Explicación
* display: flex; Define el contenedor como un contenedor flex.
* justify-content: space-between; Distribuye los elementos con el mismo espacio entre ellos a lo largo del eje principal.
* align-items: center; Alinea los elementos en el centro verticalmente (eje transversal).


## Diferencias entre Grid y Flexbox
**Grid**: Es bidimensional, permitiendo trabajar con filas y columnas simultáneamente.

**Flexbox**: Es unidimensional, ideal para alinear elementos en una sola dirección.

**Uso**: Grid es mejor para layouts complejos (como una página completa), mientras que Flexbox es más adecuado para estructuras sencillas o para alinear elementos en una sola fila o columna.

# Explicacion del ejemplo

## Backend

Iniciamos el entorno para el backend

```bash
npm init -y     # Inicamos un entorno con nodejs
npm i           # Instalamos todas las dependencias para que funcione nodejs
npm i express   # Instalamos la herramienta de express para la creacion de un servidor
npm i cors      # Intalamos el paquete de CORS para que dichas politicas no sean un problema
```

### Creacion de nuestro servidor
```js
import express from "express"
import cors from "cors"

// Nombramos una variable para manejar express
const app = express()

// Apartamos el numero del puerto a utilizar
const port = 3000

// Es para recibir json en las peticiones
app.use(express.json({}))

// Configura CORS para permitir solicitudes desde el origen de tu frontend
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));


// ENDPOINTS DEL PROYECTO... GET, POST, PUT, DELETE...                         

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Se levanto el servidor en el puerto ${port}`)
})

```

## Frontend

Esta guía cubre cómo configurar un proyecto de React con Vite y cómo utilizar `react-router-dom` para gestionar la navegación. También se incluye cómo mapear elementos en React, usar hooks como `useState` y `useEffect`, y realizar una conexión al backend mediante `fetch`.

### 1. Configuración del Proyecto con Vite

1. **Crear un Proyecto con Vite**
   Ejecuta el siguiente comando para crear un nuevo proyecto React con Vite.

```bash
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
```

2. Instalar react-router-dom React Router es una biblioteca que permite la navegación en aplicaciones de React. Instálalo con el siguiente comando:
```bash
npm install react-router-dom
```

3. Estructura Básica del Proyecto La estructura inicial podría verse así:
```css
src/
├── App.jsx
├── main.jsx
├── components/
│   └── Home.jsx
│   └── About.jsx
└── pages/
    └── NotFound.jsx
```

### 2. Uso de React Router
Explicacion del uso de BrowserRouter, Routes, Route, Link, Navigate
* **BrowserRouter**: Proporciona el contexto necesario para que react-router-dom funcione.
* **Routes**: Contiene todas las rutas de la aplicación.
* **Route**: Define una ruta específica, mapeando una URL a un componente.
* **Link**: Permite la navegación interna entre rutas.
* **Navigate**: Redirige a una ruta específica.

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Redirigir a una página no encontrada */}
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
#### Explicación:
* BrowserRouter envuelve todo el contenido de la aplicación.
* Dentro de Routes, cada Route define un camino específico (path) y el componente que se renderizará en ese camino.
* Link reemplaza a las etiquetas <**a**> y permite navegar dentro de la aplicación sin recargar la página.
* Navigate redirige a una ruta específica (en este caso, a "/not-found").

### 3. Mapeo de Elementos en React
React permite mapear arrays para generar listas de componentes.
```jsx
// src/components/Home.jsx
const Home = () => {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
```

#### Explicación:
* items.map recorre el array items y retorna un <**li**> para cada elemento.
* Es importante usar el atributo key para cada elemento de la lista para ayudar a React a identificar qué elementos han cambiado.

### 4. Hooks: useState y useEffect
#### useState
El hook useState permite manejar el estado en componentes funcionales.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

#### useEffect
El hook useEffect se usa para realizar efectos secundarios como la obtención de datos, suscripción o manipulación del DOM.

```jsx
import { useEffect, useState } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  return <div>Current Time: {time}</div>;
};

export default TimeDisplay;
```
#### Explicación:
* useState define una variable de estado count y su setter setCount.
* useEffect actualiza el estado cada segundo mediante un setInterval. También se incluye una limpieza del efecto para evitar fugas de memoria.

### 5. Conexión al Backend usando fetch
Para conectar el frontend de React con un backend, utilizamos fetch para hacer solicitudes HTTP.

Ejemplo: Obtener Datos del Backend
```jsx
import { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
```
### Explicación:
* fetch realiza una solicitud HTTP al backend. En este caso, obtenemos datos de un servicio de ejemplo.
* Los datos obtenidos se almacenan en el estado data y luego se mapean para mostrarlos.
* Si ocurre un error, este se captura y se muestra en pantalla.