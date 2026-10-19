import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Download,
  Database,
  FileText,
  BookOpen,
  Eye,
  Layers,
  SunMedium,
  Cloud,
  Target,
  Calendar,
  Monitor,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coffee,
} from 'lucide-react';
import { AppConfig } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { useLanguage } from '../context/LanguageContext';
import { siteTranslations } from '../data/translations';

interface AppLandingPageProps {
  app: AppConfig;
  onNavigate: (path: string) => void;
}

function resolveIcon(name: string) {
  switch (name) {
    case 'Database':
      return <Database className="h-5 w-5" />;
    case 'FileText':
      return <FileText className="h-5 w-5" />;
    case 'BookOpen':
      return <BookOpen className="h-5 w-5" />;
    case 'Eye':
      return <Eye className="h-5 w-5" />;
    case 'Layers':
      return <Layers className="h-5 w-5" />;
    case 'SunMedium':
      return <SunMedium className="h-5 w-5" />;
    case 'Cloud':
      return <Cloud className="h-5 w-5" />;
    case 'Target':
      return <Target className="h-5 w-5" />;
    case 'Calendar':
      return <Calendar className="h-5 w-5" />;
    case 'Monitor':
      return <Monitor className="h-5 w-5" />;
    default:
      return <Check className="h-5 w-5" />;
  }
}

