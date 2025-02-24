import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../globals/ContextProvider';

export const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguageContext();

    return (
        <div className="fixed top-4 right-4 z-50">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleLanguage(language === 'EN' ? 'MM' : 'EN')}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors duration-300"
            >
                {language === 'EN' ? 'မြန်မာ' : 'ENG'}
            </motion.button>
        </div>
    );
};

export default LanguageSwitch;