# Kotak Aspirasi OSIS — SMA Negeri 6 Tanjungpinang

Website sederhana untuk:
- siswa mengirim aspirasi anonim atau publik;
- pengurus OSIS login;
- melihat semua aspirasi;
- mengubah status: Belum Dibaca → Diproses → Selesai;
- menghapus aspirasi yang tidak layak.

## Stack

- Next.js + React
- Supabase PostgreSQL
- Supabase Auth
- Row Level Security (RLS)
- Bisa di-host di GitHub + Vercel

## 1. Buat project Supabase

Buka https://supabase.com dan buat project baru.

Setelah project jadi:
1. Buka SQL Editor.
2. Buka file `supabase/schema.sql` dari repository ini.
3. Copy semua isinya.
4. Paste ke SQL Editor.
5. Klik Run.

## 2. Buat akun admin

Di Supabase:
1. Authentication → Users.
2. Add user.
3. Buat email dan password untuk pengurus OSIS.
4. Pastikan email tersebut sama persis dengan email yang akan dimasukkan ke tabel admin_users.

Kemudian buka SQL Editor dan jalankan:

```sql
insert into public.admin_users (email)
values ('email-admin-kamu@example.com');
```

Ganti email tersebut dengan email admin.

## 3. Ambil URL dan key

Supabase → Project Settings → API.

Salin:
- Project URL
- Publishable key

Buat file `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=URL_SUPABASE_KAMU
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=PUBLISHABLE_KEY_KAMU
```

Jangan masukkan secret key/service_role key ke frontend.

## 4. Jalankan di komputer

Install Node.js LTS terlebih dahulu.

Kemudian:

```bash
npm install
npm run dev
```

Buka:

http://localhost:3000

Admin:

http://localhost:3000/admin/login

## 5. Upload ke GitHub

Buat repository baru, misalnya:

`kotak-aspirasi-osis`

Upload seluruh isi project kecuali:
- `.env.local`
- `node_modules`
- `.next`

GitHub tidak boleh berisi password atau secret key.

## 6. Deploy ke Vercel

1. Buka https://vercel.com
2. Import repository GitHub.
3. Pada Environment Variables masukkan:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
4. Deploy.

## Keamanan anonim

Saat siswa memilih Anonim, frontend mengirim:

- `student_name = null`
- `student_class = null`

Jadi nama/kelas tidak disimpan untuk pengiriman anonim.

Selain itu, RLS membuat tabel aspirasi tidak dapat dibaca oleh pengunjung biasa. Hanya email yang dimasukkan ke `admin_users` yang dapat membaca/mengubah/menghapus data.

Tetap ingat: jangan meminta data sensitif yang sebenarnya tidak dibutuhkan untuk pengelolaan aspirasi.

## Tampilan website

Logo yang digunakan berasal dari logo OSIS yang diberikan untuk project ini dan
diletakkan di `public/logo-osis.jpg`.

Halaman:
- `/` — Beranda
- `/aspirasi` — Form Kotak Aspirasi
- `/tentang` — Tentang OSIS
- `/admin/login` — Login pengurus
- `/admin` — Dashboard pengurus

## GitHub + Vercel

Setelah repository GitHub dibuat, import repository tersebut ke Vercel.
Tambahkan dua Environment Variables yang sama dengan `.env.local`:

`NEXT_PUBLIC_SUPABASE_URL`
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Setelah deploy, uji dua hal:
1. Kirim satu aspirasi anonim dari halaman siswa.
2. Login admin dan pastikan aspirasi tersebut terlihat tanpa nama/kelas.

Jangan mengubah RLS menjadi terbuka hanya agar aplikasi terlihat bekerja.
