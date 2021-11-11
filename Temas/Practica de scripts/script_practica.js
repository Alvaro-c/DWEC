/* Pedir numeros por pantalla hasta decir que no queremos mas
Cuando tengamos todos los numeros mostrar: 
Maximo
Minimo
Suma
Media
Cantidad de numeros introducidos */


let num = 0;
let max = 0;
let min = 0;
let sum = 0;
let avg = 0;
let total = 0;


do {

    num = prompt("Introduce un número. Exit para finalizar");

    if (num != "exit") {

        num = Number.parseInt(num);

        if (total == 0) {

            max = num;
            min = num;
            sum = num;

        }

        if (num > max) {

            max = num;
        }

        if (num < min) {

            min = num;
        }

        sum = sum + num;
        total++;

    }

} while (num != "exit")


avg = sum / total;

console.log(`El número más alto es el ${max}.\n
             El menor es ${min}. \n
             La suma es ${sum}. \n
             La media es ${avg} \n
             Se han introducido un total de ${total} números.`)

if (num == "exit") {

    console.log("Final del programa");
}



