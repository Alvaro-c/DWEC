// Estructura de clases
class Animal {

    #peso;
    #color;

    constructor(peso, color) {
        this.#peso = peso;
        this.#color = color;
    }

    getPeso() {
        return this.#peso;
    }

    getColor() {
        return this.#color;
    }

    setPeso(peso) {

        this.#peso = peso;
    }

    setColor(color) {

        this.#color = color;
    }

    toString() {

        return `Peso: ${this.getPeso()}, Color: ${this.getColor}`;
    }

}

class Vacuna {

    #fechaAdministracion;
    #nombre;
    #numDosis;

    constructor(fechaAdministracion, nombre, numDosis) {

        this.#fechaAdministracion = fechaAdministracion;
        this.#nombre = nombre;
        this.#numDosis = numDosis;
    }

    getFechaAdministracion() {
        return this.#fechaAdministracion;
    }

    getNombre() {
        return this.#nombre;
    }

    getNumDosis() {
        return this.#numDosis;
    }

    setFechaAdministracion(fechaAdministracion) {
        this.#fechaAdministracion = fechaAdministracion;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setNumDosis(numDosis) {
        this.#numDosis = numDosis;
    }


}

class Perro extends Animal {

    #raza;
    #nombre;
    #vacunas = [];
    #identificador;

    constructor(peso, color, raza, nombre, identificador) {

        super(peso, color)
        this.#raza = raza;
        this.#nombre = nombre;
        this.#vacunas = [];
        this.#identificador = identificador;

    }


    getRaza() {
        return this.#raza;
    }

    getNombre() {
        return this.#nombre;
    }

    getVacunas() {
        return this.#vacunas;
    }

    getIdentificador() {
        return this.#identificador;
    }

    setRaza(raza) {
        this.#raza = raza;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setVacunas(vacuna) {
        this.#vacunas = vacunas;
    }

    setIdentificador(identificador) {
        this.#identificador = identificador;
    }

    hablar() {
        alert("Guau !");
    }

    // vacunar() {

    //     let fechaAdministracion = prompt("Cuál es la fecha de administracion: ");
    //     let nombre = prompt("Cuál es el nombre de la vacuna");
    //     let numDosis = prompt("Cuántas dosis tiene puestas");

    //     this.#vacunas.push(new Vacuna(fechaAdministracion, nombre, numDosis));
    // }

    vacunar() {

        alert("#Introducir vacuna para el perro#");
        let fechaAdministracion, nombre, numDosis;
        do {
            fechaAdministracion = prompt("Introduce la fecha de administracion");
        } while (fechaAdministracion == "");

        do {
            nombre = prompt("Introduce el nombre");
        } while (nombre == "");

        do {
            numDosis = prompt("Introduce el número de dosis");
        } while (isNaN(numDosis));

        this.#vacunas.push(new Vacuna(fechaAdministracion, nombre, numDosis));

    }




    mostrarVacunas() {
        for (let i = 0; i < this.vacunas.length; i++) {
            console.log(this.#vacunas[i].toString());
        }
    }

    buscarVacuna() {

        let vacunaBuscar = prompt("Introduce elnombre de la vacuna");
        for (let i = 0; i < this.vacunas.length; i++) {
            if (this.vacunas[i].nombre == vacunaBuscar) {
                console.log(this.vacunas[i].toString);
                return true;
            }
        }
        console.log("Vacuna no encontrada");
        return false;
    }



}


class Gato extends Animal {

    #raza;
    #nombre;
    #identificador;


    constructor(peso, color, raza, nombre, identificador) {

        super(peso, color);
        this.#raza = raza;
        this.#nombre = nombre;
        this.#identificador = identificador;

    }

    getRaza() {
        return this.#raza;
    }

    getNombre() {
        return this.#nombre;
    }

    getIdentificador() {
        return this.#identificador;
    }

    setRaza(raza) {
        this.#raza = raza;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setIdentificador(identificador) {
        this.#identificador = identificador;
    }

