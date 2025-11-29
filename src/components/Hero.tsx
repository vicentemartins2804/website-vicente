import "./Hero.css";
import { motion, useReducedMotion } from 'framer-motion';
import { containerStagger, fadeUp } from '../animations/variants';

export function Hero() {
    const reduce = useReducedMotion();

    return (
        <section id="hero" className="hero minimal">
            <motion.div className="hero-inner container" variants={containerStagger} initial="hidden" animate="visible">
                <motion.div className="hero-left" variants={fadeUp}>
                    <h1 className="hero-title">
                        Welcome, I'm <span className="accent">Vicente</span>
                    </h1>
                    <motion.p className="hero-sub" variants={fadeUp}>
                        EInformatics Engineering Student
                    </motion.p>

                    <motion.div className="hero-buttons" variants={fadeUp}>
                        <a href="#projects" className="btn btn-primary">Ver Projetos</a>
                        <a href="#contact" className="btn btn-ghost">Contacto</a>
                    </motion.div>
                </motion.div>

                <motion.div className="hero-right" variants={fadeUp} aria-hidden="true">
                    {/* Barco maior com efeito stroke-drawing */}
                    <div className="boat-hero">
                        <svg
                            className="boat-svg"
                            viewBox="0 0 1200 500"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                        >

                            {/* Casco do barco */}
                            <path
                                className="boat-hull draw"
                                d="M300 320 Q360 380 520 380 Q680 380 740 320 L300 320 Z"
                                fill="none"
                                stroke="#d6e7ff"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Mastro */}
                            <path
                                className="boat-mast draw"
                                d="M520 140 L520 320"
                                fill="none"
                                stroke="#d6e7ff"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />

                            {/* Vela */}
                            <path
                                className="boat-sail draw"
                                d="M520 160 Q640 240 520 320 Z"
                                fill="none"
                                stroke="#87d2ff"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Ondas */}
                            <path
                                className="boat-wave draw"
                                d="M0 390 Q120 360 240 390 T480 390 T720 390 T960 390 T1200 390"
                                fill="none"
                                stroke="#94b6ff"
                                strokeWidth="5"
                                strokeLinecap="round"
                                opacity="0.8"
                            />

                        </svg>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll down indicator */}
            <motion.a
                href="#about"
                className="scroll-indicator"
                aria-label="Scroll down"
                animate={reduce ? undefined : { y: [0, 10, 0] }}
                transition={reduce ? undefined : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg className="chev" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">Descer</span>
            </motion.a>
        </section>
    );
}
