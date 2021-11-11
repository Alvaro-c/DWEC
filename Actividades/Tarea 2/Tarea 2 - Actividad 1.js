// Actividad 1


function getTemperaturas() {
    for (let i = 0; i < 12; i++) {

        let nuevaTemperatura = parseInt(prompt(`Introduce la temperatura del mes ${i + 1}`));

        while ((nuevaTemperatura < -10 || nuevaTemperatura > 40)) {

            alert("Error, introduce un valor válido (entre -10 y 40)");
            nuevaTemperatura = parseInt(prompt(`Introduce la temperatura del mes ${i + 1}`));

        }

        while (i > 0 && (temperaturas[i - 1] > nuevaTemperatura + 8 || temperaturas[i - 1] < nuevaTemperatura - 8)) {

            alert("Error, introduce un valor válido (no puede ser con una diferencia de más o menos de 8 grados respecto al mes anterior)");
            nuevaTemperatura = parseInt(prompt(`Introduce la temperatura del mes ${i + 1}`));

        }
        temperaturas[i] = nuevaTemperatura;

    }

    return temperaturas;

}


function getLluvias() {

    for (let i = 0; i < 12; i++) {

        let nuevaLluvia = parseInt(prompt(`Introduce las precipitaciones del mes ${i + 1}`));


        while ((nuevaLluvia < 0 || nuevaLluvia > 50)) {

            alert("Error, introduce un valor válido (0 y 50)");
            nuevaLluvia = parseInt(prompt(`Introduce las precipitaciones del mes ${i + 1}`));

        }

        lluvias[i] = nuevaLluvia;

    }

    return lluvias;
}

function printGraph(array, titulo) {

    console.log(titulo);

    let meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

    for (let i = 0; i < array.length; i++) {

        let iguales = " | ";

        for (let j = 0; j < array[i]; j++){

            iguales = iguales + "=";

        }

        console.log(`${meses[i]} ${iguales} ${array[i]}`);
    }


}


let temperaturas = [];
let lluvias = [];

temperaturas = getTemperaturas();
lluvias = getLluvias();

printGraph(temperaturas, "TEMPERATURAS");
console.log();
printGraph(lluvias, "LLUVIAS");


