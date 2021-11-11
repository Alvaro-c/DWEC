// Dos maneras de declarar funciones en JS


// 1. Declaración de función: 

function sumar(n1, n2) {

    return n1 + n2;
}

console.log(sumar(1, 2));

// 2 .Expresion de funcion, se define como una variable

const sumar2 = function (n1, n2) {

    return n1 + n2;
}

console.log(sumar2(1, 2));

console.log(impuesto(1000, 21));
// console.log(descuento(1000, 21)); <-- Daría error con esta llamada por lo que se escribe abajo

// ---------------------------------- 

function impuesto(importe, porcentaje) {

    return (importe * porcentaje / 100)
}

// como constante no funcionará porque la llamada está antes de la declaración. Esto es hoisting.
// Ocurre porque el script se ejecuta en una doble pasada. No puede usar esta función porque la variable no está iniciada. 
// En la primera pasada registra la función, en la segunda ejecuta.
// PREGUNTA TIPICA DE EXAMEN


const descuento = function(importe, dto) {

    return (importe - dto);

}


// Método

let nombre ="Pepe";

console.log(nombre.toUpperCase()); // Método. Se hace con variable.metodo();
console.log(parseInt("200"));      // Función
console.log(impuesto(1000));       // falta un parámetro. Devuelve NaN porque está multiplicando el 1000 por NaN
// Para solucionar esto, existen los parámetros por defecto: 

function impuesto2(importe, porcentaje=0) {

    return (importe * porcentaje / 100);
}

console.log(impuesto2(1000)); // utilizando parámetro por defecto
// Los parametros por defecto tiene que ir siempre al final de la función, no pueden ir al principio. Puede haber más de uno.

// Los parámetros en JS se pasan por valor, no por referencia. Se hace una copia del original, el original no se ve modificado.
