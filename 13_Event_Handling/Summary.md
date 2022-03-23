1. **State** adalah  data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.
2. **State** adalah data yang dapat dimodifikasi menggunakan useState, Setiap terjadi modifikasi akan terjadi render ulang, Bersifat Asynchronous, Dipakai dalam class.
3. **Perbedaan Props dan State**
- Props
    * props hanya dapat dibaca saja
    * props tidak dapat melakukan modifikasi
- State
    * perubahan state dapat dilakukan dengan asinkron
    * state dapat melakukan modifikasi dengan menggunakan this.setState
4. **Stateful Component** adalah komponen yang memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.
5. **Stateless Component** adalah tidak memiliki state hanya props. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.
6. **Perbedaan komponen stateless dan komponen stateful**
- Stateless
    * Tidak tahu tentang aplikasi 
    * Tidak melakukan data fetching (pengambilan data)
    * Tujuan utamanya adalah visualisasi
    * Dapat digunakan kembali
    * Hanya berkomunikasi dengan induk langsungnya
- Stateful
    * Mengerti tentang aplikasi
    * Melakukan data fetching (pengambilan data)
    * Berinteraksi dengan aplikasi
    * Tidak dapat digunakan kembali
    * Menentukan status dan data ke anak-anaknya
7. **Handling Event** adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen.
8. **Event** adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.
9. **Contoh List Event** 
* Clipboard Events (Promise terpenuhi)
* Form Events (onChange, onSubmit)
* Mouse Events (onClick, onDoubleClick, onMouseOver)
* Generic Events (onError, onLoad)