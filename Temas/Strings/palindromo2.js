let cadena = prompt("introduce una cadena");
let nueva_cadena = "";
let cadenaOriginal = "";


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


// Comprobación de la cadena limpia con la cadena dada la vuelta
cadena == nueva_cadena ? alert(`${cadena} es un palíndromo`) : alert(`${cadena} NO es un palíndromo`);

// Ejemplo:  Dábale arroz a la zorra el abad