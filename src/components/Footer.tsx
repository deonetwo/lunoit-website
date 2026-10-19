import React from 'react';
import { ArrowUp, Mail, ExternalLink, Heart } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { APPS_CONFIG } from '../data/apps';

interface FooterProps {
  onOpenDownload?: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onNavigate }) => {
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
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
              An independent software studio and app publisher crafting sovereign, distraction-free tools for writers, engineers, and everyday productivity.
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
              <span className="text-muted">Support:</span>
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

          {/* Software Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-main uppercase tracking-wider">
              Applications
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
                  href="/wadd/subscription"
                  onClick={(e) => handleLink('/wadd/subscription', e)}
                  className="hover:text-main transition-colors text-pine font-medium flex items-center gap-1.5"
                >
                  <span>Wadd Licensing &amp; Pricing</span>
                </a>
              </li>
              <li>
                <a
                  href="#apps"
                  className="hover:text-main transition-colors text-muted"
                >
                  All Apps &amp; Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Resources */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-main uppercase tracking-wider">
              Studio &amp; Support
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
                  <span>GitHub Organization</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-main transition-colors">
                  Three Craft Pillars
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
                  <span>Ko-fi (International)</span>
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
                  <span>Lynk.id (QRIS / Indo)</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://markdown.lunoit.biz.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors flex items-center gap-1"
                >
                  <span>markdown.lunoit.biz.id</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://wadd.lunoit.biz.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors flex items-center gap-1"
                >
                  <span>wadd.lunoit.biz.id</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-main uppercase tracking-wider">
              Legal &amp; Privacy
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/lunoite/privacy"
                  onClick={(e) => handleLink('/lunoite/privacy', e)}
                  className="hover:text-main transition-colors text-main font-medium"
                >
                  Lunoite Privacy
                </a>
              </li>
              <li>
                <a
                  href="/lunoite/terms"
                  onClick={(e) => handleLink('/lunoite/terms', e)}
                  className="hover:text-main transition-colors"
                >
                  Lunoite Terms
                </a>
              </li>
              <li>
                <a
                  href="/wadd/privacy"
                  onClick={(e) => handleLink('/wadd/privacy', e)}
                  className="hover:text-main transition-colors text-main font-medium"
                >
                  Wadd Privacy
                </a>
              </li>
              <li>
                <a
                  href="/wadd/terms"
                  onClick={(e) => handleLink('/wadd/terms', e)}
                  className="hover:text-main transition-colors"
                >
                  Wadd Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            <span>© {new Date().getFullYear()} Lunoit Labs. All rights reserved.</span>
            <span className="mx-2 text-subtle">/</span>
            <span>Zero trackers, zero telemetry, 100% sovereign.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-muted hover:text-main transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
