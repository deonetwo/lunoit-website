import { AppConfig, Language } from '../types';
import { APPS_CONFIG } from './apps';

interface LocalizedAppOverrides {
  name?: string;
  headline: string;
  tagline: string;
  description: string;
  badge: string;
  platforms?: string[];
  features: { title: string; description: string }[];
  screenshots?: { title: string; shortLabel: string; tag?: string; caption: string }[];
  downloads?: { label: string; notes?: string }[];
  faqs: { question: string; answer: string }[];
  privacyPolicy: {
    lastUpdated: string;
    summary: string;
    sections: {
      title: string;
      paragraphs?: string[];
      bullets?: string[];
      scopes?: { scope: string; purpose: string }[];
      highlight?: { title: string; text: string; link?: { label: string; url: string } };
    }[];
  };
  termsOfService: {
    lastUpdated: string;
    summary: string;
    sections: {
      title: string;
      paragraphs?: string[];
      bullets?: string[];
    }[];
  };
}

const APP_TRANSLATIONS: Record<'lunoite' | 'wadd', Record<Language, LocalizedAppOverrides>> = {
  lunoite: {
    id: {
      headline: 'Ruang menulis Markdown yang bersih, cepat, dan bebas distraksi.',
      tagline: 'Editor teks Markdown offline untuk menulis dan mengelola catatan harian',
      description:
        'Aplikasi menulis yang menjembatani kenyamanan editor dokumen dan fleksibilitas file Markdown. Menulis langsung ke file biasa di komputer Anda tanpa database tersembunyi dan tanpa keterikatan cloud.',
      badge: 'Aplikasi Desktop v1.2.3',
      downloads: [
        {
          label: 'Unduh untuk Windows (.msi)',
          notes: 'Installer resmi 64-bit dengan asosiasi file .md otomatis',
        },
        {
          label: 'Pasang via Winget',
          notes: 'Jalankan perintah langsung di Windows Terminal',
        },
      ],
      features: [
        {
          title: 'Tersimpan Langsung di Hard Drive',
          description: 'Setiap kata tersimpan otomatis ke file .md di komputer Anda tanpa perlu database perantara.',
        },
        {
          title: 'Tampilan Teks Kaya yang Rapi',
          description: 'Format teks, judul, dan tautan langsung terlihat rapi saat Anda mengetik tanpa perlu panel pratinjau terpisah.',
        },
        {
          title: 'Laci Catatan & Referensi Samping',
          description: 'Simpan cuplikan riset, ide cepat, dan poin penting tepat di samping lembar kerja utama Anda.',
        },
        {
          title: 'Mode Menulis Layar Penuh (Zen)',
          description: 'Sembunyikan semua menu dan navigasi hanya dengan satu tombol (Alt+Z) untuk fokus mengetik total.',
        },
        {
          title: 'Dukungan Multi-Tab Fleksibel',
          description: 'Buka banyak dokumen sekaligus dengan posisi gulir dan riwayat suntingan yang selalu terjaga.',
        },
        {
          title: 'Pilihan Tema Nyaman di Mata',
          description: 'Tersedia tema Daylight Paper yang hangat untuk siang hari dan Obsidian Nocturne yang teduh untuk malam hari.',
        },
      ],
      screenshots: [
        {
          title: 'Kanvas Kertas Siang Hari',
          shortLabel: 'Tema Daylight',
          tag: 'Mode Terang',
          caption: 'Tampilan kertas putih hangat dengan lebar kolom ideal agar membaca dan menulis terasa alami dan tidak melelahkan mata.',
        },
        {
          title: 'Tema Gelap Obsidian Nocturne',
          shortLabel: 'Tema Obsidian',
          tag: 'Mode Gelap',
          caption: 'Warna latar grafit pekat yang dirancang khusus untuk kenyamanan mengetik di malam hari tanpa menyilaukan mata.',
        },
        {
          title: 'Laci Catatan & Referensi',
          shortLabel: 'Laci Referensi',
          tag: 'Panel Samping',
          caption: 'Akses cepat ke kartu ide, ringkasan riset, dan draf sampingan tanpa perlu meninggalkan dokumen aktif.',
        },
        {
          title: 'Mode Fokus Zen',
          shortLabel: 'Fokus Zen',
          tag: 'Tombol Alt+Z',
          caption: 'Sembunyikan seluruh bilah menu dan panel samping untuk menikmati pengalaman menulis yang murni dan bebas gangguan.',
        },
        {
          title: 'Tampilan Responsif Mobile',
          shortLabel: 'Tampilan Ponsel',
          tag: 'Layar Sentuh',
          caption: 'Tata letak fleksibel yang nyaman dibuka di layar ponsel dengan area sentuh yang pas untuk jempol.',
        },
        {
          title: 'Mulai Cepat & Buka Folder',
          shortLabel: 'Buka Folder',
          tag: 'Langsung Mulai',
          caption: 'Hubungkan folder catatan apa pun di komputer Anda secara instan tanpa perlu mendaftar akun cloud.',
        },
      ],
      faqs: [
        {
          question: 'Di mana catatan Markdown saya disimpan?',
          answer:
            'Semua catatan Anda tersimpan sebagai file standar .md langsung di folder yang Anda pilih di komputer Anda. Tanpa database khusus atau enkripsi tertutup, sehingga file Anda tetap bisa dibuka dan dibaca oleh aplikasi teks mana pun selamanya.',
        },
        {
          question: 'Apakah Lunoite memerlukan akun atau biaya langganan?',
          answer:
            'Tidak perlu. Lunoite Markdown adalah aplikasi desktop mandiri yang bisa langsung Anda gunakan tanpa membuat akun atau membayar biaya langganan.',
        },
        {
          question: 'Dapatkah saya menggabungkan Lunoite dengan Git atau folder cloud seperti Google Drive?',
          answer:
            'Bisa. Karena Lunoite mengedit file teks biasa di drive Anda, Anda bebas menaruh folder catatan di dalam repositori Git, Google Drive, OneDrive, atau Dropbox sesuai alur kerja Anda.',
        },
        {
          question: 'Sistem operasi apa saja yang didukung?',
          answer:
            'Saat ini Lunoite tersedia resmi untuk Windows 10 dan 11 (64-bit). Dukungan untuk Linux dan macOS sedang dalam tahap persiapan untuk rilis mendatang.',
        },
      ],
      privacyPolicy: {
        lastUpdated: '15 Oktober 2026',
        summary:
          'Lunoite Markdown adalah alat menulis desktop offline. Kami tidak pernah mengumpulkan, mengirim, menyimpan, atau menjual data pribadi, ketukan papan ketik, maupun isi tulisan Anda.',
        sections: [
          {
            title: '1. Penyimpanan Lokal di Komputer Anda',
            paragraphs: [
              'Lunoite Markdown bekerja sepenuhnya di komputer pribadi Anda. Saat Anda membuat, mengedit, atau menghapus catatan, seluruh proses berlangsung langsung di sistem file lokal Anda.',
              'Aplikasi ini bekerja secara offline, tidak mengirim data aktivitas Anda ke internet, dan tidak memuat iklan apa pun.',
            ],
          },
          {
            title: '2. Tanpa Pengumpulan Data Pribadi',
            paragraphs: [
              'Kami tidak meminta atau menyimpan nama, alamat email, alamat IP, maupun isi dokumen yang Anda buat. Seluruh catatan Anda tersimpan secara privat di perangkat Anda.',
            ],
          },
          {
            title: '3. Integrasi & Pembaruan',
            paragraphs: [
              'Lunoite Markdown tidak terhubung ke server eksternal saat Anda menulis. Jika Anda mengunduh installer atau pembaruan melalui GitHub Releases, interaksi tersebut mengikuti kebijakan privasi GitHub.',
            ],
          },
          {
            title: '4. Kontak Pengembang',
            paragraphs: [
              'Jika Anda memiliki pertanyaan seputar privasi atau keamanan Lunoite Markdown, hubungi tim Lunoit Labs di support@lunoit.biz.id atau kunjungi https://lunoit.biz.id/.',
            ],
          },
        ],
      },
      termsOfService: {
        lastUpdated: '15 Oktober 2026',
        summary:
          'Syarat dan Ketentuan Layanan penggunaan aplikasi desktop Lunoite Markdown yang dirilis oleh Lunoit Labs.',
        sections: [
          {
            title: '1. Persetujuan Penggunaan',
            paragraphs: [
              'Dengan mengunduh, memasang, atau menggunakan Lunoite Markdown, Anda menyetujui ketentuan ini. Jika tidak setuju, Anda dapat berhenti menggunakan aplikasi ini kapan saja.',
            ],
          },
          {
            title: '2. Hak Milik & Lisensi',
            paragraphs: [
              'Lunoite Markdown disediakan untuk kebutuhan menulis pribadi maupun profesional. Anda memegang kepemilikan penuh dan mutlak atas seluruh dokumen, teks, dan karya yang Anda buat menggunakan aplikasi ini.',
            ],
          },
          {
            title: '3. Penafian Jaminan',
            paragraphs: [
              'Aplikasi ini disediakan apa adanya tanpa jaminan tersirat mengenai kesesuaian untuk tujuan khusus tertentu, meskipun kami selalu berupaya menjaga kestabilan dan keandalan software.',
            ],
          },
          {
            title: '4. Kontak Penerbit',
            paragraphs: [
              'Untuk pertanyaan seputar lisensi atau kerja sama, hubungi Lunoit Labs di support@lunoit.biz.id.',
            ],
          },
        ],
      },
    },
    en: {
      headline: 'A clean, fast, distraction-free Markdown workspace.',
      tagline: 'Fast, distraction-free markdown editor and note-taking workspace',
      description:
        'A tactile writing environment that bridges the gap between split-screen code editors and cloud-locked note silos. Writes directly to plain Markdown files on your local drive with zero proprietary database wrapping.',
      badge: 'Desktop App v1.2.3',
      downloads: [
        {
          label: 'Download for Windows (.msi)',
          notes: 'Official 64-bit installer with native file associations',
        },
        {
          label: 'Install via Winget',
          notes: 'Run in Windows Terminal',
        },
      ],
      features: [
        {
          title: 'Direct Local File Storage',
          description: 'Direct local file auto-save via native Tauri desktop file system with zero database lock-in.',
        },
        {
          title: 'Clean Inline WYSIWYG Rendering',
          description: 'Rich-text editing with 1:1 bidirectional CommonMark and GitHub Flavored Markdown serialization.',
        },
        {
          title: 'Lateral Reference Shelf',
          description: 'Lateral reference shelf for STAR stories, research cards, and reusable snippets while writing.',
        },
        {
          title: 'Distraction-Free Zen Mode',
          description: 'Instant full-screen focus view hiding all toolbars and navigation at Alt+Z.',
        },
        {
          title: 'Isolated Multi-Tab Engine',
          description: 'Multi-document tab architecture preserving scroll position, undo history, and text selections.',
        },
        {
          title: 'Carefully Tuned Tactile Themes',
          description: 'Carefully tuned Daylight Paper (16.5:1 contrast) and Obsidian Nocturne (15.8:1 contrast) palettes.',
        },
      ],
      screenshots: [
        {
          title: 'Daylight Paper Canvas',
          shortLabel: 'Daylight Canvas',
          tag: 'Light Mode',
          caption: 'Quiet editorial canvas centered on warm off-white paper with optimal 65 to 75 characters reading rhythm.',
        },
        {
          title: 'Obsidian Nocturne Theme',
          shortLabel: 'Obsidian Dark',
          tag: 'Dark Mode',
          caption: 'Deep graphite dark theme engineered to prevent late-night glare without dulling prose contrast.',
        },
        {
          title: 'Lateral Reference Shelf & Editor',
          shortLabel: 'Reference Shelf',
          tag: 'Reference Drawer',
          caption: 'Auxiliary cards for STAR interview stories, research metrics, and snippets beside the active editor.',
        },
        {
          title: 'Zen Focus Mode',
          shortLabel: 'Zen Focus',
          tag: 'Alt+Z Focus',
          caption: 'Tucks away all explorer panels, tabs, toolbar chrome, and status bars for pure writing.',
        },
        {
          title: 'Mobile Responsive Viewport',
          shortLabel: 'Mobile View',
          tag: 'Mobile 390px',
          caption: 'Tested down to phone widths with zero horizontal scroll and comfortable thumb tap targets.',
        },
        {
          title: 'Workspace Welcome & Directory Picker',
          shortLabel: 'Workspace Welcome',
          tag: 'First Launch',
          caption: 'Connect any folder on your computer directly without cloud accounts or format conversions.',
        },
      ],
      faqs: [
        {
          question: 'Where are my Markdown notes stored?',
          answer:
            'All notes reside as standard .md files directly in the directory you select on your local hard drive. There is zero proprietary database wrapping, so your files remain readable by any text editor forever.',
        },
        {
          question: 'Does Lunoite require an account or subscription?',
          answer:
            'No. Lunoite Markdown is an independent desktop application with zero accounts, zero cloud subscription fees, and zero user telemetry.',
        },
        {
          question: 'Can I use Git or cloud sync folders with Lunoite?',
          answer:
            'Yes. Because Lunoite edits standard plain text files on disk, you can place your notes in any Git repository, OneDrive, Dropbox, or Nextcloud folder seamlessly.',
        },
        {
          question: 'Which platforms are currently supported?',
          answer:
            'Lunoite is currently available for Windows 10 and 11 (64-bit). Linux and macOS desktop builds are planned for upcoming releases.',
        },
      ],
      privacyPolicy: {
        lastUpdated: 'October 15, 2026',
        summary:
          'Lunoite Markdown is an offline desktop writing tool. We do not collect, transmit, store, or sell your personal data, keystrokes, or documents.',
        sections: [
          {
            title: '1. Local Disk Sovereignty',
            paragraphs: [
              'Lunoite Markdown operates entirely on your personal computer. When you create, edit, or delete notes, all operations occur directly on your local file system.',
              'The application contains zero background network telemetry, zero diagnostic trackers, and zero third-party advertising SDKs.',
            ],
          },
          {
            title: '2. Zero Data Collection',
            paragraphs: [
              'We do not collect names, email addresses, IP addresses, or document contents. What you write remains solely on your personal storage hardware.',
            ],
          },
          {
            title: '3. Third-Party Integrations',
            paragraphs: [
              'Lunoite Markdown does not connect to external servers or third-party cloud services during ordinary document authoring. If you manually download updates through GitHub Releases, your interaction is subject to GitHub Privacy Policies.',
            ],
          },
          {
            title: '4. Contact',
            paragraphs: [
              'For any questions or privacy inquiries regarding Lunoite Markdown, contact Lunoit Labs at support@lunoit.biz.id or visit https://lunoit.biz.id/.',
            ],
          },
        ],
      },
      termsOfService: {
        lastUpdated: 'October 15, 2026',
        summary:
          'Terms of Service governing the use of Lunoite Markdown desktop application published by Lunoit Labs.',
        sections: [
          {
            title: '1. Acceptance of Terms',
            paragraphs: [
              'By downloading, installing, or using Lunoite Markdown, you agree to these Terms. If you do not agree, do not install or use the software.',
            ],
          },
          {
            title: '2. License and Usage',
            paragraphs: [
              'Lunoite Markdown is provided for personal and professional document editing. You retain full and exclusive ownership of all documents, text, and files you create with the application.',
            ],
          },
          {
            title: '3. Disclaimer of Warranty',
            paragraphs: [
              'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.',
            ],
          },
          {
            title: '4. Publisher Contact',
            paragraphs: [
              'For inquiries regarding licensing or terms, contact Lunoit Labs at support@lunoit.biz.id.',
            ],
          },
        ],
      },
    },
  },
  wadd: {
    id: {
      headline: 'Catat yang penting, kerjakan tanpa beban.',
      tagline: 'Aplikasi to-do list dan pencatat target hidup yang cepat, sederhana, dan 100% offline',
      description:
        'Aplikasi pengatur jadwal dan target hidup yang ringan dan bebas distraksi. Semua tugas tersimpan aman di perangkat Anda sendiri, dengan opsi sinkronisasi otomatis ke Google Drive pribadi.',
      badge: 'Lintas Platform v1.0.0',
      platforms: ['Desktop Windows (.msi & Portabel .zip)', 'Mobile Android (.apk)'],
      downloads: [
        {
          label: 'Unduh Installer Windows (.msi)',
          notes: 'Integrasi desktop lengkap dengan auto-start dan system tray',
        },
        {
          label: 'Unduh Windows Portabel (.zip)',
          notes: 'Paket portabel mandiri tanpa perlu instalasi',
        },
        {
          label: 'Unduh APK Android (.apk)',
          notes: 'Unduhan langsung file APK untuk perangkat Android',
        },
        {
          label: 'Lihat Repositori GitHub',
          notes: 'Repositori Kode Terbuka',
        },
      ],
      features: [
        {
          title: 'Penyimpanan Lokal Cepat',
          description: 'Semua tugas dan catatan tersimpan langsung di database SQLite di perangkat Anda, terbuka dalam sekejap tanpa koneksi internet.',
        },
        {
          title: 'Sinkronisasi Privat Google Drive',
          description: 'Hubungkan ke Google Drive pribadi Anda untuk menyambungkan laptop dan HP tanpa melalui server perantara pihak ketiga.',
        },
        {
          title: 'Target Hidup & Pembagian Langkah',
          description: 'Pecah impian jangka panjang menjadi tahapan aksi nyata dengan penghitungan kemajuan otomatis.',
        },
        {
          title: 'Jurnal Refleksi Harian',
          description: 'Ruang pribadi untuk mencatat suasana hati, evaluasi harian, dan renungan hidup yang tersimpan aman di laptop Anda.',
        },
        {
          title: 'Kalender Jadwal 42 Kotak',
          description: 'Pantau rutinitas harian dan batas waktu tugas dalam satu kisi kalender visual yang rapi tanpa notifikasi bising.',
        },
        {
          title: 'Aplikasi Native Windows & Android',
          description: 'Dibuat dengan C# dan Avalonia UI dengan integrasi system tray di Windows serta aplikasi lancar di HP Android.',
        },
      ],
      screenshots: [
        {
          title: 'Daftar Tugas Harian & Prioritas',
          shortLabel: 'Daftar Tugas',
          tag: 'Menu Utama',
          caption: 'Kelola tugas harian dengan tag prioritas, kategori warna, dan penyimpanan instan di komputer Anda.',
        },
        {
          title: 'Panel Rincian & Jadwal Pengingat',
          shortLabel: 'Rincian Tugas',
          tag: 'Panel Samping',
          caption: 'Buka panel samping untuk melengkapi catatan tugas, mengatur tanggal tenggat, dan menentukan pengingat.',
        },
        {
          title: 'Target Hidup & Milestone',
          shortLabel: 'Target Hidup',
          tag: 'Rencana Hidup',
          caption: 'Ubah resolusi dan tujuan besar menjadi langkah-langkah konkret yang mudah dipantau kemajuannya.',
        },
        {
          title: 'Kalender Aktivitas 42 Kotak',
          shortLabel: 'Kalender',
          tag: 'Kalender Bulanan',
          caption: 'Lihat seluruh agenda dan kebiasaan berulang dalam satu tampilan kalender yang tenang.',
        },
        {
          title: 'Buku Jurnal & Refleksi Hati',
          shortLabel: 'Jurnal Harian',
          tag: 'Jurnal Refleksi',
          caption: 'Tuliskan refleksi harian dan pantau suasana hati tanpa khawatir data Anda dipindai oleh pihak luar.',
        },
        {
          title: 'Pengaturan Rutinitas Berulang',
          shortLabel: 'Tugas Rutin',
          tag: 'Jadwal Otomatis',
          caption: 'Atur kebiasaan harian, mingguan, atau bulanan agar otomatis muncul sesuai jadwal yang Anda tentukan.',
        },
        {
          title: 'Arsip Tugas yang Telah Selesai',
          shortLabel: 'Riwayat Selesai',
          tag: 'Arsip Catatan',
          caption: 'Lihat kembali pencapaian dan riwayat tugas yang telah selesai dikerjakan kapan saja.',
        },
        {
          title: 'Pilihan Tampilan Terang & Gelap',
          shortLabel: 'Tema Tampilan',
          tag: 'Pengaturan',
          caption: 'Ganti tampilan sesuai kenyamanan Anda, mulai dari mode Daylight yang terang hingga Obsidian yang hening.',
        },
      ],
      faqs: [
        {
          question: 'Di mana data Wadd saya disimpan?',
          answer:
            'Semua tugas, target, dan jurnal Anda tersimpan langsung di dalam database SQLite lokal di memori perangkat Anda. Jika Anda mengaktifkan sinkronisasi, file cadangan terenkripsi dikirim langsung ke folder aplikasi tersembunyi di Google Drive pribadi Anda.',
        },
        {
          question: 'Apakah Lunoit Labs bisa melihat tugas atau file Google Drive saya?',
          answer:
            'Tidak bisa sama sekali. Wadd hanya meminta akses ke folder privat miliknya sendiri (appDataFolder). Wadd tidak bisa melihat, membaca, atau mengubah file dokumen maupun foto pribadi Anda di Google Drive, dan tidak ada data tugas yang disimpan di server Lunoit Labs.',
        },
        {
          question: 'Apakah Wadd bisa digunakan tanpa internet?',
          answer:
            'Tentu saja. Wadd dirancang sejak awal dengan prinsip offline-first. Anda bisa menambah tugas, menulis jurnal, dan mencentang target kapan saja tanpa memerlukan koneksi internet.',
        },
        {
          question: 'Bagaimana cara menghapus data atau mencabut izin aplikasi?',
          answer:
            'Cukup hapus aplikasi dari perangkat Anda untuk menghapus semua data lokal. Untuk menghapus cadangan di cloud, Anda bisa membuka Pengaturan Google Drive > Kelola Aplikasi > Wadd > Hapus data aplikasi tersembunyi, atau cabut izin lewat dasbor Akun Google Anda.',
        },
      ],
      privacyPolicy: {
        lastUpdated: '15 Oktober 2026',
        summary:
          'Wadd adalah aplikasi pengatur tugas dan target hidup offline-first oleh Lunoit Labs. Seluruh data berada di perangkat keras pribadi Anda dengan opsi sinkronisasi langsung ke Google Drive pribadi Anda.',
        sections: [
          {
            title: '1. Gambaran Umum & Arsitektur',
            paragraphs: [
              'Wadd dibangun dengan prinsip penyimpanan lokal: tugas, target harian, dan catatan jurnal refleksi tersimpan langsung di perangkat Anda dalam database SQLite.',
              'Aplikasi ini tidak mengumpulkan data penggunaan pribadi Anda dan tidak pernah menjual informasi apa pun kepada pihak ketiga.',
            ],
          },
          {
            title: '2. Data Pengguna Google & Cakupan Izin',
            paragraphs: [
              'Saat Anda memilih untuk mengaktifkan Sinkronisasi Google Drive, Wadd meminta cakupan izin OAuth 2.0 berikut:',
            ],
            scopes: [
              {
                scope: 'openid, email, profile',
                purpose: 'Digunakan hanya untuk mengenali sesi aktif Anda dan menampilkan alamat email di pengaturan aplikasi.',
              },
              {
                scope: 'https://www.googleapis.com/auth/drive.appdata',
                purpose:
                  'Mengizinkan Wadd membaca dan menulis file database tugas terenkripsi secara ketat di dalam folder aplikasi tersembunyi (appDataFolder). Wadd tidak dapat mengakses file atau foto pribadi Anda.',
              },
              {
                scope: 'https://www.googleapis.com/auth/drive.file',
                purpose: 'Membatasi perubahan file secara ketat hanya pada file yang dibuat langsung oleh aplikasi Wadd.',
              },
            ],
            highlight: {
              title: 'Kepatuhan Kebijakan Data Pengguna Layanan Google API',
              text:
                'Penggunaan dan transfer informasi yang diterima dari Google API oleh Wadd ke aplikasi lain mematuhi Kebijakan Data Pengguna Layanan Google API, termasuk persyaratan Penggunaan Terbatas (Limited Use).',
              link: {
                label: 'Kebijakan Data Pengguna Google API',
                url: 'https://developers.google.com/terms/api-services-user-data-policy',
              },
            },
          },
          {
            title: '3. Perlindungan Data & Tanpa Pembagian Eksternal',
            bullets: [
              'Tanpa Penyimpanan Server Eksternal: Wadd tidak menyimpan tugas atau kredensial Anda di server terpusat kami.',
              'Nol Monetisasi Data: Kami tidak menjual atau membagikan data pribadi Anda kepada pihak ketiga atau broker data.',
              'Nol Pelatihan AI: Catatan jurnal dan tugas harian Anda tidak pernah digunakan untuk melatih model kecerdasan buatan.',
            ],
          },
          {
            title: '4. Retensi dan Penghapusan Data',
            paragraphs: [
              'Anda memegang kepemilikan dan kendali penuh atas data Anda setiap saat:',
            ],
            bullets: [
              'Penghapusan Lokal: Menghapus aplikasi dari perangkat akan menghapus seluruh catatan database lokal.',
              'Penghapusan Cadangan Cloud: Hapus seluruh cadangan sinkronisasi kapan saja via Pengaturan Google Drive > Kelola Aplikasi > Wadd > Hapus data aplikasi tersembunyi.',
              'Cabut Akses: Cabut izin akses kapan saja melalui Izin Akun Google Anda.',
            ],
          },
          {
            title: '5. Informasi Kontak',
            paragraphs: [
              'Untuk pertanyaan privasi mengenai Wadd, hubungi Lunoit Labs di support@lunoit.biz.id atau kunjungi https://lunoit.biz.id/.',
            ],
          },
        ],
      },
      termsOfService: {
        lastUpdated: '15 Oktober 2026',
        summary:
          'Syarat dan Ketentuan Layanan penggunaan aplikasi Wadd untuk Windows dan Android yang dirilis oleh Lunoit Labs.',
        sections: [
          {
            title: '1. Persetujuan Penggunaan',
            paragraphs: [
              'Dengan mengunduh, memasang, atau menggunakan Wadd, Anda menyetujui Syarat dan Ketentuan Layanan ini. Jika tidak setuju, mohon untuk tidak menggunakan perangkat lunak ini.',
            ],
          },
          {
            title: '2. Deskripsi Layanan',
            paragraphs: [
              'Wadd adalah aplikasi manajemen tugas dan target hidup offline-first dengan penyimpanan SQLite lokal dan fitur sinkronisasi Google Drive opsional.',
            ],
          },
          {
            title: '3. Tanggung Jawab Pengguna',
            bullets: [
              'Menjaga keamanan perangkat pribadi, database lokal, dan kredensial Google Anda.',
              'Mengelola cadangan mandiri dan memastikan konfigurasi sinkronisasi berjalan sesuai keinginan.',
              'Memastikan kepatuhan terhadap seluruh hukum lokal, nasional, dan internasional yang berlaku.',
            ],
          },
          {
            title: '4. Layanan Pihak Ketiga',
            paragraphs: [
              'Penggunaan Google API oleh Anda tunduk pada Persyaratan Layanan Google dan Kebijakan Privasi Google. Lunoit Labs tidak bertanggung jawab atas gangguan jaringan pihak ketiga atau perubahan kebijakan API Google.',
            ],
          },
          {
            title: '5. Penafian Jaminan',
            paragraphs: [
              'PERANGKAT LUNAK INI DISEDIAKAN APA ADANYA TANPA JAMINAN TERSIRAT DALAM BENTUK APA PUN.',
            ],
          },
          {
            title: '6. Kontak Penerbit',
            paragraphs: [
              'Untuk pertanyaan hukum atau lisensi, hubungi Lunoit Labs di support@lunoit.biz.id atau kunjungi https://lunoit.biz.id/.',
            ],
          },
        ],
      },
    },
    en: {
      headline: 'Focused Thought. Sovereign Action.',
      tagline: 'Simple, action-oriented task manager and daily planner',
      description:
        'A fast, minimalist, offline-first personal workspace built with .NET 10 and Avalonia UI. Stores all data in an embedded local SQLite database and syncs privately to your personal Google Drive with zero proprietary cloud lock-in.',
      badge: 'Cross-Platform v1.0.0',
      platforms: ['Windows Desktop (.msi & Portable .zip)', 'Android Mobile (.apk)'],
      downloads: [
        {
          label: 'Download Windows Installer (.msi)',
          notes: 'Full desktop integration with auto-start and system tray',
        },
        {
          label: 'Download Windows Portable (.zip)',
          notes: 'Standalone zero-install portable package',
        },
        {
          label: 'Download Android APK (.apk)',
          notes: 'Direct APK download for Android devices',
        },
        {
          label: 'View GitHub Repository',
          notes: 'Open Source Repository',
        },
      ],
      features: [
        {
          title: 'Local-First SQLite Ground Truth',
          description: 'Instant offline performance with all tasks and notes stored directly in an embedded local database.',
        },
        {
          title: 'Private Google Drive Cloud Sync',
          description: 'Syncs privately into your personal Google Drive appDataFolder with zero intermediate company servers.',
        },
        {
          title: 'Life Goals & Milestone Breakdown',
          description: 'Deconstruct long-term targets into concrete milestone checklists with automatic progress calculation.',
        },
        {
          title: 'Daily Reflection & Mood Journal',
          description: 'Personal mental ledger with mood tags, notes, and historical review preserved on your disk.',
        },
        {
          title: 'Interactive 42-Cell Habit Calendar',
          description: 'Visual calendar grid tracking recurring habits and scheduled deadlines without notification noise.',
        },
        {
          title: 'Modern .NET 10 Cross-Platform',
          description: 'Engineered with C# 12 and Avalonia UI 11.2 for Windows desktop tray integration and Android mobile.',
        },
      ],
      screenshots: [
        {
          title: 'Daily Tasks & Priority Workflow',
          shortLabel: 'Tasks View',
          tag: 'Tasks View',
          caption: 'Action-oriented daily task manager with priority tags, categories, and direct SQLite local disk persistence.',
        },
        {
          title: 'Task Details & Schedule Drawer',
          shortLabel: 'Detail Drawer',
          tag: 'Task Drawer',
          caption: 'Collapsible side drawer for editing notes, due dates, notification reminders, and custom tags.',
        },
        {
          title: 'Life Goals & Milestone Breakdown',
          shortLabel: 'Life Goals',
          tag: 'Life Goals',
          caption: 'Deconstruct long-term vision targets into actionable milestone steps with automatic progress calculation.',
        },
        {
          title: 'Interactive 42-Cell Habit Calendar',
          shortLabel: 'Calendar View',
          tag: 'Calendar Grid',
          caption: 'Full-month timeline grid tracking deadlines, daily agenda items, and recurring task occurrences.',
        },
        {
          title: 'Reflective Journal & Mental Ledger',
          shortLabel: 'Daily Journal',
          tag: 'Journaling',
          caption: 'Preserve personal insights and daily reflections alongside your goals with zero cloud surveillance.',
        },
        {
          title: 'Recurring Habit & Scheduled Tasks Engine',
          shortLabel: 'Repeating Tasks',
          tag: 'Routine Engine',
          caption: 'Automate daily, weekly, and custom interval routines with zero cloud server intervention.',
        },
        {
          title: 'Completed History & Task Archive',
          shortLabel: 'Completed Archive',
          tag: 'Task History',
          caption: 'Audit finished milestones and review completed daily items in an immutable local ledger.',
        },
        {
          title: 'Tactile Themes & Application Preferences',
          shortLabel: 'Light & Dark Themes',
          tag: 'Appearance',
          caption: 'Seamlessly switch between daylight high-contrast and obsidian dark mode to suit your workspace.',
        },
      ],
      faqs: [
        {
          question: 'Where is my Wadd data stored?',
          answer:
            'All tasks, goals, and reflections reside in an embedded SQLite database on your device. When cloud sync is active, encrypted backups travel directly between your device and your personal Google Drive application folder.',
        },
        {
          question: 'Does Lunoit Labs have access to my Google Drive or tasks?',
          answer:
            'No. Wadd requests permission only to its isolated private appDataFolder. Wadd cannot read or modify any personal files, photos, or documents outside that folder, and zero task data is sent to Lunoit Labs servers.',
        },
        {
          question: 'Can I use Wadd completely offline?',
          answer:
            'Yes. Wadd is built with an offline-first architecture. You can manage tasks, log journal entries, and track goals without an active internet connection.',
        },
        {
          question: 'How do I delete my data or revoke permissions?',
          answer:
            'Uninstalling the application erases all local data. You can delete cloud backups anytime via Google Drive Settings > Manage Apps > Wadd > Delete hidden app data, or revoke permissions in your Google Account dashboard.',
        },
      ],
      privacyPolicy: {
        lastUpdated: 'October 15, 2026',
        summary:
          'Wadd is an offline-first task and life goals application by Lunoit Labs. All data resides on your personal hardware with optional direct sync to your personal Google Drive.',
        sections: [
          {
            title: '1. Overview and Architecture',
            paragraphs: [
              'Wadd is built with local disk sovereignty: tasks, milestones, and personal reflection journal entries remain stored on your personal device in an embedded SQLite database.',
              'The application contains zero telemetry trackers and does not sell personal information.',
            ],
          },
          {
            title: '2. Google User Data and Scopes',
            paragraphs: [
              'When you opt to enable Google Drive Cloud Backup, Wadd requests the following OAuth 2.0 authorization scopes:',
            ],
            scopes: [
              {
                scope: 'openid, email, profile',
                purpose: 'Used solely to identify your active session and display your signed-in email in settings.',
              },
              {
                scope: 'https://www.googleapis.com/auth/drive.appdata',
                purpose:
                  'Allows Wadd to read and write encrypted task database backups strictly inside a private application folder (appDataFolder). Wadd cannot access your personal files or photos.',
              },
              {
                scope: 'https://www.googleapis.com/auth/drive.file',
                purpose: 'Restricts file modifications strictly to files created directly by the Wadd application.',
              },
            ],
            highlight: {
              title: 'Google API Services User Data Policy Compliance',
              text:
                "Wadd's use and transfer to any other app of information received from Google APIs adheres to the Google API Services User Data Policy, including Limited Use requirements.",
              link: {
                label: 'Google API Services User Data Policy',
                url: 'https://developers.google.com/terms/api-services-user-data-policy',
              },
            },
          },
          {
            title: '3. Data Protection and Zero External Sharing',
            bullets: [
              'No External Server Storage: Wadd does not store your tasks or credentials on proprietary servers.',
              'No Data Monetization: We do not sell or share your personal data with third parties or brokers.',
              'No AI Training on User Data: Journal entries and tasks are never used to train generalized artificial intelligence models.',
            ],
          },
          {
            title: '4. Data Retention and Deletion',
            paragraphs: [
              'You retain full ownership and control over your data at all times:',
            ],
            bullets: [
              'Local Deletion: Uninstalling the application erases all local database records.',
              'Cloud Backup Deletion: Delete all synchronized backups via Google Drive Settings > Manage Apps > Wadd > Delete hidden app data.',
              'Revoke Permissions: Revoke access anytime through Google Account Permissions.',
            ],
          },
          {
            title: '5. Contact Information',
            paragraphs: [
              'For privacy inquiries regarding Wadd, contact Lunoit Labs at support@lunoit.biz.id or visit https://lunoit.biz.id/.',
            ],
          },
        ],
      },
      termsOfService: {
        lastUpdated: 'October 15, 2026',
        summary:
          'Terms of Service governing the use of Wadd application for Windows and Android published by Lunoit Labs.',
        sections: [
          {
            title: '1. Acceptance of Terms',
            paragraphs: [
              'By downloading, installing, or using Wadd, you agree to be bound by these Terms of Service. If you do not agree, do not use the software.',
            ],
          },
          {
            title: '2. Service Description',
            paragraphs: [
              'Wadd is an offline-first task management and life goals tracking application featuring embedded SQLite storage and optional Google Drive synchronization.',
            ],
          },
          {
            title: '3. User Responsibilities',
            bullets: [
              'Maintaining the security and confidentiality of your device, local databases, and Google credentials.',
              'Managing personal backups and ensuring appropriate synchronization settings.',
              'Ensuring compliance with all applicable local, national, and international laws.',
            ],
          },
          {
            title: '4. Third-Party Services',
            paragraphs: [
              'Your use of Google APIs is governed by Google Terms of Service and Google Privacy Policy. Lunoit Labs is not liable for third-party network outages or API policy changes.',
            ],
          },
          {
            title: '5. Disclaimer of Warranties',
            paragraphs: [
              'THE SOFTWARE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.',
            ],
          },
          {
            title: '6. Publisher Contact',
            paragraphs: [
              'For legal or licensing inquiries, contact Lunoit Labs at support@lunoit.biz.id or visit https://lunoit.biz.id/.',
            ],
          },
        ],
      },
    },
  },
};

