function crearArray(frase) {

    let arrayFrase = frase.split(" ");

    return arrayFrase;
}

function invertirArray(array) {

    let reversedArray = [];
    let j = 0;
    for (let i = array.length - 1; i >= 0; i--) {

        reversedArray[j] = array[i];
        j++;
    }

    return reversedArray;
}

function printArray(array) {

    let string = "";

    for (let i = 0; i < array.length; i++) {

        string = string + array[i] + " ";

    }

    return string;
}

function palindromo(frase) {

    let reversedFrase = "";
    let result;
    for (let i = frase.length - 1; i >= 0; i--) {

        reversedFrase = reversedFrase + frase[i];

    }
    
    (reversedFrase == frase) ? result =  true :  result = false;

    return result;

}



let frase = prompt("Introduce una frase");
let array = crearArray(frase);

console.log(`
Número de palabras: ${array.length}
Primera palabra: ${array[0]}
Última palabra: ${array[array.length - 1]}
Palabras en orden inverso: ${printArray(invertirArray(array))}
Palabras ordenadas de la a-z: ${array.sort()}
Palabras ordenadas de la z-a: ${array.sort().reverse()}
¿Es un palíndomo? : ${palindromo(frase)}`);



