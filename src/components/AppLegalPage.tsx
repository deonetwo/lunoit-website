import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, ExternalLink } from 'lucide-react';
import { AppConfig } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { useLanguage } from '../context/LanguageContext';
import { siteTranslations } from '../data/translations';

interface AppLegalPageProps {
  app: AppConfig;
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const AppLegalPage: React.FC<AppLegalPageProps> = ({ app, type, onNavigate }) => {
  const { lang, setLang } = useLanguage();
  const t = siteTranslations[lang];
  const isPrivacy = type === 'privacy';
  const doc = isPrivacy ? app.privacyPolicy : app.termsOfService;
  const pageTitle = isPrivacy
    ? `${t.legalPrivacy}: ${app.name} | Lunoit Labs`
    : `${t.legalTerms}: ${app.name} | Lunoit Labs`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <article className="min-h-screen bg-canvas text-main py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-4xl">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate(`/${app.slug}`)}
            className="inline-flex items-center gap-2 rounded-md border border-subtle bg-paper px-3.5 py-2 text-xs font-medium text-main hover:border-strong hover:bg-canvas transition-colors focus-visible:outline-2 focus-visible:outline-pine"
          >
            <ArrowLeft className="h-4 w-4 text-pine" />
            <span>{t.legalBackTo} {app.name}</span>
          </button>

          <div className="flex items-center gap-3 text-xs">
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

            <button
              type="button"
              onClick={() => onNavigate(isPrivacy ? `/${app.slug}/terms` : `/${app.slug}/privacy`)}
              className="text-muted hover:text-main transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              {isPrivacy ? t.legalTerms : t.legalPrivacy}
            </button>
            <span className="text-subtle">·</span>
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="text-muted hover:text-main transition-colors focus-visible:outline-2 focus-visible:outline-pine"
            >
              {t.legalHome}
            </button>
          </div>
        </nav>

        {/* Legal Document Header */}
        <header className="border-b border-subtle pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={app.iconUrl}
              alt={`${app.name} Logo`}
              className="h-10 w-10 rounded-xl shadow-2xs object-contain bg-paper p-1.5 border border-subtle"
            />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-pine font-semibold">
                {t.legalBadge}
              </span>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-main">
                {isPrivacy
                  ? `${t.legalPrivacyFor} ${app.name}`
                  : `${t.legalTermsFor} ${app.name}`}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted bg-paper p-3.5 rounded-lg border border-subtle">
            <div>
              <span className="text-muted">{t.legalLastUpdated}</span>{' '}
              <strong className="text-main font-semibold">{doc.lastUpdated}</strong>
            </div>
            <div>
              <span className="text-muted">{t.legalPublisher}</span>{' '}
              <strong className="text-main font-semibold">Lunoit Labs</strong>
            </div>
            <div>
              <span className="text-muted">{t.legalApplication}</span>{' '}
              <span className="text-main">{app.name}</span>
            </div>
          </div>
        </header>

        {/* Legal Content Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-main/90">
          {doc.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg font-semibold text-main flex items-center gap-2">
                {isPrivacy && idx === 0 ? (
                  <Shield className="h-4 w-4 text-pine" />
                ) : (
                  <FileText className="h-4 w-4 text-pine" />
                )}
                <span>{section.title}</span>
              </h2>

              {section.paragraphs?.map((p, pIdx) => (
                <p key={pIdx} className="text-muted leading-relaxed">
                  {p}
                </p>
              ))}

              {section.scopes && (
                <div className="space-y-3 pt-2">
                  {section.scopes.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-lg bg-paper border border-subtle space-y-1"
                    >
                      <div className="font-mono text-xs text-pine font-semibold">
                        {s.scope}
                      </div>
                      <p className="text-xs text-muted leading-relaxed">{s.purpose}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.highlight && (
                <div className="p-4 rounded-lg bg-paper border-l-4 border-pine border border-subtle text-xs space-y-1 mt-4">
                  <div className="font-semibold text-main">{section.highlight.title}</div>
                  <p className="text-muted leading-relaxed">{section.highlight.text}</p>
                  {section.highlight.link && (
                    <div className="pt-1">
                      <a
                        href={section.highlight.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pine font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <span>{section.highlight.link.label}</span>
                        <ExternalLink className="h-3 w-3 inline" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {section.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-muted pt-1">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Contact and Publisher Identity */}
          <section className="space-y-3 pt-6 border-t border-subtle">
            <h2 className="text-lg font-semibold text-main">{t.legalPublisherIdentity}</h2>
            <div className="p-4 rounded-lg bg-paper border border-subtle text-xs space-y-1 font-mono">
              <div>
                <strong>{t.legalPublisher}</strong> Lunoit Labs
              </div>
              <div>
                <strong>{t.legalSupportContact}</strong>{' '}
                <a href="mailto:support@lunoit.biz.id" className="text-pine hover:underline">
                  support@lunoit.biz.id
                </a>
              </div>
              <div>
                <strong>{t.legalWebsite}</strong>{' '}
                <a href="https://lunoit.biz.id/" className="text-pine hover:underline">
                  https://lunoit.biz.id/
                </a>
              </div>
              <div>
                <strong>{t.legalRepo}</strong>{' '}
                <a
                  href={app.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pine hover:underline inline-flex items-center gap-1"
                >
                  <GithubIcon className="h-3 w-3 inline" />
                  <span>{app.repoUrl.replace('https://github.com/', '')}</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
