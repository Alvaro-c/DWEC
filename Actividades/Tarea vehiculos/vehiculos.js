

function vehiculo(marca, modelo, combustible, motor, precioBase) {

    this.marca = marca;
    this.modelo = modelo;
    this.combustible = combustible;
    this.motor = motor;
    this.precioBase = precioBase;
    this.impuesto = calcularImpuesto(motor.cC) * precioBase;
    this.precioFinal = precioBase + (calcularImpuesto(motor.cC) * precioBase);
}

function motor(potencia, cC, bateria) {

    this.potencia = potencia;
    this.cC = cC;
    this.bateria = bateria;
}


function calcularImpuesto(cC) {

    if (cC <= 1999) {
        return 0.05;
    } else if (cC >= 2000 && cC < 3000) {
        return 0.08;
    } else if (cC >= 3000) {
        return 0.1;
    }

}

function crearMotor() {
    let potencia;
    do {
        potencia = prompt("Introduce la potencia");
    } while (isNaN(potencia));

    potencia = parseInt(potencia);

    let cC;
    do {
        cC = prompt("Introduce los CC");
    } while (isNaN(cC));

    cC = parseInt(cC);

    let bateria;
    do {
        bateria = prompt("Introduce si tiene batería (Y/N) ");
        bateria = bateria.toLowerCase();
    } while (bateria != "y" && bateria != "n");

    bateria == "y" ? bateria = true : bateria = false;

    let nuevoMotor = new motor(potencia, cC, bateria);

    return nuevoMotor;
}

function crearVehiculo() {

    let marca = prompt("Introduce una marca");
    let modelo = prompt("Introduce un modelo");
    let combustible;
    do {
        combustible = prompt(`Introduce un tipo de combustible (Gasolina, diesel o hibrido)`);
        combustible = combustible.toLowerCase();
    } while (combustible != "gasolina" && combustible != "diesel" && combustible != "hibrido");

    let motor = crearMotor();
    let precio
    do {
        precio = prompt("Introduce un precio");

    } while (isNaN(precio));
    precio = parseFloat(precio);

    let nuevoVehiculo = new vehiculo(marca, modelo, combustible, motor, precio);

    return nuevoVehiculo;

}




function mostrarVehiculos(vehiculos) {

    document.write("<table>");
    document.write("<tr><td>Marca</td><td>Modelo</td><td>Combustible</td><td>Potencia (CV) </td><td>CC</td><td>¿Tiene batería?</td><td>Precio base </td><td>Impuesto de matriculación</td><td>Precio Final</td></tr>");

    for (let i = 0; i < vehiculos.length; i++) {

        document.write(`<tr><td>${vehiculos[i].marca}</td><td>${vehiculos[i].modelo}</td><td>${vehiculos[i].combustible}</td><td>${vehiculos[i].motor.potencia}</td><td>${vehiculos[i].motor.cC}</td><td>${vehiculos[i].motor.bateria}</td><td>${vehiculos[i].precioBase}</td><td>${vehiculos[i].impuesto}</td><td>${vehiculos[i].precioFinal}</td></tr>`);

    }

    document.write("</table>");

}


