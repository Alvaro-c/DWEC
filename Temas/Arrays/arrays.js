// ARRAYS

let array = [70, 9, 4, 3];

console.log(array);


console.log(array[2]);

array[0] = 1000;

console.log(array);

// nota: En JS se pueden cambiar las constantes

array[4] = "Carlitos";

console.log(array);
console.table(array);

array[array.length] = "ultimo"; //como lenght cuenta el numero de elementos contando desde 1, se puede utilizar de esta manera
console.log(array);


//Agregar o quitar cosas a un array

array.push("add to the end"); //mejor que añadir con lenght)
console.log(array);

array.unshift("colocar al principio2"); //coloca el elemento al comienzo del array
console.log(array);

array.pop("quita el último");
console.log(array);

array.shift("Quita el primero");
console.log(array);



let primero = array.shift(); // Elimina la primera posición y lo añade en la variable
console.log(primero);

let nuevoArray = [...array, "Adiós"]; //hace una copia del array y le añade una nueva posición
console.log(nuevoArray);

let nuevoArray2 = ["inicio", ...array, "final"]; // añade posiciones copiando el array original en otra variable diferente
console.log(nuevoArray2);
// SLPICE: Elimina un número N de elementos

nuevoArray2.splice(4, 2) // parametros: desde el primero a eliminar incluido; cuántos elementos se eliminan. Desde la posición 4 se eliminan 2 elementos

console.log(nuevoArray2);

// EJERCICIO DE EXAMEN: ORDENAR UN ARRAY


// Serie de Fibonacci: 1, 1, 2, 3, 5, 8

let n1 = 0;
let n2 = 1;
let n3 = 0;

for (let i = 0; i < 7; i++) {

    console.log(n1);

    n3 = n2 + n1;
    n1 = n2;
    n2 = n3;

}
