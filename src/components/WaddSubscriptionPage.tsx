import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Check,
  Clock,
  Sparkles,
  Zap,
  Cloud,
  ExternalLink,
  HelpCircle,
  Laptop,
  ShieldCheck,
  Terminal,
  HeartHandshake,
  Globe
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { APPS_CONFIG } from '../data/apps';
import { useLanguage } from '../context/LanguageContext';

interface WaddSubscriptionPageProps {
  onNavigate: (path: string) => void;
}

const translations = {
  id: {
    backToWadd: 'Kembali ke Wadd',
    pageNavTitle: 'Paket & Sinkronisasi',
    featuresNav: 'Fitur Aplikasi',
    openSourceNav: 'Open Source',
    accountDetectedTitle: 'Akun Google Terdeteksi',
    accountDetectedDesc: 'Lisensi yang Anda pilih akan langsung terhubung ke email ini saat checkout di Polar.',
    autoSyncBadge: 'Sinkronisasi Otomatis',
    heroBadge: 'Sinkronisasi Cloud Pribadi',
    heroTitle: 'Aplikasi Gratis. Bayar Hanya Jika Butuh Sinkronisasi Antar-Perangkat.',
    heroSubtitle: 'Wadd adalah aplikasi to-do dan pencatat target hidup yang 100% gratis digunakan di komputer atau HP Anda. Paket langganan ini hanya diperlukan jika Anda ingin tugas Anda otomatis tersambung antar-perangkat lewat Google Drive pribadi.',
    monthlyToggle: 'Bulanan',
    yearlyToggle: 'Tahunan',
    saveDiscountBadge: 'Hemat ~45%',

    // Trial
    trialBadge: 'Coba Gratis',
    trialAutoActive: 'Otomatis Aktif',
    trialTitle: 'Trial 14 Hari',
    trialDesc: 'Coba kemudahan sinkronisasi antar-perangkat langsung setelah menghubungkan akun Google.',
    trialPrice: 'Rp 0',
    trialPeriod: '/ 14 hari pertama',
    trialSubtext: 'Langsung pakai, tanpa kartu kredit',
    trialBenefits: [
      'Aktif otomatis begitu Anda hubungkan akun Google di aplikasi Wadd',
      'Sinkronisasi otomatis antara laptop Windows dan HP Android',
      'Cadangkan seluruh tugas dan catatan ke Google Drive pribadi',
      'Bila masa trial selesai, sinkronisasi otomatis berhenti sementara. Semua data di perangkat Anda tetap aman dan bisa dibuka normal',
    ],
    trialCta: 'Unduh Wadd & Coba Gratis',

    // Pro
    proBadge: 'Pilihan Utama',
    proMonthlyTag: 'Fleksibel',
    proYearlyTag: 'Hemat 45%',
    proTitle: 'Wadd Pro',
    proDesc: 'Sinkronisasi Google Drive terus berjalan agar tugas Anda selalu up-to-date di mana pun.',
    proMonthlyPrice: '$1.49',
    proMonthlyPeriod: '/ bulan (~Rp 24.000)',
    proMonthlySubtext: 'Setara harga segelas kopi atau parkir seminggu. Bisa dibatalkan kapan saja.',
    proYearlyPrice: '$9.99',
    proYearlyPeriod: '/ tahun (~Rp 160.000)',
    proYearlySubtext: 'Hanya ~Rp 13.000 / bulan. Sangat terjangkau untuk pemakaian setahun penuh.',
    proBenefits: [
      'Sinkronisasi Google Drive aktif berkelanjutan tanpa jeda',
      'Masa tenggang +2 hari bila pembayaran perpanjangan sempat tertunda',
      'Jika Anda membatalkan, akses tetap aktif sampai akhir periode yang sudah dibayar',
      'Mendukung langsung pengembang independen tanpa iklan dan tanpa investor',
    ],
    proCta: 'Langganan via Polar',

    // Lifetime
    lifetimeBadge: 'Sekali Bayar',
    lifetimeComingSoon: 'Coming Soon',
    lifetimeTitle: 'Wadd Lifetime',
    lifetimeDesc: 'Satu kali bayar untuk akses sinkronisasi selamanya tanpa perlu tagihan berulang bulanan.',
    lifetimePrice: 'Segera Hadir',
    lifetimeSubtext: 'Masa aktif selamanya, tanpa kedaluwarsa',
    lifetimeBenefits: [
      'Akses sinkronisasi Google Drive selamanya tanpa batas waktu',
      'Bebas dari biaya langganan berulang selamanya',
      'Mendapatkan seluruh pembaruan fitur Wadd di masa depan',
    ],
    lifetimeCta: 'Segera Dibuka di Polar',

    // Open source commitment
    openSourceBadge: 'Komitmen Keterbukaan & Open Source',
    openSourceTitle: 'Wadd 100% Gratis. Anda Memegang Kendali Penuh.',
    openSourceSubtitle: 'Kami percaya alat produktivitas tidak boleh mengunci data penggunanya. Berikut prinsip yang kami pegang:',
    pillar1Title: '100% Gratis di Komputer Anda',
    pillar1Desc: 'Manajemen tugas, kalender jadwal, target hidup, checklist, dan jurnal refleksi selalu bisa dipakai gratis selamanya secara offline tanpa perlu mendaftar akun apa pun.',
    pillar2Title: 'Biaya Hanya untuk Sinkronisasi Antar-Perangkat',
    pillar2Desc: 'Biaya langganan murah ini murni digunakan untuk memelihara layanan sinkronisasi otomatis siap pakai agar Anda tidak perlu repot menyiapkan infrastruktur sendiri.',
    pillar3Title: 'Bebas Self-Deploy Mandiri',
    pillar3Desc: 'Karena Wadd sepenuhnya open source, pengguna yang memiliki keahlian teknis dapat melakukan self-deploy jembatan sync sendiri secara mandiri tanpa membayar biaya langganan.',

    // FAQ
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
      {
        q: 'Bagaimana lisensi saya aktif di aplikasi setelah membayar?',
        a: 'Gunakan alamat email Google yang sama saat membayar di Polar. Begitu pembayaran selesai, aplikasi Wadd Anda akan otomatis mengenali status lisensi saat sinkronisasi berikutnya.',
      },
      {
        q: 'Apa yang terjadi jika masa trial 14 hari saya habis?',
        a: 'Aplikasi tetap berjalan normal dan semua tugas Anda tetap ada di komputer. Hanya sinkronisasi otomatis ke Google Drive yang berhenti sementara sampai Anda memutuskan untuk berlangganan.',
      },
      {
        q: 'Bagaimana jika pembayaran bulanan saya terlambat?',
        a: 'Terdapat masa tenggang 2 hari kalender sehingga sinkronisasi Anda tidak langsung putus mendadak saat kartu Anda sedang diperbarui.',
      },
      {
        q: 'Bisakah saya membatalkan langganan kapan saja?',
        a: 'Bisa, langsung melalui portal pelanggan Polar tanpa prosedur berbelit. Akses sinkronisasi tetap aktif sampai akhir periode yang telah Anda bayar.',
      },
    ],

    footerQuestion: 'Ada pertanyaan atau kendala seputar akun dan pembayaran?',
    footerContact: 'Hubungi kami: support@lunoit.biz.id',
  },
  en: {
    backToWadd: 'Back to Wadd',
    pageNavTitle: 'Plans & Sync',
    featuresNav: 'Features',
    openSourceNav: 'Open Source',
    accountDetectedTitle: 'Google Account Detected',
    accountDetectedDesc: 'Your chosen plan will automatically link to this email upon checkout on Polar.',
    autoSyncBadge: 'Auto-Sync Ready',
    heroBadge: 'Private Cloud Sync',
    heroTitle: 'Free App. Pay Only If You Need Multi-Device Sync.',
    heroSubtitle: 'Wadd is a task management and life goals tracker that is 100% free to use on your computer or mobile device. A subscription is only needed if you want your tasks to automatically sync across devices via your personal Google Drive.',
    monthlyToggle: 'Monthly',
    yearlyToggle: 'Yearly',
    saveDiscountBadge: 'Save ~45%',

    // Trial
    trialBadge: 'Free Trial',
    trialAutoActive: 'Auto-Activated',
    trialTitle: '14-Day Free Trial',
    trialDesc: 'Experience multi-device syncing right away by connecting your personal Google account.',
    trialPrice: '$0',
    trialPeriod: '/ first 14 days',
    trialSubtext: 'Instant access, no credit card required',
    trialBenefits: [
      'Activates automatically as soon as you connect your Google account in Wadd',
      'Automatic sync between your Windows laptop and Android phone',
      'Private encrypted backups directly to your personal Google Drive',
      'When the trial ends, automatic sync pauses temporarily. All data on your device remains completely safe and functional',
    ],
    trialCta: 'Download Wadd & Try Free',

    // Pro
    proBadge: 'Recommended',
    proMonthlyTag: 'Flexible',
    proYearlyTag: 'Save 45%',
    proTitle: 'Wadd Pro',
    proDesc: 'Continuous Google Drive sync keeping your tasks up-to-date across all your devices.',
    proMonthlyPrice: '$1.49',
    proMonthlyPeriod: '/ month',
    proMonthlySubtext: 'Less than the price of a cup of coffee. Cancel anytime.',
    proYearlyPrice: '$9.99',
    proYearlyPeriod: '/ year',
    proYearlySubtext: 'Just ~$0.83 / month. Affordable for an entire year of peace of mind.',
    proBenefits: [
      'Continuous, uninterrupted Google Drive sync',
      '+2 days grace period if payment renewal is ever delayed',
      'If canceled, access remains active until the end of the paid billing period',
      'Directly supports independent software craft with zero ads or investor pressure',
    ],
    proCta: 'Subscribe on Polar',

    // Lifetime
    lifetimeBadge: 'One-Time Purchase',
    lifetimeComingSoon: 'Coming Soon',
    lifetimeTitle: 'Wadd Lifetime',
    lifetimeDesc: 'One-time payment for lifetime syncing access without recurring subscription fees.',
    lifetimePrice: 'Coming Soon',
    lifetimeSubtext: 'Lifetime validity, zero expiration',
    lifetimeBenefits: [
      'Lifetime Google Drive sync access with no recurring charges',
      'Permanently free from monthly or yearly renewal fees',
      'Includes all future Wadd updates and improvements',
    ],
    lifetimeCta: 'Coming Soon on Polar',

    // Open source commitment
    openSourceBadge: 'Open Source & Transparency',
    openSourceTitle: 'Wadd Is 100% Free. You Hold Complete Control.',
    openSourceSubtitle: 'We believe productivity tools should never hold your data hostage. Here are the principles we uphold:',
    pillar1Title: '100% Free On Your Hardware',
    pillar1Desc: 'Task management, timeline calendar, life goals, checklists, and reflective journaling are always free offline on your disk without requiring any account.',
    pillar2Title: 'Pay Only For Multi-Device Sync',
    pillar2Desc: 'This low-cost subscription exists purely to maintain a hassle-free, ready-to-use sync bridge so you do not have to configure your own cloud infrastructure.',
    pillar3Title: 'Self-Host For Free If You Prefer',
    pillar3Desc: 'Because Wadd is completely open source, technical users can self-deploy their own sync bridge independently without paying any subscription fee.',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'How does my license activate after payment?',
        a: 'Use the same Google email address during checkout on Polar. As soon as payment completes, Wadd automatically recognizes your license on the next sync.',
      },
      {
        q: 'What happens when my 14-day trial ends?',
        a: 'The app continues to work normally and all your tasks stay on your computer. Only automatic sync to Google Drive pauses temporarily until you choose to subscribe.',
      },
      {
        q: 'What happens if my payment renewal is delayed?',
        a: 'We provide a 2-day calendar grace period so your multi-device sync does not abruptly disconnect while your payment method updates.',
      },
      {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes, directly through Polar customer portal with no friction. Your sync access remains active until the end of the billing period you paid for.',
      },
    ],

    footerQuestion: 'Have questions or need assistance with your account or payment?',
    footerContact: 'Contact us: support@lunoit.biz.id',
  }
};

