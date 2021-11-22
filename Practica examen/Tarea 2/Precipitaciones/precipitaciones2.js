
let temps = [];
let precip = [];


function temperaturas() {


    for (let i = 0; i < 12; i++) {

        let newTemp
        if (i == 0) {

            do {

                newTemp = prompt(`Introduce la temperatura del mes ${i + 1} 
                Debe ser una temperatura entre -10 y 40 grados`);


            } while (isNaN(newTemp) || newTemp < -10 || newTemp > 40);

            temps[i] = parseInt(newTemp);

        }

        if (i > 0) {

            do {

                newTemp = prompt(`Introduce la temperatura del mes ${i + 1} 
                Debe ser una temperatura entre -10 y 40 grados
                No puede ser mayor o menor de 8 grados respecto al mes anterior`);


            } while (isNaN(newTemp) || newTemp < -10 || newTemp > 40 || newTemp < temperaturas[i - 1] - 8 || newTemp > temperaturas[i - 1] + 8);

            temps[i] = parseInt(newTemp);

        }



    }
    imprimirArray(temps, "Temperaturas");

}


function precipitaciones() {

    let newPrec;

    for (let i = 0; i < 12; i++) {

        do {

            newPrec = prompt(`Introduce una temperatura para el mes ${i + 1}
            Debe estar entre 0 y 50`);


        } while (isNaN(newPrec) || newPrec <= 0 || newPrec >= 50);

        precip[i] = parseInt(newPrec);

    }

    imprimirArray(precip, "Precipitaciones");
}


function imprimirArray(arrayImpr, nombreArray) {

    let months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

    document.write(`<h3>${nombreArray}</h3>`);

    for (let i = 0; i < arrayImpr.length; i++) {

        document.write(`<p>${months[i]} | `);

        for (let j = 0; j < arrayImpr[i]; j++) {

            document.write("=")
        }
        document.write(` ${arrayImpr[i]} </p>`);


    }



}