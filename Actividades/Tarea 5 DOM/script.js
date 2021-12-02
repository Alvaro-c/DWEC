// Función para guardar un elemento en una variable por su selector CSS
let id = (id) => document.getElementById(id);

// Evitar el comportamiento por defecto del form al hacer submit para validarlo antes de enviarlo
let form = id("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});


// function defaultForm() {

//     form.addEventListener("submit", e);
//     e.preventDefault();
// }


// función para comprobar que la longitud de una cadena es mayor que 3 ( 3 está hard coded, solo se usa una vez)
function checkLength() {

    let name = id('#name').value;
    if (name.length < 3) {

        return false;
    } else {

        return true;
    }

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

    let code = document.querySelector("#code").value;
    let arrayCode = code.split("-");

    if (arrayCode[0].length == 3 && checkCaps(arrayCode[1])) {

        return true;

    } else {

        return false;

    }


}

function checkAll() {

    checkLength();
    checkCode(code);


}