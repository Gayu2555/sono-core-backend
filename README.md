# API Musik Database dengan ElysiaJS (Read-Only)

API ini mengimplementasikan akses ke database musik yang terdiri dari tabel artists, albums, dan music menggunakan ElysiaJS dan Prisma ORM.

## Fitur

- **Read-Only API**: Hanya mendukung operasi GET
- **Rate Limiting**: Membatasi jumlah request ke API
- **Debounce**: Mengoptimalkan pencarian dengan mengurangi jumlah query ke database
- **Full Text Search**: Pencarian teks lengkap menggunakan LIKE operator

## Teknologi

- **ElysiaJS**: Framework API yang ringan dan cepat
- **Prisma ORM**: ORM untuk akses database
- **MySQL**: Database untuk menyimpan data musik
- **Bun**: JavaScript runtime yang cepat

## Struktur Database

### Artists

- id: ID unik artis
- name: Nama artis
- bio: Biografi artis (opsional)
- image: URL gambar artis (opsional)
- created_at: Waktu pembuatan
- updated_at: Waktu pembaruan

### Albums

- id: ID unik album
- title: Judul album
- artist_id: ID artis (foreign key)
- release_year: Tahun rilis (opsional)
- cover_image: URL gambar cover album (opsional)
- description: Deskripsi album (opsional)
- created_at: Waktu pembuatan
- updated_at: Waktu pembaruan

### Music

- id: ID unik musik
- title: Judul musik
- album_id: ID album (foreign key)
- artist_id: ID artis (foreign key)
- duration: Durasi musik (opsional)
- genre: Genre musik (opsional)
- api_url: URL API untuk streaming musik
- created_at: Waktu pembuatan
- updated_at: Waktu pembaruan

## Endpoint API

### Artists

- `GET /api/artists` - Mendapatkan semua artis
- `GET /api/artists/search?q=query` - Mencari artis berdasarkan kata kunci
- `GET /api/artists/:id` - Mendapatkan artis berdasarkan ID
- `GET /api/images/artists/:filename` - Mengambil gambar artis dari penyimpanan

### Albums

- `GET /api/albums` - Mendapatkan semua album
- `GET /api/albums/search?q=query` - Mencari album berdasarkan kata kunci
- `GET /api/albums/:id` - Mendapatkan album berdasarkan ID
- `GET /api/images/albums/:filename` - Mengambil gambar album dari penyimpanan

### Music

- `GET /api/music` - Mendapatkan semua musik
- `GET /api/music/search?q=query` - Mencari musik berdasarkan kata kunci
- `GET /api/music/:id` - Mendapatkan musik berdasarkan ID

## Penggunaan

### Instalasi

```bash
# Install dependencies
bun install

# Setup database
npx prisma generate
```

### Konfigurasi Database

Edit file `.env` dan sesuaikan dengan konfigurasi database MySQL Anda:

```
DATABASE_URL="mysql://user:password@localhost:3306/music_db"
```

### Menjalankan Server

```bash
bun run index.ts
```

Server akan berjalan di `http://localhost:3000`

### Contoh Penggunaan API

#### Mendapatkan semua artis

```
GET http://localhost:3000/api/artists
```

#### Mencari album berdasarkan kata kunci

```
GET http://localhost:3000/api/albums/search?q=rock
```

#### Mendapatkan detail musik berdasarkan ID

```
GET http://localhost:3000/api/music/1
```

## Rate Limiting

API ini menerapkan pembatasan rate dengan konfigurasi:

- Maksimum 100 request dalam 15 menit per IP
- Pesan error akan ditampilkan jika batas terlampaui

## Debounce

Fitur debounce diterapkan pada endpoint pencarian dengan delay 300ms untuk mengoptimalkan performa dan mengurangi beban server.
