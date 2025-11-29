import { useState } from "react";
import "./Navbar.css";
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { useTranslation } from 'react-i18next';

export function Navbar() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const current = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';

    const changeLang = (lng: string) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    }

    return (
        <motion.header className="navbar" aria-label="Main navigation" variants={fadeUp} initial="hidden" animate="visible">
            <div className="nav-center">
                <div className="nav-logo">V.</div>

                <nav className={`nav-links ${open ? "open" : ""}`}>
                    <motion.a href="#hero" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>{t('nav.home')}</motion.a>
                    <motion.a href="#about" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>{t('nav.about')}</motion.a>
                    <motion.a href="#skills" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>{t('nav.skills')}</motion.a>
                    <motion.a href="#projects" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>{t('nav.projects')}</motion.a>
                    <motion.a href="#contact" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>{t('nav.contact')}</motion.a>
                </nav>

                {/* move language switcher inside nav-center so it's positioned relative to the same container as .nav-logo */}
                <div className="nav-lang">
                    {/* prettier language switch: pill with sliding indicator */}
                    <div className="lang-toggle" role="tablist" aria-label="Language selector">
                        <button
                            role="tab"
                            aria-selected={current === 'en'}
                            onClick={() => changeLang('en')}
                            className={`lang-btn ${current === 'en' ? 'active' : ''}`}
                            title="English"
                        >
                            <span className="code">EN</span>
                        </button>

                        <button
                            role="tab"
                            aria-selected={current === 'pt'}
                            onClick={() => changeLang('pt')}
                            className={`lang-btn ${current === 'pt' ? 'active' : ''}`}
                            title="Português"
                        >
                            <span className="code">PT</span>
                        </button>

                    </div>
                </div>
            </div>

            <div
                className={`hamburger ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-hidden="true"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </motion.header>
    );
}
