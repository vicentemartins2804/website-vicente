import "./Skills.css";
import { motion } from 'framer-motion';
import { containerStagger, fadeUp } from '../animations/variants';

type Skill = {
    name: string;
    icon: string;
};

const languages: Skill[] = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

const frameworks: Skill[] = [
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
];

const tools: Skill[] = [
    { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "UML", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/plantuml.svg" },
    { name: "Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
];

type SectionProps = {
    title: string;
    items: Skill[];
};

const Section = ({ title, items }: SectionProps) => (
    <div className="skills-section">
        <h3>{title}</h3>
        <motion.div className="skills-grid" variants={containerStagger} initial="hidden" animate="visible">
            {items.map((item) => (
                <motion.div key={item.name} className="skill-card" whileHover={{ scale: 1.05 }}>
                    <img src={item.icon} alt={item.name} className="skill-icon" />
                    <span>{item.name}</span>
                </motion.div>
            ))}
        </motion.div>
    </div>
);

export function Skills() {
    return (
        <section id="skills" className="skills">
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible">Skills</motion.h2>
            <motion.p className="skills-subtitle" variants={fadeUp} initial="hidden" animate="visible">Competências técnicas e ferramentas que utilizo.</motion.p>

            <Section title="Languages" items={languages} />
            <Section title="Frameworks" items={frameworks} />
            <Section title="Tools & Methodologies" items={tools} />
        </section>
    );
}
