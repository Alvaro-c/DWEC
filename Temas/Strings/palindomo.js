let cadena = prompt("introduce una cadena");
let nueva_cadena = "";
let cadenaOriginal = "";

for (let i = cadena.length; i >= 0; i--) {

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

    nueva_cadena = nueva_cadena + letra;

}

for (let j = 0; j <= cadena.length; j++) {

    let letra;

    
    switch (cadena.charAt(j)) {

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

            letra = cadena.charAt(j);
        break;

    }

    cadenaOriginal = cadenaOriginal + letra;

}


cadenaOriginal == nueva_cadena ? alert(`${cadena} es un palíndromo`) : alert(`${cadena} NO es un palíndromo`);