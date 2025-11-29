import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        welcome: "Welcome, I'm {{name}}",
        subtitle: 'Informatics Engineering Student',
        projects_cta: 'View Projects',
        contact_cta: 'Contact',
        scroll: 'Scroll down'
      },
      about: {
        title: 'About me',
        text: "I'm Vicente, an Informatics Engineering student at ISEP, experienced with backend development, REST APIs and real-time simulation systems. I work with Java, .NET, C, TypeScript, Angular and React. I'm interested in networking, cybersecurity and challenges involving performance, reliability and problem solving."
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technical skills and tools I use.',
        languages: 'Languages',
        frameworks: 'Frameworks',
        tools: 'Tools & Methodologies'
      },
      projects: {
        title: 'Projects',
        subtitle: 'Some projects and experiences I am working on.',
        placeholder_title: 'Project',
        placeholder_text: 'To be added.',
        view_project: 'View Project'
      },
      contact: {
        title: 'Contact',
        subtitle: "If you'd like to talk, send an email or add me on LinkedIn. You can also use the quick form.",
        email_title: 'Email',
        email_text: "I prefer messages by email — I'll reply as soon as possible.",
        email_address: 'vicente.martins@outlook.pt',
        linkedin_title: 'LinkedIn',
        linkedin_text: 'Connect on LinkedIn for opportunities and networking.',
        linkedin_btn: 'View Profile',
        github_title: 'GitHub',
        github_text: "Check my GitHub to see my projects.",
        github_btn: 'View Profile'
      },
      footer: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        copy: '© {{year}} Vicente — All rights reserved.'
      },
      common: {
        view_profile: 'View Profile'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contacto',
      },
      hero: {
        welcome: 'Bem-vindo, sou {{name}}',
        subtitle: 'Estudante de Engenharia Informática',
        projects_cta: 'Ver Projetos',
        contact_cta: 'Contacto',
        scroll: 'Descer'
      },
      about: {
        title: 'Sobre Mim',
        text: 'Sou o Vicente, estudante de Engenharia Informática no ISEP, com experiência em backend, APIs REST e sistemas de simulação em tempo real. Trabalho com Java, .NET, C, TypeScript, Angular e React. Tenho interesse em redes, cibersegurança e em desafios que envolvem desempenho, fiabilidade e resolução de problemas.'
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Competências técnicas e ferramentas que utilizo.',
        languages: 'Linguagens',
        frameworks: 'Frameworks',
        tools: 'Ferramentas & Metodologias'
      },
      projects: {
        title: 'Projetos',
        subtitle: 'Alguns dos projetos e experiências que estou a desenvolver.',
        placeholder_title: 'Projeto',
        placeholder_text: 'a ser adicionado.',
        view_project: 'Ver Projeto'
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Se quiseres falar, envia um email ou adiciona-me no LinkedIn. Também podes usar o formulário rápido.',
        email_title: 'Email',
        email_text: 'Prefiro receber mensagens por email — responderei o mais rápido possível.',
        email_address: 'vicente.martins@outlook.pt',
        linkedin_title: 'LinkedIn',
        linkedin_text: 'Conecta no LinkedIn para oportunidades e networking.',
        linkedin_btn: 'Ver Perfil',
        github_title: 'GitHub',
        github_text: 'Verifica a minha conta no GitHub para verificares os meus projetos.',
        github_btn: 'Ver Perfil'
      },
      footer: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contacto',
        copy: '© {{year}} Vicente — Todos os direitos reservados.'
      },
      common: {
        view_profile: 'Ver Perfil'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
