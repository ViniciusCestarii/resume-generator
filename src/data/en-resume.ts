import { ResumeData } from "../types/resume";

export const enResumeData: ResumeData = {
  name: "Vinicius Cestari",
  contact: {
    address: "Brusque, Santa Catarina, Brazil",
    phone: "+55 47 99775-5351",
    email: "viniciuscestari01@gmail.com",
    linkedin: "in/-vinicius-cestari",
  },
  experience: {
    title: "Experience",
    experiences: [
      {
        title: "Full Stack Engineer",
        company: "BrBit Sistemas",
        duration: "Feb 2024 - Present",
        responsibilities: [
          "Designed and developed a robust microservice (.NET, RabbitMQ) for seamless integration with Banco do Brasil's batch payment API, automating and optimizing financial transaction processing.",
          "Designed and implemented a high-performance data aggregation service (Go, Gin, S3) consolidating 50+ distributed PostgreSQL databases into static datasets, reducing data processing time by 80%.",
          "Built a dynamic dashboard (Next.js, Chart.js, React Query) that fetches data based on user tenancy and role, ensuring personalized and secure access to relevant information.",
          "Implemented CI/CD pipelines, deployed new services to production, and provided ongoing support by debugging and ensuring optimal performance for more than 10 services."
        ],
      },
      {
        title: "Full Stack Developer",
        company: "BrBit Sistemas",
        duration: "Jan 2023 - Feb 2024",
        responsibilities: [
          "Collaborated and maintained a multi-tenancy admin web application (.NET, React, Next.js) for more than 60 tenants.",
          "Designed and deployed a dynamic report generation platform (Node, PostgreSQL, Puppeteer, S3, SES) that automated 95% of manual processes, serving 200+ monthly users with PDF/Excel outputs."
        ],
      },
    ],
  },
  education: {
    title: "Education",
    educations: [
      {
        institution: "UNIFEBE",
        duration: "Feb 2023 - Dec 2026",
        degree: "Bachelor of Information Systems",
      },
      {
        institution: "IFC Campus Brusque",
        duration: "Feb 2020 - Dec 2022",
        degree: "Technical in Information Technology",
      },
    ],
  },
  project: {
    title: "Projects",
    projects: [
      {
        name: "Blog",
        links: [
          { label: "View", url: "https://blog.viniciuscestari.dev" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/vinicius-blog" },
        ],
        description: "Engineered full-stack CMS using Next.js 14 App Router with MDX content pipeline, enabling code snippet embedding and Admin access for managing posts.",
        technologies: "Typescript, Next.js, MDX, Tailwind CSS, Redis, GitHub REST API",
      },
      {
        name: "Cliparoo",
        links: [
          { label: "View", url: "https://viniciuscestarii.github.io/cliparoo-doc" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/cliparoo" },
        ],
        description: "Developed a privacy-focused desktop cross-platform clipboard manager that enhances productivity through advanced clipboard management. Features include smart search across 2000+ clipboard history items, customizable themes, clean dashboard. Built with SvelteKit's file-based routing and Daisy UI components for better UI experiences while maintaining 100% local data storage by default.",
        technologies: "Tauri, Svelte, Svelte Kit, Rust, Tailwind CSS, Daisy UI",
      },
    ],
  },
  skill: {
    title: "Skills",
    skills: [
      "General Programming: Javascript, Typescript, Go, C#, Java",
      "Web Development: JavaScript, HTML, CSS, React, Next.js, Vite, Svelte, MUI, Shadcn/ui, Tailwind CSS, Node.js, Bun, Prisma, C#, .NET, Entity Framework, Express, WebSockets, RESTful APIs, GraphQL, Puppeteer, SEO",
      "Databases: PostgreSQL, MySQL, MongoDB, Redis",
      "Cloud & DevOps: AWS (S3, SES, SQS), Firebase, Vercel, Docker, CI/CD Pipelines",
      "Tools: Git, GitHub, GitLab, Postman, Insomnia, VS Code, Docker, Figma",
      "Soft Skills: Problem-Solving, Teamwork, Communication, Time Management",
    ],
  },
  language: {
    title: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Professional" },
    ],
  },
};