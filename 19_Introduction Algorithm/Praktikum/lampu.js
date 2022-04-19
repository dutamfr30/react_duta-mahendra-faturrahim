const lampu = (n) => {
    let nyalaLampu = 0 
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            nyalaLampu++;
        }
    }
    if(nyalaLampu % 2 === 0) {
        console.log(n, "= Lampu Mati")
    } else {
        console.log(n, "= Lampu Menyala")
    }
}

lampu(5)
lampu(4)
lampu(9)