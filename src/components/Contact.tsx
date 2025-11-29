import "./Contact.css";
import { motion } from 'framer-motion';
import { containerStagger, fadeUp } from '../animations/variants';
import { useTranslation } from 'react-i18next';

export function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact">
            <div className="contact-inner container">
                <motion.div className="contact-header" variants={fadeUp} initial="hidden" animate="visible">
                    <h2>{t('contact.title')}</h2>
                    <p className="contact-subtitle">{t('contact.subtitle')}</p>
                </motion.div>

                <motion.div className="contact-grid" variants={containerStagger} initial="hidden" animate="visible">
                    <motion.div className="contact-card" variants={fadeUp}>
                        <h3>{t('contact.email_title')}</h3>
                        <p className="small">{t('contact.email_text')}</p>
                        <p className="small">{t('contact.email_address')}</p>
                    </motion.div>

                    <motion.div className="contact-card" variants={fadeUp}>
                        <h3>{t('contact.linkedin_title')}</h3>
                        <p className="small">{t('contact.linkedin_text')}</p>
                        <a className="contact-btn" href="https://www.linkedin.com/in/vicentemartins28" target="_blank" rel="noreferrer">{t('contact.linkedin_btn')}</a>
                    </motion.div>

                    <motion.div className="contact-card" variants={fadeUp}>
                        <h3>{t('contact.github_title')}</h3>
                        <p className="small">{t('contact.github_text')}</p>
                        <a className="contact-btn" href="https://github.com/vicentemartins2804" target="_blank" rel="noreferrer">{t('contact.github_btn')}</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
