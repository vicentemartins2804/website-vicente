import "./Footer.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/variants';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();

    return (
        <motion.footer className="footer" id="footer" variants={fadeIn} initial="hidden" animate="visible">
            <div className="footer-container">

                <nav className="footer-links">
                    <a href="#hero">{t('footer.home')}</a>
                    <a href="#about">{t('footer.about')}</a>
                    <a href="#projects">{t('footer.projects')}</a>
                    <a href="#contact">{t('footer.contact')}</a>
                </nav>

                <div className="footer-socials">
                    <a href="#" aria-label="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <p className="footer-copy">
                {t('footer.copy', { year: new Date().getFullYear() })}
            </p>
        </motion.footer>
    );
}
