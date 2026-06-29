  # 🍵 BloomBites Matcha House — Dokumentasi Project CRM

  > Aplikasi **Customer Relationship Management (CRM)** berbasis web untuk kafe matcha premium **BloomBites Matcha House**, dibangun menggunakan **React + Vite**.

  ---

  ## 📌 Deskripsi Umum

  **BloomBites** adalah sistem CRM kafe modern yang dirancang untuk mengelola hubungan pelanggan secara menyeluruh — mulai dari momen pertama tamu mengunjungi halaman web, hingga menjadi pelanggan loyal dengan poin reward dan tier keanggotaan eksklusif.

  Sistem ini terbagi menjadi **dua zona akses** utama:

  | Zona | Route | Akses |
  |---|---|---|
  | 🌿 Guest Landing Page | `/` | Publik (tanpa login) |
  | 🔐 Admin Panel | `/admin`, `/customers`, dll. | Staf (wajib login) |

  ---

  ## 🗂️ Struktur Halaman (Routing)

  ```
  /                  → Guest Landing Page (halaman publik)
  /login             → Halaman Login Staf
  /register          → Halaman Registrasi
  /forgot            → Lupa Password

  /admin             → Dashboard Overview (admin)
  /customers         → Daftar Seluruh Customer
  /customers/add     → Form Tambah Customer Baru
  /customerdetail    → Profil 360° Detail Customer
  /Loyalty           → Manajemen Program Loyalitas
  /orders            → Daftar & Manajemen Order
  /orders/add        → Form Tambah Order Baru
  /pesanan           → Tampilan Pesanan (view kasir)
  /pesanan/:id       → Detail Satu Pesanan
  /user              → Manajemen Akun Pengguna
  ```

  ---

  ## ✅ Fitur CRM yang Diterapkan

  ### 1. 🎫 Guest Voucher & Lead Capture

  **File:** `src/pages/GuestLanding.jsx`

  Pengunjung baru yang belum login dapat mengisi **nama** dan **email** aktif mereka untuk mendapatkan kode kupon eksklusif:

  ```
  Kode Kupon : WELCOME-MATCHA
  Diskon     : 15% untuk semua menu
  ```

  Teknik ini merupakan implementasi **Lead Capture** dalam CRM — sistem mengumpulkan data identitas calon pelanggan sebagai titik masuk ke ekosistem loyalitas BloomBites, bahkan sebelum mereka resmi menjadi member.

  ---

  ### 2. ⭐ Customer Review & Feedback Hub

  **File:** `src/pages/GuestLanding.jsx` → Section `#reviews`

  Tamu dapat mengirimkan ulasan langsung melalui form interaktif yang memuat:

  - **Nama pelanggan**
  - **Rating bintang** (skala 1–5, interaktif)
  - **Teks ulasan** naratif pengalaman

  Ulasan yang masuk langsung ditampilkan secara **real-time** di feed ulasan publik. Ini adalah implementasi fitur **Voice of Customer (VoC)** — metode CRM untuk mengumpulkan persepsi dan kepuasan pelanggan secara langsung guna meningkatkan kualitas layanan.

  ---

  ### 3. 🏅 Loyalty Program & Point Redemption

  **File:** `src/pages/Loyalty.jsx`

  Sistem keanggotaan berjenjang dengan tiga tingkatan tier:

  | Tier | Simbol | Keterangan |
  |---|---|---|
  | Silver Member | 🥈 | Anggota pemula |
  | Gold Member | 🥇 | Anggota aktif |
  | Platinum VIP | 💎 | Anggota paling loyal |

  **Fitur yang tersedia:**

  - Tabel data semua member beserta jumlah kunjungan dan poin tersedia
  - Panel **Tukar Poin Reward** (via Shadcn Sheet):
    - 🍵 **50 Pts** → Free 1 Matcha Latte
    - 💚 **100 Pts** → Diskon 50% untuk semua menu
  - Upgrade/downgrade tier member secara manual oleh staf
  - Validasi poin: sistem akan menolak penukaran jika poin tidak mencukupi

  ---

  ### 4. 👤 Customer 360° Profile

  **File:** `src/pages/CustomerDetail.jsx`

  Halaman profil pelanggan yang komprehensif — satu tempat untuk melihat **semua informasi penting** tentang seorang pelanggan:

  #### 📊 Metrik Utama (KPI Cards)

  | Metrik | Contoh Data |
  |---|---|
  | Total Pengeluaran (LTV) | Rp 1.450.000 (18 transaksi) |
  | Rata-rata Nilai Keranjang | Rp 80.550 per kunjungan |
  | Skor Retensi Pelanggan | 9.8 / 10 (Sangat Loyal) |
  | Kunjungan Terakhir | 2 Hari Lalu |

  #### 📋 Informasi Profil
  - Data kontak: email, nomor HP, tanggal lahir
  - Poin reward saat ini
  - **Preferensi rasa & menu** (mis: *Less Sugar 75%*, *Oatmilk Option*)
  - **Segment Badge** klasifikasi pelanggan (mis: `Whale / Loyal`)
  - **Voucher aktif** yang sedang dimiliki

  #### 🧾 Riwayat Transaksi
  Tabel histori pembelian lengkap dengan kolom: Order ID, Item, Tanggal, Total, dan Status.

  ---

  ### 5. 📜 CRM Activity Log & Timeline

  **File:** `src/pages/CustomerDetail.jsx`

  Setiap pelanggan memiliki **log aktivitas berjenjang** yang mencatat semua interaksi penting secara kronologis:

  | Tipe Log | Contoh Kejadian |
  |---|---|
  | `Complaint` | Pelanggan komplain rasa manis, kasir mencatat penyesuaian |
  | `Reward` | Penukaran kupon *Free Croissant* di kasir |
  | `System` | Pendaftaran akun CRM berhasil diverifikasi |
  | `Staff Note` | Catatan manual yang ditambahkan staf |

  Staf dapat **menambahkan catatan manual** kapan saja melalui input notes yang langsung masuk ke timeline — implementasi fitur **Internal Staff Notes** khas sistem CRM profesional.

  Terdapat pula visualisasi **Point Milestone** yang menampilkan posisi poin pelanggan terhadap target reward berikutnya.

  ---

  ### 6. 👥 Customer Database Management

  **File:** `src/pages/Customers.jsx`

  Panel manajemen database seluruh pelanggan terdaftar:

  - Tabel dengan **30 data pelanggan** (simulasi)
  - **Pencarian real-time** berdasarkan nama
  - **Pagination** otomatis (5 data per halaman)
  - Tampilan **Loyalty Tier Badge** untuk setiap pelanggan
  - Aksi per baris: **View Detail** & **Delete Customer**
  - Tombol cepat tambah pelanggan baru

  ---

  ### 7. 🛒 Order Management

  **File:** `src/pages/Orders.jsx`

  Panel pelacakan dan manajemen semua transaksi masuk:

  - Tabel **30 data order** (simulasi) dengan status:
    - `Completed` — Order selesai ✅
    - `Pending` — Sedang diproses 🕐
    - `Cancelled` — Order dibatalkan ❌
  - **Pencarian** berdasarkan nama customer
  - **Pagination** otomatis (5 data per halaman)
  - Aksi per baris: **View Detail** & **Cancel Order**
  - Tombol cepat buat order baru

  ---

  ### 8. 📈 Business Intelligence Dashboard

  **File:** `src/pages/Dashboard.jsx`

  Pusat data analitik bisnis kafe dengan visualisasi interaktif:

  #### KPI Cards (4 Kartu Ringkasan)

  | KPI | Nilai | Delta |
  |---|---|---|
  | Total Orders | 1.050 | ↑ 8% |
  | Completed | 985 | ↑ 12% |
  | Cancelled | 65 | ↓ 3% |
  | Total Revenue | Rp 30.1M | ↑ 18% |

  #### Grafik & Visualisasi
  - 📈 **Line Chart** — Tren revenue bulanan (Jan–Jun 2025)
  - 📊 **Bar Chart** — Volume order per bulan
  - 🏆 **Best Sellers** — Top 4 produk terlaris dengan progress bar dan insight otomatis
  - 🕐 **Recent Orders Table** — 5 transaksi terbaru beserta status real-time

  ---

  ### 9. ❓ FAQ Self-Service Portal

  **File:** `src/pages/GuestLanding.jsx` → Section `#faq`

  Accordion FAQ interaktif (expand/collapse) yang menjawab pertanyaan umum:

  1. Cara menukarkan voucher diskon 15%
  2. Keamanan data email dalam ekosistem CRM
  3. Ketentuan klaim kupon per email
  4. Cara mengakses riwayat transaksi keanggotaan

  Ini adalah implementasi **Self-Service Support** dalam CRM — mengurangi beban pertanyaan langsung ke staf dengan menyediakan jawaban yang mudah diakses secara mandiri oleh pelanggan.

  ---

  ## 🛠️ Stack Teknologi

  | Teknologi | Versi | Kegunaan |
  |---|---|---|
  | **React** | ^19 | UI Framework |
  | **Vite** | ^6 | Build Tool & Dev Server |
  | **React Router DOM** | ^7 | Client-side Routing |
  | **Recharts** | — | Grafik Line & Bar Chart |
  | **Shadcn UI** | — | Komponen Table, Sheet, Select |
  | **TailwindCSS** | v4 | Utility-first Styling |
  | **React Icons** | — | Ikon (Feather, Ant Design) |

  ---

  ## 🏗️ Arsitektur Folder

  ```
  src/
  ├── assets/          → File CSS & aset statis
  ├── components/      → 19 komponen reusable (LoyaltyBadge, StatCard, dll.)
  │   └── ui/          → Komponen primitif Shadcn UI
  ├── data/            → Data statis JSON (Pesanan.json)
  ├── layouts/         → Layout wrapper (MainLayout, AuthLayout)
  ├── lib/             → Utilitas helper
  ├── pages/           → Halaman utama aplikasi
  │   ├── auth/        → Login, Register, Forgot
  │   ├── Dashboard.jsx
  │   ├── GuestLanding.jsx
  │   ├── Customers.jsx
  │   ├── CustomerDetail.jsx
  │   ├── Loyalty.jsx
  │   ├── Orders.jsx
  │   └── ...
  └── services/        → Layer komunikasi API (authAPI.jsx)
  ```

  ---

  ## 🔐 Sistem Autentikasi

  Menggunakan mekanisme **Protected Route** berbasis `localStorage`:

  ```jsx
  // Cek session login sebelum render halaman admin
  const user = localStorage.getItem("user");
  if (!user) return <Navigate to="/login" replace />;
  ```

  Semua halaman di zona admin (`/admin`, `/customers`, `/orders`, dll.) otomatis diarahkan ke `/login` jika pengguna belum terautentikasi.

  ---

  ## 🎨 Design System

  | Token | Nilai | Keterangan |
  |---|---|---|
  | `bloom` | `#879b54` | Warna aksen utama (hijau matcha) |
  | `dark` | `#6a7a40` | Hijau gelap hover |
  | `deeper` | `#2c3619` | Hijau sangat gelap |
  | `cream` | `#F3EBD8` | Latar background utama |
  | `pale` | `#f0f4e4` | Latar card ringan |
  | `ink` | `#2a2e1e` | Warna teks utama |

  **Tipografi:** `Outfit`, `DM Sans`, `Oswald` (Google Fonts)

  ---

  ## 🚀 Cara Menjalankan Project

  ```bash
  # Install dependencies
  npm install

  # Jalankan development server
  npm run dev

  # Build untuk production
  npm run build
  ```

  Server akan berjalan di: **http://localhost:5173**

  ---

  *© 2025 BloomBites Matcha House. Dokumentasi dibuat untuk keperluan akademik.*
