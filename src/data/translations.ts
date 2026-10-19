import { Language } from '../types';

export interface SiteTranslations {
  // Common / Language Switcher
  langId: string;
  langEn: string;
  langSwitchTitle: string;

  // Navbar
  navApps: string;
  navLunoite: string;
  navWadd: string;
  navPhilosophy: string;
  navPricing: string;
  navContact: string;
  navDownload: string;
  navTheme: string;
  navThemeDark: string;
  navThemeLight: string;
  navSource: string;
  coffeeTitle: string;
  coffeeLabel: string;
  openMenu: string;
  closeMenu: string;

  // Hero
  heroStudioBadge: string;
  heroHeadline: string;
  heroLead: string;
  heroCtaExplore: string;
  heroCtaPhilosophy: string;
  heroPillarLocal: string;
  heroPillarLocalDesc: string;
  heroPillarPrivacy: string;
  heroPillarPrivacyDesc: string;
  heroPillarSpeed: string;
  heroPillarSpeedDesc: string;

  // PipelineShowcase
  pipelineBadge: string;
  pipelineHeading: string;
  pipelineSubheading: string;
  exploreApp: string;
  downloadApp: string;
  devCardTitle: string;
  devCardBadge: string;
  devCardDesc: string;
  devCardResearchTitle: string;
  devCardResearch1: string;
  devCardResearch2: string;
  devCardResearch3: string;
  devCardStatus: string;
  devCardFollow: string;

  // StudioPhilosophy
  philosophyBadge: string;
  philosophyHeading: string;
  philosophySubheading: string;
  pillar1Title: string;
  pillar1Tagline: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Tagline: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Tagline: string;
  pillar3Desc: string;

  // Footer
  footerStudioDesc: string;
  footerSupportLabel: string;
  footerColApps: string;
  footerWaddPricing: string;
  footerAllApps: string;
  footerColStudio: string;
  footerGithubOrg: string;
  footerThreePillars: string;
  footerKofi: string;
  footerLynk: string;
  footerColLegal: string;
  footerLunoitePrivacy: string;
  footerLunoiteTerms: string;
  footerWaddPrivacy: string;
  footerWaddTerms: string;
  footerAllRights: string;
  footerSovereignNote: string;
  footerBackToTop: string;

  // DownloadModal
  modalChannel: string;
  modalTitle: string;
  modalDesc: string;
  modalPackage: string;
  modalShaVerified: string;
  modalArch: string;
  modalFormat: string;
  modalNotes: string;
  modalTerminalTitle: string;
  modalCopy: string;
  modalCopied: string;
  modalViewChecksums: string;
  modalClose: string;
  modalDirectDownload: string;

  // AppLandingPage
  backToStudio: string;
  navFeatures: string;
  navDownloads: string;
  navPricingShort: string;
  navPrivacy: string;
  navCoffeeShort: string;
  navSourceShort: string;
  downloadLatestRelease: string;
  viewSourceCode: string;
  pricingPlans: string;
  engineeredWith: string;
  workspaceView: string;
  prevSlide: string;
  nextSlide: string;
  keyCapabilities: string;
  keyCapabilitiesDesc: string;
  downloadChannels: string;
  downloadChannelsDesc: string;
  faqsTitle: string;
  faqsSubtitle: string;
  sovereigntyGuarantee: string;
  readPrivacyPolicy: string;
  readTermsOfService: string;
  footerPublishedWith: string;
  footerHome: string;

  // AppLegalPage
  legalBackTo: string;
  legalTerms: string;
  legalPrivacy: string;
  legalHome: string;
  legalBadge: string;
  legalPrivacyFor: string;
  legalTermsFor: string;
  legalLastUpdated: string;
  legalPublisher: string;
  legalApplication: string;
  legalPublisherIdentity: string;
  legalSupportContact: string;
  legalWebsite: string;
  legalRepo: string;
}

