import { ResumeData } from "../types/resume";

export const ptResumeData: ResumeData = {
  name: "Vinicius Cestari",
  contact: {
    address: "Brusque, Santa Catarina, Brasil",
    phone: "+55 47 99775-5351",
    email: "viniciuscestari01@gmail.com",
    linkedin: "in/-vinicius-cestari",
  },
  experience: {
    title: "Experiência",
    experiences: [
      {
        title: "Engenheiro Full Stack",
        company: "BrBit Sistemas",
        duration: "Fevereiro 2024 - Atual",
        responsibilities: [
          "Projetei e desenvolvi um robusto microsserviço (.NET, RabbitMQ) para integração com a API de pagamentos por lote do Banco do Brasil, automatizando e otimizando o processamento de transações financeiras.",
          "Projetei e implementei um serviço de agregação de dados de alto desempenho (Go, Gin, S3) consolidando 50+ bancos de dados PostgreSQL distribuídos em conjuntos de dados estáticos, reduzindo o tempo de processamento de dados em 80%.",
          "Construí um painel dinâmico (Next.js, Chart.js, React Query) que busca dados com base na tenância e papel do usuário, garantindo acesso personalizado e seguro às informações relevantes.",
          "Implementei pipelines de CI/CD, realizei deploy de novos serviços para produção e forneci suporte contínuo, depurando e garantindo o desempenho de mais de 10 serviços."
        ],
      },
      {
        title: "Desenvolvedor Full Stack",
        company: "BrBit Sistemas",
        duration: "Janeiro 2023 - Fevereiro 2024",
        responsibilities: [
          "Colaborei e mantive um aplicativo web de administração multi-tenancy (.NET, React, Next.js) para mais de 60 tenants.",
          "Projetei e implantei uma plataforma de geração de relatórios dinâmicos (Node, PostgreSQL, Puppeteer, S3, SES) que automatizou 95% dos processos manuais, atendendo 200+ usuários mensais com saídas em PDF/Excel."
        ],
      },
    ],
  },
  education: {
    title: "Educação",
    educations: [
      {
        institution: "UNIFEBE",
        duration: "Fevereiro 2023 - Dezembro 2026",
        degree: "Bacharelado em Sistemas de Informação",
      },
      {
        institution: "IFC Campus Brusque",
        duration: "Fevereiro 2020 - Dezembro 2022",
        degree: "Técnico em Informática",
      },
    ],
  },
  project: {
    title: "Projetos",
    projects: [
      {
        name: "Blog",
        links: [
          { label: "Ver", url: "https://blog.viniciuscestari.dev" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/vinicius-blog" },
        ],
        description: "Projetei um CMS full-stack usando o Next.js 14 App Router com pipeline de conteúdo MDX, permitindo a inserção de trechos de código e acesso à Admin para gerenciar posts.",
        technologies: "Typescript, Next.js, MDX, Tailwind CSS, Redis, GitHub REST API",
      },
      {
        name: "Cliparoo",
        links: [
          { label: "Ver", url: "https://viniciuscestarii.github.io/cliparoo-doc" },
          { label: "Github", url: "https://github.com/ViniciusCestarii/cliparoo" },
        ],
        description: "Desenvolvi um gerenciador de clipboard de desktop cross-platform com foco em privacidade que melhora a produtividade por meio de gerenciamento avançado de clipboard. Recursos incluem pesquisa inteligente em 2000+ itens de histórico de clipboard, temas personalizáveis e dashboard. Construído com roteamento baseado em arquivos do SvelteKit e componentes da Daisy UI para melhores experiências de UI, mantendo 100% de armazenamento de dados local por padrão.",
        technologies: "Tauri, Svelte, Svelte Kit, Rust, Tailwind CSS, Daisy UI",
      },
    ],
  },
  skill: {
    title: "Habilidades",
    skills: [
      "Programação Geral: Javascript, Typescript, Go, C#, Java",
      "Desenvolvimento Web: JavaScript, HTML, CSS, React, Next.js, Vite, Svelte, MUI, Shadcn/ui, Tailwind CSS, Node.js, Bun, Prisma, C#, .NET, Entity Framework, Express, WebSockets, RESTful APIs, GraphQL, Puppeteer, SEO",
      "Bancos de Dados: PostgreSQL, MySQL, MongoDB, Redis",
      "Cloud & DevOps: AWS (S3, SES, SQS), Firebase, Vercel, Docker, Pipelines de CI/CD",
      "Ferramentas: Git, GitHub, GitLab, Postman, Insomnia, VS Code, Docker, Figma",
      "Soft Skills: Resolução de Problemas, Trabalho em Equipe, Comunicação, Gerenciamento de Tempo",
    ],
  },
  language: {
    title: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado" },
    ],
  },
};
