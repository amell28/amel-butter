# 📋 Product Requirement Document (PRD) — Guest Landing Page
## BloomBites Matcha House | Versi Implementasi V1 → V2 → V3

> Dokumen ini mendefinisikan rencana dan laporan implementasi evolusi **Guest Landing Page** dari fondasi awal hingga landing page kafe premium berkonsep B2C yang terintegrasi dengan modul CRM interaktif.

---

## 🏠 Identitas Produk

| Atribut | Detail |
|---|---|
| **Nama Produk** | BloomBites Matcha House |
| **Jenis Halaman** | Guest Landing Page (Publik, B2C) |
| **File Implementasi** | `src/pages/GuestLanding.jsx` |
| **Teknologi** | React 19, Vite 8, Tailwind CSS v4, Lucide React |
| **Skema Warna** | Coffee Brown `#3E2723` · Matcha Green `#6A7A40` · Beige `#FAF7F2` |
| **Target Pengguna** | Calon pelanggan & pelanggan setia kafe (Tamu Umum) |

---

## 📍 PRD V1 — Fondasi Halaman (Core Landing Page)

### Visi
> Memperkenalkan brand **BloomBites Matcha House** kepada publik dengan halaman yang bersih, informatif, dan mudah diakses.

### Tujuan Bisnis
- Memberi tahu pengunjung tentang identitas dan konsep kafe matcha artisanal.
- Menyediakan informasi dasar (jam buka, lokasi, menu).
- Menyediakan akses portal staf/admin melalui tombol Login.

### Komponen yang Diimplementasikan

#### 1. Navbar Dasar
- Logo brand teks: **BloomBites Matcha House**
- Link navigasi statis menuju section `#menu`, `#about`, `#contact`
- Tombol **"Portal Staf"** yang mengarahkan ke `/login`

#### 2. Hero Section Sederhana
- **Headline utama**: "Sentuhan Kelembutan Matcha Kyoto di Setiap Gigitan."
- Sub-teks deskripsi kafe
- Tombol CTA: `Reservasi Tempat Sekarang` & `Jelajahi Menu Utama`
- Kartu kanan Hero: Gradien warna coklat-hijau statis (belum ada gambar produk)

#### 3. Katalog Menu Statis
- Tampilan teks sederhana beberapa menu matcha terlaris
- Tidak ada foto produk
- Harga statis, tidak interaktif

#### 4. Footer Dasar
- Hak cipta kafe
- Jam operasional: **Setiap Hari 09:00 – 22:00 WIB**
- Informasi kontak & tautan media sosial

### Batasan V1
- Tidak ada foto produk nyata
- Tidak ada form interaktif
- Tidak ada fitur CRM yang terlihat oleh tamu
- Tidak ada program poin / loyalitas

---

## 📊 PRD V2 — Ekspansi Interaktivitas (Interactive Landing Page)

### Visi
> Meningkatkan engagement pengunjung dengan elemen visual yang lebih kaya, social proof, dan formulir interaktif pertama.

### Tujuan Bisnis
- Membangun kepercayaan pengunjung baru melalui statistik dan ulasan nyata.
- Memperkenalkan konsep program loyalitas kepada tamu.
- Mengurangi pertanyaan berulang ke staf kafe dengan FAQ portal.

### Komponen yang Diimplementasikan

#### 1. Sticky Navbar dengan Efek Glassmorphism
- Navbar menempel di atas layar saat di-scroll
- Efek `backdrop-blur` transparan saat sticky
- Link `href` navigasi langsung menuju setiap section dengan smooth scroll

#### 2. Social Proof & Statistik Kafe
- Angka pencapaian dinamis:
  - `500+` Member Terdaftar
  - `50.000+` Pelanggan Terkelola
  - `250.000+` Pesanan Diproses
  - `4.9/5` Rating Kepuasan

#### 3. Dashboard Preview (Mockup Admin)
- Panel mockup dashboard:
  - 4 Kartu KPI: Total Customers, Loyalty Members, Orders Today, Revenue Today
  - Line Chart (Recharts): Tren pendapatan mingguan
  - Bar Chart: Popularitas menu terlaris
  - Log Aktivitas: Timeline interaksi pelanggan terbaru

