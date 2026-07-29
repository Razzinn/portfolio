export interface PersonalInfo {
  name: string;
  titleLine1: string;
  titleLine2: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  bio: string;
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  image: string | null;
}

// Informazioni personali
export const personalInfo: PersonalInfo = {
  name: "Razvan-Mihai Ignat",
  titleLine1: "Front End Developer | Web Developer",
  titleLine2: "Java · Spring Boot · React · Angular",
  email: "ig.razvan12@gmail.com",
  github: "https://github.com/Razzinn",
  linkedin: "https://www.linkedin.com/in/razvan-ignat-51374a357",
  location: "Italia, Roma",
  bio: "Sviluppatore web con solide competenze in Java enterprise e nei principali framework frontend moderni. Ho completato un'academy Formatemp di 248 ore focalizzata su architetture end‑to‑end con Java + Spring Boot, REST API e integrazione con database relazionali. Sul fronte frontend ho lavorato con React e Angular, realizzando UI responsive e componenti riutilizzabili. Cerco una posizione come Junior Java Developer, Full Stack Developer o Frontend Developer."
};

// Competenze tecniche
export const skills: Skill[] = [
  {
    category: "Backend",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "REST API",
      "MySQL",
      "OOP & Design Patterns",
      "Stream API & Collections"
    ]
  },
  {
    category: "Frontend",
    technologies: [
      "React.js",
      "Angular",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3"
    ]
  },
  {
    category: "Styling",
    technologies: [
      "CSS Modules",
      "Styled Components",
      "Tailwind CSS",
      "SASS/SCSS",
      "Flexbox & Grid"
    ]
  },
  {
    category: "Tools & Workflow",
    technologies: [
      "Git & GitHub",
      "Maven",
      "Vite",
      "npm/yarn",
      "IntelliJ IDEA",
      "VS Code"
    ]
  },
  {
    category: "Soft Skills",
    technologies: [
      "Team Working",
      "Problem Solving",
      "Gestione della pressione",
      "Disciplina",
      "Agile/Scrum"
    ]
  }
];

// Progetti portfolio
export const projects: Project[] = [
  {
    id: 1,
    title: "Art.E",
    description: "Applicazione web per la scoperta e fruizione di contenuti artistici digitali. Interfaccia moderna con focus su visual design, animazioni e navigazione fluida tra le opere.",
    technologies: ["React", "JavaScript", "Vite", "Framer Motion", "CSS3"],
    github: "https://github.com/Razzinn/Art.E",
    demo: "https://art-e-ruddy.vercel.app",
    image: "/arte-img.png"
  },
  {
    id: 2,
    title: "DU'A",
    description: "E-Commerce pensato per la vendita di articoli per un publico musulmano / arabo; Una applicazione sviluppata in React e Vite; Con l'utilizzo della libreria JsPDF per generare cedolini per pagmenti bancari, e l'implementazione del i18n per la internazionalizzazione dell'app.",
    technologies: ["React", "JavaScript", "CSS Modules", "Responsive Design"],
    github: "https://github.com/Razzinn/DU-A-",
    demo: "https://du-a-987-kappa.vercel.app",
    image: "/dua-img.png"
  },
];