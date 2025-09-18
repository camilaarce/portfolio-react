import type { TimelineItemData, PublicationData, SocialLinks } from './types';

export const name = "Camila Arce";
export const title = "Desarrolladora Web FullStack";
export const bio = "Me encanta el desafío de crear soluciones web que la gente realmente disfrute usar. Mi foco está en que la experiencia sea sencilla e intuitiva, y para lograrlo, me obsesiono con escribir código ordenado y eficiente.";

export const about = "En mis años de experiencia, tuve el privilegio de poder aplicar mis conocimientos en el ámbito privado y público. Mi enfoque principal es el desarrollo de interfaces de usuario rápidas, escalables y visualmente atractivas, garantizando al mismo tiempo una experiencia de usuario impecable. Me mantengo al día con las últimas tecnologías y siempre busco oportunidades para aprender y crecer.";

export const socialLinks: SocialLinks = {
    github: "https://github.com/camilaarce",
    linkedin: "https://www.linkedin.com/in/camilarce/",
    email: "camilarce2710@gmail.com"
};

export const skills: string[] = [
    "PHP",
    "Laravel",
    "Vue.js",
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "MySQL",
    "Git & GitHub",
    "Docker",
];

export const experience: TimelineItemData[] = [
    {
        date: "2023 — PRESENTE",
        title: "Desarrolladora Web FullStack",
        subtitle: "Alexandria",
        description: "Además de desarrollar sistemas web para múltiples clientes, me encargo de la coordinación del equipo de desarrollo. También tuve la oportunidad de gestionar clientes y sus requisitos.",
        skills: ["Vue.js", "Laravel", "MySQL", "Docker", "Tailwind CSS"]
    },
    {
        date: "2023 — 2024",
        title: "Desarrolladora Web Frontend",
        subtitle: "Ministerio de Justicia y Derechos Humanos de Santiago del Estero",
        description: "Desarrollé el sistema web dedicado a la gestión de actas de los ciudadanos.",
        skills: ["JavaScript", "Vue.js", "CSS3", "Figma"]
    },
];

export const education: TimelineItemData[] = [
    {
        date: "2014 — 2021",
        title: "Licenciatura en Sistemas de Información",
        subtitle: "Universidad Nacional de Santiago del Estero",
        description: "Avancé hasta el último año de la carrera y hoy tengo la intención de retormarla y finalizarla."
    }
];

export const publications: PublicationData[] = [
    {
        title: "Nuevos criterios para formación de grupos colaborativos en COLLAB",
        authors: "Arce Camila, Santana Mansilla Pablo, Costaguta Rosanna",
        journal: "XXIV Workshop de Investigadores en Ciencias de la Computación (WICC 2022, Mendoza)",
        year: 2022,
        link: "https://sedici.unlp.edu.ar/handle/10915/145212"
    },
];
