# Product Requirements Document (PRD) - Website Maulana Transport Jogja

## 1\. Pendahuluan

**Nama Proyek:** Pengembangan Website Maulana Transport Jogja  
**Tujuan Dokumen:** Mendefinisikan spesifikasi, fitur, dan kebutuhan teknis untuk pembuatan website resmi Maulana Transport guna mendukung operasional dan digital marketing bisnis rental mobil.

## 2\. Latar Belakang \& Visi

Maulana Transport adalah penyedia jasa transportasi yang menawarkan layanan sewa mobil berkualitas dengan berbagai pilihan armada kelas menengah hingga premium. Visi dari pembuatan website ini adalah untuk memberikan kemudahan bagi calon pelanggan (wisatawan, instansi, maupun masyarakat umum) dalam mencari, melihat spesifikasi, dan memesan layanan transportasi secara online, aman, dan informatif.

## 3\. Target Pengguna

* **Wisatawan (Domestik \& Mancanegara):** Membutuhkan paket city tour atau sewa mobil harian beserta driver untuk mobilitas wisata.
* **Perusahaan \& Instansi:** Membutuhkan kendaraan yang representatif untuk perjalanan dinas.
* **Masyarakat Umum \& Pebisnis:** Membutuhkan layanan antar-jemput bandara (seperti Yogyakarta International Airport atau bandara terdekat lainnya) atau mobilitas ke luar kota.

## 4\. Ruang Lingkup Layanan \& Armada

Website harus secara jelas menampilkan kategori dan detail informasi berikut:

### 4.1. Ketersediaan Armada

* Toyota Kijang Innova
* Toyota Fortuner
* Toyota Alphard
* Toyota HiAce
* Isuzu Elf
* Mitsubishi Pajero
* Toyota Yaris
* Honda Jazz
* Toyota Avanza Veloz

### 4.2. Kategori Layanan Utama

* **Sewa Mobil dan Driver:** Layanan penyewaan yang sudah merangkum ketersediaan unit beserta jasa pengemudi profesional.
* **Perjalanan Dinas:** Layanan penyediaan armada standar/premium untuk kebutuhan dinas instansi, termasuk penyediaan invoice khusus korporat.
* **Paket City Tour:** Layanan wisata terpadu yang dilengkapi dengan rekomendasi rute, durasi pemakaian, dan destinasi unggulan.
* **Antar Jemput Bandara (Drop-off / Pick-up):** Layanan transfer bandara dengan penentuan zona jemput/antar, mencakup rute dalam kota maupun luar kota.

## 5\. Fitur Utama (Functional Requirements)

### 5.1. Halaman Utama (Homepage)

* **Hero Banner:** Menampilkan visual armada unggulan (misal: Alphard atau HiAce) dengan *Call to Action (CTA)* pemesanan yang mencolok.
* **Widget Pencarian Cepat:** Opsi pencarian (Pilih Layanan -> Pilih Tanggal -> Cari).
* **Highlight Layanan \& Keunggulan:** Menjelaskan mengapa harus memilih Maulana Transport.
* **Testimoni \& Review:** Social proof dari pelanggan sebelumnya.

### 5.2. Katalog Armada (Fleet Page)

* Daftar komprehensif kendaraan disertai foto berkualitas tinggi.
* Detail spesifikasi (Kapasitas penumpang, kapasitas bagasi, fitur AC/Audio, dll).
* Estimasi harga sewa (Berdasarkan durasi/rute).
* Tombol **"Pesan Sekarang"** yang terhubung langsung ke sistem form atau WhatsApp.

### 5.3. Halaman Layanan (Services Page)

* Penjabaran mendalam untuk setiap jenis layanan (Sewa + Driver, Perjalanan Dinas, City Tour, Antar Jemput Bandara).
* Informasi *itinerary* atau rute referensi (khusus untuk Paket City Tour).

### 5.4. Sistem Pemesanan \& Konfirmasi

* **Formulir Reservasi:** Pengguna dapat mengisi Nama, No. HP, Pilihan Mobil, Layanan, Titik Jemput/Tujuan, dan Tanggal.
* **Integrasi WhatsApp:** Setelah form disubmit, data secara otomatis tersusun menjadi *template* teks dan diarahkan ke WhatsApp Admin untuk proses konfirmasi instan dan pembayaran.

### 5.5. Halaman Kontak \& FAQ

* Informasi alamat operasional/pool, nomor telepon, dan email.
* Integrasi peta lokasi (Google Maps Embed).
* Frequently Asked Questions (FAQ) terkait syarat sewa, kebijakan bahan bakar, tarif *overtime*, dan kebijakan pembatalan.

## 6\. Kebutuhan Non-Fungsional (Non-Functional Requirements)

* **Mobile-Responsive:** Antarmuka harus optimal saat diakses melalui smartphone karena mayoritas pencarian transportasi dilakukan via mobile.
* **Kecepatan Akses (Performance):** Waktu *loading* maksimal 3 detik.
* **SEO Friendly:** Struktur halaman yang ramah mesin pencari, mendukung *keyword* pencarian (misalnya: "sewa innova bandara", "paket city tour", "rental mobil dan driver").
* **Keamanan:** Implementasi sertifikat SSL (HTTPS) agar data pelanggan yang diinput aman.

## 7\. Alur Pengguna (User Flow)

1. **Landing:** Pengguna tiba di website.
2. **Eksplorasi:** Pengguna melihat-lihat ketersediaan unit mobil atau detail paket layanan.
3. **Pemilihan:** Pengguna mengklik tombol "Pesan" pada mobil atau layanan spesifik.
4. **Input Data:** Pengguna mengisi formulir pemesanan.
5. **Konfirmasi Admin:** Pengguna dialihkan ke WhatsApp, mengirimkan rincian pesanan ke admin Maulana Transport untuk difinalisasi.
6. **Selesai:** Konfirmasi jadwal dan metode pembayaran.

## 8\. Milestone \& Estimasi Pengerjaan

* **Tahap 1 (Minggu 1):** Pengumpulan aset (foto mobil, tarif), wireframing, dan desain UI/UX.
* **Tahap 2 (Minggu 2-3):** Pengembangan Frontend dan Backend / Pengaturan CMS (seperti WordPress).
* **Tahap 3 (Minggu 4):** Integrasi form WhatsApp, input seluruh konten (armada \& layanan).
* **Tahap 4 (Minggu 5):** Testing, optimasi kecepatan, dan *Live/Deployment*.

