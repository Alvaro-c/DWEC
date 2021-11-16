var hexa = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
function comprobar(valor) {
    //comprobamos si está en binario
    if (comprobarbinario(valor)) return "binario";

    //comprobamos si está en hexadecimal
    if (comprobarhexa(valor)) return "hexadecimal";
    return ("Valor no válido");
}
function comprobarbinario(valor) {
    for (var i = 0; i < valor.length; i++) {
        //comprobar cuando no cumple
        if (valor[i] != 0 && valor[i] != 1) return false;
    }
    return true;
}
function comprobarhexa(valor) {
    var valido = true;
    for (var i = 0; i < valor.length; i++) {
        var valido = false;
        for (var j = 0; j < hexa.length; j++) {
            if (hexa[j] == valor.charAt(i)) {
                valido = true;
            }
        }
        if (valido == false) {
            return false;
        }
    }
    return true;
}
function calcular(numero, sistema) {
    base = 2;
    if (comprobar(numero) == "hexadecimal") {
        base = 16;
    }
    tablanumero = numero.split(""); //convertimos un string en un array
    tablanumero = tablanumero.reverse(); //invertimos las posiciones del array
    var acum = 0;
    for (var i = 0; i < tablanumero.length; i++) {
        for (var j = 0; j < hexa.length; j++) {
            if (tablanumero[i] == hexa[j]) acum = acum + j * base ** i;
        }
    }
    return acum;
}
var numero = prompt("Introduce el número");
numero = numero.toUpperCase();
var basenumeracion = comprobar(numero);
if (basenumeracion == "binario" || basenumeracion == "hexadecimal") {
    console.log(calcular(numero, basenumeracion));
} else {
    console.log("Número no válido");
}


