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
  Smartphone,
  ShieldCheck,
  Terminal,
  HeartHandshake
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { APPS_CONFIG } from '../data/apps';

interface WaddSubscriptionPageProps {
  onNavigate: (path: string) => void;
}

export const WaddSubscriptionPage: React.FC<WaddSubscriptionPageProps> = ({ onNavigate }) => {
  const waddApp = APPS_CONFIG.find((a) => a.slug === 'wadd')!;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [customerEmail, setCustomerEmail] = useState<string>('');

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
    document.title = 'Paket & Sinkronisasi Antar-Perangkat Wadd | Lunoit Labs';
  }, []);

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
              <span>Kembali ke Wadd</span>
            </button>
            <span className="text-subtle">/</span>
            <div className="flex items-center gap-2">
              <img
                src={waddApp.iconUrl}
                alt="Wadd Icon"
                className="h-6 w-6 rounded-md object-contain"
              />
              <span className="font-semibold text-sm text-main">Paket &amp; Sinkronisasi</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              type="button"
              onClick={() => onNavigate('/wadd')}
              className="hidden sm:inline-block text-muted hover:text-main transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              Fitur Aplikasi
            </button>
            <a
              href="https://github.com/deonetwo/wadd-todo-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-subtle bg-paper px-2.5 py-1 text-muted hover:text-main hover:border-strong transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Open Source</span>
            </a>
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
                  Akun Google Terdeteksi
                </p>
                <p className="text-sm font-semibold text-main">
                  {customerEmail}
                </p>
                <p className="text-xs text-muted">
                  Lisensi yang Anda pilih akan langsung terhubung ke email ini saat checkout di Polar.
                </p>
              </div>
            </div>
            <span className="rounded-full bg-paper border border-subtle px-3 py-1 text-[11px] font-mono text-muted shrink-0">
              Sinkronisasi Otomatis
            </span>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 text-xs font-mono text-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-pine" />
            <span>Kedaulatan Data &amp; Sinkronisasi Antar-Perangkat</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-main font-serif">
            Aplikasi Gratis. Bayar Hanya Jika Butuh Sinkronisasi Antar-Perangkat.
          </h1>

          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            Wadd adalah aplikasi to-do dan pencatat target hidup yang <strong>100% gratis digunakan di komputer atau HP Anda</strong>. Paket langganan ini hanya diperlukan jika Anda ingin tugas Anda otomatis tersambung antar-perangkat lewat Google Drive pribadi.
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
              Bulanan
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
              <span>Tahunan</span>
              <span className="rounded-full bg-paper/20 px-1.5 py-0.2 font-mono text-[10px] text-teal-300 font-bold">
                Hemat ~45%
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
                    Coba Gratis
                  </span>
                  <span className="font-mono text-xs text-muted">Otomatis Aktif</span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-main">Trial 14 Hari</h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Coba kemudahan sinkronisasi antar-perangkat langsung setelah menghubungkan akun Google.
                </p>
              </div>

              <div className="py-3 border-y border-subtle">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-main font-serif">Rp 0</span>
                  <span className="text-xs text-muted font-mono">/ 14 hari pertama</span>
                </div>
                <p className="text-[11px] text-pine font-mono mt-1">
                  Langsung pakai, tanpa kartu kredit
                </p>
              </div>

              {/* Poin Manfaat */}
              <ul className="space-y-2.5 text-xs text-main">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Aktif otomatis begitu Anda hubungkan akun Google di aplikasi Wadd</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Sinkronisasi otomatis antara laptop Windows dan HP Android</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Cadangkan seluruh tugas dan catatan ke Google Drive pribadi</span>
                </li>
                <li className="flex items-start gap-2 text-muted">
                  <span className="text-muted font-mono text-[11px] shrink-0 mt-0.5">•</span>
                  <span>Bila masa trial selesai, sinkronisasi otomatis berhenti sementara. Semua data di perangkat Anda tetap aman dan bisa dibuka normal</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-6 border-t border-subtle">
              <button
                type="button"
                onClick={() => onNavigate('/wadd#download')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-subtle bg-canvas px-4 py-2.5 text-xs font-semibold text-main hover:border-strong hover:bg-paper transition-all shadow-2xs"
              >
                <span>Unduh Wadd &amp; Coba Gratis</span>
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
                    Pilihan Utama
                  </span>
                  <span className="font-mono text-xs text-pine font-medium">
                    {billingCycle === 'yearly' ? 'Hemat 45%' : 'Fleksibel'}
                  </span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-main">Wadd Pro</h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Sinkronisasi Google Drive terus berjalan agar tugas Anda selalu up-to-date di mana pun.
                </p>
              </div>

              <div className="py-3 border-y border-subtle">
                {billingCycle === 'yearly' ? (
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-main font-serif">$9.99</span>
                      <span className="text-xs text-muted font-mono">/ tahun (~Rp 160.000)</span>
                    </div>
                    <p className="text-[11px] text-pine font-medium mt-1">
                      Hanya ~Rp 13.000 / bulan. Sangat terjangkau untuk pemakaian setahun penuh.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-main font-serif">$1.49</span>
                      <span className="text-xs text-muted font-mono">/ bulan (~Rp 24.000)</span>
                    </div>
                    <p className="text-[11px] text-muted font-medium mt-1">
                      Setara harga segelas kopi atau parkir seminggu. Bisa dibatalkan kapan saja.
                    </p>
                  </div>
                )}
              </div>

              {/* Poin Manfaat */}
              <ul className="space-y-2.5 text-xs text-main">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Sinkronisasi Google Drive aktif berkelanjutan tanpa jeda</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Masa tenggang +2 hari bila pembayaran perpanjangan sempat tertunda</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Jika Anda membatalkan, akses tetap aktif sampai akhir periode yang sudah dibayar</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Mendukung langsung pengembang independen tanpa iklan dan tanpa investor</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-6 border-t border-subtle">
              <a
                href={getCheckoutUrl(billingCycle)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-pine px-4 py-2.5 text-xs font-semibold text-paper hover:bg-pine-hover transition-all shadow-xs"
              >
                <span>Langganan via Polar</span>
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
                    Sekali Bayar
                  </span>
                  <span className="rounded-full bg-pine-soft text-pine px-2 py-0.5 font-mono text-[10px] font-bold">
                    Coming Soon
                  </span>
                </div>
                <h2 className="font-serif text-xl font-semibold text-main">Wadd Lifetime</h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Satu kali bayar untuk akses sinkronisasi selamanya tanpa perlu tagihan berulang bulanan.
                </p>
              </div>

              <div className="py-3 border-y border-subtle">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-main font-serif">Segera Hadir</span>
                </div>
                <p className="text-[11px] text-muted font-mono mt-1">
                  Masa aktif selamanya, tanpa kedaluwarsa
                </p>
              </div>

              {/* Poin Manfaat */}
              <ul className="space-y-2.5 text-xs text-main">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Akses sinkronisasi Google Drive selamanya tanpa batas waktu</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Bebas dari biaya langganan berulang selamanya</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-pine shrink-0 mt-0.5" />
                  <span>Mendapatkan seluruh pembaruan fitur Wadd di masa depan</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-6 border-t border-subtle">
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-subtle bg-canvas px-4 py-2.5 text-xs font-semibold text-muted cursor-not-allowed"
              >
                <span>Segera Dibuka di Polar</span>
              </button>
            </div>
          </div>
        </section>

        {/* Penjelasan Transparan: Aplikasi Sebenarnya Gratis & Bisa Self-Deploy */}
        <section className="rounded-2xl border border-subtle bg-paper p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-pine font-medium">
              <HeartHandshake className="h-4 w-4" />
              <span>Komitmen Keterbukaan &amp; Open Source</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-main">
              Wadd 100% Gratis. Anda Memegang Kendali Penuh.
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Kami percaya alat produktivitas tidak boleh mengunci data penggunanya. Berikut prinsip yang kami pegang:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="rounded-xl border border-subtle bg-canvas p-4 space-y-2">
              <div className="flex items-center gap-2 text-main font-semibold text-xs sm:text-sm">
                <Laptop className="h-4 w-4 text-pine" />
                <span>100% Gratis di Komputer Anda</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Manajemen tugas, kalender jadwal, target hidup, checklist, dan jurnal refleksi selalu bisa dipakai gratis selamanya secara offline tanpa perlu mendaftar akun apa pun.
              </p>
            </div>

            <div className="rounded-xl border border-subtle bg-canvas p-4 space-y-2">
              <div className="flex items-center gap-2 text-main font-semibold text-xs sm:text-sm">
                <Cloud className="h-4 w-4 text-pine" />
                <span>Biaya Hanya untuk Sinkronisasi Antar-Perangkat</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Biaya langganan murah ini murni digunakan untuk memelihara layanan sinkronisasi otomatis siap pakai agar Anda tidak perlu repot menyiapkan infrastruktur sendiri.
              </p>
            </div>

            <div className="rounded-xl border border-subtle bg-canvas p-4 space-y-2">
              <div className="flex items-center gap-2 text-main font-semibold text-xs sm:text-sm">
                <Terminal className="h-4 w-4 text-pine" />
                <span>Bebas Self-Deploy Mandiri</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Karena Wadd sepenuhnya open source, pengguna yang memiliki keahlian teknis dapat melakukan self-deploy jembatan sync sendiri secara mandiri tanpa membayar biaya langganan.
              </p>
            </div>
          </div>
        </section>

        {/* Tanya Jawab Singkat (FAQ Human-Centric) */}
        <section className="rounded-2xl border border-subtle bg-paper p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-pine" />
            <h3 className="font-serif text-lg font-semibold text-main">
              Pertanyaan yang Sering Diajukan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            <div className="space-y-1.5">
              <h4 className="font-semibold text-main">
                Bagaimana lisensi saya aktif di aplikasi setelah membayar?
              </h4>
              <p className="text-muted leading-relaxed">
                Gunakan alamat email Google yang sama saat membayar di Polar. Begitu pembayaran selesai, aplikasi Wadd Anda akan otomatis mengenali status lisensi dan menampilkan badge Pro saat sinkronisasi berikutnya.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-semibold text-main">
                Apa yang terjadi jika masa trial 14 hari saya habis?
              </h4>
              <p className="text-muted leading-relaxed">
                Aplikasi tetap berjalan normal dan semua tugas Anda tetap ada di komputer. Hanya sinkronisasi otomatis ke Google Drive yang berhenti sementara sampai Anda memutuskan untuk berlangganan.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-semibold text-main">
                Bagaimana jika pembayaran bulanan saya terlambat?
              </h4>
              <p className="text-muted leading-relaxed">
                Terdapat masa tenggang 2 hari kalender sehingga sinkronisasi Anda tidak langsung putus mendadak saat kartu Anda sedang diperbarui.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-semibold text-main">
                Bisakah saya membatalkan langganan kapan saja?
              </h4>
              <p className="text-muted leading-relaxed">
                Bisa, langsung melalui portal pelanggan Polar tanpa prosedur berbelit. Akses sinkronisasi tetap aktif sampai akhir periode yang telah Anda bayar.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Kontak Sederhana */}
        <footer className="text-center space-y-3 pt-4">
          <p className="text-xs text-muted">
            Ada pertanyaan atau kendala seputar akun dan pembayaran?
          </p>
          <a
            href="mailto:support@lunoit.biz.id"
            className="inline-flex items-center gap-1.5 text-xs text-pine font-medium hover:underline"
          >
            Hubungi kami: support@lunoit.biz.id
          </a>
        </footer>
      </main>
    </div>
  );
};
