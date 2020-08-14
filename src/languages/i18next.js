import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import es from "./es.json";

/*i18n.use(initReactI18next).init({
  lng: "es",
  resources: {
    es: { translation: { Bienvenido: "Bienvenido" } },
    en: { translation: { Bienvenido: "Welcome" } },
  },
  keySeparator: false,
});*/

/*i18n.use(initReactI18next).init({
  lng: "es",
  resources: {
    es: { translation: { login: { title: "Bienvenido" } } },
    en: { translation: { login: { title: "Welcome" } } },
  },
});*/

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "es",
  resources: {
    es,
    en,
  },
});

export default i18n;
