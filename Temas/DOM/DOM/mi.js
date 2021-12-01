// Seleccionar elementos: 

//Devolverá una colección con dos elementos: 
document.getElementsByClassName("blanco-rojo");
/*  
HTMLCollection(2) [span.blanco-rojo, p.blanco-rojo.tama]
0: span.blanco-rojo
1: p.blanco-rojo.tama
*/

// Devolverá un elemento, selecciono un elemento con varias clases
document.getElementsByClassName("blanco-rojo tama");


// Seleccionar un id que debería ser único:
document.getElementById("texto");
//Devuelve esto: <h1 id="texto">FORMULARIO</h1>

// Si el id no existe, devolverá null
// Si hay varios ids iguales, devolverá el primero


// Para seleccionar un elemento dentro de otro, se puede seleccionar de esta manera

document.getElementById("formulario1").getElementsByClassName("blanco-azul");
// output: HTMLCollection [input.blanco-azul, nombre: input.blanco-azul]


// Seleccionar por la etiqueta
document.getElementsByTagName("p");
// output: HTMLCollection(6) [p.blanco-rojo.tama, p.tama, p.blanco-azul, p, p, p]
// Al devolver un array, se puede acceder a cada uno:
let parrafos = document.getElementsByTagName("p");
console.log(parrafos[0]);

// Seleccionar parrafos dento de una etiqueta con un id: 
document.getElementById('contenido').getElementsByTagName('p');
// Output: HTMLCollection(4) [p.blanco-rojo.tama, p.tama, p.blanco-azul, p]
