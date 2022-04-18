1. **Testing** adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.
2. **Manfaat Testing**:
    - Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah bagian tersebut, dan jika ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
    - Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.
3. **Kategori Testing**:
    - **Rendering component trees** di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
    - **Menjalankan aplikasi lengkap** di dalam environment peramban (browser) asli. ini dikenal sebagai tes "end-to-end".
4. **Rekomendasi Tools**:
    - Jest
    - React Testing Library
5. **Render and Debug**
    Fungsi render RTL akan merender file JSX apapun yang dibutuhkan. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunkan fungsi debug RTL.
6. **Memilih Elemen**
    RTL menawarkan berbagai fungsi untuk mendapatkan elemen yang selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.
7. **Kategori memilih elemen**:
    - LabelText: getByLabelText: <label for="Search"/>
    - PlaceholderText: getByPlacejolderText: <input placeholder="Search"/>
    - AltText: getByAltText: <img alt="profile"/>
    - DisplayValue: getByDisplayValue="JavasScript"/>