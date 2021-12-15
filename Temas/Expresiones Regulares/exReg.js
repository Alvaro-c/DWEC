
/* una expresión regular es un patrón de búsqueda. 
 Se utiliza para comprobar si en un string hay una determinada combinación de caracteres.
 Por ejemplo se utiliza para validar emails, etc...*/

let cadena = "El vídeo proporciona una manera eficaz para ayudarle a demostrar el punto. Cuando haga clic en Vídeo en línea, puede pegar el código para insertar del vídeo que desea agregar. También puede escribir una palabra clave para buscar en lúnea el vídeo que mejor se adapte a su documento, los alumnos lo entenderán"


let expre = new RegExp("vídeo"); // La expresión regular es vídeo, va a comprobar si está en la cadena

console.log(expre.test(cadena)); //método test para comprobar si la expresión regular está dentro del string. En este caso devuelve true
console.log(expre.exec(cadena)); // devuelve un array con ciertas caracterísicas de la ocurrencia. Por defecto si encuentra una ocurrencia deja de buscar
console.log("---------------------OCURRENCIAS y POSICIONES----------------------------------");
let expre1 = new RegExp("vídeo", "g"); // con el modificador global, con cada ejecución, avanza de posición

console.log(expre1.lastIndex); // devuelve en qué posición empezaría a buscar la siguiente cadena (empieza en 0)
console.log(expre1.exec(cadena)); // devuelve la primera ocurrencia

console.log(expre1.lastIndex); // encuentra la palabra en la posición 5, la palabra llega hasta la 8, seguiría en la 8, devuelve 8
console.log(expre1.exec(cadena)); // devuelve la siguiente ocurrencia
console.log(expre1.exec(cadena)); // devuelve la siguiente

console.log("------------------------- EXPRESIONES LITERALES--------------------------------");
// La expresión no cambia, es algo fijo. Por ejemplo, no podría cambiar por la acción del usuario
// Tiene los mismos métodos que creándola con new RegEx();
let expre2=/vídeo/;
console.log(expre2.test(cadena))

console.log("-------------------------MAS EJEMPLOS--------------------------------");

let cadena2 ="5 Los Alumnos 8 deberán volverr antes de las 19:00, los profesores no";

let regAlum = new RegExp("alumn.s"); // igual que /alumn.s/
regAlum = new RegExp("alumn[ao]s");  // compueba alumnas y después alumnos
regAlum = new RegExp("alumn[a-z]s"); // compueba un rango (en minusculas)
regAlum = new RegExp("alumn[1-40]s"); // compara entre el 1 y el 4, el 0 se la bufa
regAlum = new RegExp("alumn[aoe]s|profesor[ea]s"); // un or, uno u otro 
regAlum = /volver*/; // comodin de 0 o más coincidencias
regAlum = /volver?/; // Devuelve sólo hasta donde está la ?, las repeticiones no las devuelve
regAlum = /volver{3}/; // Si hay 3 r devolverá la palabra, si pones 2 o 1 también porque está contenida la palabra volver y volverr

console.log(regAlum.exec(cadena2));

console.log("-------------------------MAS EJEMPLOS 2--------------------------------");
regAlum = /alumn[oa]s|profesor[ea]s/g; //
let v = cadena2.match(regAlum); // match nos dice cuáles cumple, no sólo la primera, todas, tiene que tener la expresión regular g
regAlum = /alumn[oa]s|profesor[ea]s/gi; //con la i no diferencia entre mayusc y minusc

v = cadena2.match(regAlum);

console.log(v);

console.log("-------------------------MAS EJEMPLOS 3--------------------------------");

regAlum = /[1-9]/gi; // rango numerico
v = regAlum.exec(cadena2);
console.log(v);

regAlum = /[^1-9]/gi; // negación, no valen los caracteres de dentro de los corchetes a continuación de ^
v = regAlum.exec(cadena2);
console.log(v);

console.log("-------------------------NUEVA CADENA--------------------------------");

let cadena3 = "Código postal (24 600) tlf 987987987";

// barra d (/\d/) minuscula para hacer match a digitos

let regEx2= /\d/; 
console.log(regEx2.exec(cadena3));

regEx2= /\d\d \d\d\d/; // se cumple si hay dos numeros, un espacio en blanco, tres números
console.log(regEx2.exec(cadena3));

regEx2= /\d\d \d\d\d|\d\d\d\d\d\d\d\d\d/g; // se cumple si hay dos numeros, un espacio en blanco, tres números o si hay 9 cifras seguidos
console.log(regEx2.exec(cadena3));
console.log(regEx2.exec(cadena3));

console.log("-------------------------MÁS CON LA NUEVA CADENA--------------------------------");

regEx2= /\d\d \d\d\d|\d{9}/g; // lo mismo que lo de arriba, mejor planteado
console.log(regEx2.exec(cadena3));
console.log(regEx2.exec(cadena3));

regEx2= /\D/g; // Devuelve lo que no son caracteres numéricos
console.log(regEx2.exec(cadena3));
regEx2= /\D{15}/g; // Devuelve lo que no son caracteres numéricos
console.log(regEx2.exec(cadena3));

regEx2= /\w{5}/g; // Caracteres alfanuméricos excepto acentuados y espacios tampoco. Sí coge _
console.log(regEx2.exec(cadena3));

regEx2= /\W{2}/g; // Lo contrario al anterior
console.log(regEx2.exec(cadena3));

console.log("-------------------------otra cadena mas--------------------------------");

let cadena4 = "coche 456coche";
regEx2= /\bcoche/; // Comprueba si existe al comienzo (si la frase comienza así)
console.log(regEx2.exec(cadena4));

regEx2= /coche\b/; // Comprueba si existe al final (si la frase termina así)
console.log(regEx2.exec(cadena4));

regEx2= /\s/; // Caracteres "blancos" que no se ven, espacios, tabuladores, siguiente página, etc..
console.log(regEx2.exec(cadena4));
regEx2= /\S/; // Lo contrario, todo menos espacios en blanco
console.log(regEx2.exec(cadena4));

regEx2= /\t/; // Creo que es tabular, aunque en clase se ha dicho que es un intro (una nueva línea)
console.log(regEx2.exec(cadena4));

/*Para estas cadenas:
Manolo Gafotas 10.000.000A
Tlf: 986-21-34-89
(28 090) Villaabajo
Antoñito Ito  23.000.234C
988 45 67 12
45000 Sin dirección
Miguelito Peláez 60.335.123Z
987  23 55 65
(98720) Asturias
IBM B24.111.213
*/
regEx2 = /\d{3}\W*\d{2}\W\d{2}\W\d{2}/; // para los tlf
regEx2 = /([0-9]{3}\W*)([0-9]{2}\W){3}/; // para los tlf


regEx2 = /(\d{2}\W)(\d{3}\W)\d{3}\w/; // para los DNIs
regEx2 = /(\d{2}\W)((\d{3}).){2}/; // para los DNIs
regEx2 = /(\d*\W)((\d{3}).){2}/; // para los DNIs
regEx2 = /(\d*\W)(\d{3}.){2}/; // para los DNIs
regEx2 = /\w(\d*\W)(\d{3}.*){2}/ // Para DNIs y CIF

// para IPs: 
regEx2 = /((([0-1]\d{2})|(([2][5][0-5])|([2][0-4][0-9])))\W*){4}\s/;