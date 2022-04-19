const bilanganPrima = (nilai) => {
    let habisDibagi = 0;
    for (let i = 1; i <= nilai; i++) {
        if (nilai % i === 0) {
            habisDibagi++;
        }
    }
    if (habisDibagi==2){
        console.log(nilai, " merupakan bilangan prima");
    } else {
        console.log(nilai, " bukan merupakan bilangan prima");
    }
    
}

bilanganPrima(11)
bilanganPrima(25)
bilanganPrima(33)
bilanganPrima(103)