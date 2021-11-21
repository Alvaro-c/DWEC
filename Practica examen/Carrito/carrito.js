
// Array de carrito
let carrito = [];

// Constructor de objetos para añadir al carrito
function Producto(referencia, nombre, precio, stock, disponible) {

    this.referencia = referencia;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponible = disponible;

}

// funcion pedir nuevo producto
function nuevoProducto() {

    let referencia = prompt("Introduce la referencia");

    if (!buscarReferencia(referencia)) {

        let nombre = prompt("Introduce el nombre del producto");
        let precio = parseFloat(prompt("Introduce el precio del producto"));
        let stock = parseInt(prompt("Introduce el stock del objeto"));
        let disponible;
        do {
            disponible = prompt("Está el producto disponible? Y/N");
            disponible = disponible.toUpperCase();

        } while (disponible != "Y" && disponible != "N")

        disponible == "Y" ? disponible = true : disponible = false;

        let nuevoProducto = new Producto(referencia, nombre, precio, stock, disponible);
        return nuevoProducto;


    } else {

        alert("Esa referencia está en uso");
    }

}

function buscarReferencia(referencia) {

    let encontrado = false;

    for (let i = 0; i < carrito.length; i++) {

        if (referencia == carrito[i].referencia) {
            encontrado = true;
        }

    }

    return encontrado;

}

// Funcion de inicio de carrito, se piden objetos para añadir
function inicioCarrito() {

    let continuar = "";

    do {

        // pidiendo objetos

        let producto = nuevoProducto();
        if (typeof producto != 'undefined') {

            carrito.push(producto);
            console.log(carrito);

        }

        do {
            continuar = prompt("Desea Continuar? (Y/N)");
            continuar = continuar.toUpperCase();

        } while (continuar != "Y" && continuar != "N")

        continuar == "Y" ? continuar = true : continuar = false;


    } while (continuar);


}

function mostrarTabla(array) {

    document.write("<table>")
    document.write("<tr> <td>Referencia</td><td>Nombre</td><td>Precio</td><td>Stock</td><td>Disponible</td></tr>")

    for (let i = 0; i < array.length; i++) {

        document.write(`<tr><td>${array[i].referencia}<td>${array[i].nombre}<td>${array[i].precio}<td>${array[i].stock}<td>${array[i].disponible}</td></tr>`);


    }

    document.write("</table>");

}


function buscarArticulo() {

    let continuar;


    do {

        do {
            continuar = prompt("¿Quieres buscar un articulo? (Y/N)");
            continuar = continuar.toUpperCase();

        } while (continuar != "Y" && continuar != "N")
        continuar == "Y" ? continuar = true : continuar = false;

        if (continuar) {

            let referencia = prompt("Introduce la referencia");
            let encontrado = false;
            for (let i = 0; i < carrito.length; i++) {

                if (carrito[i].referencia == referencia) {

                    encontrado = true;
                    alert(`
                            Referencia: ${carrito[i].referencia}
                            Nombre: ${carrito[i].nombre}
                            Precio: ${carrito[i].precio}
                            Stock: ${carrito[i].stock}
                            Disponible: ${carrito[i].disponible}`)
                }

            }

            if (!encontrado) {
                alert("Producto no encontrado");
            }
        }

    } while (continuar)


}

function eliminarArticulo() {

    let continuar;

    do {

        do {
            continuar = prompt("¿Quieres eliminar un articulo? (Y/N)");
            continuar = continuar.toUpperCase();

        } while (continuar != "Y" && continuar != "N")
        continuar == "Y" ? continuar = true : continuar = false;

        if (continuar) {


            let referencia = prompt("Introduce la referencia");
            let encontrado = false;
            for (let i = 0; i < carrito.length; i++) {

                if (carrito[i].referencia == referencia) {

                    carrito.splice(i, 1);
                    encontrado = true;
                }

            }

            if (!encontrado) {
                alert("Producto no encontrado");
            }
        }
    } while (continuar);

}

