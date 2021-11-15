// USO DE STRINGS EN JAVASCRIPT
// Los strings o cadenas de texto representan un Texto que se puede asignar a una variable
// En JavaScript las variables de tipo texto son realmente objetos de la clase String

//Creación de cadenas de texto primitivas.
const producto="Memoria RAM";
const articulo= String("Placa base");
console.log(typeof producto); //Comprobamos que es un objeto de tipo String
console.log(typeof articulo);
// Con el operador new
const empleado=new String("Pepito Pérez"); // Es menos común, se muestra como un array de caracteres
console.log(typeof empleado);


console.log(producto);
console.log(articulo);
console.log(empleado);

// MÉTODOS Y PROPIEDADES DE USO HABITUAL EN LOS STRINGS.
//.length : mediante esta propiedad obtenemos el número de caracteres del String.
console.log("Longitud:",producto.length);
//indexOf(valor [,desde]) -> devuelve la posición de la primera ocurrencia de valor o -1; las posiciones comienzan en 0
console.log(empleado.indexOf("P"));
console.log(empleado.indexOf("P",4));
console.log(empleado.indexOf("pi"));
console.log(empleado.indexOf("pé")); //Devuelve -1 ya que no se encuentra (minúsculas)
//lastIndexOf(valor [,desde]) -> Devuelve la posición de la última ocurrencia de valor, busca desde la derecha en lugar de desde la izquierda. El segundo parámetro indica el número de caracteres desde donde se busca.
console.log("lastIndexOf",empleado.lastIndexOf("P"));
console.log("lastIndexOf",empleado.lastIndexOf("P",5)); // desde la posición 5 a la 0
//includes(valor [,desde]) -> devuelve true o false dependiendo de si encuentra valor en el string
console.log(producto.includes("RAM"));
//charAt(posición) ->Devuelve el carácter indicado en la posición, si no existe la posición no devuelve nada
console.log("charAt:",producto.charAt(3));
console.log(producto.charAt(-1)); //No devuelve nada
//charCodeAt(posición) ->Devuelve el “UNICODE” del carácter indicado por posición.
console.log(producto.charCodeAt(3));
//String.fromCharCode(valor) Convierte valores Unicode a caracteres; es un método estático
console.log(String.fromCharCode(111));
//toLowerCase() ->Convierte a minúsculas el valor de cadena.
console.log(producto.toLowerCase());
//toUperCase() -> Convierte a mayúsculas el valor de cadena.
console.log(producto.toUpperCase());
//concat(cadena2) -> combina dos o más cadenas de texto y devuelve una cadena de texto nueva.
console.log(empleado.concat(" se ha comprado ").concat(producto));
//, esto también se podría hacer con el operador “+”.
console.log(empleado+" se ha comprado "+producto);
// con template literals ` texto ${variable} texto `
console.log(`${empleado}, se ha comprado ${producto}`);
//cadena.trimStart() -> Elimina espacios en blanco al inicio de cadena.
let mensaje="    Esto es    un mensaje   ";
console.log(mensaje);

console.log("Tamaño de mensaje:"+mensaje.length);
mensaje=mensaje.trimStart(); 
console.log(mensaje);
console.log("Tamaño de mensaje:"+mensaje.length);
 //cadena.trimEnd() -> Elimina espacios en blanco al final de cadena.
 mensaje=mensaje.trimEnd();
 console.log(mensaje);
 console.log("Tamaño de mensaje:"+mensaje.length);

let mensaje2="   Ahora vamos a por el segundo mensaje     ";
// cadena.trim() -> Elimina tanto al comienzo como al final
console.log(mensaje2.trim());
//cadena.search(valor) -> Busca un valor (subcadena) en el interior de una cadena; si se encuentra
// devolverá la posición del primer carácter de la subcadena en el interior de la cadena, -1 en caso contrario.
console.log(mensaje2.search("segundo"));
//cadena.replace(valor_original, valor_nuevo) -> Busca una cadena o un valor y devuelve una cadena reemplazando
// la primera ocurrencia del valor buscado por otro.
let mensaje3="Esto es un mensaje en la variable mensaje3";
console.log(mensaje3.replace("mensaje","texto"));
//cadena.slice(posición_inicio, posición_fin) ->Extrae una parte de la cadena
console.log(mensaje3.slice(1,3));
console.log(mensaje3.slice(3,1)); //no devuelve nada
console.log(mensaje3.slice(5)); //extrae hasta el final
//cadena.substring(posición_inicio, posición_fin) ->Extrae una parte de la cadena pero es más "inteligente"
console.log(mensaje3.substring(1,3));
console.log(mensaje3.substring(3,1)); //Sí funciona

//cadena.repeat(x) --> Repite  x veces el valor de cadena. Si indicamos un número decimal redondea
console.log("Repitiendo!!! ".repeat(3));

//cadena.split(valor_por_cual_dividir) --> Divide la cadena según el valor indicado para división.
const aficciones="nadar, correr, jugar";
misaficciones=aficciones.split(", ");
console.log(misaficciones);

