import i18n, { TFunction } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import literals from "core/i18n/literals";

export type Langs = "en" | "es";

const resources = { ...literals } as const;
i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const changeLanguage = (lang: Langs) => i18n.changeLanguage(lang);

export const useTranslations = (): TFunction => {
  const { t } = useTranslation();
  return t;
};

// react i18next special options (optional)
// override if needed - omit if ok with defaults
/*
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  }
*/
