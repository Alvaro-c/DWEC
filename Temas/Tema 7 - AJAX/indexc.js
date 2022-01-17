function cargada()
{
	// Creamos un objeto XMLHttpRequest().
	const miajax=new XMLHttpRequest();
	console.log("Estado de la conexión1:"+miajax.readyState);
	console.log("Comenzamos la petición AJAX");
	console.log("Abrimos la url, false=SINCRONA"); 
	miajax.open('GET', 'fecha.php', false);  //Abrimos la conexión, false indica petición SINCRONA
	console.log("Estado de la conexión2:"+miajax.readyState);
		// Hacemos la petición al servidor. Como parámetro del método send:
		// null -> cuando usamos GET.
		// cadena con los datos -> cuando usamos POST
		miajax.send(null);	
	console.log("Estado de la conexión4:"+miajax.readyState); //Conexión ya terminada
	//Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
	document.getElementById("resultados").textContent=miajax.responseText;
	console.log("Terminó la petición AJAX");
}