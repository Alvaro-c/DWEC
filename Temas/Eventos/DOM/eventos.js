/* Los eventos dependen del DOM y se gestionan con un manejador
Dependiendo de los eventos tendrá sentido o no algunos eventos. Por ejemplo un objeto tipo teclado en una imagen
Los eventos de ratón serán aplicables a casi cualquier elemento

Cuando se genera un evento se genera un objeto tivo Event con información sobre ese evento. 
Qué tecla se ha pulsado, en qué coordenadas estaba el ratón, etc...

Par poder utilizar un evento, primero se tiene que registrar (declarar)
Se puede hacer en línea, en un atributo del HTML.

    <h1><a href="https://www.educa.jcyl.es" onClick="alert('aviso, redirección'); return false;">EDUCACYL</a>
    </h1>

Se puede hace también directamente en JS: 

elemento.evento = lo que tiene que hacer

            document.getElementById("enlace").onclick = alertar;

            function alertar() {
                alert("Ahora si que vamos");
            }


W3C Way: 
elemento.addEventListener("evento", funcion, true|false); El último parámetro es opcional
De esta manera se puede disparar más de una función con el mismo evento

            document.getElementById("enlace2").addEventListener("click", alertar2, false);

            function alertar2() {
                alert("alert del event listener alertar 2");
            }


            document.getElementById("enlace2").addEventListener("click", alertar3, false);

            function alertar3() {
                alert("alert del event listener alertar 3");
            }


Orden de lanzamiento de eventos cuando los eventos se superponen: 


Eventos más utilizados
keydown: presionar la tecla
Keypress: mientras la tecla está pulsada
Keyup: soltar tecla





*/ 