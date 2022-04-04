1. **Penerapan Form** 
   Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.
2. **Macam Form**
   - Elemen input
   - Elemen textarea
   - Elemen select
   - Radio Button
   - Checkbox
3. **Controlled Component**
   Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.
4. **Uncontrolled Component**
   Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.
5. **Atribut defaultValue**
   Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Atribut defaultValue digunakan untuk menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled.
6. **Tag File Input**
   Dalam React, sebuah <input type="file" /> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.
7. **Uncontrolled Component**
   Dengan kata lain, kita harus 'menarik' nilai dari field saat kita membutuhkannya. Ini bisa terjadi ketika formulir di submit.
Itu adalah cara paling sederhana untuk mengimplementasikan input formulir. Tentu saja ada kasus yang valid untuk menggunakannya: dalam form sederhana dan saat belajar React.
Namun, uncontrolled input tidak powerful. Jadi selanjutnya kita akan mempelajari controlled input.
8. **Controlled Component**
   Sebuah controlled input menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan ini adalah cara yang lebih "React way" untuk pendekatan ini (yang tidak berarti harus selalu menggunakannya).
   Ini juga berarti bahwa komponen form dapat merespon perubahan input dengan segera, misalnya oleh
    - umpan balik di tempat, seperti validasi
    - menonaktifkan tombol kecuali semua field memiliki data yang valid
    - mengimplementasi format input tertentu, seperti nomor kartu kredit
9. **Controlled vs Uncontrolled**
   Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.
10. **Kegunaan Validasi**
    Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :
    - Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
    - Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
    - Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

