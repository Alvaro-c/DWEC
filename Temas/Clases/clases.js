class Humano {
    // una clase es un molde con el que se instancian objetos

    // constructor
    constructor(nombre, sexo, peso, altura, fnacimiento) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fnacimiento = fnacimiento;
    }

    toString() {

        return `Nombre: ${this.nombre}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Fecha de Nacimiento: ${this.fnacimiento}`;
    }

    static saludo() {
        // el método de tipo static se puede llamar desde cualquier parte del programa
        // Se puede utilizar el método sin usar un objeto para llamarlo. Para llamarlo, se utiliza la clase: Humano.saludo()
        console.log("Un saludo");
    }

}

// otra manera de crear una clase: 

// const Cliente2 = class {

//     construnctor(nombre, saldo) {
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     static saludo() {
//         alert("Una alerta");
//     }
// }

// Instancia de un objeto


const hum1 = new Humano("Pepe", "Masculino", 3, 0.7, "02/03/1999");

console.log(hum1.toString());
// si el metodo es estático no puedo llamarlo con un objeto, tengo que llamarlo con la clase
Humano.saludo();
//console.log(hum1.saludo()); daría error

// HERENCIA

class Estudiante extends Humano {
    // La clase Empleado copia todas las características de Humano y le añade las propias
    #estudios; // propiedad privada, se declaran antes del constructor

    constructor(nombre, sexo, peso, altura, fnacimiento, estudios, curso) {
        // utilia el constructor de la superclase (con el parámetro super, se utiliza para utilizar el constructor de la clase de la que está heredando)    
        super(nombre, sexo, peso, altura, fnacimiento);
        this.#estudios = estudios;
        this.curso = curso;
    }

    toString() {

        return `Nombre: ${this.nombre}, Estudios: ${this.getEstudios()}, Curso: ${this.curso}`;
    }

    setEstudios(estudios) {
        this.#estudios = estudios;
    }

    getEstudios(){
        return this.#estudios;
    }

}

let nuevoEstudiante = new Estudiante ("Antonio", "Masculino", 4, 0.9, "10/01/2000", "FP DAW", "Primero");

console.log(nuevoEstudiante.toString());

// Public & private
// Getters y setters: para modificar propiedades con métodos de la propia clase que sean privados
// Para hacer que una propiedad sea privada, se le pone un # delante de la propiedad
// console.log(nuevoEstudiante.#estudios); Esto daría un error y el programa no ejecuta

console.log(nuevoEstudiante.getEstudios());
nuevoEstudiante.setEstudios("infantil");
console.log(nuevoEstudiante.getEstudios());
console.log(nuevoEstudiante.toString());