#### 4. Customer Review Hub
- 3 ulasan dummy dari pelanggan
- Form ulasan: input nama + rating bintang + teks ulasan

#### 5. FAQ Accordion Pertama
- 4 Pertanyaan Umum seputar promo dan keanggotaan
- Interaksi expand/collapse per pertanyaan

### Peningkatan dari V1
- Navigasi sticky dengan glassmorphism
- Social proof & statistik
- Form ulasan interaktif pertama
- FAQ accordion

### Batasan V2
- Foto produk masih belum ada
- Reservasi meja belum tersedia
- Loyalty simulator belum ada dari sisi konsumen
- Lead capture / voucher belum diimplementasikan

---

## 🌟 PRD V3 — B2C Premium & CRM Touchpoints (Current Version)

### Visi
> Menjadikan halaman tamu sebagai **etalase digital kafe matcha premium** yang bukan hanya cantik secara visual, tetapi juga mengumpulkan data pelanggan, memfasilitasi pemesanan tempat, dan memperkenalkan program loyalitas — semua dari perspektif konsumen.

### Tujuan Bisnis
- Mengkonversi pengunjung anonim menjadi pelanggan terdaftar (lead capture).
- Meningkatkan Customer Lifetime Value (CLV) melalui program loyalitas yang diperkenalkan sejak kunjungan pertama.
- Memudahkan reservasi meja tanpa perlu menghubungi staf secara langsung.
- Menampilkan produk unggulan dengan foto berkualitas tinggi untuk meningkatkan minat beli.

### Komponen yang Diimplementasikan

#### 1. Hero Section Revamp (Kyoto Vibe)
- Foto produk nyata pada kartu Hero kanan: Matcha Mille Crepes (AI generasi resolusi tinggi)
- Efek hover zoom (`scale-105`, `transition-transform`) pada gambar produk
- Dark gradient overlay untuk keterbacaan teks di atas foto
- Floating badge "Jam Buka" dengan glassmorphism backdrop-blur
- Tag "Signature Dessert" dalam pill badge transparan

#### 2. Katalog Menu Terlaris (4 Produk Matcha)

| Produk | Gambar | Harga | Poin Reward |
|---|---|---|---|
| Signature Uji Matcha Latte | `/signature_matcha_latte.png` | Rp 48.000 | 48 Pts |
| Matcha Espresso Fusion | `/matcha_espresso_fusion.png` | Rp 55.000 | 55 Pts |
| Uji Matcha Tiramisu | `/matcha_tiramisu.png` | Rp 65.000 | 65 Pts |
| Matcha Mille Crepes | `/matcha_mille_crepes.png` | Rp 72.000 | 72 Pts |

- Grid kartu 4 kolom responsif
- Foto produk object-cover dengan hover zoom
- Tombol "Diskon Member" yang mengaktifkan Loyalty Simulator

#### 3. Loyalty Pricing Simulator (CRM Touchpoint #1)
- Muncul otomatis saat tamu mengklik "Diskon Member" pada kartu menu
- Menampilkan 3 tier harga diskon:
  - Silver Member → Diskon 5%
  - Gold Member → Diskon 10%
  - Platinum VIP → Diskon 15%
- Menampilkan poin yang didapat per pembelian (Rp 1.000 = 1 Poin)
- Menampilkan poin reward yang dibutuhkan untuk klaim gratis

#### 4. Reservasi Meja Online (CRM Touchpoint #2)

Form multi-field untuk pemesanan tempat duduk:

| Field | Tipe Input |
|---|---|
| Nama Lengkap | Text Input |
| Nomor WhatsApp | Tel Input |
| Email | Email Input |
| Tanggal Kunjungan | Date Picker |
| Waktu Kunjungan | Time Picker |
| Jumlah Tamu (Pax) | Number Input |
| Area Meja | Select (Indoor AC / Outdoor Garden / VIP Room) |
| Catatan Tambahan | Textarea |

- Setelah submit → tampil kartu konfirmasi sukses dengan detail reservasi
- Simulasi data tersimpan ke profil CRM pelanggan

