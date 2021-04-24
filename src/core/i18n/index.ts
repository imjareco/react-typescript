import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ITranslations } from "core/models";

export default (translations: ITranslations): typeof i18n => {

  const resources =  { translations };

  i18n.use(initReactI18next)
    .init(
      {
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
          escapeValue: false
        }
      }
    );

  return i18n;
}


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