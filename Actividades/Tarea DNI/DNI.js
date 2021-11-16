
function letraDNi(DNI) {
    let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKET";
    let mod = DNI % 23;
    let letra = letrasDNI.charAt(mod);

    return letra;
}

function isNumber(n) {
    return !isNaN(parseInt(n));
}

let DNI = prompt("Introduce un DNI");

if (isNumber(DNI)) {
    parseInt(DNI);
}


if (DNI >= 1 && DNI <= 99999999 && Number.isInteger(DNI)) {

    prompt("El DNI con letra es: " + DNI + letraDNi(DNI));

} else {

    alert("DNI no válido");
}
