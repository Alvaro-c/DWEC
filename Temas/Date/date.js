// Objeto date: para trabajar con fechas y horas
// Similar a un timestamp

console.log("Date(): ", Date()); // Devuelve la fecha: Wed Nov 10 2021 19:19:54 GMT+0100 (hora estándar de Europa central)
var d = new Date();
console.log(d); // Almacena los mismos datos que lo anterior
console.log("con new Date(): ", d, "es un: ", typeof d); // será un tipo objeto
// Date empieza el 1/1/1970 y a partir de ahí, todo se calcula en milisegundos

console.log(Date.now()); // número de milisegundos desde que se empezó a contar
// Si se le pasa un número de segundos a Date, nos dará una fecha
let f1  = new Date(24*3600*1000); 
console.log(f1);

// Se puede crear un objeto Date con un string, MM/DD/AAAA o en formato SQL
let f2 = new Date("08/30/1992");
console.log(f2); 
let f3 = new Date("1992-08-30");
console.log(f3); 

// También se puede crear pasando año, mes, dia, hora, minutos, segundos, ms)
let f4 = new Date(2021, 0, 8, 2, 3, 4, 567); //Meses: del 0 al 11
console.log(f4);

// Métodos para mostrar los datos en formato local
console.log(new Date().toLocaleString()); // Formato día, mes, año, hora, mins, sec
console.log(new Date().toLocaleDateString()); // Formato día, mes, año
console.log(new Date().toLocaleTimeString()); // Formato hora

// mostrar el año
console.log(f4.getFullYear());
console.log(f4.getMonth() + 1);
console.log(f4.getDate()); // día del mes (1-31)
console.log(f4.getDay()); // dia de la semana (domingo 0, sábado 6)

// sacar horas, mins, secs...
console.log(f4.getHours(), f4.getMinutes(), f4.getSeconds(), f4.getMilliseconds());

// getTime(): numero de milisegundos entre 1/1/1970 y la fecha que llama al método
let f5 = new Date("01/01/1970");
console.log(f5.getTime());

// SETTERS
// establecer cambios en una fecha
f4.setFullYear(2021)
console.log(f4);
f4.setDate(5); // set del día del mes (no confundir con Day, que establece el dia de la semana)


let fechaEj1 = new  Date("2021-02-29");
console.log(fechaEj1);

// numero de dias entre dos fechas
let fechaEj2a = new  Date("2021-10-20");
let fechaEj2b = new  Date("2021-11-23");
let diferencia = (fechaEj2b.getTime() - fechaEj2a.getTime()) / (24*3600*1000);

console.log(diferencia); 








