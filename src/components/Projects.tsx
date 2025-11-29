import "./Projects.css";
import { motion } from 'framer-motion';
import { containerStagger, fadeUp, cardHover } from '../animations/variants';
import { useTranslation } from 'react-i18next';

export function Projects() {
    const { t } = useTranslation();

    return (
        <section className="projects" id="projects">
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible">{t('projects.title')}</motion.h2>
            <motion.p className="projects-subtitle" variants={fadeUp} initial="hidden" animate="visible">
                {t('projects.subtitle')}
            </motion.p>

            <motion.div className="projects-grid" variants={containerStagger} initial="hidden" animate="visible">
                {/* Projeto 1 */}
                <motion.div className="project-card" whileHover="hover" initial="rest" variants={cardHover}>
                    <div className="project-image"></div>
                    <h3>{t('projects.placeholder_title')}</h3>
                    <p>{t('projects.placeholder_text')}</p>
                    <a href="#" className="project-btn">
                        {t('projects.view_project')}
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
