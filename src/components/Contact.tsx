import "./Contact.css";
import { motion } from 'framer-motion';
import { containerStagger, fadeUp } from '../animations/variants';

export function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-inner container">
                <motion.div className="contact-header" variants={fadeUp} initial="hidden" animate="visible">
                    <h2>Contact</h2>
                    <p className="contact-subtitle">Se quiseres falar, envia um email ou adiciona-me no LinkedIn. Também podes usar o formulário rápido.</p>
                </motion.div>

                <motion.div className="contact-grid" variants={containerStagger} initial="hidden" animate="visible">
                    <motion.div className="contact-card" variants={fadeUp}>
                        <h3>Email</h3>
                        <p className="small">Prefiro receber mensagens por email — responderei o mais rápido possível.</p>
                        <p className="small">vicente.martins@outlook.pt</p>
                    </motion.div>

                    <motion.div className="contact-card" variants={fadeUp}>
                        <h3>LinkedIn</h3>
                        <p className="small">Conecta no LinkedIn para oportunidades e networking.</p>
                        <a className="contact-btn" href="https://www.linkedin.com/in/vicentemartins28" target="_blank" rel="noreferrer">Ver Perfil</a>
                    </motion.div>

                    <motion.div className="contact-card" variants={fadeUp}>
                        <h3>GitHub</h3>
                        <p className="small">Verifica a minha conta no GitHub para verificares os meus projetos.</p>
                        <a className="contact-btn" href="https://github.com/vicentemartins2804" target="_blank" rel="noreferrer">Ver Perfil</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
