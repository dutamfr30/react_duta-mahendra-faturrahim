1. **Database** relasional adalah kumpulan item data dengan hubungan yang telah ditentukan sebelumnya. Berbagai item ini disusun menjadi satu set tabel dengan kolom dan baris. Tabel digunakan untuk menyimpan informasi tentang objek yang akan direpresentasikan dalam database. Tiap kolom pada tabel memuat jenis data tertentu dan bidang menyimpan nilai aktual atribut. Baris pada tabel merepresentasikan kumpulan nilai terkait dari satu objek atau entitas. Tiap baris pada tabel dapat ditandai dengan pengidentifikasi unik yang disebut kunci utama, dan baris di antara beberapa tabel dapat dibuat saling terkait menggunakan kunci asing. Data ini dapat diakses dengan berbagai cara tanpa menyusun ulang tabel basis data itu sendiri.

3. **One To One Relationship** adalah setiap baris data pada tabel pertama dihubungkan hanya ke satu baris data pada tabel ke dua. Hubungan antara file pertama dan file kedua adalah satu berbanding satu.
Contoh: satu user hanya dapat memiliki satu foto profil.

2. **One To Many Relationship** adalah suatu relasi yang berbentuk satu baris data di sebuah tabel dapat berhubungan dengan satu atau lebih baris data di tabel lain.
Contoh: satu user dapat memiliki banyak tweets.

4. **Many To Many Relationship** adalah setiap baris data dari tabel pertama dihubungkan lebih dari satu baris ke tabel kedua. Hubungan antara file pertama dan file kedua adalah banyak berbanding satu.
Contoh: satu user dapat memiliki banyak followers, satu user dapat melakukan following ke banyak user. 