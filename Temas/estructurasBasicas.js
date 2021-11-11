for (let i = 1; i < 6; i++) console.log(i);

let num = 0;


for (let i = 0; i < 10; i++) {

    num += i;
    //console.log(num);

}

let i = 1;

console.log("Bucle while");
while (i <= 5) {

    console.log(i)
    i++;

}

do {

    console.log("test");

} while (false);

//let input = Number.parseInt(prompt("introduce un numero", 0)); // el 0 es si se deja vacío

let input = 0;

if (input % 2 == 0) {

    console.log("entrando en el if");
} else {

    console.log("Entrando en el else");
}



let edad = 18;

if (edad > 18) {

    console.log("Es mayor de edad");

} else if (edad == 18) {

    console.log("Tiene 18 años");
} else {

    console.log("Es menor de edad ");
}


if (edad !== "18") {

    console.log("No son iguales"); //Logica negativa
}

// Condicional ternario
// Condición ? resultado1 : resultado2

console.log("Condicional ternario: ");


edad == 18 ? console.log("Tiene 18") : console.log("No tiene 18");

console.log("---------");
// switch

/*switch (valor) {


    case caso1:

        console.log("caso1");
        break;
    case caso2:
        console.log("caso1");
        break;

    default:
        console.log("caso excepcion");

}*/


console.log("CASE");

edad = 5;

switch (edad) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:

        console.log("Es menor de 18 años");
        break;
    case 18:
        console.log("Tiene 18 años");
        break;

    default:
        console.log("Es mayor de 18 años");
        break;
}

console.log("---------");

console.log("CASE 2");

edad = 5;

switch (true) {

    case (edad < 18):

        console.log("Es menor de 18 años");
        break;
    case (edad > 18):
        console.log("Tiene 18 años");
        break;

    default:
        console.log("Tiene 18 años");
        break;
}


console.log("---------");


// Pedir 5 numeros por pantalla y devolver el mayor

let higher;
let lower;
let first = true;

for (let i = 0; i < 5; i++) {

    input = Number.parseInt(prompt("Introduce un número:"));

    if (first) { 
        higher = input; 
        lower = input;
        first = false;
     }

    if (input > higher) {

        higher = input;
    }

    if (input < lower) {

        lower = input;
    }

}

//console.log("El número mayor introducido es el " + higher);

console.log(`El número mayor introducido es el ${higher} y el menor es el ${lower}`);



