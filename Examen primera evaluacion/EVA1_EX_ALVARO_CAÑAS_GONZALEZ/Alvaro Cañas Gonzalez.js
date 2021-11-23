// SCRIPT
// Declaración del array accesible para todas las funciones
let listaespera = [];

// Creación de la estructura del objeto paciente con una funcion
function Paciente(numeroHistoria, nombre, fechaNac, sexo, direccion, telefono, tarjetaSa, diasLista, servMedico, intervencion) {

    this.numeroHistoria = numeroHistoria;
    this.nombre = nombre;
    this.fechaNac = fechaNac;
    this.sexo = sexo;
    this.direccion = direccion;
    this.telefono = telefono;
    this.tarjetaSa = tarjetaSa;
    this.diasLista = diasLista;
    this.servMedico = servMedico;
    this.intervencion = intervencion;


}


// funcion para validar el formato de fecha de nacimiento
function validarFecha(fecha) {
    let fechaArray
    // creo un array separando por barras /
    // compruebo con try y catch que no da error. En caso de dar error, devuelve false y por tanto, el formato es incorrecto
    try {
        fechaArray = fecha.split("/");

        // compruebo longitud de string en cada array para ver que cumple con la longitud de DD MM y AAAA
        if (fechaArray[0].length == 2 && fechaArray[1].length == 2 && fechaArray[2].length == 4) {
            return true;
        } else {
            return false;
        }

    } catch {

        return false;
    }



}

// funcion que genera un nuevo paciente y lo devuelve. Valida todas las entradas según modelo
function nuevoPaciente() {

    // declaración de una variable para cada atributo del objeto paciente
    let numeroHistoria, nombre, fechaNac, sexo, direccion, telefono, tarjetaSa, diasLista, servMedico, intervencion;

    // validacion historia clinica tiene 6 digitos, que es un numero y que no existe el paciente todavia
    do {

        numeroHistoria = prompt("Introduce el numero de historia");
        console.log(numeroHistoria.length);

    } while (isNaN(numeroHistoria) || numeroHistoria == "" || numeroHistoria.length != 6 || existePaciente(numeroHistoria));

    // validacion de que hay un nombre y no se deja vacio
    do {
        nombre = prompt("Introduce el nombre");
    } while (nombre == "")

    // validacion del formato de la fecha con la funcion vista arriba
    do {
        fechaNac = prompt("Introduce la fecha de nacimiento (DD/MM/AAAA)");
    } while (!validarFecha(fechaNac));

    // validacion del sexo
    do {
        sexo = prompt("Intorduce el sexo (H/M)");
        sexo = sexo.toUpperCase();
    } while ((sexo != "H" && sexo != "M") || sexo == "");

    // validacion de direccion
    do {
        direccion = prompt("Introduce la direccion");
    } while (direccion == "");

     // validacion de que telefono es numerico, tiene 9 cifras y no esta vacio
    do {
        telefono = prompt("Introduce el número de teléfono");
    } while (isNaN(telefono) || telefono.length != 9 || telefono == "");

    // validacion de la tarjeta sanitaria y transformacion en boolean con condicional if (una linea)
    do {
        tarjetaSa = prompt("Introduce la tarjeta sanitaria (si/no)");
    } while ((tarjetaSa != "si" && tarjetaSa != "no") || tarjetaSa == "");
    tarjetaSa == "si" ? tarjetaSa = true : tarjetaSa = false;

    do {
        diasLista = prompt("Introduce cuántos días lleva en la lista de espera");
    } while (isNaN(diasLista) || diasLista.length != 4 || diasLista == "");

    // validación del servicio médico
    do {
        servMedico = prompt(`Introduce el servicio médico: 
        0: Sin clasificar
        1: Traumatología
        2: Oftalmología
        3: Aparato digestivo
        4: Urología
        5: Ginecología
        6: Pediatría`)
    } while ((servMedico != 0 && servMedico != 1 && servMedico != 2 && servMedico != 3 && servMedico != 4 && servMedico != 5 && servMedico != 6) || servMedico == "");

    do {
        intervencion = prompt("Introduce la intervención");
    } while (intervencion == "");

    let nuevoPaciente = new Paciente(numeroHistoria, nombre, fechaNac, sexo, direccion, telefono, tarjetaSa, diasLista, servMedico, intervencion);
    console.log(nuevoPaciente);
    return nuevoPaciente;

}

// Funcion para comprobar si el numero de historia está duplicado
function existePaciente(num) {

    if (listaespera.length == 0) {
        return false;
    }

    for (let i = 0; i < listaespera.length; i++) {

        if (listaespera[i].numeroHistoria == num) {
            return true;
        }
    }

    return false;


}

// Función para mostrar la tabla en HTML
function mostrarTabla(array) {

    // Encabezado de la tabla
    document.write("<table>");
    document.write("<tr><td>Nº Historia Clínica</td><td>Nombre</td><td>Fecha de Nacimiento</td><td>Sexo</td><td>Dirección</td><td>Teléfono</td><td>Tarjeta Sanitaria</td><td>Días en lista de espera</td><td>Servicio Médico</td><td>Intervención</td></tr>");

    for (let i = 0; i < array.length; i++) {

        document.write(`<tr><td>${array[i].numeroHistoria}</td><td>${array[i].nombre}</td><td>${array[i].fechaNac}</td><td>${array[i].sexo}</td><td>${array[i].direccion}</td><td>${array[i].telefono}</td><td>${array[i].tarjetaSa}</td><td>${array[i].diasLista}</td><td>${imprimirServicio(parseInt(array[i].servMedico))}</td><td>${array[i].intervencion}</td></tr>`);

    }

}

// funcion para imprimir el servicio segun el numero introducido
function imprimirServicio(num) {

    let servicios = ["Sin clasificar", "Traumatología", "Oftalmología", "Aparato digestivo", "Urología", "Ginecología", "Pediatría"];

    return servicios[num];

}


// funcion que inicia el programa para preguntar cuantos pacientes se van a añadir
function inicioPrograma() {
    // array de pacientes

    let numPacientes

    // preguntar cuántos pacientes se van a añadir y validar el dato
    do {
        numPacientes = prompt("Cuántos pacientes quiere añadir?");
    } while (isNaN(numPacientes) || numPacientes < 0 || numPacientes == "");
    numPacientes = parseInt(numPacientes);

    // añadir pacientes al array de pacientes
    for (let i = 0; i < numPacientes; i++) {
        listaespera[i] = nuevoPaciente();
    }

    mostrarTabla(listaespera);

}


// Función que elimina los pacientes del array
function borrarPacientes() {

    for (let i = 0; i < listaespera.length; i++) {

        listaespera.unshift();
    }

}