export function getLocalizedApp(app: AppConfig, lang: Language): AppConfig {
  const key = app.slug === 'wadd' || app.id === 'wadd' ? 'wadd' : 'lunoite';
  const overrides = APP_TRANSLATIONS[key]?.[lang];
  if (!overrides) return app;

  return {
    ...app,
    name: overrides.name ?? app.name,
    headline: overrides.headline ?? app.headline,
    tagline: overrides.tagline ?? app.tagline,
    description: overrides.description ?? app.description,
    badge: overrides.badge ?? app.badge,
    platforms: overrides.platforms ?? app.platforms,
    downloads: app.downloads.map((dl, idx) => {
      const o = overrides.downloads?.[idx];
      return o ? { ...dl, label: o.label ?? dl.label, notes: o.notes ?? dl.notes } : dl;
    }),
    features: app.features.map((feat, idx) => {
      const o = overrides.features?.[idx];
      return o ? { ...feat, title: o.title ?? feat.title, description: o.description ?? feat.description } : feat;
    }),
    screenshots: app.screenshots?.map((shot, idx) => {
      const o = overrides.screenshots?.[idx];
      return o
        ? {
            ...shot,
            title: o.title ?? shot.title,
            shortLabel: o.shortLabel ?? shot.shortLabel,
            tag: o.tag ?? shot.tag,
            caption: o.caption ?? shot.caption,
          }
        : shot;
    }),
    faqs: overrides.faqs ?? app.faqs,
    privacyPolicy: {
      ...app.privacyPolicy,
      lastUpdated: overrides.privacyPolicy.lastUpdated,
      summary: overrides.privacyPolicy.summary,
      sections: overrides.privacyPolicy.sections,
    },
    termsOfService: {
      ...app.termsOfService,
      lastUpdated: overrides.termsOfService.lastUpdated,
      summary: overrides.termsOfService.summary,
      sections: overrides.termsOfService.sections,
    },
  };
}

export function getLocalizedAppsConfig(lang: Language): AppConfig[] {
  return APPS_CONFIG.map((app) => getLocalizedApp(app, lang));
}