    hablar() {
        alert("GuMIAU !");
    }


}

// FUNCIONES DE CARGA DE ANIMALES, PERROS, GATOS Y VACUNAS

function cargarAnimal() {
    let peso, color;
    alert("#Carga de animal#");
    do {
        peso = prompt("Introduce el peso del animal");
    } while (isNaN(peso) || peso < 0 || peso == "");

    do {
        color = prompt("Carga el color del animal");
    } while (color == "");

    return new Animal(peso, color);

}

// Función para comprobar si se quieren seguir cargando vacunas (sin usar)
function continuarVacunas() {
    let continuar;
    do {
        continuar = prompt("Deseas añadir una vacuna? (S/N)")
        continuar = continuar.toLowerCase();
    } while (continuar != "s" && continuar != "n");
    continuar == "s" ? continuar = true : continuar = false;
    return continuar;
}



function cargarPerro() {

    let listaRazas = ["caniche", "labrador", "pastor aleman", "pastor alemán", "otros"];
    let raza, nombre, identificador;
    let vacunas = [];

    alert("#Carga de un perro#");

    // datos de animal
    let peso, color;
    do {
        peso = prompt("Introduce el peso del animal");
    } while (isNaN(peso) || peso < 0 || peso == "");

    do {
        color = prompt("Carga el color del animal");
    } while (color == "");

    // datos de perro
    do {
        raza = prompt(`Introduce una raza: 
        Caniche
        Labrador
        Pastor alemán
        Otros`)
        raza = raza.toLowerCase();
    } while (!listaRazas.includes(raza));

    do {
        nombre = prompt("Introduce el nombre del perro");
    } while (nombre == "");

    do {
        identificador = prompt("Introduce el identificador del perro");
    } while (isNaN(identificador) || identificador == "");

    // Para añadir más de dos vacunas:
    // while (continuarVacunas()) {
    //     newPerro.vacunas.push(newPerro.vacunar());
    // }

    // hecho con constructor, a falta de ver cómo se hace declarando objeto vacio y despues utilizando get y set
    let newPerro = new Perro(peso, color, raza, nombre, identificador);
    newPerro.setRaza(raza);
    newPerro.setNombre(nombre);
    newPerro.setIdentificador(identificador);
    // añadir 2 vacunas
    newPerro.vacunar();
    newPerro.vacunar();


    return newPerro;
}

function cargarGato() {

    let raza, nombre, identificador;

    alert("#Carga de un gato#");

    // datos de animal
    let peso, color;
    do {
        peso = prompt("Introduce el peso del animal");
    } while (isNaN(peso) || peso < 0 || peso == "");

    do {
        color = prompt("Carga el color del animal");
    } while (color == "");


    // datos de un gato
    do {
        raza = prompt("Introduce la raza");
    } while (raza == "");

    do {
        nombre = prompt("Introduce el nombre");
    } while (nombre == "");

    do {
        identificador = prompt("Introduce el identificador");
    } while (isNaN(identificador) || identificador == "");

    return new Gato(peso, color, raza, nombre, identificador);

}

// SCRIPT PRINCIPAL PARA CARGAR Y PARA MOSTRAR LOS RESULDATOS
let animales = [];
let perros = [];
let gatos = [];

// Carga de 2 animales, 2 perros, 2 gatos
function cargar() {

    animales = [];
    perros = [];
    gatos = [];

    animales.push(cargarAnimal());
    animales.push(cargarAnimal());

    perros.push(cargarPerro());
    perros.push(cargarPerro());

    gatos.push(cargarGato());
    gatos.push(cargarGato());

    console.table(animales);
    console.table(perros);
    console.table(gatos);

}

function mostrarAnimales() {


    tablaBasis = `
    <h3>Animales</h3>    
    <table>
        <tbody>
        <tr>
            <td>Número</td>
            <td>Peso</td>
            <td>Color</td>
        </tr>`;
    tableContent = "";

    for (let i = 0; i < animales.length; i++) {

        tableContent = tableContent + `
        <tr>
            <td>${i}</td>
            <td>${animales[i].getPeso()}</td>
            <td>${animales[i].getColor()}</td>
        </tr>`;

    }

    finalTable = tablaBasis + tableContent + `        </tbody>
    </table>`;

    return finalTable;

}

function mostrarPerros() {

    tablaBasis = `
    <h3>Perros</h3>    
    <table>
        <tbody>
        <tr>
            <td>Número</td>
            <td>Peso</td>
            <td>Color</td>
            <td>Raza</td>
            <td>Nombre</td>
            <td>Identificador</td>
            <td>Nombre Vacuna</td>
            <td>Fecha Administración</td>
            <td>Núm Dosis</td>
        </tr>`;
    tableContent = "";

    for (let i = 0; i < perros.length; i++) {

        tableContent = tableContent + `
        <tr>
            <td>${i}</td>
            <td>${perros[i].getPeso()}</td>
            <td>${perros[i].getColor()}</td>
            <td>${perros[i].getRaza()}</td>
            <td>${perros[i].getNombre()}</td>
            <td>${perros[i].getIdentificador()}</td>
            <td>${perros[i].getVacunas()[i].getNombre()}</td>
            <td>${perros[i].getVacunas()[i].getFechaAdministracion()}</td>
            <td>${perros[i].getVacunas()[i].getNumDosis()}</td>
        </tr>`;

    }

    finalTable = tablaBasis + tableContent + `        </tbody>
    </table>`;

    return finalTable;


}

function mostrarGatos() {


    tablaBasis = `
    <h3>Gatos</h3>    
    <table>
        <tbody>
        <tr>
            <td>Número</td>
            <td>Peso</td>
            <td>Color</td>
            <td>Raza</td>
            <td>Nombre</td>
            <td>Identificador</td>
        </tr>`;
    tableContent = "";

    for (let i = 0; i < gatos.length; i++) {

        tableContent = tableContent + `
        <tr>
            <td>${i}</td>
            <td>${gatos[i].getPeso()}</td>
            <td>${gatos[i].getColor()}</td>
            <td>${gatos[i].getRaza()}</td>
            <td>${gatos[i].getNombre()}</td>
            <td>${gatos[i].getIdentificador()}</td>
        </tr>`;

    }

    finalTable = tablaBasis + tableContent + `</tbody>
    </table>`;

    return finalTable;

}


function mostrar() {

    let fullHTMLCode = "";

    fullHTMLCode = fullHTMLCode + mostrarAnimales();
    fullHTMLCode = fullHTMLCode + mostrarPerros();
    fullHTMLCode = fullHTMLCode + mostrarGatos();

    //console.log(fullHTMLCode);


    tablaHTML = document.getElementById("tabla");

    tablaHTML.innerHTML = fullHTMLCode;

}