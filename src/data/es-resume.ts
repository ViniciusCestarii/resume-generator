import { ResumeData } from "../types/resume";

export const esResumeData: ResumeData = {
  name: "Vinicius Cestari",
  profile: {
    title: "Resumen Profesional",
    description: "Ingeniero Full Stack con más de 2 años de experiencia diseñando y desarrollando aplicaciones web escalables, microservicios y APIs. Competente en JavaScript, TypeScript, Go y C#, con una base sólida en estructuras de datos, algoritmos y principios de diseño de software. Apasionado por resolver problemas complejos y aprender nuevas tecnologías para ofrecer soluciones de software de alta calidad.",
  },
  contact: {
    address: "Brusque, Santa Catarina, Brasil",
    phone: "+55 47 99775-5351",
    email: "viniciuscestari01@gmail.com",
    linkedin: "in/-vinicius-cestari",
  },
  experience: {
    title: "Experiencia",
    experiences: [
      {
        title: "Ingeniero Full Stack",
        company: "BrBit Sistemas",
        duration: "Febrero 2024 - Actualidad",
        responsibilities: [
          "Diseñé y desarrollé un robusto microservicio (.NET, RabbitMQ) para una integración fluida con la API de pagos por lotes de Banco do Brasil, automatizando y optimizando el procesamiento de transacciones financieras.",
          "Diseñé e implementé un servicio de agregación de datos de alto rendimiento (Go, Gin, S3) que consolida más de 50 bases de datos PostgreSQL distribuidas en conjuntos de datos estáticos, reduciendo el tiempo de procesamiento de datos en un 80%. ",
          "Construí un panel dinámico (Next.js, Chart.js, React Query) que recupera datos según la tenencia y el rol del usuario, asegurando un acceso personalizado y seguro a la información relevante.",
          "Implementé tuberías de CI/CD, desplegué nuevos servicios en producción y brindé soporte continuo depurando y asegurando un rendimiento óptimo para más de 10 servicios."
        ],
      },
      {
        title: "Desarrollador Full Stack",
        company: "BrBit Sistemas",
        duration: "Enero 2023 - Febrero 2024",
        responsibilities: [
          "Colaboré y mantuve una aplicación web de administración multi-tenant (.NET, React, Next.js) para más de 60 inquilinos.",
          "Diseñé y desplegué una plataforma dinámica de generación de informes (Node, PostgreSQL, Puppeteer, S3, SES) que automatizó el 95% de los procesos manuales, sirviendo a más de 200 usuarios mensuales con salidas en PDF/Excel."
        ],
      },
    ],
  },
  education: {
    title: "Educación",
    educations: [
      {
        institution: "UNIFEBE",
        duration: "Febrero 2023 - Diciembre 2026",
        degree: "Licenciatura en Sistemas de Información",
      },
      {
        institution: "IFC Campus Brusque",
        duration: "Febrero 2020 - Diciembre 2022",
        degree: "Técnico en Informática",
      },
    ],
  },
  project: {
    title: "Proyectos",
    projects: [
      {
        name: "Blog",
        links: [
          { label: "Ver", url: "https://blog.viniciuscestari.dev" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/vinicius-blog" },
        ],
        description: "Ingenié una CMS full-stack utilizando Next.js 14 App Router con un sistema de contenido MDX que permite la integración de fragmentos de código y acceso de administrador para gestionar publicaciones.",
        technologies: "Typescript, Next.js, MDX, Tailwind CSS, Redis, GitHub REST API",
      },
      {
        name: "Cliparoo",
        links: [
          { label: "Ver", url: "https://viniciuscestarii.github.io/cliparoo-doc" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/cliparoo" },
        ],
        description: "Desarrollé un administrador de portapapeles de escritorio multiplataforma orientado a la privacidad que mejora la productividad mediante una gestión avanzada del portapapeles. Características incluyen búsqueda inteligente en más de 2000 elementos del historial del portapapeles, temas personalizables y un panel limpio. Construido con SvelteKit y componentes de Daisy UI para mejores experiencias de UI, manteniendo el 100% de almacenamiento local por defecto.",
        technologies: "Tauri, Svelte, Svelte Kit, Rust, Tailwind CSS, Daisy UI",
      },
    ],
  },
  skill: {
    title: "Habilidades",
    skills: [
      "Programación General: Javascript, Typescript, Go, C#, Java",
      "Desarrollo Web: JavaScript, HTML, CSS, React, Next.js, Vite, Svelte, MUI, Shadcn/ui, Tailwind CSS, Node.js, Bun, Prisma, C#, .NET, Entity Framework, Express, WebSockets, RESTful APIs, GraphQL, Puppeteer, SEO",
      "Bases de Datos: PostgreSQL, MySQL, MongoDB, Redis",
      "Cloud & DevOps: AWS (S3, SES, SQS), Firebase, Vercel, Docker, CI/CD Pipelines",
      "Herramientas: Git, GitHub, GitLab, Postman, Insomnia, VS Code, Docker, Figma",
      "Habilidades Personales: Resolución de Problemas, Trabajo en Equipo, Comunicación, Gestión del Tiempo",
    ],
  },
  language: {
    title: "Idiomas",
    languages: [
      { name: "Portugués", level: "Nativo" },
      { name: "Inglés", level: "Profesional" },
    ],
  },
};
