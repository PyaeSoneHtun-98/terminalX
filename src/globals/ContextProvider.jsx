import React, { createContext, useState, useContext, useEffect } from "react";
import { langDataEN, langDataMM, alertsEN, alertsMM, dLabelsEN, dLabelsMM } from "./LanguageData";
import "../fonts/fonts.css";

const Context = createContext();

export const useLanguageContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useLanguageContext must be used within a ContextProvider");
    }
    return context;
};

export const ContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(
        localStorage.getItem("portfolioLang") || "EN"
    );
    const [langData, setLangData] = useState(
        language === "EN" ? langDataEN : langDataMM
    );
    const [alerts, setAlerts] = useState(language === "EN" ? alertsEN : alertsMM);
    const [dLabels, setDLabels] = useState(language === "EN" ? dLabelsEN : dLabelsMM);

    useEffect(() => {
        document.documentElement.setAttribute('data-language', language);
    }, [language]);

    const toggleLanguage = (changeTo) => {
        if (changeTo === "MM") {
            setLanguage("MM");
            localStorage.setItem("portfolioLang", "MM");
            setLangData(langDataMM);
            setAlerts(alertsMM);
            setDLabels(dLabelsMM);
        } else {
            setLanguage("EN");
            localStorage.setItem("portfolioLang", "EN");
            setLangData(langDataEN);
            setAlerts(alertsEN);
            setDLabels(dLabelsEN);
        }
    };

    return (
        <Context.Provider value={{ language, langData, alerts, dLabels, toggleLanguage }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;