// Pasar un String a un array
// Mediante Spread Operator
let micadena="Esto es una cadena de texto";
let encadena1=[...micadena];
console.log(encadena1);
// Mediante Array.from(). El método Array.from() retorna un Array a partir de la cadena de texto que se le pasa por parámetro.
let encadena2=Array.from(micadena); 
console.log(encadena2);
// Mediante el método split
let encadena3=micadena.split("");
console.log(encadena3);

//Invertir un array
console.log(encadena3.reverse());

// Ordenar un array en orden lexicográfico - Cuidado con los números -
console.log(encadena2.sort());




//----------------------------------- OBJETO NUMBER -----------------------
console.log("El número más grande es:",Number.MAX_VALUE);
console.log("El número más pequeño es:",Number.MIN_VALUE);

console.log("---------------------------------------------- FECHAS ---------------------");
//--------------------------------- OBJETO DATE -----------------------------
//El objeto Date permite trabajar con fechas y horas.
console.log("Date():",Date()); //Muestra fecha y hora actuales. MES DÍA AÑO formato GMT +01 (GMT es una zona horaria y UTC es un estándar horario)

//Podemos crear un objeto con la fecha y la hora.
var f=new Date(); //Creamos un objeto del tipo Date con la fecha y la hora actual del sistema.
console.log("Con new Date():",f," es un:",typeof(f));

//Con el método now obtenemos los milisegundos desde la fecha actual al 1/1/1970
console.log("Date.now()", Date.now()); //Milisegundos desde el 1/1/1970

// También podemos crear una fecha utilizando milisegundos.
var f1=new Date(24*3600*1000); //Creamos una fecha en milisegundos (timestamp), corresponde con el 2/1/1970 a las 01:00:00 GMT+0100
console.log("24*3600*1000:",f1); // Si multiplicamos por 23 nos daría el 2/1/1979 a las 00:00:00

//También es posible pasar la fecha en forma de String
var f3=new Date("03/01/2017"); //Equivale al 1/3/2017
console.log("f3 vale:",f3);

//Podemos pasar también cada componente pormenorizadamente
//new Date(año, mes, día, horas, minutos, segundos, ms) Enero es el mes 0
let f4 = new Date(2021, 10, 8, 2, 3, 4, 567);
console.log("Pormenorizada:",f4); 

//MÉTODOS PARA MOSTRAR LOS DATOS USANDO FORMATO LOCAL

console.log("toLocaleString():",new Date().toLocaleString()); //Fecha en formato día mes y año y hora
console.log("toLocaleDateString()",new Date().toLocaleDateString()); //Fecha en formato día mes y año
console.log("toLocaleTimeString()",new Date().toLocaleTimeString()); //Hora actual


// MÁS MÉTODOS
console.log("----------------------------------------------------------------------");

// fecha.getFullYear(); // Devuelve el año
console.log("Año:",f4.getFullYear()); 

//fecha.getMonth(); // Devuelve el mes, 0 para Enero, 11 para Diciembre.
console.log("Mes:",f4.getMonth());

//fecha.getDate(); //Devuelve únicamente el día del mes un úmero entre 1 y 31
console.log("Día:",f4.getDate());


//getDay() Devuelve el día de la semana, partiendo de 0 (Domingo) hasta 6 (Sábado).
// El primer día siempre es el Domingo.
console.log("Día de la semana:",f.getDay());

console.log("-----------------------------HORAS---------------------");
//HORAS.
//fecha.getHours(), fecha.getMinutes(), fecha.getSeconds(), fecha.getMilliseconds();
//Devuelven la hora, los minutos, los segundos y los milisegundos (entre 0 y 9999).
console.log(f.getHours(),f.getMinutes(),f.getSeconds(),f.getMilliseconds());

//objeto.getTime() --> Devuelve los milisegundos entre el 1/1/1970 y la fecha del objeto, se puede usar para copiar fechas
var d1=new Date("01/02/1970 00:00:00");
console.log("d1:",d1);  

console.log("Milisegundos entre el 2/1/1970 y el 1/1/1970 ,getTime:",d1.getTime()); 

// MÉTODOS PARA ASIGNAR FECHAS
/*  OTROS MÉTODOS
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)
*/

fecha=new Date("01/01/2020");
console.log("fecha vale:",fecha);
// Cambiamos el año
fecha.setFullYear(2021);
console.log("fecha vale:",fecha);
//Cambiamos el mes
fecha.setMonth(10);
console.log("fecha vale:",fecha);
//Cambiamos el día
fecha.setDate(5);
console.log("fecha vale:",fecha);

fecha.setFullYear(2021,1,29); //Intengamos asignar la fecha 29 de febrero a un año no bisiesto.
console.log("fecha vale:",fecha); //Vemos como ha asignado el 1 de Marzo del 2021.

//RESTAR DOS FECHAS
var dia1=new Date("10/20/2021");
var dia2=new Date("10/23/2021");
var dias=dia2.getTime()-dia1.getTime();
console.log("23/10/21 - 20/10/21:",Math.floor(dias/86400000)); //milisegundos a días.



// INVESTIGAR LA LIBRERÍA Moment.js
