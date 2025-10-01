# 🥱 I'm Bored - Activity Finder

Ini adalah aplikasi web dinamis yang dibangun menggunakan **Node.js, Express.js, dan EJS**. Aplikasi ini terhubung dengan **Bored API** eksternal untuk membantu pengguna menemukan ide aktivitas acak saat mereka merasa bosan. Proyek ini mendemonstrasikan integrasi API, penanganan permintaan asinkron, dan rendering konten dinamis di sisi server.

---

## 🎯 Overview
Aplikasi ini dirancang untuk memberikan solusi cepat bagi kebosanan. Saat halaman pertama kali dimuat, aplikasi akan langsung mengambil dan menampilkan satu aktivitas acak dari API. Pengguna kemudian dapat menggunakan filter berdasarkan **tipe aktivitas** dan **jumlah peserta** untuk mendapatkan saran yang lebih spesifik sesuai keinginan mereka.

---

## ✨ Fitur
- **Aktivitas Acak Saat Memuat**: Secara otomatis menampilkan saran aktivitas acak saat pengguna mengunjungi situs.
- **Pencarian Berdasarkan Filter**: Memungkinkan pengguna untuk menyaring aktivitas berdasarkan kategori (misalnya Edukasi, Sosial, dll.) dan jumlah orang yang terlibat.
- **Integrasi API**: Menggunakan `axios` untuk melakukan permintaan `GET` asinkron ke Bored API.
- **Tampilan Konten Dinamis**: Menggunakan EJS untuk menampilkan data aktivitas yang diterima dari API atau menampilkan pesan error jika tidak ada aktivitas yang cocok.
- **UI yang Disempurnakan**: Menggunakan Bootstrap untuk styling dasar dan Select2 untuk meningkatkan fungsionalitas dropdown, yang dimuat melalui CDN.

---

## 🛠️ Teknologi yang Digunakan
- **Node.js** → Runtime JavaScript di sisi server.
- **Express.js** → Framework web untuk menangani routing dan middleware.
- **EJS (Embedded JavaScript Templates)** → Template engine untuk me-render HTML secara dinamis.
- **Axios** → HTTP client berbasis Promise untuk berkomunikasi dengan API eksternal.
- **Body-parser** → Middleware untuk mem-parsing data dari form.
- **Bootstrap & Select2** → Library frontend untuk styling dan komponen UI.

---

## 📂 Struktur Proyek
```bash
im-bored-project/
│── public/
│   └── styles/
│       └── main.css
│── views/
│   └── index.ejs
│── index.js          # Logika server Express & interaksi API
│── package.json      # Konfigurasi Node.js & dependencies
└── vercel.json       # Konfigurasi deployment untuk Vercel
```

## 🚀 Cara Instalasi & Menjalankan
1. **Clone Repository**
```bash
git clone https://github.com/AkbarAj09/project_activity_do.git
```
2. **Install**
```bash
npm install
```
3. **Running**
```bash
npm run start
```

## Routes
```bash
GET /       → Mengambil aktivitas acak dan me-render halaman awal.
POST /      → Memproses filter dari form, mengambil aktivitas yang sesuai, dan me-render ulang halaman.
```

## 👨‍💻 Author
Edited by **Akbar Abdurrahman**