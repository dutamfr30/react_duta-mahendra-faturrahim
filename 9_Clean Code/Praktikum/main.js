//==================== Jawaban Problem 1 - Analysis ====================
//1. Variabel var yang dibuat dalam class user terdiri atas beberapa baris membuat terlihat tidak rapi, lebih baik dijadikan satu baris saja karena menggunakan variabel var yang sama.
//2. Penamaan class tidak menggunakan huruf kapital pada awalan kata.
//3. Penamaan variabel yang lebih dari satu kata menggunakan huruf kecil semua tidak mengikuti gaya penulisan clean code.
//4. Pada class UserService tidak menggunakan constructor dan terlalu banyak menggunakan user sehingga tidak terlihat rapi.
//5. Terdapat kesalahan pada penulisan method get, seharusnya tidak perlu menggunakan User didepan method get.
//6. Penulisan method juga tidak mengikuti gaya penulisan clean code, sebaiknya menggunakan gaya penulisan clean code misalnya Camel.


class User {
    var id, username, password;
}

class UserService{
    constructor(User = []) {
        this.userService = [...User];
    }

    getAllUsers() {
        return this.userService;
    }

    getUserById() {
        return this.userService.filter(User.Id);
    }
}

//==================== Jawaban Problem 2 - Rewrite ====================
class Kendaraan {
    let totalRoda = 0;
    let kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
    void berjalan() {
        tambahKecepatan(10);
    }
    //Menghitung kecepetanPerJam setelah ditambah kecepatanBaru
    tambahKecepatan(kecepatanBaru){
        kecepatanPerJam = kecepatanPerJam + kecepatanBaru;
        console.log(kecepatanPerJam)
    }

}

void main() {
    //Memanggil class Mobil
    let mobilCepat = new Mobil();
    mobilCepat.berjalan();
    
    let mobilLamban = new Mobil();
    mobilLamban.berjalan();
}