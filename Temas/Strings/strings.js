const producto = "Memoria RAM";

const articulo = String("Pepito Pérez");

console.log(typeof producto);
console.log(typeof articulo);

const empleado = new String("Pepito Pérez");
console.log(typeof empleado);


console.log(articulo === empleado); // no es lo mismo, uno es un string y otro es un object.

// Propiedades: 

console.log(empleado.length);

// Métodos

//indexOf(valor [,desde]): Devuelve la posición de la primera vez que sale el valor buscado, sino se encuentra devuelve -1
console.log(empleado.indexOf("P")); // Es case sensitive
console.log(empleado.indexOf("P", empleado.indexOf("P") + 1)); // Buscará la segunda ocurrencia
console.log(empleado.indexOf("q")); // No está, devuelve -1

// lastIndexOf(valor [, desde]): Devuelve la última ocurrencia
console.log(empleado.lastIndexOf("P", 5)); // el 5 es el index normal, no el index desde el final

// includes(valor [,desde]): Devuelve boolean

console.log(empleado.includes("ito")); // true
console.log(empleado.includes("pérez")); // false, case sensitive

// charAt(posicion): Devuelve el caracter en n posición, sino hay nada en esa posición, no devuelve nad
console.log(empleado.charAt(0));
console.log(typeof empleado.charAt(25)); //tira un string porque el método devuelve un string

// charCodeAt(posición) : Devuelve el código unicode del caracter indicado
console.log(empleado.charCodeAt(8));
let nombre = "ñ";
console.log(nombre.charCodeAt(0));

//fromCharCode(codigo) Devuelve el caracter según el código unicode
console.log(String.fromCharCode(241));

// toLowerCase(): Pasa a minúsculas
// toUpperCase(): Pasa a mayúsculas
console.log(empleado.toLocaleLowerCase());
console.log(empleado.toUpperCase());

// concatenar cadenas: 
//1. 
console.log(empleado.concat("cadena2"));
console.log("El empleado se llama ".concat(empleado));
//2.
console.log("El empleado se llama " + empleado);
//3.
console.log(`El empleado se llama ${empleado}`);

// limpiar espacios al principio y al final
let cadenaEspacios = "    Esta cadena tiene espacios   ";
//1. Espacios al inicio
console.log(cadenaEspacios.trimStart());
//2. Espacios al final
console.log(cadenaEspacios.trimEnd());
//3. Espacios al inicio y al final
console.log(cadenaEspacios.trim());

// search(valor): Busca dentro de la cadena y devuelve la posición de la pimera letra de la cadena buscada. Si no lo encuentra devuelve -1
console.log(cadenaEspacios.search("cadena"));

// replace(valor_original, valor_nuevo): reemplazar caracteres, una vez en caso de que haya más de una ocurrencia.
// Si no lo encuentra, devuelve la cadena tal cuál estaba
console.log(cadenaEspacios.replace("   ", "****"));

//slice(posición_inicio, posición_final): Devuelve un trozo de la cadena
console.log(empleado.slice(3, 5));

//substring(posición_inicio, posición_final) (igual que la anterior, salvo lo de abajo)
console.log(empleado.substring(3, 5));

console.log(empleado.slice(5, 3)); // no hace nada
console.log(empleado.substring(5, 3)); // da la vuelta a los números (sobreentiende que hay un error y lo corrige)


// repeat(veces) Pepito PérezPepito PérezPepito Pérez
console.log(empleado.repeat(3));
console.log(" Repetir ! ".repeat(3)); // Repetir !  Repetir !  Repetir ! 
console.log(" Repetir ! ".repeat(3.9999999999999)); // Lo mismo que el anterior, trunca

// cadena.split(separador):  Crea un array con las diferentes posiciones 
console.log("Alvaro, Cañas, González".split(", "));

// Volcar un string a un array, varias maneras:
//1.
console.log("Alvaro, Cañas, González".split(""));

//2.
let cadena3 = "Esto es una cadena de texto";
let encadena1 = [...cadena3];
console.log(encadena1);

//3.
console.log(Array.from(cadena3));

// Invertir un array, no funciona con strings, sólo con arrays
//array.reverse()

console.log(encadena1.reverse());

// Ordenar un string: 
console.log(encadena1.sort());


