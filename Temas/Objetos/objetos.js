"use strict";
/* 

Un objeto se define por una serie de propiedades y de comportamientos.
Se accede a las propiedades con el nombre del objeto y un punto


*/

// Definición de un objeto



const persona1 = {

    nombre: "Pepe",
    edad: 20,

}

console.log(persona1.nombre);

// En tiempo de ejecución se le pueden añadir propiedades: 
persona1.apellidos = "González González";

console.log(persona1);
console.log(persona1.apellidos);

// Se le pueden quitar propiedades: 
delete persona1.apellidos;
console.log(persona1);

// También se pueden crear objetos con subobjetos
const persona2 = {

    nombre: "Pepe",
    edad: 20,
    trabajo: {

        profesion: "programador",
        antiguedad: 200,
    }
}

console.log(persona2);
console.log(persona2.trabajo.profesion);

persona1.nombre = "Pepa";
console.log(persona1.nombre);

// con el uso estricto se pueden bloquear cosas: "use strict"; no afecta a objetos
// const num = 2; 
// num = 3; 

// Para congelar objetos, se puede hacer de esta manera: (comentado porque da error)
Object.freeze(persona1);
// persona1.nombre="No se puede cambiar, está congelado";
console.log(persona1.nombre);
console.log(Object.isFrozen(persona1)); // para comprobar si un objeto está controlado


// Destructuring los alores de un objeto. Sacar sus propiedades y almacenarlos en variables.
console.log("Destructuring");

let { antiguedad } = persona2.trabajo; // saca del subobjeto trabajo el parámetro antiguedad y lo mete en el parámetro llamado antiguedad 
// Genera nombres con el mismo nombre que la propiedad del objeto.
console.log(antiguedad);
console.log(persona2);

let { trabajo } = persona2;
console.log(trabajo); // el objeto trabajo ahora está en la variable trabajo y es independiente a persona2


// definición de otro objeto

const animal = {
    tipo: "perro",
    raza: "caniche",
    edad: 12,
}

// Manualmente (4 líneas):
let v1 = animal.tipo;
let v2 = animal.raza;
let v3 = animal.edad;

console.log(v1, v2, v3);

// Destructuring (2 líneas): 
let { tipo, raza, edad } = animal;
console.log(tipo, raza, edad);


// FUNCIONES EN OBJETOS

const coche = {

    marca: "BMW",
    modelo: "M3",
    color: "azul",
    bastidor: "B324131311U179317",
    matricula: " ",
    matricular: function (m) {

        this.matricula = m;
    },
    mostrar: function () {

        console.log(`\n
                    Marca: ${this.marca},\n 
                    Modelo: ${this.modelo},\n
                    Color: ${this.color}, \n
                    Bastidor: ${this.bastidor}, \n
                    Matrícula: ${this.matricula} `);
    }
}

coche.mostrar();
coche.matricular("SG-8329-I");
coche.mostrar();


// Unir objetos

const union = { ...persona2, ...coche };

console.log(union);

// Otra manera de construir objetos: con un CONSTRUCTOR

// Esto hará de molde
function vehiculo(marca, modelo) {

    this.marca = marca;
    this.modelo = modelo;
    this.disponibilidad = true;

}

// Para instanciar: 

const vehiculo1 = new vehiculo("SEAT", "Ibiza");
console.log(vehiculo1);

const vehiculo2 = new vehiculo("SEAT", "León");
console.log(vehiculo2);

// METODOS
// Keys: me da las propiedades del objeto. No el valor de las propiedades, sino las propiedades en si. 

console.log(Object.keys(vehiculo1));

console.log(Object.entries(vehiculo1));