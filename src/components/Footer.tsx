import "./Footer.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/variants';

export function Footer() {
    return (
        <motion.footer className="footer" id="footer" variants={fadeIn} initial="hidden" animate="visible">
            <div className="footer-container">

                <nav className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contacto</a>
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
                © {new Date().getFullYear()} Vicente — Todos os direitos reservados.
            </p>
        </motion.footer>
    );
}
