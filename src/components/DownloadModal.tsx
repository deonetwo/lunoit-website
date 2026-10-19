import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  ArrowDownToLine,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PLATFORM_RELEASES } from '../data/releases';
import { useLanguage } from '../context/LanguageContext';
import { siteTranslations } from '../data/translations';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const { lang } = useLanguage();
  const t = siteTranslations[lang];

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Only the stable Windows build is offered; other platforms live on GitHub releases.
  const current = PLATFORM_RELEASES[0];

  const handleCopyCommand = () => {
    if (current.commandSnippet) {
      navigator.clipboard.writeText(current.commandSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl border border-subtle bg-paper p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modalClose}
          className="absolute top-5 right-5 rounded-lg p-2 text-muted hover:text-main hover:bg-canvas transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-pine mb-1">
            <img
              src="/lunoite-logo.png"
              alt=""
              className="h-4 w-4 rounded-sm object-contain shrink-0"
            />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
              {t.modalChannel}
            </span>
          </div>
          <h2 id="download-modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-main">
            {t.modalTitle}
          </h2>
          <p className="text-sm text-muted mt-1">
            {t.modalDesc}
          </p>
        </div>

        {/* Platform Details Card */}
        <div className="rounded-xl border border-subtle bg-canvas/40 p-5 mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-subtle">
            <div>
              <div className="font-serif text-lg font-semibold text-main">
                {current.name} {t.modalPackage}
              </div>
              <div className="font-mono text-xs text-muted">
                {current.fileName} ({current.fileSize})
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-pine">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{t.modalShaVerified}</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-muted block">{t.modalArch}</span>
              <span className="font-medium text-main">{current.architecture}</span>
            </div>
            <div>
              <span className="text-muted block">{t.modalFormat}</span>
              <span className="font-medium text-main">{current.format}</span>
            </div>
          </div>

          <p className="text-xs text-muted leading-relaxed font-sans">
            {t.modalNotes}
          </p>

          {/* Terminal Command Snippet */}
          {current.commandSnippet && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] text-muted">
                  {t.modalTerminalTitle}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCommand}
                  className="flex items-center gap-1 text-xs text-pine hover:underline font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" />
                      <span>{t.modalCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>{t.modalCopy}</span>
                    </>
                  )}
                </button>
              </div>
              <div className="rounded-lg bg-paper border border-subtle p-2.5 font-mono text-xs text-main overflow-x-auto flex items-center justify-between gap-2">
                <code>{current.commandSnippet}</code>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <a
            href="https://github.com/Lunoit-Labs/lunoite-markdown/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted hover:text-main font-mono"
          >
            <span>{t.modalViewChecksums}</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto rounded-lg border border-subtle bg-paper px-4 py-2.5 text-xs font-medium text-muted hover:text-main hover:border-strong transition-colors"
            >
              {t.modalClose}
            </button>
            <a
              href="https://github.com/Lunoit-Labs/lunoite-markdown/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-pine px-5 py-2.5 text-xs font-semibold text-paper hover:bg-pine-hover shadow-xs transition-colors"
            >
              <ArrowDownToLine className="h-4 w-4" />
              <span>{t.modalDirectDownload}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
