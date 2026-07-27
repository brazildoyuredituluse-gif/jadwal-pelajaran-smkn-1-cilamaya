# Papan Jadwal Hidup — SMKN 1 Cilamaya (versi statis, tanpa server)

**Sudah diisi data asli**: 30 kelas, 32 guru, 31 mapel/kegiatan, jadwal lengkap
Senin-Jumat untuk 2 siklus (Siklus 1: Juli-September, Siklus 2: Oktober-Desember),
diekstrak dari dokumen "Revisi 1 Jadwal Pembelajaran SMKN 1 Cilamaya 2026-2027.pdf".

⚠️ **Catatan soal ruang:** dokumen sumber tidak mencantumkan nomor ruang fisik
(cuma waktu + mapel + guru). Ruang tiap guru di `data.js` ditentukan **otomatis**
berdasarkan kategori mapel yang mereka ajar (pola "denah lama"), bukan data ruang
asli sekolah. Kalau ada yang tidak sesuai kenyataan, edit lewat `editor.html`
(bagian "Kelola Guru", ganti field ruang-nya).

Tidak ada database, tidak ada backend, tidak ada wrangler, tidak ada token API.
Semua data (kelas, guru, mapel, jadwal) ada di **satu file**: `public/js/data.js`.
Cara deploy: **upload folder `public/` ke Cloudflare Pages lewat drag & drop di
browser**. Selesai.


## Deploy (lewat HP, cukup browser, tidak perlu app lain)

1. Buka **dash.cloudflare.com** → **Workers & Pages**
2. Tap **Create application**
3. Cari opsi **"Upload assets"** / **"Deploy static assets"** / **drag and drop**
   (bukan "Continue with GitHub" — kita tidak perlu Git sama sekali untuk versi ini)
4. Beri nama project, misalnya `jadwal-sekolah`
5. **Upload isi folder `public/`** (semua file di dalamnya: `index.html`,
   `editor.html`, folder `css/`, folder `js/`) — kalau diminta zip, zip folder
   `public` lalu upload zip itu
6. Tap **Deploy**

Selesai! Cloudflare akan kasih link `namaproject.pages.dev` — buka, halaman
jadwal langsung tampil.

## Pasang domain .my.id

1. Di dashboard project ini → tab **Custom domains**
2. **Set up a custom domain** → masukkan domain/subdomain `.my.id` kamu
3. Tunggu sampai status **Active**

## Pemilih kelas & siklus (sudah diperbarui)
Dropdown panjang berisi 30 kelas sudah diganti dengan **panel pencarian** (tap
tombol "Kelas" → muncul kotak cari + tab X/XI/XII + grid kelas). Siklus sekarang
jadi **saklar 2 tombol** (Siklus 1 / Siklus 2), bukan dropdown lagi. Tidak perlu
setup tambahan, otomatis ikut ter-upload bareng folder `public/`.

## Membatasi editor.html supaya cuma admin yang bisa akses
Situs ini statis (tanpa login/database), jadi siapa pun yang tahu alamat
`editor.html` bisa membukanya. Tautan publik ke halaman itu sudah saya hapus
dari `index.html` supaya tidak gampang ditemukan pengunjung biasa — tapi itu
**bukan proteksi asli**, cuma menyembunyikan. Untuk proteksi beneran (butuh
login), pakai **Cloudflare Access** (gratis, semua lewat dashboard, bisa dari HP):

1. Buka **dash.cloudflare.com** → menu **Zero Trust** (kadang muncul sebagai
   "Access" di sidebar)
2. Kalau diminta setup Zero Trust pertama kali, pilih paket **Free** (sampai 50 user)
3. Masuk ke **Access → Applications** → **Add an application** → **Self-hosted**
4. Isi:
   - **Application domain**: `jadwal-pelajaran-smkn-1-cilamaya.jakk.my.id`
   - **Path**: `/editor.html`
5. Di bagian **Policies**, buat policy baru, action **Allow**, lalu tentukan
   siapa yang boleh masuk — paling gampang pakai **Emails**: masukkan email
   admin (misal email sekolah/gmail sendiri). Setiap kali admin buka
   `editor.html`, Cloudflare kirim **kode OTP ke email itu** sebelum halaman
   terbuka — tidak perlu bikin password atau akun baru.
6. Simpan. Sekarang `.../editor.html` akan minta verifikasi email dulu,
   sedangkan `index.html` (jadwal) tetap bisa diakses publik seperti biasa.

## Mengubah data (kelas, guru, mapel, jadwal)

1. Buka `https://domainmu.my.id/editor.html` di browser (atau buka file
   `editor.html` langsung dari HP/laptop tanpa internet juga bisa)
2. Atur kelas, guru, mapel, dan jadwal lewat form — otomatis tersimpan
   sementara di browser kamu selagi mengedit
3. Kalau sudah selesai, tap **"Buat kode data.js"**, lalu **Salin** atau
   **Download** hasilnya
4. **Ganti seluruh isi file `public/js/data.js`** dengan hasil tadi
5. **Upload ulang folder `public/`** ke project Cloudflare Pages kamu
   (di dashboard project → tap **Create deployment** → upload folder lagi)

Setiap kali kamu ubah jadwal, ulangi langkah 1–5 di atas.

## Kenapa dibikin sesederhana ini?
Karena sebelumnya kita sempat coba pakai database (Cloudflare D1) + backend
(Pages Functions) + login admin — tapi terkendala izin token API yang
berantakan di alur dashboard Cloudflare versi mobile. Versi ini sengaja
dibuat **tanpa server sama sekali**, supaya tidak ada urusan token/autentikasi
yang bisa gagal. Konsekuensinya: mengubah data butuh upload ulang folder
setiap kali (tidak ada "simpan otomatis" langsung ke server), tapi ini jauh
lebih stabil dan gampang dipakai di HP.

Kalau nanti kamu sudah nyaman dan mau versi dengan admin panel + database asli
(supaya edit data tidak perlu upload ulang), kabari saja — itu bisa dibuatkan
lagi belakangan, idealnya dikerjakan dari laptop/PC (jauh lebih lancar untuk
setup wrangler + D1 + token dibanding dari HP).
