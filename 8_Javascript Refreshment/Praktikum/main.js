// var a = 5;
// let b = "kampus merdeka";
// const nama = "Budi";
// let terdaftar = true;
// let lengkap_arr = [a, b, nama, terdaftar];

// function perkenalan() {
//     let asal = "indonesia";
//     return console.log(
//         "perkenalkan nama saya " +
//          nama +
//          " nomor urut " +
//          a +
//          " sekarang sedang mengikuti " +
//          b +
//          "berasal dari " +
//          asal
//     );
// }

// if (terdaftar === true) {
//     console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
// }

// a = b;
// // nama = b;
// // console.log("asal diakses = " + asal);
// console.log("array = " + lengkap_arr[2]);
// console.log("a adalah = " + a);
// console.log("b adalah = " + b);
// perkenalan();

//Jawaban Nomor 2
// a. Karena baris 21,22,23 merupakan pengkondisian, dimana pengkondisian yang diminta adalah variabel terdaftar bernilai true agar program dapat muncul atau berjalan, sedangkan pada baris 4 variabel let terdaftar =  false, sehingga perlu merubah nilai dari variabel terdaftar = false menjadi variabel terdaftar = true.

// b. Karena deklarasi baris 26 merupakan Reassignment dari variabel const nama = "Budi" pada baris 3 dimana reassignment adalah memberikan nilai baru pada variabel yang sudah ada sebelumnya, sedangkan variabel const merupakan variabel yang digunakan saat kita membutuhkan nilai yang tidak bisa di "reassign" dan harus memiliki nilai, sehingga apabila kita menuliskan kembali nilai yang baru dari variabel const maka akan terjadi error.

// c. Dengan melakukan komen pada baris ke 26, tetap tidak akan berpengaruh pada baris ke 28 sehingga baris ke 28 tetap tidak dapat dieksekusi karena variabel yang dieksekusi pada baris 28 merupakan variabel yang dideklarasikan di dalam scoping function dimana variabel yang ada dalam function tidak dapat diakses diluar function tersebut. Oleh karena itu perlu melakukan komen pada baris ke 28 agar kode program dapat menghasilkan output yang sesuai dengan yang diinginkan.

//Jawaban Nomor 3
const foo = ["Budi", "Sita", "Ayu"];
const [a, b, c] = foo;

console.log("Jawaban Nomor 3");
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

//Jawaban Nomor 4
let bdays = ['10-17','05-19','20-19'];
bdays = ['10/17', '05/19', '20/19'];

console.log("Jawaban Nomor 4");
console.log(bdays);

//Jawaban Nomor 5
let value = [1,2,3,4,5,6];
let kali2 = value.map(x => x * 2);

console.log("Jawaban Nomor 5");
console.log(kali2);

//Jawaban Nomor 6
let arr = [1.5, 2.56, 5.1, 12.33];
let bulat = arr.map(Math.round);

console.log("Jawaban Nomor 6");
console.log(bulat);
