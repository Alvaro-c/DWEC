/*
Un array bidimensional es un array que contiene otro array.
Se puede entender también como una tabla


*/

// Ejemplo de array 2x2 
let v2d = new Array();
v2d[0] = new Array(2);
v2d[1] = new Array(2);

// Meter datos: 

v2d[0][0] = 1; 
v2d[0][1] = 2;
v2d[1][0] = 3; 
v2d[1][1] = 4;

console.table(v2d);
console.log(v2d[1][0]);

// Ejemplo de 7x2 y cargarla mediante un bucle
console.log("\n ----- MATRIZ 7x2 ----- \n");
let matriz = new Array();
let count = 0; 

for (let i = 0; i < 7; i++) {

    matriz[i] = new Array();
    for (let j = 0; j < 2; j++) {

        matriz[i][j] = count;

        count++;
    }


}

console.table(matriz);