export const WaddSubscriptionPage: React.FC<WaddSubscriptionPageProps> = ({ onNavigate }) => {
  const waddApp = APPS_CONFIG.find((a) => a.slug === 'wadd')!;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const { lang, setLang, toggleLang } = useLanguage();

  const t = translations[lang];

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const email = params.get('customer_email');
      if (email) {
        setCustomerEmail(email.trim());
      }
    } catch {
      // Safe fallback
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    document.title = lang === 'en'
      ? 'Wadd Plans & Multi-Device Sync | Lunoit Labs'
      : 'Paket & Sinkronisasi Antar-Perangkat Wadd | Lunoit Labs';
  }, [lang]);

  const toggleLanguage = () => {
    toggleLang();
  };

  const polarBaseUrl = 'https://polar.sh/lunoit';

  const getCheckoutUrl = (tier: 'monthly' | 'yearly') => {
    let url = `${polarBaseUrl}?product=${tier === 'yearly' ? 'wadd-pro-yearly' : 'wadd-pro-monthly'}`;
    if (customerEmail) {
      url += `&customer_email=${encodeURIComponent(customerEmail)}`;
    }
    return url;
  };

  return (
    <div className="min-h-screen bg-canvas text-main font-sans selection:bg-pine selection:text-paper antialiased">
      {/* Navigasi Atas */}
      <header className="sticky top-0 z-40 w-full border-b border-subtle bg-canvas/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/wadd')}
              className="flex items-center gap-2 text-xs font-medium text-muted hover:text-main focus-visible:outline-2 focus-visible:outline-pine"
            >
              <ArrowLeft className="h-4 w-4 text-pine" />
              <span>{t.backToWadd}</span>
            </button>
            <span className="text-subtle">/</span>
            <div className="flex items-center gap-2">
              <img
                src={waddApp.iconUrl}
                alt="Wadd Icon"
                className="h-6 w-6 rounded-md object-contain"
              />
              <span className="font-semibold text-sm text-main">{t.pageNavTitle}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 text-xs">
            <button
              type="button"
              onClick={() => onNavigate('/wadd')}
              className="hidden sm:inline-block text-muted hover:text-main transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              {t.featuresNav}
            </button>
            <a
              href="https://github.com/deonetwo/wadd-todo-app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-md border border-subtle bg-paper px-2.5 py-1 text-muted hover:text-main hover:border-strong transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>{t.openSourceNav}</span>
            </a>

            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={`Switch language to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-subtle bg-paper px-2.5 py-1 text-xs font-mono font-medium text-main hover:border-strong hover:bg-canvas transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              <Globe className="h-3.5 w-3.5 text-pine" />
              <span className={lang === 'id' ? 'font-bold text-pine' : 'text-muted'}>ID</span>
              <span className="text-subtle">/</span>
              <span className={lang === 'en' ? 'font-bold text-pine' : 'text-muted'}>EN</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12 sm:space-y-16">
        {/* Banner Akun Terdeteksi jika dibuka langsung dari tombol Upgrade di App */}
        {customerEmail && (
          <div className="rounded-xl border border-pine/30 bg-pine-soft p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-pine text-paper flex items-center justify-center shrink-0">
                <Cloud className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-pine font-semibold">
                  {t.accountDetectedTitle}
                </p>
                <p className="text-sm font-semibold text-main">
                  {customerEmail}
                </p>
                <p className="text-xs text-muted">
                  {t.accountDetectedDesc}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-paper border border-subtle px-3 py-1 text-[11px] font-mono text-muted shrink-0">
              {t.autoSyncBadge}
            </span>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 text-xs font-mono text-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-pine" />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-main font-serif">
            {t.heroTitle}
          </h1>

          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>

          {/* Toggle Bulanan / Tahunan */}
          <div className="inline-flex items-center gap-1 rounded-full border border-subtle bg-paper p-1 shadow-2xs pt-1">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-pine text-paper font-semibold shadow-2xs'
                  : 'text-muted hover:text-main'
              }`}
            >
              {t.monthlyToggle}
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-pine text-paper font-semibold shadow-2xs'
                  : 'text-muted hover:text-main'
              }`}
            >
              <span>{t.yearlyToggle}</span>
              <span className="rounded-full bg-paper/20 px-1.5 py-0.2 font-mono text-[10px] text-teal-300 font-bold">
                {t.saveDiscountBadge}
              </span>
            </button>
          </div>
        </section>

        {/* 3 Kartu Paket Utama */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Kartu 1: Trial 14 Hari */}
          <div className="rounded-2xl border border-subtle bg-paper p-6 flex flex-col justify-between shadow-2xs hover:border-strong transition-all">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-subtle bg-canvas px-2 py-0.5 font-mono text-[11px] text-muted font-medium">
                    <Clock className="h-3 w-3 text-pine" />
                    {t.trialBadge}
                  </span>
                  <span className="font-mono text-xs text-muted">{t.trialAutoActive}</span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-main">{t.trialTitle}</h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {t.trialDesc}
                </p>
              </div>

              <div className="py-3 border-y border-subtle">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-main font-serif">{t.trialPrice}</span>
                  <span className="text-xs text-muted font-mono">{t.trialPeriod}</span>
                </div>
                <p className="text-[11px] text-pine font-mono mt-1">
                  {t.trialSubtext}
                </p>
              </div>

              {/* Poin Manfaat */}
              <ul className="space-y-2.5 text-xs text-main">
                {t.trialBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {idx === t.trialBenefits.length - 1 ? (
                      <span className="text-muted font-mono text-[11px] shrink-0 mt-0.5">•</span>
                    ) : (
                      <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                    )}
                    <span className={idx === t.trialBenefits.length - 1 ? 'text-muted' : ''}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 mt-6 border-t border-subtle">
              <button
                type="button"
                onClick={() => onNavigate('/wadd#download')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-subtle bg-canvas px-4 py-2.5 text-xs font-semibold text-main hover:border-strong hover:bg-paper transition-all shadow-2xs"
              >
                <span>{t.trialCta}</span>
              </button>
            </div>
          </div>

          {/* Kartu 2: Pro Langganan (Highlight) */}
          <div className="rounded-2xl border-2 border-pine/50 bg-paper p-6 flex flex-col justify-between shadow-sm relative hover:border-pine transition-all">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-pine/30 bg-pine-soft px-2 py-0.5 font-mono text-[11px] text-pine font-semibold">
                    <Zap className="h-3 w-3 text-pine" />
                    {t.proBadge}
                  </span>
                  <span className="font-mono text-xs text-pine font-medium">
                    {billingCycle === 'yearly' ? t.proYearlyTag : t.proMonthlyTag}
                  </span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-main">{t.proTitle}</h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {t.proDesc}
                </p>
              </div>

              <div className="py-3 border-y border-subtle">
                {billingCycle === 'yearly' ? (
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-main font-serif">{t.proYearlyPrice}</span>
                      <span className="text-xs text-muted font-mono">{t.proYearlyPeriod}</span>
                    </div>
                    <p className="text-[11px] text-pine font-medium mt-1">
                      {t.proYearlySubtext}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-main font-serif">{t.proMonthlyPrice}</span>
                      <span className="text-xs text-muted font-mono">{t.proMonthlyPeriod}</span>
                    </div>
                    <p className="text-[11px] text-muted font-medium mt-1">
                      {t.proMonthlySubtext}
                    </p>
                  </div>
                )}
              </div>

              {/* Poin Manfaat */}
              <ul className="space-y-2.5 text-xs text-main">
                {t.proBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 mt-6 border-t border-subtle">
              <a
                href={getCheckoutUrl(billingCycle)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-pine px-4 py-2.5 text-xs font-semibold text-paper hover:bg-pine-hover transition-all shadow-xs"
              >
                <span>{t.proCta}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Kartu 3: Lifetime (Coming Soon) */}
          <div className="rounded-2xl border border-subtle bg-paper p-6 flex flex-col justify-between shadow-2xs opacity-90 hover:opacity-100 transition-all">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-subtle bg-canvas px-2 py-0.5 font-mono text-[11px] text-muted font-medium">
                    <Sparkles className="h-3 w-3 text-pine" />
                    {t.lifetimeBadge}
                  </span>
                  <span className="rounded-full bg-pine-soft text-pine px-2 py-0.5 font-mono text-[10px] font-bold">
                    {t.lifetimeComingSoon}
                  </span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-main">{t.lifetimeTitle}</h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {t.lifetimeDesc}
                </p>
              </div>

              <div className="py-3 border-y border-subtle">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-main font-serif">{t.lifetimePrice}</span>
                </div>
                <p className="text-[11px] text-muted font-mono mt-1">
                  {t.lifetimeSubtext}
                </p>
              </div>

              {/* Poin Manfaat */}
              <ul className="space-y-2.5 text-xs text-main">
                {t.lifetimeBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 mt-6 border-t border-subtle">
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-subtle bg-canvas px-4 py-2.5 text-xs font-semibold text-muted cursor-not-allowed"
              >
                <span>{t.lifetimeCta}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Penjelasan Transparan: Aplikasi Sebenarnya Gratis & Bisa Self-Deploy */}
        <section className="rounded-2xl border border-subtle bg-paper p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-pine font-medium">
              <HeartHandshake className="h-4 w-4" />
              <span>{t.openSourceBadge}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-main">
              {t.openSourceTitle}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {t.openSourceSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="rounded-xl border border-subtle bg-canvas p-4 space-y-2">
              <div className="flex items-center gap-2 text-main font-semibold text-xs sm:text-sm">
                <Laptop className="h-4 w-4 text-pine" />
                <span>{t.pillar1Title}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="rounded-xl border border-subtle bg-canvas p-4 space-y-2">
              <div className="flex items-center gap-2 text-main font-semibold text-xs sm:text-sm">
                <Cloud className="h-4 w-4 text-pine" />
                <span>{t.pillar2Title}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="rounded-xl border border-subtle bg-canvas p-4 space-y-2">
              <div className="flex items-center gap-2 text-main font-semibold text-xs sm:text-sm">
                <Terminal className="h-4 w-4 text-pine" />
                <span>{t.pillar3Title}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
          </div>
        </section>

        {/* Tanya Jawab Singkat (FAQ Human-Centric) */}
        <section className="rounded-2xl border border-subtle bg-paper p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-pine" />
            <h3 className="font-serif text-lg font-semibold text-main">
              {t.faqTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            {t.faqs.map((faq, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="font-semibold text-main">
                  {faq.q}
                </h4>
                <p className="text-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Kontak Sederhana */}
        <footer className="text-center space-y-3 pt-4">
          <p className="text-xs text-muted">
            {t.footerQuestion}
          </p>
          <a
            href="mailto:support@lunoit.biz.id"
            className="inline-flex items-center gap-1.5 text-xs text-pine font-medium hover:underline"
          >
            {t.footerContact}
          </a>
        </footer>
      </main>
    </div>
  );
};
