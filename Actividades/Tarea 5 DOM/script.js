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

    let lower = false;
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

// funcion para comprobar si un campo está en blanco (Se puede hacer también con valor required en HTML)
function isEmpty() {

    let name = id("name");
    let code = id("code");
    let pass = id("pass");
    let date = id("date");
    let email = id("email");
    let time = id("time");

    if (name.value == "" || code.value == "" || pass.value == "" || date.value == "" || email.value == "" || time.value == "") {
        return false;
    } else {
        return true;
    }

}

// Recupera la hora del sistema y la pone en el form
function hora() {

    let now = new Date();
    let timeForm = document.getElementById("time");

    let hours = now.getHours();
    if (hours.toString().length == 1) hours = "0" + hours;

    let minutes = now.getMinutes();
    if (minutes.toString().length == 1) minutes = "0" + minutes;

    let formatedTime = hours + ":" + minutes;
    timeForm.value = formatedTime;

}

// funcion para seleccionar la página de destino según el desplegable
function destination() {

    let so = document.getElementById("so");
    let url = so.value.toLowerCase() + ".html";

    return url;

}

// funcion para ocultar o mostrar los diferentes dispositivos
// la función también calcula el número de dispositivos seleccionados
function devices() {

    let laptopSel;
    let smartSel;
    let tabletSel;

    // portátil
    let laptopimg = id("laptopimg");
    let laptop = id("laptop");
    if (laptop.checked == true) {
        laptopimg.hidden = false
        laptopSel = 1;
    } else {
        laptopimg.hidden = true;
        laptopSel = 0;
    }

    // smartphone
    let smartphoneimg = id("smartphoneimg");
    let smartphone = id("smartphone");
    if (smartphone.checked == true) {
        smartphoneimg.hidden = false;
        smartSel = 1;

    } else {
        smartphoneimg.hidden = true;
        smartSel = 0;
    }


    // tablet
    let tabletimg = id("tabletimg");
    let tablet = id("tablet");
    if (tablet.checked == true) {
        tabletimg.hidden = false;
        tabletSel = 1;
    } else {
        tabletimg.hidden = true;
        tabletSel = 0;
    }


    let num = id("numDevices");
    num.innerHTML = laptopSel + smartSel + tabletSel;


}


// funcion que llama al resto de funciones para comprobar todos los campos
function checkAll() {

    hora();
    if (checkLength(3, "name") && checkCode() && passwordCheck() && isEmpty()) {

        let url = destination();
        let form = id("form");
        form.action = url;

        return true;
    } else {

        alert("Hay errores o campos vacíos en el formulario");
        return false;
    }



}