import React from 'react';
import { ArrowUp, Mail, ExternalLink, Heart } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { APPS_CONFIG } from '../data/apps';
import { useLanguage } from '../context/LanguageContext';
import { siteTranslations } from '../data/translations';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang } = useLanguage();
  const t = siteTranslations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (path: string, e: React.MouseEvent) => {
    if (path.startsWith('/')) {
      e.preventDefault();
      onNavigate?.(path);
      return;
    }
  };

  return (
    <footer className="border-t border-subtle bg-paper text-muted text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column (Span 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/lunoite-icon.svg"
                alt="Lunoit Labs"
                className="h-7 w-7 rounded-lg shadow-2xs shrink-0 object-contain"
              />
              <span className="font-serif text-lg font-semibold text-main">
                Lunoit Labs
              </span>
            </div>
            <p className="max-w-md text-muted leading-relaxed font-normal">
              {t.footerStudioDesc}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <Mail className="h-3.5 w-3.5 text-pine" />
              <a
                href="mailto:support@lunoit.biz.id"
                className="text-main hover:text-pine transition-colors font-medium"
              >
                support@lunoit.biz.id
              </a>
            </div>
            <div className="pt-2 border-t border-subtle flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <span className="text-muted">{t.footerSupportLabel}</span>
              <a
                href="https://ko-fi.com/lunoit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:text-pine transition-colors flex items-center gap-0.5"
              >
                <span>Ko-fi</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <span className="text-subtle">·</span>
              <a
                href="https://lynk.id/lunoit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:text-pine transition-colors flex items-center gap-0.5"
              >
                <span>Lynk.id (QRIS)</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>

          {/* Applications Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-main uppercase tracking-wider">
              {t.footerColApps}
            </h4>
            <ul className="space-y-2">
              {APPS_CONFIG.map((app) => (
                <li key={app.id}>
                  <a
                    href={`/${app.slug}`}
                    onClick={(e) => handleLink(`/${app.slug}`, e)}
                    className="hover:text-main transition-colors text-main font-medium flex items-center gap-1.5"
                  >
                    <span>{app.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#apps"
                  className="hover:text-main transition-colors text-muted"
                >
                  {t.footerAllApps}
                </a>
              </li>
            </ul>
          </div>

          {/* Studio & Community Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-main uppercase tracking-wider">
              {t.footerColStudio}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Lunoit-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>{t.footerGithubOrg}</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-main transition-colors">
                  {t.footerThreePillars}
                </a>
              </li>
              <li>
                <a
                  href="https://ko-fi.com/lunoit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors flex items-center gap-1"
                >
                  <Heart className="h-3 w-3 text-pine fill-pine/20" />
                  <span>{t.footerKofi}</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://lynk.id/lunoit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors flex items-center gap-1"
                >
                  <span>{t.footerLynk}</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            <span>© {new Date().getFullYear()} Lunoit Labs. {t.footerAllRights}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-muted hover:text-main transition-colors"
            >
              <span>{t.footerBackToTop}</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
