
let num = 0; 




let nombre = "Pepe";
let apellido = "Perez";
let edad = 18;


console.log(nombre.toUpperCase());
console.log(apellido);
console.log(edad);

const porcentaje = 0.21;

// ** => potencia; % => resto

let hola = "1";


console.log(edad + hola);

console.log(edad++);
//post incremento, primero muestra la edad y luego lo incrementa. En la consola saldrá primero el valor original
console.log(edad);

console.log(++edad);
// de esta manera primero incrementa y luego muestra la variable. Con el -- funciona igual

console.log(edad +=5 );

console.log(1 == "1"); //true

console.log(1 === "1"); //false

for (let i = 1; i < 6; i++) console.log(i);

for (let i = 0; i < 10; i++){
    
    num += i;
    //console.log(num);
    
}

let i = 1;

console.log("Bucle while");
while (i <= 5){

    console.log(i)
    i++;

}

do {

    console.log("test");

} while (false);

let input = Number.parseInt(prompt("introduce un numero", 0)); // el 0 es si se deja vacío
 

if(input % 2 == 0) {

    console.log("entrando en el if");
} else {

    console.log("Entrando en el else");
}

console.log(typeof input);





