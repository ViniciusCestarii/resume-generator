import { ResumeData } from "../types/resume";

export const frResumeData: ResumeData = {
  name: "Vinicius Cestari",
  contact: {
    address: "Brusque, Santa Catarina, Brésil",
    phone: "+55 47 99775-5351",
    email: "viniciuscestari01@gmail.com",
    linkedin: "in/-vinicius-cestari",
  },
  experience: {
    title: "Expérience",
    experiences: [
      {
        title: "Full Stack Engineer",
        company: "BrBit Sistemas",
        duration: "Fév 2024 - Present",
        responsibilities: [
          "Conçu et développé un robuste microservice (.NET, RabbitMQ) pour une intégration transparente avec l'API de paiement par lot de Banco do Brasil, automatisant et optimisant le traitement des transactions financières.",
          "Conçu et mis en œuvre un service de regroupement de données haute performance (Go, Gin, S3) consolidant plus de 50 bases de données PostgreSQL distribuées en jeux de données statiques, réduisant le temps de traitement des données de 80 %.",
          "Créé un tableau de bord dynamique (Next.js, Chart.js, React Query) qui récupère des données en fonction de l'affiliation utilisateur et du rôle, assurant un accès personnelisé et sécurisé aux informations pertinentes.",
          "Mis en œuvre des pipelines CI/CD, déployé de nouveaux services en production et fourni un support continu en déboguant et en assurant les performances optimales pour plus de 10 services."
        ],
      },
      {
        title: "Full Stack Developer",
        company: "BrBit Sistemas",
        duration: "Jan 2023 - Fév 2024",
        responsibilities: [
          "Collaboré et maintenu une application web administrative multi-locataire (.NET, React, Next.js) pour plus de 60 locataires.",
          "Conçu et déployé une plateforme de génération de rapports dynamiques (Node, PostgreSQL, Puppeteer, S3, SES) qui a automatisé 95 % des processus manuels, servant 200+ utilisateurs mensuels avec des sorties PDF/Excel."
        ],
      },
    ],
  },
  education: {
    title: "Formation",
    educations: [
      {
        institution: "UNIFEBE",
        duration: "Fév 2023 - Déc 2026",
        degree: " Licence en Systèmes d'Information",
      },
      {
        institution: "IFC Campus Brusque",
        duration: "Fév 2020 - Déc 2022",
        degree: "Technicien en Technologie de l'Information",
      },
    ],
  },
  project: {
    title: "Projets",
    projects: [
      {
        name: "Blog",
        links: [
          { label: "Voir", url: "https://blog.viniciuscestari.dev" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/vinicius-blog" },
        ],
        description: "Conçu un CMS full-stack utilisant Next.js 14 App Router avec un pipeline de contenu MDX, permettant l'intégration de extraits de code et un accès Admin pour gérer les publications.",
        technologies: "Typescript, Next.js, MDX, Tailwind CSS, Redis, GitHub REST API",
      },
      {
        name: "Cliparoo",
        links: [
          { label: "Voir", url: "https://viniciuscestarii.github.io/cliparoo-doc" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/cliparoo" },
        ],
        description: "Développé un gestionnaire de presse-papiers multiplateforme axé sur la confidentialité, améliorant la productivité grâce à une gestion avancée du presse-papiers. Fonctionnalités incluant une recherche intelligente dans plus de 2000 éléments d'historique du presse-papiers, thèmes personnalisables, tableau de bord propre. Conçu avec le routage basé sur les fichiers de SvelteKit et les composants Daisy UI pour de meilleures expériences utilisateur, tout en maintenant par défaut un stockage de données local à 100 %. Conçu avec Tauri, Svelte, Svelte Kit, Rust, Tailwind CSS, Daisy UI.",
        technologies: "Tauri, Svelte, Svelte Kit, Rust, Tailwind CSS, Daisy UI",
      },
    ],
  },
  skill: {
    title: "Compétences",
    skills: [
      "Programmation générale: Javascript, Typescript, Go, C#, Java",
      "Développement web: JavaScript, HTML, CSS, React, Next.js, Vite, Svelte, MUI, Shadcn/ui, Tailwind CSS, Node.js, Bun, Prisma, C#, .NET, Entity Framework, Express, WebSockets, RESTful APIs, GraphQL, Puppeteer, SEO",
      "Bases de données: PostgreSQL, MySQL, MongoDB, Redis",
      "Cloud & DevOps: AWS (S3, SES, SQS), Firebase, Vercel, Docker, Pipelines CI/CD",
      "Outils: Git, GitHub, GitLab, Postman, Insomnia, VS Code, Docker, Figma",
      "Soft Skills: Résolution de problèmes, Travail d'équipe, Communication, Gestion du temps",
    ],
  },
  language: {
    title: "Langues",
    languages: [
      "Portugais: Natif",
      "Anglais: Avancé",
    ],
  },
};