#### 5. Informasi Membership Tier (CRM Touchpoint #3)
- Silver (0 – 500 Pts): Diskon 5%, Akses event eksklusif
- Gold (500 – 2.000 Pts): Diskon 10%, Prioritas meja, Complimentary drink
- Platinum VIP (2.000+ Pts): Diskon 15%, VIP table, Hadiah ulang tahun

#### 6. Klaim Voucher Selamat Datang (CRM Touchpoint #4 — Lead Capture)
- Form pendaftaran: Nama Lengkap, Alamat Email, Nomor WhatsApp
- Setelah submit → tampil kode kupon: `WELCOME-MATCHA` (Diskon 15%)
- Mengumpulkan data calon pelanggan untuk database CRM kafe

#### 7. Customer Feedback Hub (CRM Touchpoint #5)
- Form ulasan dengan rating bintang interaktif (1–5)
- Ulasan terkirim masuk ke feed real-time di bawah form
- Menampilkan nama, rating, dan teks ulasan per entry

#### 8. FAQ Self-Service Portal (10 Pertanyaan)

1. Cara mendaftarkan diri sebagai member loyalty
2. Cara mendapatkan & menggunakan poin reward
3. Pilihan susu alternatif (oatmilk, almondmilk)
4. Kebijakan pembatalan & reschedule reservasi
5. Cara mengklaim poin setelah pembelian di kasir
6. Apakah ada batas waktu penggunaan poin?
7. Apakah bisa booking untuk acara private/gathering?
8. Ketersediaan menu seasonal matcha
9. Ketersediaan koneksi WiFi & colokan listrik
10. Cara menghubungi kafe untuk pertanyaan lainnya

---

## 📈 Matriks Perbandingan Versi

| Komponen Landing Page | V1 | V2 | V3 |
|---|:---:|:---:|:---:|
| Navbar sticky glassmorphism | ❌ | ✅ | ✅ |
| Hero dengan foto produk AI | ❌ | ❌ | ✅ |
| Efek hover zoom & animasi | ❌ | ❌ | ✅ |
| Social proof & statistik | ❌ | ✅ | ✅ |
| Katalog menu dengan foto | ❌ | ❌ | ✅ |
| Loyalty Pricing Simulator | ❌ | ❌ | ✅ |
| Formulir Reservasi Meja | ❌ | ❌ | ✅ |
| Penjelasan Tier Keanggotaan | ❌ | ❌ | ✅ |
| Lead Capture + Voucher | ❌ | ❌ | ✅ |
| Review Hub (real-time feed) | ❌ | ✅ | ✅ |
| FAQ Accordion | ❌ | ✅ | ✅ |
| Portal Staf (Login Button) | ✅ | ✅ | ✅ |

---

## 🔮 Rencana PRD V4 (Roadmap / Backlog)

> Fitur-fitur berikut belum diimplementasikan dan menjadi roadmap pengembangan berikutnya:

- [ ] **Integrasi WhatsApp API**: Konfirmasi reservasi otomatis via WhatsApp Business API
- [ ] **QR Code Menu**: Menu digital yang bisa dipindai dari meja langsung ke halaman menu
- [ ] **Live Table Availability**: Real-time ketersediaan meja berdasarkan slot reservasi yang sudah terisi
- [ ] **Push Notifikasi Member**: Notifikasi promosi & event untuk pelanggan yang sudah mendaftar
- [ ] **Geo-location & Maps Embed**: Peta lokasi kafe interaktif di halaman
- [ ] **Dark Mode Toggle**: Pilihan tampilan terang/gelap untuk pengunjung malam hari

---

## 📁 File Terkait Implementasi

| File | Fungsi |
|---|---|
| `src/pages/GuestLanding.jsx` | Kode utama seluruh halaman landing |
| `public/signature_matcha_latte.png` | Foto Signature Uji Matcha Latte |
| `public/matcha_espresso_fusion.png` | Foto Matcha Espresso Fusion |
| `public/matcha_tiramisu.png` | Foto Uji Matcha Tiramisu |
| `public/matcha_mille_crepes.png` | Foto Matcha Mille Crepes (Hero Card) |
| `prd.md` | PRD Master (Referensi Bisnis & Sistem) |

---

*Dibuat oleh: Tim Pengembang BloomBites Matcha House*
*Terakhir diperbarui: Juni 2026*
