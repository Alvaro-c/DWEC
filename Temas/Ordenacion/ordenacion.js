
let v = [9, -1, 12, 5, 0];

v.sort(); // Ordena como strings, por lo que un 12 ira delante de un 5

console.log(v);

v = [9, -1, 12, 5, 0];

// Bubble sort, menor a mayor: 
for (let i = 5; i > 0; i--) {

    for (let j = 0; j < i - 1; j++) {

        if (v[j] > v[j + 1]) {

            let temp = v[j];
            v[j] = v[j + 1];
            v[j + 1] = temp;
        }
    }
}

console.log(v);

// Bubble sort, mayor a menor: 
for (let i = 5; i > 0; i--) {

    for (let j = 0; j < i - 1; j++) {

        if (v[j] < v[j + 1]) {

            let temp = v[j];
            v[j] = v[j + 1];
            v[j + 1] = temp;
        }
    }
}