import { useState } from "react";
import "./Navbar.css";
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.header className="navbar" aria-label="Main navigation" variants={fadeUp} initial="hidden" animate="visible">
            <div className="nav-center">
                <div className="nav-logo">V.</div>

                <nav className={`nav-links ${open ? "open" : ""}`}>
                    <motion.a href="#hero" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Home</motion.a>
                    <motion.a href="#about" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>About</motion.a>
                    <motion.a href="#skills" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Skills</motion.a>
                    <motion.a href="#projects" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Projects</motion.a>
                    <motion.a href="#contact" onClick={() => setOpen(false)} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>Contact</motion.a>
                </nav>
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