export const siteTranslations: Record<Language, SiteTranslations> = {
  id: {
    // Common / Language Switcher
    langId: 'ID',
    langEn: 'EN',
    langSwitchTitle: 'Pilih Bahasa',

    // Navbar
    navApps: 'Aplikasi',
    navLunoite: 'Lunoite',
    navWadd: 'Wadd',
    navPhilosophy: 'Prinsip',
    navPricing: 'Paket Wadd',
    navContact: 'Kontak',
    navDownload: 'Unduh',
    navTheme: 'Ganti tema',
    navThemeDark: 'Ganti ke tema Obsidian (Gelap)',
    navThemeLight: 'Ganti ke tema Daylight (Terang)',
    navSource: 'Sumber',
    coffeeTitle: 'Dukung studio via Lynk.id',
    coffeeLabel: 'Dukung Studio',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',

    // Hero
    heroStudioBadge: 'Studio Software Mandiri',
    heroHeadline: 'Aplikasi tenang untuk pikiran yang ingin fokus.',
    heroLead: 'Kami membangun aplikasi desktop dan mobile yang ringan, cepat, dan menghargai privasi Anda. Semua data tersimpan langsung di perangkat Anda tanpa ketergantungan cloud.',
    heroCtaExplore: 'Jelajahi Aplikasi',
    heroCtaPhilosophy: 'Prinsip Desain',
    heroPillarLocal: 'Penyimpanan Lokal',
    heroPillarLocalDesc: 'File tersimpan dalam format standar di komputer Anda, sehingga selalu mudah dibuka dan dibaca kapan saja.',
    heroPillarPrivacy: 'Aman & Privat',
    heroPillarPrivacyDesc: 'Aplikasi bekerja secara mandiri di komputer Anda tanpa mengumpulkan data pribadi atau aktivitas Anda.',
    heroPillarSpeed: 'Cepat & Ringan',
    heroPillarSpeedDesc: 'Membuka catatan dan dokumen seketika dengan tampilan bersih yang nyaman untuk bekerja.',

    // PipelineShowcase
    pipelineBadge: 'Koleksi Aplikasi',
    pipelineHeading: 'Aplikasi praktis untuk produktivitas harian Anda.',
    pipelineSubheading: 'Aplikasi mandiri berbasis penyimpanan lokal dari Lunoit Labs, dirancang agar Anda dapat bekerja dengan tenang tanpa gangguan.',
    exploreApp: 'Lihat Rincian',
    downloadApp: 'Unduh',
    devCardTitle: 'Dalam Pengembangan',
    devCardBadge: 'Laboratorium Riset',
    devCardDesc: 'Kami terus bereksperimen menciptakan alat produktivitas baru yang sederhana, tenang, dan mengutamakan penyimpanan lokal.',
    devCardResearchTitle: 'Riset yang Sedang Berjalan:',
    devCardResearch1: 'Pencarian dan indeks file lokal tanpa internet',
    devCardResearch2: 'Kanvas pemetaan ide dan catatan visual',
    devCardResearch3: 'Pengukur waktu fokus kerja tanpa distraksi',
    devCardStatus: 'Status: Eksplorasi Prototipe',
    devCardFollow: 'Lihat Progres di GitHub',

    // StudioPhilosophy
    philosophyBadge: 'Prinsip Kerja',
    philosophyHeading: 'Prinsip kami dalam merancang aplikasi.',
    philosophySubheading: 'Aplikasi yang baik adalah alat yang membantu menyelesaikan pekerjaan dengan tenang, lalu memberi ruang untuk hal lain dalam hidup Anda.',
    pillar1Title: 'Cepat & Ringan',
    pillar1Tagline: 'Buka seketika tanpa jeda.',
    pillar1Desc: 'Aplikasi terbuka dalam hitungan detik dan menyimpan langsung ke drive Anda tanpa proses latar belakang yang membebani memori.',
    pillar2Title: 'Kontrol Penuh di Tangan Anda',
    pillar2Tagline: 'Tersimpan aman di perangkat.',
    pillar2Desc: 'Catatan dan dokumen Anda tersimpan rapi di komputer pribadi. Fitur sinkronisasi cloud selalu opsional langsung ke akun pribadi Anda.',
    pillar3Title: 'Jujur & Terbuka',
    pillar3Tagline: 'Fokus pada fungsi nyata.',
    pillar3Desc: 'Antarmuka bersih tanpa notifikasi mengganggu, tanpa biaya tersembunyi, dan dengan kode sumber yang dapat Anda periksa kapan saja.',

    // Footer
    footerStudioDesc: 'Studio software mandiri yang merancang aplikasi desktop dan mobile untuk menulis, mencatat, dan mengelola produktivitas harian secara mandiri.',
    footerSupportLabel: 'Dukungan:',
    footerColApps: 'Aplikasi',
    footerWaddPricing: 'Paket & Lisensi Wadd',
    footerAllApps: 'Semua Aplikasi & Roadmap',
    footerColStudio: 'Studio & Dukungan',
    footerGithubOrg: 'Organisasi GitHub',
    footerThreePillars: 'Prinsip Karya Studio',
    footerKofi: 'Ko-fi (Internasional)',
    footerLynk: 'Lynk.id (QRIS / Indonesia)',
    footerColLegal: 'Legal & Privasi',
    footerLunoitePrivacy: 'Kebijakan Privasi Lunoite',
    footerLunoiteTerms: 'Syarat Layanan Lunoite',
    footerWaddPrivacy: 'Kebijakan Privasi Wadd',
    footerWaddTerms: 'Syarat Layanan Wadd',
    footerAllRights: 'Hak cipta dilindungi.',
    footerSovereignNote: '',
    footerBackToTop: 'Kembali ke atas',

    // DownloadModal
    modalChannel: 'Distribusi Resmi',
    modalTitle: 'Unduh Lunoite Markdown v1.2.3',
    modalDesc: 'Gratis dan open source di bawah naungan Lunoit Labs. Dibangun dengan Tauri v2 untuk performa desktop yang gegas dan pengeditan file lokal langsung.',
    modalPackage: 'Paket',
    modalShaVerified: 'Terverifikasi SHA-256',
    modalArch: 'Arsitektur:',
    modalFormat: 'Format File:',
    modalNotes: 'Mengatur asosiasi file .md otomatis dan integrasi taskbar. Kompatibel dengan Windows 10/11 64-bit.',
    modalTerminalTitle: 'Terminal / Manajer Paket:',
    modalCopy: 'Salin perintah',
    modalCopied: 'Disalin',
    modalViewChecksums: 'Lihat seluruh berkas checksum di GitHub',
    modalClose: 'Tutup',
    modalDirectDownload: 'Unduh Installer',

    // AppLandingPage
    backToStudio: 'Produk Lunoit Labs',
    navFeatures: 'Fitur',
    navDownloads: 'Unduhan',
    navPricingShort: 'Harga',
    navPrivacy: 'Privasi',
    navCoffeeShort: 'Dukung',
    navSourceShort: 'Kode Sumber',
    downloadLatestRelease: 'Unduh Versi Terbaru',
    viewSourceCode: 'Lihat Kode Sumber',
    pricingPlans: 'Paket & Lisensi',
    engineeredWith: 'Dibangun dengan',
    workspaceView: 'Tampilan Antarmuka',
    prevSlide: 'Sebelumnya',
    nextSlide: 'Berikutnya',
    keyCapabilities: 'Kemampuan Utama & Keunggulan',
    keyCapabilitiesDesc: 'Dirancang untuk kecepatan, kemudahan pemakaian, dan keamanan data di drive Anda.',
    downloadChannels: 'Pilihan Installer & Unduhan',
    downloadChannelsDesc: 'File installer resmi yang dirilis langsung melalui GitHub Releases.',
    faqsTitle: 'Pertanyaan yang Sering Diajukan',
    faqsSubtitle: 'Hal-hal yang perlu Anda ketahui seputar',
    sovereigntyGuarantee: 'Privasi & Keamanan Data',
    readPrivacyPolicy: 'Baca Kebijakan Privasi Lengkap',
    readTermsOfService: 'Baca Syarat dan Ketentuan Layanan',
    footerPublishedWith: 'Hak cipta dilindungi.',
    footerHome: 'Beranda Lunoit Labs',

    // AppLegalPage
    legalBackTo: 'Kembali ke',
    legalTerms: 'Syarat & Ketentuan Layanan',
    legalPrivacy: 'Kebijakan Privasi',
    legalHome: 'Beranda Studio',
    legalBadge: 'Legal & Kebijakan Lunoit Labs',
    legalPrivacyFor: 'Kebijakan Privasi untuk',
    legalTermsFor: 'Syarat dan Ketentuan Layanan untuk',
    legalLastUpdated: 'Terakhir Diperbarui:',
    legalPublisher: 'Penerbit:',
    legalApplication: 'Aplikasi:',
    legalPublisherIdentity: 'Informasi Penerbit & Kontak',
    legalSupportContact: 'Kontak Dukungan:',
    legalWebsite: 'Situs Web:',
    legalRepo: 'Repositori Kode:',
  },
  en: {
    // Common / Language Switcher
    langId: 'ID',
    langEn: 'EN',
    langSwitchTitle: 'Select Language',

    // Navbar
    navApps: 'Applications',
    navLunoite: 'Lunoite',
    navWadd: 'Wadd',
    navPhilosophy: 'Philosophy',
    navPricing: 'Wadd Plans',
    navContact: 'Contact',
    navDownload: 'Download',
    navTheme: 'Toggle theme',
    navThemeDark: 'Switch to Obsidian dark theme',
    navThemeLight: 'Switch to Daylight paper theme',
    navSource: 'Source',
    coffeeTitle: 'Support the studio via Lynk.id',
    coffeeLabel: 'Support Studio',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',

    // Hero
    heroStudioBadge: 'Independent Software Studio',
    heroHeadline: 'Calm software for focused minds.',
    heroLead: 'We build fast, quiet desktop and mobile applications that respect your attention and privacy. Your work stays directly on your own device without unnecessary cloud dependencies.',
    heroCtaExplore: 'Explore Applications',
    heroCtaPhilosophy: 'Design Principles',
    heroPillarLocal: 'Local Storage',
    heroPillarLocalDesc: 'Files stay in standard formats on your drive, never locked in a proprietary database.',
    heroPillarPrivacy: 'Private & Secure',
    heroPillarPrivacyDesc: 'Applications work locally on your hardware without collecting personal data or usage habits.',
    heroPillarSpeed: 'Fast & Quiet',
    heroPillarSpeedDesc: 'Instant launch times with clean typography designed to help you stay in the flow.',

    // PipelineShowcase
    pipelineBadge: 'Application Suite',
    pipelineHeading: 'Dependable tools for your everyday focus.',
    pipelineSubheading: 'Independent, local-first applications built for focused work, with your files always stored safely on your device.',
    exploreApp: 'View Details',
    downloadApp: 'Download',
    devCardTitle: 'In Active Development',
    devCardBadge: 'Research Lab',
    devCardDesc: 'We are actively experimenting with new productivity tools engineered for local simplicity and zero cloud lock-in.',
    devCardResearchTitle: 'Active Research Areas:',
    devCardResearch1: 'Offline search and local file indexing',
    devCardResearch2: 'Visual thought mapping and canvas notes',
    devCardResearch3: 'Distraction-free deep work timers',
    devCardStatus: 'Status: Prototyping',
    devCardFollow: 'Follow Progress on GitHub',

    // StudioPhilosophy
    philosophyBadge: 'Design Principles',
    philosophyHeading: 'Three core commitments behind our craft.',
    philosophySubheading: 'We build tools you open, use with deep focus, and close with peace of mind. Software should give you your time back, not capture it.',
    pillar1Title: 'Fast & Lightweight',
    pillar1Tagline: 'Opens instantly without taxing your system.',
    pillar1Desc: 'Applications launch in milliseconds, write directly to local files, and avoid memory-heavy background processes.',
    pillar2Title: 'Full Data Control',
    pillar2Tagline: 'Stored directly on your device.',
    pillar2Desc: 'Your notes and tasks stay on your computer in standard, open formats. Cloud sync is always optional and connects directly to your own storage.',
    pillar3Title: 'Honest & Independent Craft',
    pillar3Tagline: 'Focused utility without manipulation.',
    pillar3Desc: 'Clean interfaces free from dark patterns, zero notification badges, and honest pricing without subscription traps.',

    // Footer
    footerStudioDesc: 'An independent software studio crafting calm, dependable tools for writing, planning, and everyday productivity.',
    footerSupportLabel: 'Support:',
    footerColApps: 'Applications',
    footerWaddPricing: 'Wadd Licensing & Pricing',
    footerAllApps: 'All Apps & Roadmap',
    footerColStudio: 'Studio & Support',
    footerGithubOrg: 'GitHub Organization',
    footerThreePillars: 'Three Craft Pillars',
    footerKofi: 'Ko-fi (International)',
    footerLynk: 'Lynk.id (QRIS / Indo)',
    footerColLegal: 'Legal & Privacy',
    footerLunoitePrivacy: 'Lunoite Privacy',
    footerLunoiteTerms: 'Lunoite Terms',
    footerWaddPrivacy: 'Wadd Privacy',
    footerWaddTerms: 'Wadd Terms',
    footerAllRights: 'All rights reserved.',
    footerSovereignNote: '',
    footerBackToTop: 'Back to top',

    // DownloadModal
    modalChannel: 'Official Distribution',
    modalTitle: 'Download Lunoite Markdown v1.2.3',
    modalDesc: 'Free and open source under Lunoit Labs. Built with Tauri v2 for native desktop speed and direct local disk editing.',
    modalPackage: 'Package',
    modalShaVerified: 'SHA-256 Verified',
    modalArch: 'Architecture:',
    modalFormat: 'File Format:',
    modalNotes: 'Configures native .md file associations and taskbar integration. Windows 10/11 64-bit.',
    modalTerminalTitle: 'Package Manager / Terminal:',
    modalCopy: 'Copy command',
    modalCopied: 'Copied',
    modalViewChecksums: 'View all GitHub release checksums',
    modalClose: 'Close',
    modalDirectDownload: 'Direct Download',

    // AppLandingPage
    backToStudio: 'A Lunoit Labs Product',
    navFeatures: 'Features',
    navDownloads: 'Downloads',
    navPricingShort: 'Pricing',
    navPrivacy: 'Privacy',
    navCoffeeShort: 'Coffee',
    navSourceShort: 'Source',
    downloadLatestRelease: 'Download Latest Release',
    viewSourceCode: 'View Source Code',
    pricingPlans: 'Pricing & Plans',
    engineeredWith: 'Engineered with',
    workspaceView: 'Workspace View',
    prevSlide: 'Prev',
    nextSlide: 'Next',
    keyCapabilities: 'Key Capabilities & Architecture',
    keyCapabilitiesDesc: 'Engineered for speed, simplicity, and local data security.',
    downloadChannels: 'Download Channels & Releases',
    downloadChannelsDesc: 'Authentic binaries released through official GitHub Releases.',
    faqsTitle: 'Frequently Asked Questions',
    faqsSubtitle: 'Everything you need to know about',
    sovereigntyGuarantee: 'Privacy & Data Security',
    readPrivacyPolicy: 'Read Full Privacy Policy',
    readTermsOfService: 'Read Terms of Service',
    footerPublishedWith: 'All rights reserved.',
    footerHome: 'Lunoit Labs Home',

    // AppLegalPage
    legalBackTo: 'Back to',
    legalTerms: 'Terms of Service',
    legalPrivacy: 'Privacy Policy',
    legalHome: 'Lunoit Labs Home',
    legalBadge: 'Lunoit Labs Legal',
    legalPrivacyFor: 'Privacy Policy for',
    legalTermsFor: 'Terms of Service for',
    legalLastUpdated: 'Last Updated:',
    legalPublisher: 'Publisher:',
    legalApplication: 'Application:',
    legalPublisherIdentity: 'Publisher Identity & Contact',
    legalSupportContact: 'Support Contact:',
    legalWebsite: 'Website:',
    legalRepo: 'Repository:',
  }
};
