// =====================================================================
// SEMUA DATA JADWAL SMKN 1 CILAMAYA (Tahun Pelajaran 2026-2027) ADA DI SINI.
// Diekstrak dari "Revisi 1 Jadwal Pembelajaran SMKN 1 Cilamaya 2026-2027.pdf".
//
// CATATAN PENTING SOAL RUANG: PDF sumbernya TIDAK berisi data ruang fisik
// (cuma waktu + mapel + guru). Ruang di bawah ini ditentukan otomatis
// berdasarkan kategori mapel (mengikuti pola "denah lama"), BUKAN data
// ruang asli dari sekolah. Kalau ruangnya tidak sesuai kenyataan, edit
// field roomId di bagian "teachers" di bawah, atau lewat editor.html.
//
// Untuk mengubah data, buka editor.html, atau edit langsung file ini lalu
// upload ulang folder ke Cloudflare Pages.
// =====================================================================

window.SCHOOL_DATA = {

  // ---- Denah ruang (posisi grid CSS) ----
  rooms: [
    { id:'k20', gridArea:'k20', label:'Ruang Kelas 20', category:'ap', isFacility:false },
    { id:'kolam1', gridArea:'kolam1', label:'Kolam', category:null, isFacility:true },
    { id:'k19', gridArea:'k19', label:'Ruang Kelas 19', category:'bing', isFacility:false },
    { id:'k18', gridArea:'k18', label:'Ruang Kelas 18', category:'bing', isFacility:false },
    { id:'urs', gridArea:'urs', label:'URS', category:null, isFacility:true },
    { id:'k17', gridArea:'k17', label:'Ruang Kelas 17', category:'bing', isFacility:false },
    { id:'labinfo', gridArea:'labinfo', label:'Lab. Informatika & Bahasa', category:'info', isFacility:false },
    { id:'guru', gridArea:'guru', label:'Ruang Guru', category:null, isFacility:true },
    { id:'toilet1', gridArea:'toilet1', label:'Toilet', category:null, isFacility:true },
    { id:'rapat', gridArea:'rapat', label:'Ruang Rapat', category:null, isFacility:true },
    { id:'rpstkj', gridArea:'rpstkj', label:'RPS TKJ', category:'tkj', isFacility:false },
    { id:'k21', gridArea:'k21', label:'Ruang Kelas 21', category:'bindo', isFacility:false },
    { id:'bkk', gridArea:'bkk', label:'Ruang BKK', category:null, isFacility:true },
    { id:'k22', gridArea:'k22', label:'Ruang Kelas 22', category:'bindo', isFacility:false },
    { id:'koperasi', gridArea:'koperasi', label:'Koperasi', category:null, isFacility:true },
    { id:'perpus', gridArea:'perpus', label:'Ruang Perpustakaan', category:null, isFacility:true },
    { id:'k1', gridArea:'k1', label:'Ruang Kelas 1', category:'tkj', isFacility:false },
    { id:'k23', gridArea:'k23', label:'Ruang Kelas 23', category:'bindo', isFacility:false },
    { id:'kolam2', gridArea:'kolam2', label:'Kolam', category:null, isFacility:true },
    { id:'toilet2', gridArea:'toilet2', label:'Toilet', category:null, isFacility:true },
    { id:'labipa', gridArea:'labipa', label:'Laboratorium IPA', category:null, isFacility:true },
    { id:'k2', gridArea:'k2', label:'Ruang Kelas 2', category:'pjok', isFacility:false },
    { id:'lap', gridArea:'lap', label:'Lapangan', category:null, isFacility:true },
    { id:'toilet3', gridArea:'toilet3', label:'Toilet', category:null, isFacility:true },
    { id:'k8', gridArea:'k8', label:'Ruang Kelas 8', category:'bindo', isFacility:false },
    { id:'k7', gridArea:'k7', label:'Ruang Kelas 7', category:'pipas', isFacility:false },
    { id:'k6', gridArea:'k6', label:'Ruang Kelas 6', category:'pipas', isFacility:false },
    { id:'k5', gridArea:'k5', label:'Ruang Kelas 5', category:'kik', isFacility:false },
    { id:'k4', gridArea:'k4', label:'Ruang Kelas 4', category:'kik', isFacility:false },
    { id:'k3', gridArea:'k3', label:'Ruang Kelas 3', category:'kik', isFacility:false },
    { id:'coe', gridArea:'coe', label:'Ruang COE', category:'agama', isFacility:false },
    { id:'tpa', gridArea:'tpa', label:'TPA', category:null, isFacility:true },
    { id:'rpstkr', gridArea:'rpstkr', label:'RPS TKR', category:'tkr', isFacility:false },
    { id:'k16', gridArea:'k16', label:'Ruang Kelas 16', category:'tkr', isFacility:false },
    { id:'k15', gridArea:'k15', label:'Ruang Kelas 15', category:'tkr', isFacility:false },
    { id:'k14', gridArea:'k14', label:'Ruang Kelas 14', category:'tp', isFacility:false },
    { id:'k13', gridArea:'k13', label:'Ruang Kelas 13', category:'aphp', isFacility:false },
    { id:'k12', gridArea:'k12', label:'Ruang Kelas 12', category:'ap', isFacility:false },
    { id:'bkuks', gridArea:'bkuks', label:'Rencana Ajuan Ruang BK & UKS', category:null, isFacility:true },
    { id:'k11', gridArea:'k11', label:'Ruang Kelas 11', category:'mtk', isFacility:false },
    { id:'k10', gridArea:'k10', label:'Ruang Kelas 10', category:'mtk', isFacility:false },
    { id:'k9', gridArea:'k9', label:'Ruang Kelas 9', category:'mtk', isFacility:false },
    { id:'kolam3', gridArea:'kolam3', label:'Kolam', category:null, isFacility:true },
    { id:'rencanaap', gridArea:'rencanaap', label:'Rencana Ajuan RPS AP', category:null, isFacility:true },
    { id:'rpsaphp', gridArea:'rpsaphp', label:'RPS APHP', category:'aphp', isFacility:false },
    { id:'rpstp', gridArea:'rpstp', label:'RPS Teknik Pemesinan', category:'tp', isFacility:false },
    { id:'k24', gridArea:'k24', label:'Ruang Kelas 24', category:'k3', isFacility:false },
    { id:'toilet4', gridArea:'toilet4', label:'Toilet', category:null, isFacility:true },
    { id:'rpsap', gridArea:'rpsap', label:'RPS AP', category:'ap', isFacility:false },
    { id:'ruangserba', gridArea:'ruangserba', label:'Ruang Tambahan', category:null, isFacility:true },
    { id:'kepsek', gridArea:'kepsek', label:'Ruang Kepala Sekolah', category:null, isFacility:true },
    { id:'gudang', gridArea:'gudang', label:'Gudang', category:null, isFacility:true },
    { id:'tu', gridArea:'tu', label:'Ruang Tata Usaha', category:null, isFacility:true },
  ],

  // ---- Jam pelajaran (dipakai bersama semua kelas) ----
  slots: [
    { key:'upacara', label:'Upacara/Apel & MBG', start:'06:30', end:'07:30' },
    { key:'j1', label:'Jam 1', start:'07:30', end:'08:10' },
    { key:'j2', label:'Jam 2', start:'08:10', end:'08:50' },
    { key:'j3', label:'Jam 3', start:'08:50', end:'09:30' },
    { key:'istirahat', label:'Istirahat', start:'09:30', end:'09:45' },
    { key:'j4', label:'Jam 4', start:'09:45', end:'10:25' },
    { key:'j5', label:'Jam 5', start:'10:25', end:'11:05' },
    { key:'j6', label:'Jam 6', start:'11:05', end:'11:45' },
    { key:'ishoma', label:'Ishoma', start:'11:45', end:'12:45' },
    { key:'j7', label:'Jam 7', start:'12:45', end:'13:25' },
    { key:'j8', label:'Jam 8', start:'13:25', end:'14:05' },
    { key:'j9', label:'Jam 9', start:'14:05', end:'14:45' },
  ],

  // ---- 30 kelas (nama sesuai dokumen sumber) ----
  classes: [
  {
    "id": 1,
    "name": "X AP"
  },
  {
    "id": 2,
    "name": "XI AP"
  },
  {
    "id": 3,
    "name": "XII AP"
  },
  {
    "id": 4,
    "name": "X APHP 1"
  },
  {
    "id": 5,
    "name": "X APHP 2"
  },
  {
    "id": 6,
    "name": "XI APHP 1"
  },
  {
    "id": 7,
    "name": "XI APHP 2"
  },
  {
    "id": 8,
    "name": "XII APHP"
  },
  {
    "id": 9,
    "name": "X TO 1"
  },
  {
    "id": 10,
    "name": "X TO 2"
  },
  {
    "id": 11,
    "name": "X TO 3"
  },
  {
    "id": 12,
    "name": "XI TKR 1"
  },
  {
    "id": 13,
    "name": "XI TKR 2"
  },
  {
    "id": 14,
    "name": "XI TKR 3"
  },
  {
    "id": 15,
    "name": "XII TKR 1"
  },
  {
    "id": 16,
    "name": "XII TKR 2"
  },
  {
    "id": 17,
    "name": "XII TKR 3"
  },
  {
    "id": 18,
    "name": "X TJKT 1"
  },
  {
    "id": 19,
    "name": "X TJKT 2"
  },
  {
    "id": 20,
    "name": "XI TKJ 1"
  },
  {
    "id": 21,
    "name": "XI TKJ 2"
  },
  {
    "id": 22,
    "name": "XII TKJ 1"
  },
  {
    "id": 23,
    "name": "XII TKJ 2"
  },
  {
    "id": 24,
    "name": "XII TKJ 3"
  },
  {
    "id": 25,
    "name": "X TM 1"
  },
  {
    "id": 26,
    "name": "X TM 2"
  },
  {
    "id": 27,
    "name": "XI TP 1"
  },
  {
    "id": 28,
    "name": "XI TP 2"
  },
  {
    "id": 29,
    "name": "XII TP 1"
  },
  {
    "id": 30,
    "name": "XII TP 2"
  }
],

  // ---- 32 guru. roomId = ruang yang menyala saat guru ini mengajar
  // (ditentukan otomatis dari kategori mapel yang mereka ajar). ----
  teachers: [
  {
    "id": 1,
    "name": "Ary Dwijayanti, S.Pd.",
    "roomId": "k11"
  },
  {
    "id": 2,
    "name": "Asep Rida Rosmana, S.Pi.",
    "roomId": "k20"
  },
  {
    "id": 3,
    "name": "Azzah Fitria, S.Pd.",
    "roomId": "rpstkj"
  },
  {
    "id": 4,
    "name": "Cahya Komaruddin, S.Kom.",
    "roomId": "k1"
  },
  {
    "id": 5,
    "name": "Dadan Ramdana, S.Kom",
    "roomId": "rpstkj"
  },
  {
    "id": 6,
    "name": "Dian Astuti, S.T.",
    "roomId": "k14"
  },
  {
    "id": 7,
    "name": "Diana Handi, S.Pd.",
    "roomId": "k1"
  },
  {
    "id": 8,
    "name": "Dinda Syifa Fauziah, S.Pd.I",
    "roomId": "coe"
  },
  {
    "id": 9,
    "name": "Ema Susanti, S.Pd.",
    "roomId": "k10"
  },
  {
    "id": 10,
    "name": "Eman Hastopo, S.T.",
    "roomId": "rpstp"
  },
  {
    "id": 11,
    "name": "Eni, S.Pd.",
    "roomId": "k19"
  },
  {
    "id": 12,
    "name": "Enung Herayati, S.Pd.",
    "roomId": "k21"
  },
  {
    "id": 13,
    "name": "Gina Mardiana, S.Kom.",
    "roomId": "rpstkj"
  },
  {
    "id": 14,
    "name": "Harry Tovanny, S.Pd.",
    "roomId": "rpstkr"
  },
  {
    "id": 15,
    "name": "Ibnu Ubaidillah, S.Pd.",
    "roomId": "k16"
  },
  {
    "id": 16,
    "name": "Irda Lulita Sari, S.Pd.",
    "roomId": "guru"
  },
  {
    "id": 17,
    "name": "Marini, S.Pd.",
    "roomId": "k18"
  },
  {
    "id": 18,
    "name": "Mashanuddin, S.Pd.",
    "roomId": "k15"
  },
  {
    "id": 19,
    "name": "Moch. Suef, S.Pi.",
    "roomId": "k13"
  },
  {
    "id": 20,
    "name": "Muhamad Nashrulloh, S.Pd.",
    "roomId": "k14"
  },
  {
    "id": 21,
    "name": "Neneng Nurhasanah, S.Pd.",
    "roomId": "k17"
  },
  {
    "id": 22,
    "name": "Nunung Nurilah, S.Pd.",
    "roomId": "rpstkr"
  },
  {
    "id": 23,
    "name": "Putri Pertiwi, S.Pi.",
    "roomId": "k12"
  },
  {
    "id": 24,
    "name": "Ratum, S.T.",
    "roomId": "rpsaphp"
  },
  {
    "id": 25,
    "name": "Rian Hidayat, S.T.",
    "roomId": "k16"
  },
  {
    "id": 26,
    "name": "Rini Martyaning Diyah, S.Pi.",
    "roomId": "k13"
  },
  {
    "id": 27,
    "name": "Rohmi Ikhtarini, S.Pd.",
    "roomId": "k9"
  },
  {
    "id": 28,
    "name": "Siti Wradiyah, S.Si.",
    "roomId": "k1"
  },
  {
    "id": 29,
    "name": "Syamsul Bahri, S.Pd.",
    "roomId": "k15"
  },
  {
    "id": 30,
    "name": "Teti Fatmawaty F, S.Pd.",
    "roomId": "rpstkr"
  },
  {
    "id": 31,
    "name": "Triya Setyawati, S.Pd.",
    "roomId": "rpstkj"
  },
  {
    "id": 32,
    "name": "Wahyu Purnomo, S.Pd.",
    "roomId": "k16"
  }
],

  // ---- 31 mapel/kegiatan. lightRoomId = kegiatan tanpa guru tetap yang
  // tetap menyalakan ruang tertentu (mis. Ekskul/Senam -> Lapangan). ----
  subjects: [
  {
    "code": "AP",
    "name": "Agribisnis Perikanan"
  },
  {
    "code": "APHP",
    "name": "Agribisnis Pengolahan Hasil Pertanian"
  },
  {
    "code": "B.IND",
    "name": "Bahasa Indonesia"
  },
  {
    "code": "B.ING",
    "name": "Bahasa Inggris"
  },
  {
    "code": "BK",
    "name": "Bimbingan Bekerja",
    "lightRoomId": "bkk"
  },
  {
    "code": "EKSKUL",
    "name": "Ekstrakurikuler",
    "lightRoomId": "lap"
  },
  {
    "code": "ENGCLUB",
    "name": "English Club"
  },
  {
    "code": "GMS",
    "name": "Gerakan Memungut Sampah",
    "lightRoomId": "lap"
  },
  {
    "code": "INFO",
    "name": "Informatika"
  },
  {
    "code": "KEBERSIHAN",
    "name": "Kebersihan & Apel Sore"
  },
  {
    "code": "KIK-AP",
    "name": "KIK Agribisnis Perikanan"
  },
  {
    "code": "KIK-APHP",
    "name": "KIK APHP"
  },
  {
    "code": "KIK-TKJ",
    "name": "KIK TKJ"
  },
  {
    "code": "KIK-TKR",
    "name": "KIK Teknik Otomotif"
  },
  {
    "code": "KIK-TP",
    "name": "KIK Teknik Pemesinan"
  },
  {
    "code": "KOMBEL",
    "name": "Kombel Seni Budaya & Bahasa Sunda"
  },
  {
    "code": "LITERASI",
    "name": "Literasi"
  },
  {
    "code": "MTK",
    "name": "Matematika"
  },
  {
    "code": "NUMERASI",
    "name": "Numerasi"
  },
  {
    "code": "PABP",
    "name": "Pendidikan Agama & Budi Pekerti"
  },
  {
    "code": "PIPAS",
    "name": "PIPAS"
  },
  {
    "code": "PJOK",
    "name": "PJOK"
  },
  {
    "code": "PKL",
    "name": "Laporan PKL"
  },
  {
    "code": "PKN",
    "name": "PKN"
  },
  {
    "code": "REFLEKSI",
    "name": "Refleksi Mandiri"
  },
  {
    "code": "SEJ",
    "name": "Sejarah"
  },
  {
    "code": "SENAM",
    "name": "Senam Pagi",
    "lightRoomId": "lap"
  },
  {
    "code": "TKJ",
    "name": "Teknik Jaringan Komputer"
  },
  {
    "code": "TKR",
    "name": "Teknik Kendaraan Ringan"
  },
  {
    "code": "TP",
    "name": "Teknik Pemesinan"
  },
  {
    "code": "WALI",
    "name": "Wali Kelas"
  }
],

  // ---- Jadwal per kelas per SIKLUS (Siklus 1 = Juli-September,
  // Siklus 2 = Oktober-Desember; jadwalnya beda di 2 periode ini). ----
  // schedule[classId][siklus][hari][jam] = { subject, teacher }
  schedule: {
  "1": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "WALI",
          "teacher": 2
        },
        "j8": {
          "subject": "WALI",
          "teacher": 2
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "AP",
          "teacher": 2
        },
        "j5": {
          "subject": "AP",
          "teacher": 2
        },
        "j6": {
          "subject": "AP",
          "teacher": 2
        },
        "j7": {
          "subject": "AP",
          "teacher": 2
        },
        "j8": {
          "subject": "AP",
          "teacher": 2
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "AP",
          "teacher": 2
        },
        "j2": {
          "subject": "AP",
          "teacher": 2
        },
        "j3": {
          "subject": "AP",
          "teacher": 2
        },
        "j4": {
          "subject": "AP",
          "teacher": 23
        },
        "j5": {
          "subject": "AP",
          "teacher": 23
        },
        "j6": {
          "subject": "AP",
          "teacher": 23
        },
        "j7": {
          "subject": "AP",
          "teacher": 23
        },
        "j8": {
          "subject": "AP",
          "teacher": 23
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "AP",
          "teacher": 23
        },
        "j2": {
          "subject": "AP",
          "teacher": 23
        },
        "j3": {
          "subject": "AP",
          "teacher": 23
        },
        "j4": {
          "subject": "AP",
          "teacher": 23
        },
        "j5": {
          "subject": "AP",
          "teacher": 23
        },
        "j6": {
          "subject": "AP",
          "teacher": 23
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j7": {
          "subject": "WALI",
          "teacher": 2
        },
        "j8": {
          "subject": "WALI",
          "teacher": 2
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "MTK",
          "teacher": 27
        },
        "j2": {
          "subject": "MTK",
          "teacher": 27
        },
        "j3": {
          "subject": "MTK",
          "teacher": 27
        },
        "j4": {
          "subject": "INFO",
          "teacher": 23
        },
        "j5": {
          "subject": "INFO",
          "teacher": 23
        },
        "j6": {
          "subject": "INFO",
          "teacher": 23
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "2": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j5": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j6": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "KIK-AP",
          "teacher": 23
        },
        "j2": {
          "subject": "KIK-AP",
          "teacher": 23
        },
        "j3": {
          "subject": "KIK-AP",
          "teacher": 23
        },
        "j4": {
          "subject": "MTK",
          "teacher": 9
        },
        "j5": {
          "subject": "MTK",
          "teacher": 9
        },
        "j6": {
          "subject": "MTK",
          "teacher": 9
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j7": {
          "subject": "WALI",
          "teacher": 28
        },
        "j8": {
          "subject": "WALI",
          "teacher": 28
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 29
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 29
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 29
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "AP",
          "teacher": 23
        },
        "j2": {
          "subject": "AP",
          "teacher": 23
        },
        "j3": {
          "subject": "AP",
          "teacher": 23
        },
        "j4": {
          "subject": "AP",
          "teacher": 23
        },
        "j5": {
          "subject": "AP",
          "teacher": 23
        },
        "j6": {
          "subject": "AP",
          "teacher": 23
        },
        "j7": {
          "subject": "WALI",
          "teacher": 28
        },
        "j8": {
          "subject": "WALI",
          "teacher": 28
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "AP",
          "teacher": 2
        },
        "j6": {
          "subject": "AP",
          "teacher": 2
        },
        "j7": {
          "subject": "AP",
          "teacher": 2
        },
        "j8": {
          "subject": "AP",
          "teacher": 2
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "AP",
          "teacher": 23
        },
        "j2": {
          "subject": "AP",
          "teacher": 23
        },
        "j3": {
          "subject": "AP",
          "teacher": 23
        },
        "j4": {
          "subject": "AP",
          "teacher": 2
        },
        "j5": {
          "subject": "AP",
          "teacher": 2
        },
        "j6": {
          "subject": "AP",
          "teacher": 2
        },
        "j7": {
          "subject": "AP",
          "teacher": 2
        },
        "j8": {
          "subject": "AP",
          "teacher": 2
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "AP",
          "teacher": 2
        },
        "j2": {
          "subject": "AP",
          "teacher": 2
        },
        "j3": {
          "subject": "AP",
          "teacher": 2
        },
        "j4": {
          "subject": "AP",
          "teacher": 23
        },
        "j5": {
          "subject": "AP",
          "teacher": 23
        },
        "j6": {
          "subject": "AP",
          "teacher": 23
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "3": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "AP",
          "teacher": 23
        },
        "j2": {
          "subject": "AP",
          "teacher": 23
        },
        "j3": {
          "subject": "AP",
          "teacher": 23
        },
        "j4": {
          "subject": "AP",
          "teacher": 23
        },
        "j5": {
          "subject": "AP",
          "teacher": 23
        },
        "j6": {
          "subject": "AP",
          "teacher": 23
        },
        "j7": {
          "subject": "WALI",
          "teacher": 23
        },
        "j8": {
          "subject": "WALI",
          "teacher": 23
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "AP",
          "teacher": 23
        },
        "j6": {
          "subject": "AP",
          "teacher": 23
        },
        "j7": {
          "subject": "AP",
          "teacher": 23
        },
        "j8": {
          "subject": "AP",
          "teacher": 23
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "AP",
          "teacher": 23
        },
        "j2": {
          "subject": "AP",
          "teacher": 23
        },
        "j3": {
          "subject": "AP",
          "teacher": 23
        },
        "j4": {
          "subject": "AP",
          "teacher": 2
        },
        "j5": {
          "subject": "AP",
          "teacher": 2
        },
        "j6": {
          "subject": "AP",
          "teacher": 2
        },
        "j7": {
          "subject": "AP",
          "teacher": 2
        },
        "j8": {
          "subject": "AP",
          "teacher": 2
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "AP",
          "teacher": 2
        },
        "j2": {
          "subject": "AP",
          "teacher": 2
        },
        "j3": {
          "subject": "AP",
          "teacher": 2
        },
        "j4": {
          "subject": "AP",
          "teacher": 2
        },
        "j5": {
          "subject": "AP",
          "teacher": 2
        },
        "j6": {
          "subject": "AP",
          "teacher": 2
        },
        "j7": {
          "subject": "AP",
          "teacher": 2
        },
        "j8": {
          "subject": "AP",
          "teacher": 2
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "MTK",
          "teacher": 9
        },
        "j2": {
          "subject": "MTK",
          "teacher": 9
        },
        "j3": {
          "subject": "MTK",
          "teacher": 9
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j7": {
          "subject": "PKL",
          "teacher": 23
        },
        "j8": {
          "subject": "PKL",
          "teacher": 23
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j2": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j3": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j7": {
          "subject": "WALI",
          "teacher": 23
        },
        "j8": {
          "subject": "WALI",
          "teacher": 23
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j2": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j3": {
          "subject": "KIK-AP",
          "teacher": 2
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j7": {
          "subject": "WALI",
          "teacher": 23
        },
        "j8": {
          "subject": "WALI",
          "teacher": 23
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "MTK",
          "teacher": 9
        },
        "j2": {
          "subject": "MTK",
          "teacher": 9
        },
        "j3": {
          "subject": "MTK",
          "teacher": 9
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j7": {
          "subject": "PKL",
          "teacher": 23
        },
        "j8": {
          "subject": "PKL",
          "teacher": 23
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "4": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "INFO",
          "teacher": 24
        },
        "j2": {
          "subject": "INFO",
          "teacher": 24
        },
        "j3": {
          "subject": "INFO",
          "teacher": 24
        },
        "j4": {
          "subject": "MTK",
          "teacher": 27
        },
        "j5": {
          "subject": "MTK",
          "teacher": 27
        },
        "j6": {
          "subject": "MTK",
          "teacher": 27
        },
        "j7": {
          "subject": "WALI",
          "teacher": 26
        },
        "j8": {
          "subject": "WALI",
          "teacher": 26
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PABP",
          "teacher": 8
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "PKN",
          "teacher": 16
        },
        "j6": {
          "subject": "PKN",
          "teacher": 16
        },
        "j7": {
          "subject": "APHP",
          "teacher": 24
        },
        "j8": {
          "subject": "APHP",
          "teacher": 24
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "APHP",
          "teacher": 24
        },
        "j5": {
          "subject": "APHP",
          "teacher": 24
        },
        "j6": {
          "subject": "APHP",
          "teacher": 24
        },
        "j7": {
          "subject": "APHP",
          "teacher": 24
        },
        "j8": {
          "subject": "APHP",
          "teacher": 24
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "APHP",
          "teacher": 24
        },
        "j2": {
          "subject": "APHP",
          "teacher": 24
        },
        "j3": {
          "subject": "APHP",
          "teacher": 24
        },
        "j4": {
          "subject": "APHP",
          "teacher": 19
        },
        "j5": {
          "subject": "APHP",
          "teacher": 19
        },
        "j6": {
          "subject": "APHP",
          "teacher": 19
        },
        "j7": {
          "subject": "WALI",
          "teacher": 26
        },
        "j8": {
          "subject": "WALI",
          "teacher": 26
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "APHP",
          "teacher": 24
        },
        "j2": {
          "subject": "APHP",
          "teacher": 24
        },
        "j3": {
          "subject": "APHP",
          "teacher": 24
        },
        "j4": {
          "subject": "APHP",
          "teacher": 26
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "5": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "WALI",
          "teacher": 19
        },
        "j8": {
          "subject": "WALI",
          "teacher": 19
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "APHP",
          "teacher": 26
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "APHP",
          "teacher": 26
        },
        "j8": {
          "subject": "APHP",
          "teacher": 26
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "APHP",
          "teacher": 19
        },
        "j2": {
          "subject": "APHP",
          "teacher": 19
        },
        "j3": {
          "subject": "APHP",
          "teacher": 19
        },
        "j4": {
          "subject": "APHP",
          "teacher": 24
        },
        "j5": {
          "subject": "APHP",
          "teacher": 24
        },
        "j6": {
          "subject": "APHP",
          "teacher": 24
        },
        "j7": {
          "subject": "APHP",
          "teacher": 24
        },
        "j8": {
          "subject": "APHP",
          "teacher": 24
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "APHP",
          "teacher": 24
        },
        "j2": {
          "subject": "APHP",
          "teacher": 24
        },
        "j3": {
          "subject": "APHP",
          "teacher": 24
        },
        "j4": {
          "subject": "APHP",
          "teacher": 24
        },
        "j5": {
          "subject": "APHP",
          "teacher": 24
        },
        "j6": {
          "subject": "APHP",
          "teacher": 24
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "INFO",
          "teacher": 24
        },
        "j2": {
          "subject": "INFO",
          "teacher": 24
        },
        "j3": {
          "subject": "INFO",
          "teacher": 24
        },
        "j4": {
          "subject": "MTK",
          "teacher": 27
        },
        "j5": {
          "subject": "MTK",
          "teacher": 27
        },
        "j6": {
          "subject": "MTK",
          "teacher": 27
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j7": {
          "subject": "WALI",
          "teacher": 19
        },
        "j8": {
          "subject": "WALI",
          "teacher": 19
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 27
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "6": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j5": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j6": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j2": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j3": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j7": {
          "subject": "WALI",
          "teacher": 24
        },
        "j8": {
          "subject": "WALI",
          "teacher": 24
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "MTK",
          "teacher": 27
        },
        "j2": {
          "subject": "MTK",
          "teacher": 27
        },
        "j3": {
          "subject": "MTK",
          "teacher": 27
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 19
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 19
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 19
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "APHP",
          "teacher": 19
        },
        "j2": {
          "subject": "APHP",
          "teacher": 19
        },
        "j3": {
          "subject": "APHP",
          "teacher": 19
        },
        "j4": {
          "subject": "APHP",
          "teacher": 19
        },
        "j5": {
          "subject": "APHP",
          "teacher": 19
        },
        "j6": {
          "subject": "APHP",
          "teacher": 19
        },
        "j7": {
          "subject": "APHP",
          "teacher": 19
        },
        "j8": {
          "subject": "APHP",
          "teacher": 19
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "APHP",
          "teacher": 26
        },
        "j8": {
          "subject": "APHP",
          "teacher": 26
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "APHP",
          "teacher": 19
        },
        "j2": {
          "subject": "APHP",
          "teacher": 19
        },
        "j3": {
          "subject": "APHP",
          "teacher": 19
        },
        "j4": {
          "subject": "APHP",
          "teacher": 19
        },
        "j5": {
          "subject": "APHP",
          "teacher": 19
        },
        "j6": {
          "subject": "APHP",
          "teacher": 19
        },
        "j7": {
          "subject": "WALI",
          "teacher": 24
        },
        "j8": {
          "subject": "WALI",
          "teacher": 24
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "APHP",
          "teacher": 26
        },
        "j2": {
          "subject": "APHP",
          "teacher": 26
        },
        "j3": {
          "subject": "APHP",
          "teacher": 26
        },
        "j4": {
          "subject": "APHP",
          "teacher": 26
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "7": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j5": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j6": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j4": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j5": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j6": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j4": {
          "subject": "MTK",
          "teacher": 27
        },
        "j5": {
          "subject": "MTK",
          "teacher": 27
        },
        "j6": {
          "subject": "MTK",
          "teacher": 27
        },
        "j7": {
          "subject": "WALI",
          "teacher": 22
        },
        "j8": {
          "subject": "WALI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 29
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 29
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 29
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 19
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 19
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 19
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "APHP",
          "teacher": 26
        },
        "j2": {
          "subject": "APHP",
          "teacher": 26
        },
        "j3": {
          "subject": "APHP",
          "teacher": 26
        },
        "j4": {
          "subject": "APHP",
          "teacher": 26
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "APHP",
          "teacher": 26
        },
        "j8": {
          "subject": "APHP",
          "teacher": 26
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "APHP",
          "teacher": 19
        },
        "j6": {
          "subject": "APHP",
          "teacher": 19
        },
        "j7": {
          "subject": "APHP",
          "teacher": 19
        },
        "j8": {
          "subject": "APHP",
          "teacher": 19
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "APHP",
          "teacher": 26
        },
        "j2": {
          "subject": "APHP",
          "teacher": 26
        },
        "j3": {
          "subject": "APHP",
          "teacher": 26
        },
        "j4": {
          "subject": "APHP",
          "teacher": 26
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "WALI",
          "teacher": 22
        },
        "j8": {
          "subject": "WALI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "APHP",
          "teacher": 19
        },
        "j2": {
          "subject": "APHP",
          "teacher": 19
        },
        "j3": {
          "subject": "APHP",
          "teacher": 19
        },
        "j4": {
          "subject": "APHP",
          "teacher": 19
        },
        "j5": {
          "subject": "APHP",
          "teacher": 19
        },
        "j6": {
          "subject": "APHP",
          "teacher": 19
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "8": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "APHP",
          "teacher": 19
        },
        "j2": {
          "subject": "APHP",
          "teacher": 19
        },
        "j3": {
          "subject": "APHP",
          "teacher": 19
        },
        "j4": {
          "subject": "APHP",
          "teacher": 19
        },
        "j5": {
          "subject": "APHP",
          "teacher": 19
        },
        "j6": {
          "subject": "APHP",
          "teacher": 19
        },
        "j7": {
          "subject": "WALI",
          "teacher": 27
        },
        "j8": {
          "subject": "WALI",
          "teacher": 27
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "APHP",
          "teacher": 19
        },
        "j6": {
          "subject": "APHP",
          "teacher": 19
        },
        "j7": {
          "subject": "APHP",
          "teacher": 19
        },
        "j8": {
          "subject": "APHP",
          "teacher": 19
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "APHP",
          "teacher": 26
        },
        "j2": {
          "subject": "APHP",
          "teacher": 26
        },
        "j3": {
          "subject": "APHP",
          "teacher": 26
        },
        "j4": {
          "subject": "APHP",
          "teacher": 26
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "APHP",
          "teacher": 26
        },
        "j8": {
          "subject": "APHP",
          "teacher": 26
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "APHP",
          "teacher": 26
        },
        "j2": {
          "subject": "APHP",
          "teacher": 26
        },
        "j3": {
          "subject": "APHP",
          "teacher": 26
        },
        "j4": {
          "subject": "APHP",
          "teacher": 26
        },
        "j5": {
          "subject": "APHP",
          "teacher": 26
        },
        "j6": {
          "subject": "APHP",
          "teacher": 26
        },
        "j7": {
          "subject": "APHP",
          "teacher": 26
        },
        "j8": {
          "subject": "APHP",
          "teacher": 26
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "MTK",
          "teacher": 27
        },
        "j2": {
          "subject": "MTK",
          "teacher": 27
        },
        "j3": {
          "subject": "MTK",
          "teacher": 27
        },
        "j4": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j5": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j6": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j7": {
          "subject": "WALI",
          "teacher": 27
        },
        "j8": {
          "subject": "WALI",
          "teacher": 27
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j2": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j3": {
          "subject": "KIK-APHP",
          "teacher": 24
        },
        "j4": {
          "subject": "PKL",
          "teacher": null
        },
        "j5": {
          "subject": "PKL",
          "teacher": null
        },
        "j6": {
          "subject": "PKL",
          "teacher": null
        },
        "j7": {
          "subject": "MTK",
          "teacher": 27
        },
        "j8": {
          "subject": "MTK",
          "teacher": 27
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j7": {
          "subject": "WALI",
          "teacher": 27
        },
        "j8": {
          "subject": "WALI",
          "teacher": 27
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 22
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "9": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 18
        },
        "j2": {
          "subject": "TKR",
          "teacher": 18
        },
        "j3": {
          "subject": "TKR",
          "teacher": 18
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "TKR",
          "teacher": 32
        },
        "j6": {
          "subject": "TKR",
          "teacher": 32
        },
        "j7": {
          "subject": "WALI",
          "teacher": 32
        },
        "j8": {
          "subject": "WALI",
          "teacher": 32
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "TKR",
          "teacher": 25
        },
        "j6": {
          "subject": "TKR",
          "teacher": 25
        },
        "j7": {
          "subject": "TKR",
          "teacher": 25
        },
        "j8": {
          "subject": "TKR",
          "teacher": 25
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 14
        },
        "j2": {
          "subject": "TKR",
          "teacher": 14
        },
        "j3": {
          "subject": "TKR",
          "teacher": 14
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "TKR",
          "teacher": 32
        },
        "j6": {
          "subject": "TKR",
          "teacher": 32
        },
        "j7": {
          "subject": "TKR",
          "teacher": 32
        },
        "j8": {
          "subject": "TKR",
          "teacher": 32
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j7": {
          "subject": "WALI",
          "teacher": 32
        },
        "j8": {
          "subject": "WALI",
          "teacher": 32
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j4": {
          "subject": "INFO",
          "teacher": 3
        },
        "j5": {
          "subject": "INFO",
          "teacher": 3
        },
        "j6": {
          "subject": "INFO",
          "teacher": 3
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "MTK",
          "teacher": 1
        },
        "j2": {
          "subject": "MTK",
          "teacher": 1
        },
        "j3": {
          "subject": "MTK",
          "teacher": 1
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 28
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 28
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 28
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "10": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j7": {
          "subject": "WALI",
          "teacher": 11
        },
        "j8": {
          "subject": "WALI",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "INFO",
          "teacher": 3
        },
        "j2": {
          "subject": "INFO",
          "teacher": 3
        },
        "j3": {
          "subject": "INFO",
          "teacher": 3
        },
        "j4": {
          "subject": "MTK",
          "teacher": 1
        },
        "j5": {
          "subject": "MTK",
          "teacher": 1
        },
        "j6": {
          "subject": "MTK",
          "teacher": 1
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 31
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 31
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 31
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "TKR",
          "teacher": 18
        },
        "j6": {
          "subject": "TKR",
          "teacher": 18
        },
        "j7": {
          "subject": "WALI",
          "teacher": 11
        },
        "j8": {
          "subject": "WALI",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "TKR",
          "teacher": 14
        },
        "j6": {
          "subject": "TKR",
          "teacher": 14
        },
        "j7": {
          "subject": "TKR",
          "teacher": 32
        },
        "j8": {
          "subject": "TKR",
          "teacher": 32
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "TKR",
          "teacher": 25
        },
        "j6": {
          "subject": "TKR",
          "teacher": 25
        },
        "j7": {
          "subject": "TKR",
          "teacher": 25
        },
        "j8": {
          "subject": "TKR",
          "teacher": 25
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "11": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 3
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "INFO",
          "teacher": 3
        },
        "j2": {
          "subject": "INFO",
          "teacher": 3
        },
        "j3": {
          "subject": "INFO",
          "teacher": 3
        },
        "j4": {
          "subject": "MTK",
          "teacher": 1
        },
        "j5": {
          "subject": "MTK",
          "teacher": 1
        },
        "j6": {
          "subject": "MTK",
          "teacher": 1
        },
        "j7": {
          "subject": "WALI",
          "teacher": 9
        },
        "j8": {
          "subject": "WALI",
          "teacher": 9
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 31
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 31
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 31
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 1
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 18
        },
        "j2": {
          "subject": "TKR",
          "teacher": 18
        },
        "j3": {
          "subject": "TKR",
          "teacher": 18
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "TKR",
          "teacher": 14
        },
        "j6": {
          "subject": "TKR",
          "teacher": 14
        },
        "j7": {
          "subject": "WALI",
          "teacher": 9
        },
        "j8": {
          "subject": "WALI",
          "teacher": 9
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "TKR",
          "teacher": 25
        },
        "j6": {
          "subject": "TKR",
          "teacher": 25
        },
        "j7": {
          "subject": "TKR",
          "teacher": 25
        },
        "j8": {
          "subject": "TKR",
          "teacher": 25
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 18
        },
        "j2": {
          "subject": "TKR",
          "teacher": 18
        },
        "j3": {
          "subject": "TKR",
          "teacher": 18
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "TKR",
          "teacher": 32
        },
        "j6": {
          "subject": "TKR",
          "teacher": 32
        },
        "j7": {
          "subject": "TKR",
          "teacher": 32
        },
        "j8": {
          "subject": "TKR",
          "teacher": 32
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "12": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "KIK-TKR",
          "teacher": 28
        },
        "j2": {
          "subject": "KIK-TKR",
          "teacher": 28
        },
        "j3": {
          "subject": "KIK-TKR",
          "teacher": 28
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "MTK",
          "teacher": 1
        },
        "j2": {
          "subject": "MTK",
          "teacher": 1
        },
        "j3": {
          "subject": "MTK",
          "teacher": 1
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j7": {
          "subject": "WALI",
          "teacher": 1
        },
        "j8": {
          "subject": "WALI",
          "teacher": 1
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 22
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 22
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 22
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 7
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 7
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 7
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 14
        },
        "j2": {
          "subject": "TKR",
          "teacher": 14
        },
        "j3": {
          "subject": "TKR",
          "teacher": 14
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "TKR",
          "teacher": 25
        },
        "j6": {
          "subject": "TKR",
          "teacher": 25
        },
        "j7": {
          "subject": "WALI",
          "teacher": 1
        },
        "j8": {
          "subject": "WALI",
          "teacher": 1
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "PKN",
          "teacher": 16
        },
        "j8": {
          "subject": "PKN",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "TKR",
          "teacher": 18
        },
        "j6": {
          "subject": "TKR",
          "teacher": 18
        },
        "j7": {
          "subject": "TKR",
          "teacher": 18
        },
        "j8": {
          "subject": "TKR",
          "teacher": 18
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "TKR",
          "teacher": 32
        },
        "j6": {
          "subject": "TKR",
          "teacher": 32
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "13": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "MTK",
          "teacher": 1
        },
        "j2": {
          "subject": "MTK",
          "teacher": 1
        },
        "j3": {
          "subject": "MTK",
          "teacher": 1
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j7": {
          "subject": "WALI",
          "teacher": 25
        },
        "j8": {
          "subject": "WALI",
          "teacher": 25
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 7
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 7
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 7
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "TKR",
          "teacher": 32
        },
        "j6": {
          "subject": "TKR",
          "teacher": 32
        },
        "j7": {
          "subject": "WALI",
          "teacher": 25
        },
        "j8": {
          "subject": "WALI",
          "teacher": 25
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKR",
          "teacher": 14
        },
        "j2": {
          "subject": "TKR",
          "teacher": 14
        },
        "j3": {
          "subject": "TKR",
          "teacher": 14
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "PKN",
          "teacher": 16
        },
        "j8": {
          "subject": "PKN",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 14
        },
        "j2": {
          "subject": "TKR",
          "teacher": 14
        },
        "j3": {
          "subject": "TKR",
          "teacher": 14
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "TKR",
          "teacher": 14
        },
        "j6": {
          "subject": "TKR",
          "teacher": 14
        },
        "j7": {
          "subject": "TKR",
          "teacher": 14
        },
        "j8": {
          "subject": "TKR",
          "teacher": 14
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "TKR",
          "teacher": 18
        },
        "j6": {
          "subject": "TKR",
          "teacher": 18
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "14": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j4": {
          "subject": "MTK",
          "teacher": 1
        },
        "j5": {
          "subject": "MTK",
          "teacher": 1
        },
        "j6": {
          "subject": "MTK",
          "teacher": 1
        },
        "j7": {
          "subject": "WALI",
          "teacher": 30
        },
        "j8": {
          "subject": "WALI",
          "teacher": 30
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "KIK-TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "KIK-TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "KIK-TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 30
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 30
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 30
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 30
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 30
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 28
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 28
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 28
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "TKR",
          "teacher": 14
        },
        "j6": {
          "subject": "TKR",
          "teacher": 14
        },
        "j7": {
          "subject": "TKR",
          "teacher": 32
        },
        "j8": {
          "subject": "TKR",
          "teacher": 32
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "PKN",
          "teacher": 16
        },
        "j8": {
          "subject": "PKN",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "TKR",
          "teacher": 18
        },
        "j6": {
          "subject": "TKR",
          "teacher": 18
        },
        "j7": {
          "subject": "WALI",
          "teacher": 30
        },
        "j8": {
          "subject": "WALI",
          "teacher": 30
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKR",
          "teacher": 18
        },
        "j2": {
          "subject": "TKR",
          "teacher": 18
        },
        "j3": {
          "subject": "TKR",
          "teacher": 18
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "TKR",
          "teacher": 14
        },
        "j6": {
          "subject": "TKR",
          "teacher": 14
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "15": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "TKR",
          "teacher": 14
        },
        "j6": {
          "subject": "TKR",
          "teacher": 14
        },
        "j7": {
          "subject": "WALI",
          "teacher": 18
        },
        "j8": {
          "subject": "WALI",
          "teacher": 18
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKR",
          "teacher": 14
        },
        "j2": {
          "subject": "TKR",
          "teacher": 14
        },
        "j3": {
          "subject": "TKR",
          "teacher": 14
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "PKN",
          "teacher": 16
        },
        "j8": {
          "subject": "PKN",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "TKR",
          "teacher": 18
        },
        "j6": {
          "subject": "TKR",
          "teacher": 18
        },
        "j7": {
          "subject": "TKR",
          "teacher": 18
        },
        "j8": {
          "subject": "TKR",
          "teacher": 18
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "TKR",
          "teacher": 25
        },
        "j6": {
          "subject": "TKR",
          "teacher": 25
        },
        "j7": {
          "subject": "TKR",
          "teacher": 25
        },
        "j8": {
          "subject": "TKR",
          "teacher": 25
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j7": {
          "subject": "WALI",
          "teacher": 18
        },
        "j8": {
          "subject": "WALI",
          "teacher": 18
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PKL",
          "teacher": null
        },
        "j2": {
          "subject": "PKL",
          "teacher": null
        },
        "j3": {
          "subject": "PKL",
          "teacher": null
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j7": {
          "subject": "MTK",
          "teacher": 1
        },
        "j8": {
          "subject": "MTK",
          "teacher": 1
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "MTK",
          "teacher": 1
        },
        "j2": {
          "subject": "MTK",
          "teacher": 1
        },
        "j3": {
          "subject": "MTK",
          "teacher": 1
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j7": {
          "subject": "WALI",
          "teacher": 18
        },
        "j8": {
          "subject": "WALI",
          "teacher": 18
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "16": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "TKR",
          "teacher": 25
        },
        "j6": {
          "subject": "TKR",
          "teacher": 25
        },
        "j7": {
          "subject": "WALI",
          "teacher": 15
        },
        "j8": {
          "subject": "WALI",
          "teacher": 15
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKR",
          "teacher": 18
        },
        "j2": {
          "subject": "TKR",
          "teacher": 18
        },
        "j3": {
          "subject": "TKR",
          "teacher": 18
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "PKN",
          "teacher": 16
        },
        "j8": {
          "subject": "PKN",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 18
        },
        "j2": {
          "subject": "TKR",
          "teacher": 18
        },
        "j3": {
          "subject": "TKR",
          "teacher": 18
        },
        "j4": {
          "subject": "TKR",
          "teacher": 14
        },
        "j5": {
          "subject": "TKR",
          "teacher": 14
        },
        "j6": {
          "subject": "TKR",
          "teacher": 14
        },
        "j7": {
          "subject": "TKR",
          "teacher": 14
        },
        "j8": {
          "subject": "TKR",
          "teacher": 14
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKR",
          "teacher": 25
        },
        "j2": {
          "subject": "TKR",
          "teacher": 25
        },
        "j3": {
          "subject": "TKR",
          "teacher": 25
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "TKR",
          "teacher": 32
        },
        "j6": {
          "subject": "TKR",
          "teacher": 32
        },
        "j7": {
          "subject": "TKR",
          "teacher": 32
        },
        "j8": {
          "subject": "TKR",
          "teacher": 32
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "MTK",
          "teacher": 1
        },
        "j2": {
          "subject": "MTK",
          "teacher": 1
        },
        "j3": {
          "subject": "MTK",
          "teacher": 1
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j7": {
          "subject": "WALI",
          "teacher": 15
        },
        "j8": {
          "subject": "WALI",
          "teacher": 15
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PKL",
          "teacher": null
        },
        "j2": {
          "subject": "PKL",
          "teacher": null
        },
        "j3": {
          "subject": "PKL",
          "teacher": null
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j7": {
          "subject": "WALI",
          "teacher": 15
        },
        "j8": {
          "subject": "WALI",
          "teacher": 15
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j7": {
          "subject": "MTK",
          "teacher": 1
        },
        "j8": {
          "subject": "MTK",
          "teacher": 1
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "17": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TKR",
          "teacher": 14
        },
        "j2": {
          "subject": "TKR",
          "teacher": 14
        },
        "j3": {
          "subject": "TKR",
          "teacher": 14
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "TKR",
          "teacher": 18
        },
        "j6": {
          "subject": "TKR",
          "teacher": 18
        },
        "j7": {
          "subject": "WALI",
          "teacher": 14
        },
        "j8": {
          "subject": "WALI",
          "teacher": 14
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 32
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "PKN",
          "teacher": 16
        },
        "j8": {
          "subject": "PKN",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKR",
          "teacher": 32
        },
        "j2": {
          "subject": "TKR",
          "teacher": 32
        },
        "j3": {
          "subject": "TKR",
          "teacher": 32
        },
        "j4": {
          "subject": "TKR",
          "teacher": 25
        },
        "j5": {
          "subject": "TKR",
          "teacher": 25
        },
        "j6": {
          "subject": "TKR",
          "teacher": 25
        },
        "j7": {
          "subject": "TKR",
          "teacher": 25
        },
        "j8": {
          "subject": "TKR",
          "teacher": 25
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKR",
          "teacher": 14
        },
        "j2": {
          "subject": "TKR",
          "teacher": 14
        },
        "j3": {
          "subject": "TKR",
          "teacher": 14
        },
        "j4": {
          "subject": "TKR",
          "teacher": 18
        },
        "j5": {
          "subject": "TKR",
          "teacher": 18
        },
        "j6": {
          "subject": "TKR",
          "teacher": 18
        },
        "j7": {
          "subject": "TKR",
          "teacher": 18
        },
        "j8": {
          "subject": "TKR",
          "teacher": 18
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 11
        },
        "j7": {
          "subject": "WALI",
          "teacher": 14
        },
        "j8": {
          "subject": "WALI",
          "teacher": 14
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "MTK",
          "teacher": 1
        },
        "j2": {
          "subject": "MTK",
          "teacher": 1
        },
        "j3": {
          "subject": "MTK",
          "teacher": 1
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 29
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j2": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j3": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j4": {
          "subject": "MTK",
          "teacher": 1
        },
        "j5": {
          "subject": "MTK",
          "teacher": 1
        },
        "j6": {
          "subject": "MTK",
          "teacher": 1
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 30
        },
        "j4": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j5": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j6": {
          "subject": "KIK-TKR",
          "teacher": 15
        },
        "j7": {
          "subject": "WALI",
          "teacher": 14
        },
        "j8": {
          "subject": "WALI",
          "teacher": 14
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "18": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j7": {
          "subject": "WALI",
          "teacher": 17
        },
        "j8": {
          "subject": "WALI",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "MTK",
          "teacher": 9
        },
        "j2": {
          "subject": "MTK",
          "teacher": 9
        },
        "j3": {
          "subject": "MTK",
          "teacher": 9
        },
        "j4": {
          "subject": "INFO",
          "teacher": 19
        },
        "j5": {
          "subject": "INFO",
          "teacher": 19
        },
        "j6": {
          "subject": "INFO",
          "teacher": 19
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 12
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 12
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 12
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 17
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 17
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 17
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PABP",
          "teacher": 8
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "PKN",
          "teacher": 16
        },
        "j6": {
          "subject": "PKN",
          "teacher": 16
        },
        "j7": {
          "subject": "WALI",
          "teacher": 17
        },
        "j8": {
          "subject": "WALI",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "19": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "WALI",
          "teacher": 31
        },
        "j8": {
          "subject": "WALI",
          "teacher": 31
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j7": {
          "subject": "WALI",
          "teacher": 31
        },
        "j8": {
          "subject": "WALI",
          "teacher": 31
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 28
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "MTK",
          "teacher": 9
        },
        "j2": {
          "subject": "MTK",
          "teacher": 9
        },
        "j3": {
          "subject": "MTK",
          "teacher": 9
        },
        "j4": {
          "subject": "INFO",
          "teacher": 3
        },
        "j5": {
          "subject": "INFO",
          "teacher": 3
        },
        "j6": {
          "subject": "INFO",
          "teacher": 3
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 17
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "20": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "MTK",
          "teacher": 9
        },
        "j2": {
          "subject": "MTK",
          "teacher": 9
        },
        "j3": {
          "subject": "MTK",
          "teacher": 9
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j4": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j5": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j6": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 22
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j5": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j6": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j7": {
          "subject": "WALI",
          "teacher": 12
        },
        "j8": {
          "subject": "WALI",
          "teacher": 12
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 21
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 21
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 21
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "WALI",
          "teacher": 12
        },
        "j8": {
          "subject": "WALI",
          "teacher": 12
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "PKN",
          "teacher": 16
        },
        "j6": {
          "subject": "PKN",
          "teacher": 16
        },
        "j7": {
          "subject": "PABP",
          "teacher": 8
        },
        "j8": {
          "subject": "PABP",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "21": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j4": {
          "subject": "MTK",
          "teacher": 9
        },
        "j5": {
          "subject": "MTK",
          "teacher": 9
        },
        "j6": {
          "subject": "MTK",
          "teacher": 9
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j4": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j5": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j6": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 12
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j5": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j6": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j7": {
          "subject": "WALI",
          "teacher": 13
        },
        "j8": {
          "subject": "WALI",
          "teacher": 13
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 21
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 21
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 21
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j7": {
          "subject": "WALI",
          "teacher": 13
        },
        "j8": {
          "subject": "WALI",
          "teacher": 13
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "PKN",
          "teacher": 16
        },
        "j6": {
          "subject": "PKN",
          "teacher": 16
        },
        "j7": {
          "subject": "PABP",
          "teacher": 8
        },
        "j8": {
          "subject": "PABP",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "22": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j7": {
          "subject": "WALI",
          "teacher": 4
        },
        "j8": {
          "subject": "WALI",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "PKN",
          "teacher": 16
        },
        "j6": {
          "subject": "PKN",
          "teacher": 16
        },
        "j7": {
          "subject": "PABP",
          "teacher": 8
        },
        "j8": {
          "subject": "PABP",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j4": {
          "subject": "MTK",
          "teacher": 1
        },
        "j5": {
          "subject": "MTK",
          "teacher": 1
        },
        "j6": {
          "subject": "MTK",
          "teacher": 1
        },
        "j7": {
          "subject": "WALI",
          "teacher": 4
        },
        "j8": {
          "subject": "WALI",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PKL",
          "teacher": null
        },
        "j2": {
          "subject": "PKL",
          "teacher": null
        },
        "j3": {
          "subject": "PKL",
          "teacher": null
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j7": {
          "subject": "MTK",
          "teacher": 1
        },
        "j8": {
          "subject": "MTK",
          "teacher": 1
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j2": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j3": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j4": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j5": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j6": {
          "subject": "KIK-TKJ",
          "teacher": 3
        },
        "j7": {
          "subject": "WALI",
          "teacher": 4
        },
        "j8": {
          "subject": "WALI",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "23": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "WALI",
          "teacher": 3
        },
        "j8": {
          "subject": "WALI",
          "teacher": 3
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "PKN",
          "teacher": 16
        },
        "j6": {
          "subject": "PKN",
          "teacher": 16
        },
        "j7": {
          "subject": "PABP",
          "teacher": 8
        },
        "j8": {
          "subject": "PABP",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "KIK-TKJ",
          "teacher": 28
        },
        "j2": {
          "subject": "KIK-TKJ",
          "teacher": 28
        },
        "j3": {
          "subject": "KIK-TKJ",
          "teacher": 28
        },
        "j4": {
          "subject": "MTK",
          "teacher": 9
        },
        "j5": {
          "subject": "MTK",
          "teacher": 9
        },
        "j6": {
          "subject": "MTK",
          "teacher": 9
        },
        "j7": {
          "subject": "WALI",
          "teacher": 3
        },
        "j8": {
          "subject": "WALI",
          "teacher": 3
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j4": {
          "subject": "PKL",
          "teacher": null
        },
        "j5": {
          "subject": "PKL",
          "teacher": null
        },
        "j6": {
          "subject": "PKL",
          "teacher": null
        },
        "j7": {
          "subject": "WALI",
          "teacher": 3
        },
        "j8": {
          "subject": "WALI",
          "teacher": 3
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j4": {
          "subject": "KIK-TKJ",
          "teacher": 31
        },
        "j5": {
          "subject": "KIK-TKJ",
          "teacher": 31
        },
        "j6": {
          "subject": "KIK-TKJ",
          "teacher": 31
        },
        "j7": {
          "subject": "MTK",
          "teacher": 9
        },
        "j8": {
          "subject": "MTK",
          "teacher": 9
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "24": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j7": {
          "subject": "WALI",
          "teacher": 5
        },
        "j8": {
          "subject": "WALI",
          "teacher": 5
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 5
        },
        "j5": {
          "subject": "PKN",
          "teacher": 16
        },
        "j6": {
          "subject": "PKN",
          "teacher": 16
        },
        "j7": {
          "subject": "PABP",
          "teacher": 8
        },
        "j8": {
          "subject": "PABP",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j2": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j3": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j4": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j5": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j6": {
          "subject": "TKJ",
          "teacher": 13
        },
        "j7": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j8": {
          "subject": "TKJ",
          "teacher": 4
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "KIK-TKJ",
          "teacher": 5
        },
        "j2": {
          "subject": "KIK-TKJ",
          "teacher": 5
        },
        "j3": {
          "subject": "KIK-TKJ",
          "teacher": 5
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j7": {
          "subject": "WALI",
          "teacher": 5
        },
        "j8": {
          "subject": "WALI",
          "teacher": 5
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "MTK",
          "teacher": 9
        },
        "j2": {
          "subject": "MTK",
          "teacher": 9
        },
        "j3": {
          "subject": "MTK",
          "teacher": 9
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j4": {
          "subject": "PKL",
          "teacher": null
        },
        "j5": {
          "subject": "PKL",
          "teacher": null
        },
        "j6": {
          "subject": "PKL",
          "teacher": null
        },
        "j7": {
          "subject": "WALI",
          "teacher": 5
        },
        "j8": {
          "subject": "WALI",
          "teacher": 5
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j4": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j5": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j6": {
          "subject": "KIK-TKJ",
          "teacher": 7
        },
        "j7": {
          "subject": "MTK",
          "teacher": 9
        },
        "j8": {
          "subject": "MTK",
          "teacher": 9
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "25": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "MTK",
          "teacher": 27
        },
        "j2": {
          "subject": "MTK",
          "teacher": 27
        },
        "j3": {
          "subject": "MTK",
          "teacher": 27
        },
        "j4": {
          "subject": "INFO",
          "teacher": 3
        },
        "j5": {
          "subject": "INFO",
          "teacher": 3
        },
        "j6": {
          "subject": "INFO",
          "teacher": 3
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j7": {
          "subject": "WALI",
          "teacher": 21
        },
        "j8": {
          "subject": "WALI",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 12
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 12
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 12
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 28
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 28
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 28
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TP",
          "teacher": 6
        },
        "j2": {
          "subject": "TP",
          "teacher": 6
        },
        "j3": {
          "subject": "TP",
          "teacher": 6
        },
        "j4": {
          "subject": "TP",
          "teacher": 10
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "TP",
          "teacher": 10
        },
        "j8": {
          "subject": "TP",
          "teacher": 10
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "TP",
          "teacher": 20
        },
        "j5": {
          "subject": "TP",
          "teacher": 20
        },
        "j6": {
          "subject": "TP",
          "teacher": 20
        },
        "j7": {
          "subject": "TP",
          "teacher": 20
        },
        "j8": {
          "subject": "TP",
          "teacher": 20
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TP",
          "teacher": 10
        },
        "j2": {
          "subject": "TP",
          "teacher": 10
        },
        "j3": {
          "subject": "TP",
          "teacher": 10
        },
        "j4": {
          "subject": "TP",
          "teacher": 6
        },
        "j5": {
          "subject": "TP",
          "teacher": 6
        },
        "j6": {
          "subject": "TP",
          "teacher": 6
        },
        "j7": {
          "subject": "WALI",
          "teacher": 21
        },
        "j8": {
          "subject": "WALI",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "26": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TP",
          "teacher": 10
        },
        "j2": {
          "subject": "TP",
          "teacher": 10
        },
        "j3": {
          "subject": "TP",
          "teacher": 10
        },
        "j4": {
          "subject": "TP",
          "teacher": 6
        },
        "j5": {
          "subject": "TP",
          "teacher": 6
        },
        "j6": {
          "subject": "TP",
          "teacher": 6
        },
        "j7": {
          "subject": "TP",
          "teacher": 6
        },
        "j8": {
          "subject": "TP",
          "teacher": 6
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 29
        },
        "j4": {
          "subject": "TP",
          "teacher": 10
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "TP",
          "teacher": 10
        },
        "j8": {
          "subject": "TP",
          "teacher": 10
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "TP",
          "teacher": 20
        },
        "j2": {
          "subject": "TP",
          "teacher": 20
        },
        "j3": {
          "subject": "TP",
          "teacher": 20
        },
        "j4": {
          "subject": "TP",
          "teacher": 20
        },
        "j5": {
          "subject": "TP",
          "teacher": 20
        },
        "j6": {
          "subject": "TP",
          "teacher": 20
        },
        "j7": {
          "subject": "WALI",
          "teacher": 16
        },
        "j8": {
          "subject": "WALI",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "PKN",
          "teacher": 16
        },
        "j2": {
          "subject": "PKN",
          "teacher": 16
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PABP",
          "teacher": 8
        },
        "j5": {
          "subject": "PABP",
          "teacher": 8
        },
        "j6": {
          "subject": "PABP",
          "teacher": 8
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 21
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j2": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j3": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j4": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j5": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j6": {
          "subject": "PIPAS",
          "teacher": 7
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "INFO",
          "teacher": 3
        },
        "j2": {
          "subject": "INFO",
          "teacher": 3
        },
        "j3": {
          "subject": "INFO",
          "teacher": 3
        },
        "j4": {
          "subject": "MTK",
          "teacher": 9
        },
        "j5": {
          "subject": "MTK",
          "teacher": 9
        },
        "j6": {
          "subject": "MTK",
          "teacher": 9
        },
        "j7": {
          "subject": "WALI",
          "teacher": 16
        },
        "j8": {
          "subject": "WALI",
          "teacher": 16
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 22
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 9
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "27": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j5": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j6": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "KIK-TP",
          "teacher": 7
        },
        "j2": {
          "subject": "KIK-TP",
          "teacher": 7
        },
        "j3": {
          "subject": "KIK-TP",
          "teacher": 7
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j7": {
          "subject": "WALI",
          "teacher": 29
        },
        "j8": {
          "subject": "WALI",
          "teacher": 29
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j4": {
          "subject": "MTK",
          "teacher": 9
        },
        "j5": {
          "subject": "MTK",
          "teacher": 9
        },
        "j6": {
          "subject": "MTK",
          "teacher": 9
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 11
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 11
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 11
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 3
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 3
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 3
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TP",
          "teacher": 20
        },
        "j2": {
          "subject": "TP",
          "teacher": 20
        },
        "j3": {
          "subject": "TP",
          "teacher": 20
        },
        "j4": {
          "subject": "TP",
          "teacher": 6
        },
        "j5": {
          "subject": "TP",
          "teacher": 6
        },
        "j6": {
          "subject": "TP",
          "teacher": 6
        },
        "j7": {
          "subject": "TP",
          "teacher": 6
        },
        "j8": {
          "subject": "TP",
          "teacher": 6
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TP",
          "teacher": 20
        },
        "j2": {
          "subject": "TP",
          "teacher": 20
        },
        "j3": {
          "subject": "TP",
          "teacher": 20
        },
        "j4": {
          "subject": "TP",
          "teacher": 6
        },
        "j5": {
          "subject": "TP",
          "teacher": 6
        },
        "j6": {
          "subject": "TP",
          "teacher": 6
        },
        "j7": {
          "subject": "WALI",
          "teacher": 29
        },
        "j8": {
          "subject": "WALI",
          "teacher": 29
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "TP",
          "teacher": 20
        },
        "j6": {
          "subject": "TP",
          "teacher": 20
        },
        "j7": {
          "subject": "TP",
          "teacher": 20
        },
        "j8": {
          "subject": "TP",
          "teacher": 20
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TP",
          "teacher": 20
        },
        "j2": {
          "subject": "TP",
          "teacher": 20
        },
        "j3": {
          "subject": "TP",
          "teacher": 20
        },
        "j4": {
          "subject": "TP",
          "teacher": 10
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "28": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j2": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j3": {
          "subject": "PJOK",
          "teacher": 15
        },
        "j4": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j5": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j6": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j7": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j8": {
          "subject": "ENGCLUB",
          "teacher": 11
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "KIK-TP",
          "teacher": 7
        },
        "j2": {
          "subject": "KIK-TP",
          "teacher": 7
        },
        "j3": {
          "subject": "KIK-TP",
          "teacher": 7
        },
        "j4": {
          "subject": "MTK",
          "teacher": 27
        },
        "j5": {
          "subject": "MTK",
          "teacher": 27
        },
        "j6": {
          "subject": "MTK",
          "teacher": 27
        },
        "j7": {
          "subject": "WALI",
          "teacher": 7
        },
        "j8": {
          "subject": "WALI",
          "teacher": 7
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 17
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 12
        },
        "j7": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j8": {
          "subject": "LITERASI",
          "teacher": 31
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "SEJ",
          "teacher": 11
        },
        "j2": {
          "subject": "SEJ",
          "teacher": 11
        },
        "j3": {
          "subject": "SEJ",
          "teacher": 11
        },
        "j4": {
          "subject": "NUMERASI",
          "teacher": 3
        },
        "j5": {
          "subject": "NUMERASI",
          "teacher": 3
        },
        "j6": {
          "subject": "NUMERASI",
          "teacher": 3
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "TP",
          "teacher": 10
        },
        "j2": {
          "subject": "TP",
          "teacher": 10
        },
        "j3": {
          "subject": "TP",
          "teacher": 10
        },
        "j4": {
          "subject": "TP",
          "teacher": 20
        },
        "j5": {
          "subject": "TP",
          "teacher": 20
        },
        "j6": {
          "subject": "TP",
          "teacher": 20
        },
        "j7": {
          "subject": "TP",
          "teacher": 20
        },
        "j8": {
          "subject": "TP",
          "teacher": 20
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TP",
          "teacher": 6
        },
        "j2": {
          "subject": "TP",
          "teacher": 6
        },
        "j3": {
          "subject": "TP",
          "teacher": 6
        },
        "j4": {
          "subject": "TP",
          "teacher": 10
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "WALI",
          "teacher": 7
        },
        "j8": {
          "subject": "WALI",
          "teacher": 7
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "TP",
          "teacher": 10
        },
        "j8": {
          "subject": "TP",
          "teacher": 10
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TP",
          "teacher": 10
        },
        "j2": {
          "subject": "TP",
          "teacher": 10
        },
        "j3": {
          "subject": "TP",
          "teacher": 10
        },
        "j4": {
          "subject": "TP",
          "teacher": 6
        },
        "j5": {
          "subject": "TP",
          "teacher": 6
        },
        "j6": {
          "subject": "TP",
          "teacher": 6
        },
        "j7": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j8": {
          "subject": "EKSKUL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j5": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j6": {
          "subject": "KOMBEL",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "29": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TP",
          "teacher": 6
        },
        "j2": {
          "subject": "TP",
          "teacher": 6
        },
        "j3": {
          "subject": "TP",
          "teacher": 6
        },
        "j4": {
          "subject": "TP",
          "teacher": 20
        },
        "j5": {
          "subject": "TP",
          "teacher": 20
        },
        "j6": {
          "subject": "TP",
          "teacher": 20
        },
        "j7": {
          "subject": "TP",
          "teacher": 20
        },
        "j8": {
          "subject": "TP",
          "teacher": 20
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TP",
          "teacher": 6
        },
        "j2": {
          "subject": "TP",
          "teacher": 6
        },
        "j3": {
          "subject": "TP",
          "teacher": 6
        },
        "j4": {
          "subject": "TP",
          "teacher": 20
        },
        "j5": {
          "subject": "TP",
          "teacher": 20
        },
        "j6": {
          "subject": "TP",
          "teacher": 20
        },
        "j7": {
          "subject": "WALI",
          "teacher": 6
        },
        "j8": {
          "subject": "WALI",
          "teacher": 6
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "TP",
          "teacher": 10
        },
        "j8": {
          "subject": "TP",
          "teacher": 10
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TP",
          "teacher": 6
        },
        "j2": {
          "subject": "TP",
          "teacher": 6
        },
        "j3": {
          "subject": "TP",
          "teacher": 6
        },
        "j4": {
          "subject": "TP",
          "teacher": 10
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "TP",
          "teacher": 10
        },
        "j8": {
          "subject": "TP",
          "teacher": 10
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j4": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j5": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j6": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "MTK",
          "teacher": 27
        },
        "j2": {
          "subject": "MTK",
          "teacher": 27
        },
        "j3": {
          "subject": "MTK",
          "teacher": 27
        },
        "j4": {
          "subject": "PKL",
          "teacher": null
        },
        "j5": {
          "subject": "PKL",
          "teacher": null
        },
        "j6": {
          "subject": "PKL",
          "teacher": null
        },
        "j7": {
          "subject": "WALI",
          "teacher": 6
        },
        "j8": {
          "subject": "WALI",
          "teacher": 6
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j7": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j8": {
          "subject": "KIK-TP",
          "teacher": 28
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "MTK",
          "teacher": 27
        },
        "j2": {
          "subject": "MTK",
          "teacher": 27
        },
        "j3": {
          "subject": "MTK",
          "teacher": 27
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j7": {
          "subject": "WALI",
          "teacher": 6
        },
        "j8": {
          "subject": "WALI",
          "teacher": 6
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  },
  "30": {
    "siklus1": {
      "Senin": {
        "j1": {
          "subject": "TP",
          "teacher": 20
        },
        "j2": {
          "subject": "TP",
          "teacher": 20
        },
        "j3": {
          "subject": "TP",
          "teacher": 20
        },
        "j4": {
          "subject": "TP",
          "teacher": 10
        },
        "j5": {
          "subject": "TP",
          "teacher": 10
        },
        "j6": {
          "subject": "TP",
          "teacher": 10
        },
        "j7": {
          "subject": "TP",
          "teacher": 10
        },
        "j8": {
          "subject": "TP",
          "teacher": 10
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "TP",
          "teacher": 10
        },
        "j2": {
          "subject": "TP",
          "teacher": 10
        },
        "j3": {
          "subject": "TP",
          "teacher": 10
        },
        "j4": {
          "subject": "TP",
          "teacher": 6
        },
        "j5": {
          "subject": "TP",
          "teacher": 6
        },
        "j6": {
          "subject": "TP",
          "teacher": 6
        },
        "j7": {
          "subject": "WALI",
          "teacher": 8
        },
        "j8": {
          "subject": "WALI",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "PABP",
          "teacher": 8
        },
        "j2": {
          "subject": "PABP",
          "teacher": 8
        },
        "j3": {
          "subject": "PKN",
          "teacher": 16
        },
        "j4": {
          "subject": "PKN",
          "teacher": 16
        },
        "j5": {
          "subject": "TP",
          "teacher": 6
        },
        "j6": {
          "subject": "TP",
          "teacher": 6
        },
        "j7": {
          "subject": "TP",
          "teacher": 6
        },
        "j8": {
          "subject": "TP",
          "teacher": 6
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "TP",
          "teacher": 20
        },
        "j2": {
          "subject": "TP",
          "teacher": 20
        },
        "j3": {
          "subject": "TP",
          "teacher": 20
        },
        "j4": {
          "subject": "TP",
          "teacher": 20
        },
        "j5": {
          "subject": "TP",
          "teacher": 20
        },
        "j6": {
          "subject": "TP",
          "teacher": 20
        },
        "j7": {
          "subject": "TP",
          "teacher": 20
        },
        "j8": {
          "subject": "TP",
          "teacher": 20
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    },
    "siklus2": {
      "Senin": {
        "j1": {
          "subject": "KIK-TP",
          "teacher": 15
        },
        "j2": {
          "subject": "KIK-TP",
          "teacher": 15
        },
        "j3": {
          "subject": "KIK-TP",
          "teacher": 15
        },
        "j4": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j5": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j6": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j7": {
          "subject": "WALI",
          "teacher": 8
        },
        "j8": {
          "subject": "WALI",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Selasa": {
        "j1": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j2": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j3": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j4": {
          "subject": "MTK",
          "teacher": 27
        },
        "j5": {
          "subject": "MTK",
          "teacher": 27
        },
        "j6": {
          "subject": "MTK",
          "teacher": 27
        },
        "j7": {
          "subject": "WALI",
          "teacher": 8
        },
        "j8": {
          "subject": "WALI",
          "teacher": 8
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Rabu": {
        "j1": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j2": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j3": {
          "subject": "B.ING",
          "teacher": 21
        },
        "j4": {
          "subject": "KIK-TP",
          "teacher": 30
        },
        "j5": {
          "subject": "KIK-TP",
          "teacher": 30
        },
        "j6": {
          "subject": "KIK-TP",
          "teacher": 30
        },
        "j7": {
          "subject": "PKL",
          "teacher": null
        },
        "j8": {
          "subject": "PKL",
          "teacher": null
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Kamis": {
        "j1": {
          "subject": "PKL",
          "teacher": null
        },
        "j2": {
          "subject": "PKL",
          "teacher": null
        },
        "j3": {
          "subject": "PKL",
          "teacher": null
        },
        "j4": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j5": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j6": {
          "subject": "B.IND",
          "teacher": 31
        },
        "j7": {
          "subject": "MTK",
          "teacher": 27
        },
        "j8": {
          "subject": "MTK",
          "teacher": 27
        },
        "j9": {
          "subject": "KEBERSIHAN",
          "teacher": null
        }
      },
      "Jumat": {
        "j1": {
          "subject": "SENAM",
          "teacher": null
        },
        "j2": {
          "subject": "GMS",
          "teacher": null
        },
        "j3": {
          "subject": "GMS",
          "teacher": null
        },
        "j4": {
          "subject": "BK",
          "teacher": null
        },
        "j5": {
          "subject": "BK",
          "teacher": null
        },
        "j6": {
          "subject": "BK",
          "teacher": null
        },
        "j7": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j8": {
          "subject": "REFLEKSI",
          "teacher": null
        },
        "j9": {
          "subject": "REFLEKSI",
          "teacher": null
        }
      }
    }
  }
},
};
