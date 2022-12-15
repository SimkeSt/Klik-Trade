import { createContext } from "react";
export const languages = {
    en: "en",
    sr: "sr",
    de: "de"
};

export const LanguageContext = createContext({
    language: languages.en,
    changeLanguage: () => {},
});