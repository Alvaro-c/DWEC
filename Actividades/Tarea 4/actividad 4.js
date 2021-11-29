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

class Perro extends Animal{

    #raza;
    #nombre;
    #vacunas;
    #identificador;

    constructor(raza, nombre, vacunas, identificador) {

        super(peso, color)
        this.#raza = raza;
        this.#nombre = nombre;
        this.#vacunas = vacunas;
        this.#identificador = identificador;

    }


    getRaza() {
        return this.#raza;
    }

    getNombre(){
        return this.#nombre; 
    }

    getVacunas(){
        return this.#vacunas;
    }

    getIdentificador(){
        return this.#identificador;
    }

    setRaza(raza){
        this.#raza = raza;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }
    
    setVacunas(vacuna){
        this.#vacunas = vacunas;
    }

    setIdentificador(identificador){
        this.#identificador = identificador;
    }

    hablar(){
        alert("Guau !");
    }

    vacunar(){
        
        let fechaAdministracion = prompt("Cuál es la fecha de administracion: ");
        let nombre = prompt("Cuál es el nombre de la vacuna");
        let numDosis = prompt("Cuántas dosis tiene puestas");
        
        // TODO
        this.#vacunas = vacunas.push(new Vacuna(fechaAdministracion, nombre, numDosis));
    }

    mostrarVacunas(){
        this.#vacunas.toString();
    }

    buscarVacuna(){
        //TODO
    }

}


class Gato extends Animal{

    #raza; 
    #nombre; 
    #identificador;


    constructor(raza, nombre, identificador) {

        super(peso, color);
        this.#raza = raza; 
        this.#nomre = nomre;
        this.#identificador = identificador;

    }

    getRaza() {
        return this.#raza;
    }

    getNombre(){
        return this.#nombre; 
    }

    getIdentificador(){
        return this.#identificador;
    }

    setRaza(raza){
        this.#raza = raza;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    setIdentificador(identificador){
        this.#identificador = identificador;
    }
    
    hablar(){
        alert("GuMIAU !");
    }



}