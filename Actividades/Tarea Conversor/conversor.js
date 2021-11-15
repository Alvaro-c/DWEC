/*
Conversor de binario a decimal y de hexadecimal a decimal
funcion que recibe el número y el formato a sacar
funcion que valida el número

El bit multiplicado por la posición
011001
543210
1x2^4 + 1*2^3 + 1*2^0

*/

function invertirCadena(cadena) {

    let cadenaInversa = "";

    for (let i = cadena.length - 1; i >= 0; i--) {

        cadenaInversa = cadenaInversa + cadena[i];
    }

    return cadenaInversa;

}

function conversor(num, option) {

    let result = 0;
    num = invertirCadena(num);
    num =  num.toUpperCase();

    if (option == "binario") {

        for (let i = 0; i < num.length; i++) {

            result = result + parseInt(num[i]) * Math.pow(2, i);
        }

        return result;


    } else if (option == "hexadecimal") {

        for (let i = 0; i < num.length; i++) {

            let lastNum = num[i];

            if (lastNum == 'A') lastNum = 10;
            if (lastNum == 'B') lastNum = 11;
            if (lastNum == 'C') lastNum = 12;
            if (lastNum == 'D') lastNum = 13;
            if (lastNum == 'E') lastNum = 14;
            if (lastNum == 'F') lastNum = 15;

            result = result + parseInt(lastNum) * Math.pow(16, i);
            console.log(result);
        }

        return result;

    }


}

function comprobarBinario(num) {

    for (let i = 0; i < num.length; i++) {

        if (num[i] != 0 && num[i] != 1) {
            
            return false;
        }
      
    }
    return true;
}

function comprobarHexadecimal(num) {

    let digits = "0123456789ABCDEF";
    num = num.toUpperCase();

    for (let i = 0; i < num.length; i++) {

        for (let j = 0; j < digits.length; j++) {

            if (!digits.includes(num[i])) {
                return false;
            }
        }
      
    }

    return true;
}

let option;
let num;

do {

    option = parseInt(prompt("1. Convertir de binario a decimal \n2. Convertir de Hexadecimal a decimal \n3. Salir"));

    switch (option) {

        case 1:

            num = prompt("Introduce un número");

            if (comprobarBinario(num)) {
                alert(conversor(num, "binario"));
            } else {

                alert("El número no es binario");
            }

            break;

        case 2:

            num = prompt("Introduce un número");

            if (comprobarHexadecimal(num)){
                
                alert(conversor(num, "hexadecimal"));
            } else {

                alert("El número no es hexadecimal");
            }
            
            break;

        case 3:

            alert("Fin del programa");

            break;

        default:

            alert("Elige una opción correcta");

            break;

    }



} while (option != 3);

