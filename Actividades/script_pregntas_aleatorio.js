

let intentos = 0;
let loggin = false;
let random; 


let preguntas = ['1+2', '2+3', '3+4', '5+7', '10+20', '40+20', '4+1', '8+2', '9+2', '10+12'];
let respuestas = [3, 5, 7, 12, 30, 60, 5, 10, 11, 22];

let answer;

while (!loggin && intentos != 3) {

    random = Math.floor((Math.random() * 10));

    answer = Number.parseInt(prompt(`¿Cuánto es ${preguntas[random]}?`));


    if (answer == respuestas[random]) {

        console.log("Correcto");
        loggin = true;

    } else {
        intentos++;
        console.log(`Incorrecto, te quedan ${3 - intentos}.`);

    }


}

if (loggin == false) {

    console.log("Cuenta bloqueada");
}


