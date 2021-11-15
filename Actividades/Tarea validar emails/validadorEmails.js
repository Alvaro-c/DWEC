/*

validador de emails: 
una sola @
un . a la derecha de la @ pero no justo después de la @ y no el último
antes de la @ debe haber 6 caracteres o más


*/


let email = prompt("introduce un email");

// Caso punto al final
function punto(email) {

    if (email[email.length - 1] == ".") {
        alert("El email es incorrecto"); console.log("caso . al final");
        return false;
    }
}

// Caso @
function arroba(email) {
    if (!email.contains("@")) alert("El email es incorrecto"); 
    console.log("caso @");
    return false;
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
        alert("Caso más de una @@");
        return false;
    }
}

// contar 6 caracteres

function seisCaracteres(email) {

    let i = 0;
    while (email[i] != "@") {
        i++;

    }
    if (count < 6) {
        alert("El email es incorrecto");
        console.log("menos de 6 caracteres");
        return false;
    } else {
        return true;
    }
}