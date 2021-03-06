1. **Pengertian JSX**
**JSX** merupakan singkatan dari **Javascript XML**. JSX adalah ekstensi sintax pada javascript. Penggunaan JSX sangat disarankan di React karena lebih menggambarkan apa yang seharusnya tampak pada User Interface.
2. **Alasan menggunakan JSX**
JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI lainnya seperti bagaimana event ditangani, bagaimana state berubah seiring dengan waktu, bagaimana data disiapkan untuk ditampilkan. Separation of Technology dengan memisahkan markup dan logika, React memisahkan kepentingan (Separation of concerns) dengan unit coupling yang rendah yang disebut sebagai komponen.
3. **Spesifikasi jenis Element React**
Bagian pertama dari sebuah penanda (tag) JSX menentukan jenis dari elemen React. Jenis-jenis yang dikapitalisasi menandakan bahwa penanda JSX merujuk pada sebuah komponen React. 
- Ketika sebuah tipe elemen dimulai dengan sebuah huruf kecil (lowercase), hal tersebut merujuk pada sebuah komponen bawaan seperti <div> atau <span>. 
- Menggunakan huruf kapital untuk pemberian nama pada komponen yang kita buat sendiri.
4. **JSX adalah expression**
Setelah dikompilasi, Ekspresi JSX akan menjadi panggilan fungsi JavaScript biasa dan menjadi objek JavaScript. Kita dapat menggunakan JSX di dalam pernyataan if dan perulangan for, memasukannya ke dalam variabel, menerimanya sebagai argumen, dan mengembalikannya dari sebuah fungsi.
5. **Pengertian Component**
Komponen React adalah bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavior, dan state sebagian UI.Komponen mempermudah anda untuk memecah UI menjadi bagian tersendiri, bagian yang bisa digunakan kembali, dan berpikir tentang setiap potongan dalam isolasi.
6. **Pengertian props**
- Singkatan dari properties, membuat kita dapat memberikan argument / data pada component. Parent component dapat mengoper informasi pada children menggunakan props. 
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah. Perlu diingat bahwa props diberikan oleh parent component ke children component. Jadi children component tidak dapat mengubah props.
7. **React Lifecycle**
- render()
    * Merupakan fungsi yang paling sering dipakai
    * Required pada class component
    * Pure function. Tidak boleh ada setState()
- componentDidMount()
    * Dipanggil ketika component sudah di render untuk pertama kali
    * Tempat yang tepat untuk pemanggilan API
    * Boleh ada setState()
- componentDidUpdate()
    * Dipanggil ketika terjadi update (props atau state berubah)
- componentWIllUnmount()
    * Dipanggil ketika component akan dihancurkan
    * Cocok untuk clean up actions
8. **Render Bersyarat**
Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi kita.
    * Menggunkaan if 
    * Inline if dengan operator &&
    * Inline if-Else dengan ternary conditional operator
    * Mencegah komponen untuk rendering
9. **Render List**
Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}
10. **Key**
Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan. Key harus diberikan di dalam elemen yang terdapat di dalam sebuah senarai untuk memberikan elemen tersebut identitas yang stabil. Cara terbaik untuk menentukan key yang akan digunakan adalah menggunakan string unik untuk mengidentifikasikan item dalam sebuah list dari list item lain yang menjadi saudaranya. Biasanya sering menggunakan ID dari data Anda sebagai key.
11. **Struktur Direktori**
- Jenis Pengelompokan folder
    * Pengelompokan berdasarkan fitur atau rute
    * Pengelompokan berdasarkan jenis file
- Hindari terlalu banyak nesting
- Jangan mengabiskan banyak waktu karena telalu lama memikirkan struktur file
12. **Styling**
Dalam JSX kita dapat menggunkan styling dengan berbagai cara diantaranya
- Classes dan CSS
- Atribut style
- Modul CSS
