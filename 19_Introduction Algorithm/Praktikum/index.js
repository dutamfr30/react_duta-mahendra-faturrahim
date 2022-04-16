let nilai = 4;
let bilanganPrima = [];
for (let i = 0; i < nilai; i++) {
    if (nilai % 1 == 0) {
        bilanganPrima.push(i);
        console.log("Bilangan Prima -", i);
    }
    else if (i <= nilai) {
        console.log("Bilangan Non Prima -", i);
    }
}

console.log("hanya bilangan prima", bilanganPrima);