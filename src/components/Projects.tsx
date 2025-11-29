import "./Projects.css";
import { motion } from 'framer-motion';
import { containerStagger, fadeUp, cardHover } from '../animations/variants';

export function Projects() {
    return (
        <section className="projects" id="projects">
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible">Projetos</motion.h2>
            <motion.p className="projects-subtitle" variants={fadeUp} initial="hidden" animate="visible">
                Alguns dos projetos e experiências que estou a desenvolver.
            </motion.p>

            <motion.div className="projects-grid" variants={containerStagger} initial="hidden" animate="visible">
                {/* Projeto 1 */}
                <motion.div className="project-card" whileHover="hover" initial="rest" variants={cardHover}>
                    <div className="project-image"></div>
                    <h3>Project</h3>
                    <p>to be added.</p>
                    <a href="#" className="project-btn">
                        Ver Projeto
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
