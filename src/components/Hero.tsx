import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Zap, HardDrive } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteTranslations } from '../data/translations';

interface HeroProps {
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { lang } = useLanguage();
  const t = siteTranslations[lang];

  return (
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-24 md:pb-28 border-b border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper pl-2.5 pr-4 py-1 text-xs text-muted shadow-2xs mb-6">
            <span className="h-2 w-2 rounded-full bg-pine"></span>
            <span className="font-mono font-medium text-main">Lunoit Labs</span>
            <span className="text-subtle">/</span>
            <span className="text-muted">{t.heroStudioBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-main sm:text-5xl md:text-6xl leading-[1.12]">
            {t.heroHeadline}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed font-sans font-normal max-w-2xl mx-auto">
            {t.heroLead}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#apps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-pine px-6 py-3 text-sm font-semibold text-paper hover:bg-pine-hover shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-pine"
            >
              <span>{t.heroCtaExplore}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-subtle bg-paper px-6 py-3 text-sm font-semibold text-main hover:border-strong hover:bg-canvas shadow-2xs transition-all focus-visible:outline-2 focus-visible:outline-pine"
            >
              <Compass className="h-4 w-4" />
              <span>{t.heroCtaPhilosophy}</span>
            </a>
          </div>

          {/* Quick Pillars Strip */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 border-t border-subtle text-left">
            <div className="rounded-lg border border-subtle bg-paper p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-pine mb-1">
                <HardDrive className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold text-main">{t.heroPillarLocal}</span>
              </div>
              <p className="text-xs text-muted leading-normal">
                {t.heroPillarLocalDesc}
              </p>
            </div>

            <div className="rounded-lg border border-subtle bg-paper p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-pine mb-1">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold text-main">{t.heroPillarPrivacy}</span>
              </div>
              <p className="text-xs text-muted leading-normal">
                {t.heroPillarPrivacyDesc}
              </p>
            </div>

            <div className="rounded-lg border border-subtle bg-paper p-3.5 shadow-2xs">
              <div className="flex items-center gap-2 text-pine mb-1">
                <Zap className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold text-main">{t.heroPillarSpeed}</span>
              </div>
              <p className="text-xs text-muted leading-normal">
                {t.heroPillarSpeedDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
