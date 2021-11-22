        // if (i > 0 ) {

        //     do {
        //         newTemp =  prompt(`Introduce la temparatura del mes ${i+1} 
        //         (La temperatura no puede ser mayor o menor en 8 grados que la del mes anterior)`);
                
        //     } while (isNaN(newTemp) || newTemp < -10 || newTemp >  40 || newTemp > temperaturas[i-1] + 8 || newTemp < temperaturas[i-1] - 8);
        // }




function temperaturas() {

    let temperaturas = [];
    let newTemp;

    for (let i = 0; i < 11; i++) {

        if (i == 0){

            do {
                newTemp =  parseFloat(prompt(`Introduce la temparatura del mes ${i+1} 
                (Debe ser mayor que -10 y menor que 40)`));
                
            } while (isNaN(newTemp) || newTemp < -10 || newTemp >  40);

            temperaturas[i] = newTemp;
        }

        if (i > 0 ) {

            do {
                newTemp =  parseFloat(prompt(`Introduce la temparatura del mes ${i+1} 
                (La temperatura no puede ser mayor o menor en 8 grados que la del mes anterior)`));
                
            } while (isNaN(newTemp) || newTemp < -10 || newTemp >  40 || newTemp > temperaturas[i-1] + 8 || newTemp < temperaturas[i-1] - 8);

            temperaturas[i] = newTemp;
        }
        
        

    }
 
}

function precipitaciones() {
    
}
