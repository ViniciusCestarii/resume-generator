import { ResumeData } from "../types/resume";

export const frResumeData: ResumeData = {
  name: "Vinicius Cestari",
  profile: {
    title: "Sommaire Professionnel",
    description: "Ingénieur Full Stack avec plus de 2 ans d'expérience dans la conception et le développement d'applications web évolutives, de microservices et d'API. Compétent en JavaScript, TypeScript, Go et C#, avec une solide formation en structures de données, algorithmes et principes de conception logicielle. Passionné par la résolution de problèmes complexes et l'apprentissage de nouvelles technologies pour livrer des solutions logicielles de haute qualité.",
  },
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
        title: "Ingénieur Full Stack",
        company: "BrBit Sistemas",
        duration: "Février 2024 - Présent",
        responsibilities: [
          "Conçu et développé un robuste microservice (.NET, RabbitMQ) pour une intégration transparente avec l'API de paiement par lot de Banco do Brasil, automatisant et optimisant le traitement des transactions financières.",
          "Conçu et mis en œuvre un service de regroupement de données haute performance (Go, Gin, S3) consolidant plus de 50 bases de données PostgreSQL distribuées en jeux de données statiques, réduisant le temps de traitement des données de 80%. ",
          "Développé un tableau de bord dynamique (Next.js, Chart.js, React Query) qui récupère des données en fonction de la location et du rôle de l'utilisateur, assurant un accès personnalisé et sécurisé aux informations pertinentes.",
          "Implémenté des pipelines CI/CD, déployé de nouveaux services en production et fourni un support continu en dépannage et en assurant les performances optimales pour plus de 10 services."
        ],
      },
      {
        title: "Développeur Full Stack",
        company: "BrBit Sistemas",
        duration: "Janvier 2023 - Février 2024",
        responsibilities: [
          "Collaboré et entretenu une application web administrative multi-locataire (.NET, React, Next.js) pour plus de 60 locataires.",
          "Conçu et déployé une plateforme de génération de rapports dynamiques (Node, PostgreSQL, Puppeteer, S3, SES) qui a automatisé 95% des processus manuels, servant 200+ utilisateurs mensuels avec des sorties PDF/Excel."
        ],
      },
    ],
  },
  education: {
    title: "Éducation",
    educations: [
      {
        institution: "UNIFEBE",
        duration: "Février 2023 - Décembre 2026",
        degree: "Licence en Systèmes d'Information",
      },
      {
        institution: "IFC Campus Brusque",
        duration: "Février 2020 - Décembre 2022",
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
        description: "Développé un gestionnaire de presse-papiers cross-platform pour ordinateurs de bureau, axé sur la confidentialité, améliorant la productivité grâce à une gestion avancée du presse-papiers. Fonctionnalités incluent une recherche intelligente dans plus de 2000 éléments d'historique, des thèmes personnalisables et un tableau de bord propre. Conçu avec SvelteKit et ses composants Daisy UI pour de meilleures expériences utilisateur, tout en stockant les données localement par défaut.",
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
      { name: "Portugais", level: "Courant" },
      { name: "Anglais", level: " Professionnel" },
    ],
  },
};
