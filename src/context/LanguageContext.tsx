import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang')?.toLowerCase();
        if (urlLang === 'en' || urlLang === 'id') {
          return urlLang;
        }
        const saved = localStorage.getItem('lunoit_website_lang');
        if (saved === 'en' || saved === 'id') {
          return saved;
        }
        if (navigator.language) {
          return navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en';
        }
      }
    } catch {
      // Fallback
    }
    return 'id';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('lunoit_website_lang', newLang);
    } catch {
      // Safe fallback
    }
  };

  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    try {
      localStorage.setItem('lunoit_website_lang', lang);
    } catch {
      // Safe fallback
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
