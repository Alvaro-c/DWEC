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

    constructor(raza, nombre, identificador) {

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

        let fechaAdministracion, nombre, numDosis;
        do {
            fechaAdministracion = prompt("Introduce la fecha de administracion");
        } while (fechaAdministracion == "");
    
        do {
            nombre = prompt("Introduce el nombre");
        } while (nombre != "");
    
        do {
            numDosis = prompt("Introduce el número de dosis");
        } while (!isNaN(numDosis));
    
        return new Vacuna(fechaAdministracion, nombre, numDosis);
    
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


    constructor(raza, nombre, identificador) {

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

    let newPerro = new Perro();

    let listaRazas = ["caniche", "labrador", "pastor aleman", "pastor alemán", "otros"];
    let raza, nombre, identificador;

    alert("#Carga de un perro#");

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
    } while (identificador == "");

    // Para añadir más de dos vacunas:
    // while (continuarVacunas()) {
    //     newPerro.vacunas.push(newPerro.vacunar());
    // }

    newPerro.setRaza(raza);
    newPerro.setNombre(nombre);
    newPerro.setIdentificador(identificador);
    newPerro.vacunas.push(newPerro.vacunar());
    newPerro.vacunas.push(newPerro.vacunar());


    return newPerro;
}

function cargarGato(){

    let raza, nombre, identificador;

    alert("#Carga de un gato#");
    
    do {
        raza = prompt("Introduce la raza");
    } while (raza == "");

    do {
        nombre = prompt("Introduce el nombre");
    } while (nombre == "");

    do {
        identificador = prompt("Introduce el identificador");
    } while (!isNaN(identificador));

    return new Gato(raza, nombre, identificador);

}

// SCRIPT PRINCIPAL PARA CARGAR Y PARA MOSTRAR LOS RESULDATOS
let animales = [];
let perros = [];
let gatos = [];

 // Carga de 2 animales, 2 perros, 2 gatos
function cargar() {

    animales.push(cargarAnimal());
    animales.push(cargarAnimal());

    perros.push(cargarPerro());
    perros.push(cargarPerro());

    gatos.push(cargarGato());
    gatos.push(cargarGato());


}


function mostrar() {

    
    document.write("")


}