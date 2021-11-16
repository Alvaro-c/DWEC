/*

validador de emails: 
1. una sola @
2. un . a la derecha de la @ pero no justo después de la @ y no el último
3. antes de la @ debe haber 6 caracteres o más


*/

function puntoArroba(email) {

    let atPos = 0;
    for (let i = 0; i < email.length; i++) {

        if (email[i] == "@") {
            atPos = i + 1;
        }

    }

    if (email[atPos] == ".") {

        console.log("caso puntoArroba");

        return false;

    } else {
        console.log("true puntoArroba");
        return true;
    }

}


// Caso punto al final
function punto(email) {

    if (email[email.length - 1] == ".") {
        console.log("caso . al final");
        return false;
    } else {
        console.log("true punto");
        return true;
    }
}

// Caso @
function arroba(email) {
    if (!email.includes("@")) {
        console.log("caso @");
        return false;

    } else {
        console.log("true Arroba");
        return true;
    }
}


// Caso + de una @@
function masArrobas(email) {

    let count = 0;
    for (let i = 0; i < email.length; i++) {

        if (email[i] == "@") {
            count++;
        }

    }
    if (count != 1) {
        console.log("Caso más de una @@");
        return false;
    } else {
        console.log("true masArroba");
        return true;
    }
}

// contar 6 caracteres

function seisCaracteres(email) {

    let i = 0;
    while (email[i] != "@") {
        i++;

    }
    if (i < 6) {
        console.log("menos de 6 caracteres");
        return false;
    } else {
        console.log("true seisCaracteres");
        return true;
    }
}


let email = prompt("introduce un email");

if (arroba(email) && masArrobas(email) && seisCaracteres(email) && puntoArroba(email)) {

    alert("email correcto");
} else {

    alert("email incorrecto");
}