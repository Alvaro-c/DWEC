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

// También puedo guardar un fragmento grande de HTML en una variable y acceder a sus elementos a través de esa variable
let formuario = document.getElementById("formulario1");
undefined
formuario.getElementsByClassName("blanco-azul");
// HTMLCollection [input.blanco-azul, nombre: input.blanco-azul]


// QUERY SELECTOR
// Seleccionamos por las IDs y las clases a la vez, es similar a CSS
// Query selector devolverá el primer elemento por defecto, si hay más de un elemento 

document.querySelector(".blanco-rojo");
// Output: <span class=​"blanco-rojo">​Con JavaScript​</span>​
document.querySelector("#texto");
// Output: <h1 id=​"texto">​FORMULARIO​</h1>​

// Para seleccionar elementos que no sean el primero, se puede utilizar la subclase :nth-child() empezando en 1
document.querySelector(".blanco-azul:nth-child(2)");
// output: <input type=​"text" name=​"nombre" class=​"blanco-azul" title=​"nombre">​


// también por etiqueta, como CSS: 
document.querySelector('h2');
// Output: <h2>​…​</h2>


// Para sacar todos los elementos con query selector: 
​document.querySelectorAll('p');
// Output: NodeList(6) [p.blanco-rojo.tama, p.tama, p.blanco-azul, p, p, p]

document.querySelectorAll('p')[3];
// Output: <p>​ Pincha aquí ​</p>​


// CAMBIAR ELEMENTOS DE HTML 
// Primero se selecciona, después se cambia el valor del texto (innerText)
document.querySelector('h1').innerText = "Nuevo Título";
// Otra opción para hacer lo mismo. Una diferencia, si está oculto (display:noneotr) en el HTML cambiará el texto. El innerText no lo haría: 
document.querySelector('h1').textContent = "Otro Título";


document.querySelector('p span');
// <span style=​"display:​none;​">​ POR FÍN​</span>​
document.querySelector('p span').innerText;
// ' POR FÍN'
document.querySelector('p span').innerText = "texto cambiado";
// 'texto cambiado'
document.querySelector('p span').innerText;
// 'texto cambiado'


// No muestra los display none si selecciono una etiqueta que tenga dento texto mas un valor dispplay none
document.querySelectorAll('p')[5].innerText;
// 'Fín del formulario'

// Cambiar el contenido (es decir, el valor) de un input:
document.getElementById('contra').value = 'contraseña';

// Se le puede cambiar también el tipo
document.getElementById('contra').type = 'text';


// Cambiar la imagen del ejemplo: 
document.getElementById('imagen1').src = 'js2.png';













