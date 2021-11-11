// Array de productos
// Añadir carritos, mirar si ya está el objeto en el carrito (por la refencia), si está, no se puede meter en el carrito
// Función buscar, función eliminar, 


// Array del carrito y bool de continuar
let carrito = [];
let continuar = false;

/*
//Constructor del objeto
function objeto(referencia, nombre, precio, stock) {

    this.referencia = referencia;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponible = true;

}

//función para añadir un nuevo objeto
function nuevoObjeto() {

    let nuevoObjeto = new objeto();
    nuevoObjeto.referencia =  prompt("Introduce la referencia: ");
    nuevoObjeto.nombre =  prompt("Introduce el nombre: ");
    nuevoObjeto.precio =  prompt("Introduce el precio: ");
    nuevoObjeto.stock = prompt("Introduce el stock");

    return nuevoObjeto;

} 
*/

// funcion que crea objetos
function nuevoObjeto(carrito) {


    let referencia1 = prompt("Introduce la referencia: ");

    for (let i = 0; i < carrito.length; i++) {

        if (referencia1 == carrito[i].referencia) {


            alert(`Esa referencia ya está en uso`);
            return null;
        }
    }


    let nombre1 = prompt("Introduce el nombre: ");
    let precio1 = prompt("Introduce el precio: ");
    let stock1 = prompt("Introduce el stock");

    const nuevoObjeto = {

        referencia: referencia1,
        nombre: nombre1,
        precio: precio1,
        stock: stock1,
        disponible: true,

    }

    return nuevoObjeto;

}

function buscar(referencia, carrito) {

    encontrado = false;

    for (let i = 0; i < carrito.length; i++) {

        if (referencia == carrito[i].referencia) {

            alert(`
            Referencia: ${carrito[i].referencia}; 
            Nombre: ${carrito[i].nombre}; 
            Precio: ${carrito[i].precio}; 
            Stock: ${carrito[i].nombre}`);

            encontrado = true;

            return carrito[i];

        } else if (!encontrado) {

            alert(`Articulo no encontrado`);
        }
    }
}

function eliminar(referencia, carrito) {


    for (let i = 0; i < carrito.length; i++) {

        if (referencia == carrito[i].referencia) {

            carrito.splice(i, 1);

        }
    }


}


do {

    let option = prompt("Desea añadir un objeto al carrito? S/N");
    option = option.toLocaleLowerCase();

    if (option == "s") {

        continuar = true;

        let newObjeto = null;
        
        newObjeto = nuevoObjeto(carrito);

        if (newObjeto != null) {

            carrito.push(newObjeto);

        }

        // for (let i = 0; i < carrito.length; i++) {

        //     document.getElementById("carrito").innerHTML = 
        //     `Referencia: ${carrito[i].referencia}
        //     Nombre: ${carrito[i].nombre}
        //     Precio: ${carrito[i].precio}
        //     Stock: ${carrito[i].nombre}`;
        // }


    } else if (option == "n") {

        continuar = false;

    } else {

        option = prompt("Elija una opción correcta. \n Desea añadir un objeto al carrito? S/N");
        option = option.toLocaleLowerCase();

        if (option == "n") {

            continuar = false;
            console.log("Fin del programa");
        }

    }

    console.log(carrito);


} while (continuar == true);




let option;


do {

    console.log(carrito);
    option = Number.parseInt(prompt("Elije una opción: \n 1 - Buscar en el carrito \n 2 - Borrar un objeto del carrito \n 0 - Salir del programa"));

    switch (option) {

        case 1:

            referencia = prompt("Introduce la referencia del objeto:");

            console.log(buscar(referencia, carrito));

            break;

        case 2:

            referencia = prompt("Introduce la referencia del objeto:");

            eliminar(referencia, carrito);

            break;

        case 0:



            console.log("Fin del programa");

            break;

        default:

            option = Number.parseInt(prompt("Elije una opción: \n 1 - Buscar en el carrito \n 2 - Borrar un objeto del carrito \n 0 - Salir del programa"));

            break;



    }


} while (option != 0);
