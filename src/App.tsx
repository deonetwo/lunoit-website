import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PipelineShowcase } from './components/PipelineShowcase';
import { StudioPhilosophy } from './components/StudioPhilosophy';
import { Footer } from './components/Footer';
import { AppLandingPage } from './components/AppLandingPage';
import { AppLegalPage } from './components/AppLegalPage';
import { WaddSubscriptionPage } from './components/WaddSubscriptionPage';
import { APPS_CONFIG } from './data/apps';
import { getLocalizedApp } from './data/localizedApps';
import { AppConfig } from './types';

function getNormalizedPath(): string {
  const hostname = window.location.hostname.toLowerCase();
  const rawPathname = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';

  // Subdomain routing support for Cloudflare Pages custom domains
  if (hostname.startsWith('wadd.')) {
    if (rawPathname === '/' || rawPathname === '') return '/wadd';
    if (!rawPathname.startsWith('/wadd')) return '/wadd' + rawPathname;
    return rawPathname;
  }
  if (hostname.startsWith('markdown.')) {
    if (rawPathname === '/' || rawPathname === '') return '/lunoite';
    if (!rawPathname.startsWith('/lunoite')) return '/lunoite' + rawPathname;
    return rawPathname;
  }

  if (rawPathname !== '/') {
    return rawPathname;
  }
  // Fallback to hash route (e.g. #/lunoite or #/wadd/privacy)
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '/').replace(/\/+$/, '') || '/';
  return hash;
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLanguage();
  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (path: string) => {
    // Handle in-page anchors on homepage (e.g. '/#apps' or '#about')
    if (path.startsWith('/#') || path.startsWith('#')) {
      const anchor = path.replace(/^\//, '');
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/' + anchor);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(anchor);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.history.pushState({}, '', anchor);
        const el = document.querySelector(anchor);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path.toLowerCase().replace(/\/+$/, '') || '/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Helper to find matching app by slug or alias
  const findAppForPath = (path: string): AppConfig | undefined => {
    return APPS_CONFIG.find(
      (app) =>
        '/' + app.slug === path ||
        app.aliases?.includes(path)
    );
  };

  // Dynamic Route Matching:
  // 1. Legal Pages: /[slug]/privacy or /[slug]/terms
  const legalPrivacyMatch = currentPath.match(/^\/([^/]+)\/privacy$/);
  if (legalPrivacyMatch) {
    const slug = legalPrivacyMatch[1];
    const app = APPS_CONFIG.find((a) => a.slug === slug || a.aliases?.includes('/' + slug));
    if (app) {
      const localizedApp = getLocalizedApp(app, lang);
      return <AppLegalPage app={localizedApp} type="privacy" onNavigate={handleNavigate} />;
    }
  }

  const legalTermsMatch = currentPath.match(/^\/([^/]+)\/terms$/);
  if (legalTermsMatch) {
    const slug = legalTermsMatch[1];
    const app = APPS_CONFIG.find((a) => a.slug === slug || a.aliases?.includes('/' + slug));
    if (app) {
      const localizedApp = getLocalizedApp(app, lang);
      return <AppLegalPage app={localizedApp} type="terms" onNavigate={handleNavigate} />;
    }
  }

  // Fallback standalone /privacy or /terms
  if (currentPath === '/privacy') {
    const waddApp = APPS_CONFIG.find((a) => a.slug === 'wadd')!;
    const localizedApp = getLocalizedApp(waddApp, lang);
    return <AppLegalPage app={localizedApp} type="privacy" onNavigate={handleNavigate} />;
  }
  if (currentPath === '/terms') {
    const waddApp = APPS_CONFIG.find((a) => a.slug === 'wadd')!;
    const localizedApp = getLocalizedApp(waddApp, lang);
    return <AppLegalPage app={localizedApp} type="terms" onNavigate={handleNavigate} />;
  }

  // 2. Wadd Subscription & Licensing Page
  if (
    currentPath === '/wadd/subscription' ||
    currentPath === '/wadd/pricing' ||
    currentPath === '/wadd/upgrade' ||
    currentPath === '/subscription' ||
    currentPath === '/pricing' ||
    currentPath === '/upgrade'
  ) {
    return <WaddSubscriptionPage onNavigate={handleNavigate} />;
  }

  // 3. Dedicated Product Landing Pages: /[slug] (e.g. /lunoite, /wadd, /markdown)
  const matchedApp = findAppForPath(currentPath);
  if (matchedApp) {
    const localizedApp = getLocalizedApp(matchedApp, lang);
    return <AppLandingPage app={localizedApp} onNavigate={handleNavigate} />;
  }

  // 4. Root Studio Homepage: /
  return (
    <div className="min-h-screen bg-canvas text-main font-sans selection:bg-pine selection:text-paper antialiased">
      {/* Sticky Header Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
      />

      {/* Main Studio Hub Content */}
      <main id="main-content">
        {/* Studio Hero Section */}
        <Hero
          onNavigate={handleNavigate}
        />

        {/* Dynamic Apps Bento / Grid Driven by APPS_CONFIG */}
        <PipelineShowcase
          onNavigate={handleNavigate}
        />

        {/* Studio Philosophy & 3 Pillars */}
        <StudioPhilosophy />
      </main>

      {/* Global Studio Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
