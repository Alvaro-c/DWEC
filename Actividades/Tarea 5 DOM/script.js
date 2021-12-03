// Función para guardar un elemento en una variable por su selector CSS
let id = (id) => document.getElementById(id);

// Evitar el comportamiento por defecto del form al hacer submit para validarlo antes de enviarlo
let form = id("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// });


// function defaultForm() {

//     form.addEventListener("submit", e);
//     e.preventDefault();
// }


// función para comprobar que la longitud de una cadena es mayor que el parámetro
function checkLength(num, ident) {

    let name = id(ident).value;
    let result;
    name.length < num ? result = false : result = true;
    return result

}

// Funcion que comprueba si una cadena está compuesta de dos letras mayúsculas
function checkCaps(string) {

    let caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    if (caps.includes(string[0]) && caps.includes(string[1])) {

        return true;
    } else {
        return false;
    }


}

// función para comprobar el formato del código del alumno
function checkCode() {

    let code = id("code").value;
    let arrayCode = code.split("-");

    if (arrayCode[0].length == 3 && checkCaps(arrayCode[1])) {
        return true;
    } else {
        return false;
    }


}

// Función para comprobar que existen mayúsculas y minúsculas en un string
function charsCheck(string) {

    let lower= false;
    let upper = false;
    let num = false;

    // Compruebo si hay al menos una minúscula
    let controlLower = "abcdefghijklmnñopqrstuvwxyz";
    for (let i = 0; i < string.length; i++) {

        if (controlLower.includes(string[i])) {
            lower = true;
        }

    }
    // compruebo si hay al menos una mayúscula
    controlLower = controlLower.toUpperCase();
    for (let i = 0; i < string.length; i++) {

        if (controlLower.includes(string[i])) {
            upper = true;
        }

    }

    // compruebo si hay al menos un número

    let nums = "0123456789";
    for (let i = 0; i < string.length; i++) {

        if (nums.includes(string[i])) {
            num = true;
        }

    }


    lower && upper && num ? result = true : result = false;
    return result;


}

// función para comprobar el formato de la contraseña
function passwordCheck() {

    let pass = id("pass").value;

    if (checkLength(8, "pass") && charsCheck(pass)) {
        return true;
    } else {
        return false;
    }


}

function checkAll() {

    if (checkLength(3, "name") && checkCode() && passwordCheck()) {
        return true;
    } else {
        return false;
    }


}