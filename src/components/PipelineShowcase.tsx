import React from 'react';
import { Layers, ArrowRight, Check, Plus, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { getLocalizedAppsConfig } from '../data/localizedApps';
import { AppConfig } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { siteTranslations } from '../data/translations';

interface PipelineShowcaseProps {
  onNavigate?: (path: string) => void;
}

export const PipelineShowcase: React.FC<PipelineShowcaseProps> = ({ onNavigate }) => {
  const { lang } = useLanguage();
  const t = siteTranslations[lang];
  const apps = getLocalizedAppsConfig(lang);

  return (
    <section id="apps" className="py-16 md:py-24 border-b border-subtle bg-canvas scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-paper px-3 py-1 font-mono text-xs text-muted mb-4 shadow-2xs">
            <Layers className="h-3.5 w-3.5 text-pine" />
            <span>{t.pipelineBadge}</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-main sm:text-4xl">
            {t.pipelineHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed font-normal">
            {t.pipelineSubheading}
          </p>
        </div>

        {/* Dynamic Apps Bento / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {apps.map((app: AppConfig) => (
            <div
              key={app.id}
              className="rounded-2xl border border-subtle bg-paper p-6 sm:p-7 shadow-2xs flex flex-col justify-between hover:border-strong transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={app.iconUrl}
                      alt={app.name}
                      className="h-10 w-10 rounded-xl shadow-2xs shrink-0 object-contain bg-canvas p-1.5 border border-subtle"
                    />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-main">
                        {app.name}
                      </h3>
                      <span className="font-mono text-xs text-pine font-medium">
                        {app.badge}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(`/${app.slug}`)}
                    className="rounded bg-pine-soft text-pine px-2.5 py-1 font-mono text-[11px] font-semibold hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    <span>/{app.slug}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5 font-normal">
                  {app.tagline}
                </p>

                {/* Platforms & Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {app.platforms.map((plat) => (
                    <span
                      key={plat}
                      className="rounded-md border border-subtle bg-canvas px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {plat}
                    </span>
                  ))}
                </div>

                {/* Key Features Preview */}
                <ul className="space-y-2 mb-6 text-xs text-main">
                  {app.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-pine shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-subtle flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate?.(`/${app.slug}`)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-pine px-3.5 py-2 text-xs font-semibold text-paper hover:bg-pine-hover shadow-xs transition-colors"
                >
                  <span>{t.exploreApp} {app.shortName}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>

                <a
                  href={app.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-subtle bg-canvas p-2 text-xs text-muted hover:text-main hover:border-strong transition-colors ml-auto"
                  aria-label={`View ${app.name} GitHub repository`}
                  title="GitHub Repository"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Card 3: More in Development */}
          <div className="rounded-2xl border-2 border-dashed border-subtle bg-paper/50 p-6 sm:p-7 flex flex-col justify-between hover:border-muted/50 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-canvas border border-subtle flex items-center justify-center text-muted shrink-0">
                  <Plus className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-main">
                    {t.devCardTitle}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {t.devCardBadge}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5 font-normal">
                {t.devCardDesc}
              </p>

              <div className="rounded-lg bg-canvas p-4 border border-subtle text-xs space-y-2 text-muted">
                <div className="font-medium text-main">{t.devCardResearchTitle}</div>
                <ul className="space-y-1 list-disc pl-4 text-[11px]">
                  <li>{t.devCardResearch1}</li>
                  <li>{t.devCardResearch2}</li>
                  <li>{t.devCardResearch3}</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-subtle/60 flex items-center justify-between text-xs font-mono text-muted">
              <span>{t.devCardStatus}</span>
              <a
                href="https://github.com/Lunoit-Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pine hover:underline inline-flex items-center gap-1"
              >
                <span>{t.devCardFollow}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