export const AppLandingPage: React.FC<AppLandingPageProps> = ({ app, onNavigate }) => {
  const { lang, setLang } = useLanguage();
  const t = siteTranslations[lang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${app.name}: ${app.tagline} | Lunoit Labs`;
    setCurrentSlideIndex(0);
  }, [app]);

  const screenshots = app.screenshots || [];
  const hasMultipleScreenshots = screenshots.length > 1;
  const activeScreenshot = screenshots.length > 0 ? screenshots[currentSlideIndex] : null;

  const handlePrevSlide = () => {
    if (!screenshots.length) return;
    setCurrentSlideIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    if (!screenshots.length) return;
    setCurrentSlideIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNextSlide();
    } else if (diff < -40) {
      handlePrevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <div className="min-h-screen bg-canvas text-main font-sans selection:bg-pine selection:text-paper antialiased pb-20">
      {/* Top Breadcrumb Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-subtle bg-canvas/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2 text-xs font-medium text-muted hover:text-main focus-visible:outline-2 focus-visible:outline-pine"
            >
              <ArrowLeft className="h-4 w-4 text-pine" />
              <span>{t.backToStudio}</span>
            </button>
            <span className="text-subtle">/</span>
            <div className="flex items-center gap-2">
              <img
                src={app.iconUrl}
                alt={`${app.name} icon`}
                className="h-6 w-6 rounded-md object-contain"
              />
              <span className="font-semibold text-sm text-main">{app.shortName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 text-xs">
            <a
              href="#features"
              className="hidden sm:inline-block text-muted hover:text-main transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              {t.navFeatures}
            </a>
            <a
              href="#download"
              className="hidden sm:inline-block text-muted hover:text-main transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              {t.navDownloads}
            </a>
            {app.slug === 'wadd' && (
              <button
                type="button"
                onClick={() => onNavigate('/wadd/subscription')}
                className="text-pine font-medium hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-pine"
              >
                {t.navPricingShort}
              </button>
            )}
            <button
              type="button"
              onClick={() => onNavigate(`/${app.slug}/privacy`)}
              className="text-muted hover:text-main transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              {t.navPrivacy}
            </button>

            {/* Language Switcher Pill */}
            <div
              className="flex items-center rounded-md border border-subtle bg-paper p-0.5 text-xs font-mono"
              title={t.langSwitchTitle}
            >
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 rounded transition-colors text-[11px] font-semibold ${
                  lang === 'id'
                    ? 'bg-pine text-paper shadow-2xs'
                    : 'text-muted hover:text-main'
                }`}
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded transition-colors text-[11px] font-semibold ${
                  lang === 'en'
                    ? 'bg-pine text-paper shadow-2xs'
                    : 'text-muted hover:text-main'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <a
              href="https://lynk.id/lunoit"
              target="_blank"
              rel="noopener noreferrer"
              title={t.coffeeTitle}
              className="flex items-center gap-1.5 rounded-md border border-subtle bg-paper px-2.5 py-1 text-muted hover:text-main hover:border-strong transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              <Coffee className="h-3.5 w-3.5 text-pine" />
              <span className="hidden sm:inline">{t.navCoffeeShort}</span>
            </a>
            <a
              href={app.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.name} GitHub repository`}
              className="flex items-center gap-1.5 rounded-md border border-subtle bg-paper px-2.5 py-1 text-muted hover:text-main hover:border-strong transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.navSourceShort}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-16 sm:space-y-24">
        {/* App Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3.5 py-1 text-xs font-mono text-muted">
            <span className="h-2 w-2 rounded-full bg-pine"></span>
            <span>{app.badge}</span>
            <span className="text-subtle">·</span>
            <span>{app.platforms.join(' / ')}</span>
          </div>

          <div className="flex justify-center">
            <img
              src={app.iconUrl}
              alt={`${app.name} Icon`}
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl shadow-sm object-contain bg-paper p-2 border border-subtle"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-main">
              {app.headline}
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
              {app.description}
            </p>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={app.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-pine px-4 py-2.5 text-xs sm:text-sm font-semibold text-paper hover:bg-pine-hover transition-colors shadow-2xs min-h-[44px] focus-visible:outline-2 focus-visible:outline-pine"
            >
              <Download className="h-4 w-4" />
              <span>{t.downloadLatestRelease}</span>
            </a>

            <a
              href={app.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-subtle bg-paper px-4 py-2.5 text-xs sm:text-sm font-medium text-main hover:border-strong hover:bg-canvas transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-pine"
            >
              <GithubIcon className="h-4 w-4" />
              <span>{t.viewSourceCode}</span>
            </a>

            {app.slug === 'wadd' && (
              <button
                type="button"
                onClick={() => onNavigate('/wadd/subscription')}
                className="inline-flex items-center gap-2 rounded-md border border-teal-500/30 bg-teal-500/10 px-4 py-2.5 text-xs sm:text-sm font-medium text-teal-400 hover:bg-teal-500/20 transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-pine"
              >
                <span>{t.pricingPlans}</span>
              </button>
            )}
          </div>

          <div className="text-[11px] font-mono text-muted">
            {t.engineeredWith} {app.techStack.join(', ')}
          </div>
        </section>

        {/* Mockup / Screenshot Showcase Carousel Frame */}
        <section className="relative rounded-2xl border border-subtle bg-paper p-2 sm:p-4 shadow-sm overflow-hidden">
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-subtle bg-canvas rounded-t-xl mb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-subtle"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-subtle"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-subtle"></div>
              </div>
              <span className="font-mono text-[11px] text-muted">
                {app.name} {t.workspaceView}
              </span>
            </div>

            {hasMultipleScreenshots && (
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-muted">
                  {currentSlideIndex + 1} / {screenshots.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    aria-label={t.prevSlide}
                    className="p-1 rounded text-muted hover:text-main hover:bg-paper transition-colors focus-visible:outline-2 focus-visible:outline-pine"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label={t.nextSlide}
                    className="p-1 rounded text-muted hover:text-main hover:bg-paper transition-colors focus-visible:outline-2 focus-visible:outline-pine"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {hasMultipleScreenshots ? (
            <div>
              {/* Carousel Fixed Aspect Ratio Viewport */}
              <div
                className="relative group overflow-hidden rounded-lg border border-subtle bg-canvas aspect-[16/10] w-full flex items-center justify-center select-none"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Sliding Strip Track */}
                <div
                  className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                  {screenshots.map((shot, idx) => (
                    <div
                      key={shot.id}
                      className="min-w-full w-full h-full flex items-center justify-center p-2 sm:p-4 shrink-0 bg-canvas overflow-hidden"
                    >
                      <img
                        src={shot.src}
                        alt={shot.title}
                        className="max-h-full max-w-full w-auto h-auto object-contain mx-auto block pointer-events-none drop-shadow-sm select-none"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>

                {/* Left/Right Click Overlays */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label={t.prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 backdrop-blur-sm border border-subtle text-main shadow-md hover:bg-paper hover:scale-105 transition-all opacity-85 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-pine"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label={t.nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 backdrop-blur-sm border border-subtle text-main shadow-md hover:bg-paper hover:scale-105 transition-all opacity-85 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-pine"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Dots Pagination */}
              <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                {screenshots.map((shot, idx) => (
                  <button
                    key={shot.id}
                    type="button"
                    onClick={() => setCurrentSlideIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${shot.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlideIndex
                        ? 'w-7 bg-pine'
                        : 'w-2 bg-subtle hover:bg-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Caption */}
              <div className="mt-2 px-2 py-1 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-1 min-h-[48px]">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-serif text-sm sm:text-base font-semibold text-main">
                      {activeScreenshot?.title}
                    </h3>
                    {activeScreenshot?.tag && (
                      <span className="font-mono text-[10px] text-pine bg-canvas border border-subtle px-2 py-0.5 rounded">
                        {activeScreenshot.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted mt-0.5 line-clamp-2">
                    {activeScreenshot?.caption}
                  </p>
                </div>

                <div className="flex sm:hidden items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="px-3 py-1 text-xs border border-subtle rounded-md bg-canvas text-main font-mono flex items-center gap-1"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" /> {t.prevSlide}
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="px-3 py-1 text-xs border border-subtle rounded-md bg-canvas text-main font-mono flex items-center gap-1"
                  >
                    {t.nextSlide} <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ) : activeScreenshot ? (
            <div>
              <div className="overflow-hidden rounded-lg border border-subtle bg-canvas aspect-[16/10] w-full flex items-center justify-center p-2 sm:p-4">
                <img
                  src={activeScreenshot.src}
                  alt={activeScreenshot.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain mx-auto block"
                />
              </div>
              <div className="mt-2 px-2 py-1">
                <h3 className="font-serif text-sm sm:text-base font-semibold text-main">
                  {activeScreenshot.title}
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  {activeScreenshot.caption}
                </p>
              </div>
            </div>
          ) : app.mockupImageUrl ? (
            <div className="overflow-hidden rounded-lg border border-subtle bg-canvas aspect-[16/10] w-full flex items-center justify-center p-2 sm:p-4">
              <img
                src={app.mockupImageUrl}
                alt={`${app.name} interface showcase`}
                className="max-h-full max-w-full w-auto h-auto object-contain mx-auto block"
              />
            </div>
          ) : (
            <div className="w-full aspect-[16/10] rounded-lg bg-canvas border border-subtle flex flex-col items-center justify-center p-6 text-center">
              <img
                src={app.iconUrl}
                alt={`${app.name} icon`}
                className="h-16 w-16 rounded-xl mb-4 object-contain"
              />
              <h3 className="font-semibold text-base text-main">{app.name}</h3>
              <p className="text-xs text-muted max-w-md mt-1">
                {app.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {app.platforms.map((plat) => (
                  <span
                    key={plat}
                    className="rounded bg-paper px-2.5 py-1 font-mono text-[11px] text-muted border border-subtle"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Key Features Grid */}
        <section id="features" className="space-y-8 scroll-mt-20">
          <div className="border-b border-subtle pb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-main">
              {t.keyCapabilities}
            </h2>
            <p className="text-xs text-muted mt-1">
              {t.keyCapabilitiesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-subtle bg-paper p-6 space-y-3 hover:border-strong transition-colors"
              >
                <div className="text-pine">
                  {resolveIcon(feat.iconName)}
                </div>
                <h3 className="text-main font-semibold text-sm">
                  {feat.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Channels Section */}
        <section id="download" className="space-y-6 scroll-mt-20">
          <div className="border-b border-subtle pb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-main">
              {t.downloadChannels}
            </h2>
            <p className="text-xs text-muted mt-1">
              {t.downloadChannelsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            {app.downloads.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-lg border ${
                  item.primary
                    ? 'bg-paper border-pine/40 shadow-2xs'
                    : 'bg-paper border-subtle'
                } space-y-2 flex flex-col justify-between`}
              >
                <div>
                  <div className="text-main font-semibold text-sm mb-1">{item.platform}</div>
                  {item.notes && (
                    <div className="text-muted text-[11px] mb-2">{item.notes}</div>
                  )}
                </div>
                <div className="pt-2 border-t border-subtle">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pine font-semibold hover:underline inline-flex items-center gap-1 min-h-[44px]"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {app.faqs.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-subtle pb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-main">
                {t.faqsTitle}
              </h2>
              <p className="text-xs text-muted mt-1">
                {t.faqsSubtitle} {app.shortName}.
              </p>
            </div>

            <div className="space-y-3">
              {app.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg border border-subtle bg-paper overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-medium text-xs sm:text-sm text-main hover:bg-canvas transition-colors focus-visible:outline-2 focus-visible:outline-pine"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-muted transition-transform duration-200 shrink-0 ml-2 ${
                          isOpen ? 'rotate-180 text-pine' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs leading-relaxed text-muted border-t border-subtle/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Data Sovereignty & Legal Summary Box */}
        <section className="rounded-xl border border-subtle bg-paper p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5 text-pine font-semibold text-sm">
            <ShieldCheck className="h-5 w-5" />
            <h2 className="text-main font-semibold text-base sm:text-lg">
              {t.sovereigntyGuarantee}
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-muted">
            {app.privacyPolicy.summary}
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <button
              type="button"
              onClick={() => onNavigate(`/${app.slug}/privacy`)}
              className="text-pine font-medium hover:underline inline-flex items-center gap-1 min-h-[44px]"
            >
              <span>{t.readPrivacyPolicy}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate(`/${app.slug}/terms`)}
              className="text-pine font-medium hover:underline inline-flex items-center gap-1 min-h-[44px]"
            >
              <span>{t.readTermsOfService}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>
      </main>

      {/* App-Specific Footer */}
      <footer className="mt-20 border-t border-subtle pt-8 text-center text-xs text-muted font-mono">
        <div className="mx-auto max-w-7xl px-4 space-y-2">
          <p>© {new Date().getFullYear()} Lunoit Labs. {t.footerPublishedWith}</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="hover:text-main transition-colors"
            >
              {t.footerHome}
            </button>
            <span className="text-subtle">·</span>
            <button
              type="button"
              onClick={() => onNavigate(`/${app.slug}/privacy`)}
              className="hover:text-main transition-colors"
            >
              {t.navPrivacy}
            </button>
            <span className="text-subtle">·</span>
            <button
              type="button"
              onClick={() => onNavigate(`/${app.slug}/terms`)}
              className="hover:text-main transition-colors"
            >
              {t.legalTerms}
            </button>
            <span className="text-subtle">·</span>
            <a
              href="mailto:support@lunoit.biz.id"
              className="hover:text-main transition-colors"
            >
              support@lunoit.biz.id
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
