


const ignorar = [",", ";", ".", "\"", "'", " "]; //caracteres para ignorar.


function tildes(cadena) {

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i];
        switch (letra) {
            case "á":
                cadena = cadena.replace("á", "a");
                break;
            case "é":
                cadena = cadena.replace("é", "e");
                break;
            case "í":
                cadena = cadena.replace("í", "i");
                break;
            case "ó":
                cadena = cadena.replace("ó", "o");
                break;
            case "ú":
                cadena = cadena.replace("ú", "u");
                break;
        }
    }
    return cadena;
}


function caracteresignorar(valor) {
    for (let k = 0; k < ignorar.length; k++) {
        if (valor == ignorar[k]) return true;
    }
    return false

}


function limpiar(cadena) {
    let cadenalimpia = "";
    for (let i = 0; i < cadena.length; i++) {
        if (caracteresignorar(cadena[i])) continue; // Salta una iteración del for
        cadenalimpia = cadenalimpia + cadena[i];
    }
    console.log("La cadena límpia es:" + cadenalimpia);
    return cadenalimpia;
}


function palindromo(cadena) {
    let derecha = cadena.length - 1;
    for (let i = 0; i <= derecha; i++) {
        if (cadena[i] == cadena[derecha]) {
            derecha--;
            continue;
        } else {
            return false;
        }
    }
    return true
}


let original = prompt("Introduce una palabra", "");
let palin = original;
palin = palin.toLowerCase();
palin = tildes(palin);
palin = limpiar(palin);
console.log("cadena límpia, longitud:" + palin.length);


if (palindromo(palin)) {
    console.log(`La expresión:\" ${original} \" ES palíndromo`);
} else {
    console.log(`La expresión: \" ${original} \" NO es palíndromo`);
}


// Ejercicio Palíndromo
//Dábale arroz a la zorra el abad
//Se es o no se es
//reconocer  ---   sometemos