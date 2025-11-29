import { Hero} from "./components/Hero.tsx";
import { About} from "./components/About.tsx";
import { Navbar} from "./components/Navbar.tsx";
import {Projects} from "./components/Projects.tsx";
import {Footer} from "./components/Footer.tsx";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";

import { motion } from 'framer-motion';
import { containerStagger } from './animations/variants';

function App() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerStagger}
        >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </motion.div>
    );
}

export default App;
