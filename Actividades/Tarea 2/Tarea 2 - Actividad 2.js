
let cadena = prompt("Introduce una frase:"); 
let array = cadena.split(" ");
let nueva_cadena = "";
let cadenaOriginal = "";

function invertirCadena(cadena){

    let arrayI = cadena.split(" ");

    let cadenaInversa = ""; 
    
    for (let i = array.length -1 ; i >= 0; i--) {
    
        cadenaInversa = cadenaInversa + array[i] + " ";
    }

    return cadenaInversa;
    
}

function cadenaAZ(cadena) {

    cadena = cadena.toLowerCase();
    let arrayAZ = cadena.split(" ");
    arrayAZ = arrayAZ.sort();
    let cadenaAZ = "";

    for (let i = 0; i < arrayAZ.length; i++) {
        cadenaAZ = cadenaAZ + arrayAZ[i] + " ";
    }

    return cadenaAZ;
}

function cadenaZA(cadena) {

    cadena = cadena.toLowerCase();
    let arrayAZ = cadena.split(" ");
    arrayAZ = arrayAZ.sort();

    let cadenaZA = "";
    for (let i = arrayAZ.length -1 ; i >= 0; i--) {
        cadenaZA = cadenaZA + arrayAZ[i] + " ";
    }
    return cadenaZA;
}

function limpiarAcentos(cadena) {

    let cadenaSinAcentos="";

    for (let i = 0; i <= cadena.length; i++) {

        let letra;

        switch (cadena.charAt(i)) {

            case "á":
                letra = "a";
                break;

            case "é":
                letra = "e";
                break;

            case "í":
                letra = "i";
                break;

            case "ó":
                letra = "o";
                break;

            case "ú":
                letra = "u";
                break;

            default:

                letra = cadena.charAt(i);
                break;

        }

        cadenaSinAcentos = cadenaSinAcentos + letra;

    }

    console.log(`La cadena sin acentos es: ${cadenaSinAcentos}`);
    return cadenaSinAcentos;

}

function quitarEspacios(cadena) {

    console.log(`La cadena sin espacios es: ${cadena.replaceAll(" ", "")}`)
    return cadena.replaceAll(" ", "");
}


function cadenaInversa(cadena) {
    
    for (let i = cadena.length; i >= 0; i--) {

        let letra;
    
        letra = cadena.charAt(i);
    
        nueva_cadena = nueva_cadena + letra;
    
    }

    return nueva_cadena;

}


// Transformación de la cadena
cadena = cadena.toLowerCase();
cadena = limpiarAcentos(cadena);
cadena = quitarEspacios(cadena);
nueva_cadena = cadenaInversa(cadena);

console.log(`La frase tiene ${array.length} palabras.`);
console.log(`La primer palabra es "${array[0]}" y la última palabra es "${array[array.length -1]}"`);
console.log(`Las palabras en orden inverso son: ${invertirCadena(cadena)}`);
console.log(`Las palabras ordenadas de la A a la Z son: ${cadenaAZ(cadena)}`);
console.log(`Las palabras ordenadas de la Z a la A son: ${cadenaZA(cadena)}`);

cadena == nueva_cadena ? console.log(`${cadena} es un palíndromo`) : console.log(`${cadena} NO es un palíndromo`);

