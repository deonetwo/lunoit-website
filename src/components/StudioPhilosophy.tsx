import React from 'react';
import { Compass, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteTranslations } from '../data/translations';

export const StudioPhilosophy: React.FC = () => {
  const { lang } = useLanguage();
  const t = siteTranslations[lang];

  const pillars = [
    {
      icon: Zap,
      title: t.pillar1Title,
      tagline: t.pillar1Tagline,
      description: t.pillar1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.pillar2Title,
      tagline: t.pillar2Tagline,
      description: t.pillar2Desc,
    },
    {
      icon: HeartHandshake,
      title: t.pillar3Title,
      tagline: t.pillar3Tagline,
      description: t.pillar3Desc,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-subtle bg-paper/50 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-3 shadow-2xs">
            <Compass className="h-3.5 w-3.5 text-pine" />
            <span>{t.philosophyBadge}</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            {t.philosophyHeading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted">
            {t.philosophySubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-subtle bg-paper p-6 sm:p-7 shadow-2xs hover:border-strong transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pine-soft text-pine mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-main mb-1">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-xs text-pine font-medium mb-3">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
