import type { Dictionary } from "./types";

export const pt: Dictionary = {
  locale: "pt",
  htmlLang: "pt-BR",
  meta: {
    title: "Leonardo Delmiro · Engenheiro de Software Sênior",
    description:
      "Engenheiro backend sênior construindo sistemas confiáveis e orientados a eventos na AWS para plataformas financeiras de alta escala.",
  },
  nav: {
    skipToContent: "Ir para o conteúdo",
    label: "Principal",
    work: "Trabalho",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
    switchHref: "/",
    switchLabel: "EN",
    switchLang: "Read in English",
  },
  hero: {
    role: "Engenheiro de Software Sênior · Backend",
    headline: "Construo sistemas backend que movimentam dinheiro e continuam de pé.",
    intro:
      "Mais de 5 anos projetando, desenvolvendo e operando sistemas distribuídos na Zup Innovation, do grupo Itaú Unibanco, o maior banco da América Latina. Kotlin, Java e AWS, com a maior parte da energia em confiabilidade: timeouts, retries, concorrência e a observabilidade para enxergar o que de fato acontece em produção.",
    location: "Curitiba, Brasil · Remoto",
    resumeLabel: "Baixar currículo (PDF)",
    resumeHref: "/leonardo-delmiro-curriculo-pt.pdf",
    contactLabel: "Entrar em contato",
  },
  metricsLabel: "Resultados em produção",
  metrics: [
    { value: "1M+", label: "requisições diárias com 99,9% de disponibilidade" },
    { value: "−96%", label: "incidentes em produção" },
    { value: "300 → 100 ms", label: "latência P90" },
    { value: "R$ 100 mi", label: "volume diário na plataforma de TED" },
  ],
  work: {
    heading: "Trabalhos em destaque",
    intro: "Trabalho em produção em sistemas de pagamento brasileiros: PIX e TED.",
    problemLabel: "Problema",
    approachLabel: "Abordagem",
    resultLabel: "Resultado",
    items: [
      {
        tag: "Confiabilidade",
        title: "Reduzindo os incidentes em produção em 96%",
        problem:
          "Os serviços do produto PIX Indiretos falhavam em produção por causas estruturais: processamento concorrente, ausência de timeouts e estratégias inadequadas de retry/backoff.",
        approach:
          "Rastreei cada falha até a causa-raiz com logs, distributed tracing, correlation IDs, métricas técnicas e de negócio, dashboards e alertas, e corrigi o desenho em vez do sintoma.",
        result:
          "Os incidentes em produção caíram 96,25%, num produto com mais de 1 milhão de requisições diárias e 99,9% de disponibilidade.",
        stack: ["Kotlin", "AWS", "Datadog", "Distributed tracing"],
      },
      {
        tag: "Arquitetura orientada a eventos",
        title: "Automatizando o onboarding de participantes",
        problem:
          "O onboarding de um novo participante dependia de etapas operacionais manuais, que viraram gargalo.",
        approach:
          "Projetei e implementei fluxos assíncronos com EventBridge, SNS, SQS e Lambda que conduzem o onboarding de ponta a ponta.",
        result: "Cerca de 160 horas de engenharia de esforço de onboarding eliminadas.",
        stack: ["EventBridge", "SNS", "SQS", "Lambda"],
      },
      {
        tag: "Performance",
        title: "Tirando o S3 do caminho crítico",
        problem: "O processamento e envio de dados para o S3 era síncrono e pesava no tempo de resposta.",
        approach: "Refatorei o processamento para execução assíncrona.",
        result: "A latência P90 caiu de 300 ms para 100 ms em carga de produção.",
        stack: ["Kotlin", "Amazon S3", "Processamento assíncrono"],
      },
      {
        tag: "Modernização de legado",
        title: "Levando a TED do mainframe para a AWS",
        problem:
          "A infraestrutura de TED do Itaú, plataforma crítica que processa cerca de 115 mil transações e R$ 100 milhões por dia, rodava em mainframe.",
        approach:
          "Desenvolvi e testei serviços backend da nova plataforma e participei das decisões técnicas da solução.",
        result: "Contribuí para migrar uma plataforma financeira crítica para a AWS.",
        stack: ["AWS", "Serviços backend", "Testes"],
      },
    ],
  },
  projects: {
    heading: "Projetos pessoais",
    intro:
      "Coisas que construo para mim. Os mais recentes são planejados com desenvolvimento orientado a especificação (OpenSpec) e agentes de IA antes de qualquer código.",
    sourceLabel: "Código-fonte de",
    items: [
      {
        name: "LibrasAnki",
        href: "https://github.com/leodelmiro/LibrasAnki",
        description:
          "Gera baralhos Anki de LIBRAS a partir do dicionário oficial do INES, com o vídeo do sinal em cada card. Trata as lacunas e os erros de dados do dicionário explicitamente em vez de escondê-los.",
        tags: ["Python", "OpenSpec", "Anki"],
      },
      {
        name: "imdb-to-letterboxd",
        href: "https://github.com/leodelmiro/imdb-to-letterboxd",
        description:
          "Migra o Watch History do IMDb para o Letterboxd. O IMDb não oferece export desse dado; o projeto preenche exatamente esse buraco, com um relatório de reconciliação como teste de aceite.",
        tags: ["JavaScript", "OpenSpec", "CSV"],
      },
      {
        name: "Microsserviços em Kubernetes",
        href: "https://github.com/leodelmiro/tech-challenge-estabelecimento-infra",
        description:
          "Projeto da pós na FIAP: serviços de pedido, pagamento, produto e cliente em Kubernetes, com Terraform, API Gateway e Lambda authorizer.",
        tags: ["Java", "Kubernetes", "Terraform"],
      },
      {
        name: "Pipeline de processamento de vídeo",
        href: "https://github.com/leodelmiro/fiap-hackaton-video-processa",
        description:
          "Hackathon da FIAP: pipeline orientado a eventos que recebe, processa e notifica sobre vídeos enviados, dividido em serviços Kotlin e infraestrutura como código.",
        tags: ["Kotlin", "Orientado a eventos", "Terraform"],
      },
    ],
  },
  experience: {
    heading: "Experiência",
    company: "Zup Innovation",
    companyNote: "Empresa do grupo Itaú Unibanco · Remoto",
    roles: [
      { title: "Senior Software Engineer", period: "nov 2023 – atual" },
      { title: "Software Engineer", period: "mai 2021 – out 2023" },
      { title: "Junior Software Engineer", period: "fev 2021 – abr 2021" },
    ],
    highlights: [
      "Responsável de ponta a ponta por funcionalidades do PIX Indiretos, do refinamento de requisitos e análise de trade-offs com Produto até o suporte em produção.",
      "Construí um MVP backend em Kotlin com gRPC e REST na AWS que reduziu um processo manual de 7 dias para menos de 24 horas.",
      "Substituí processos baseados em planilhas por Lambdas em Python e integrações com SNS/SQS.",
      "Criei a abordagem de testes automatizados que virou padrão do time e introduzi desenvolvimento local com Docker e práticas de desenvolvimento assistido por IA (SDD, AI agents).",
      "Mentorei um profissional na transição de QA para Engenharia de Software durante três meses.",
    ],
    skillsHeading: "Competências",
    skills: [
      { label: "Linguagens e frameworks", items: "Kotlin, Java, Python, Spring Boot, Micronaut" },
      {
        label: "Arquitetura",
        items: "Sistemas distribuídos, microsserviços, orientada a eventos, REST, gRPC, Clean e Hexagonal",
      },
      {
        label: "Cloud",
        items: "AWS (Lambda, API Gateway, S3, SQS, SNS, EventBridge, CloudWatch), Terraform, CloudFormation, Docker",
      },
      { label: "Dados e mensageria", items: "SQL, DynamoDB, Kafka, Redis, Athena" },
      {
        label: "Observabilidade",
        items: "Datadog, Grafana, CloudWatch, distributed tracing, alertas, resposta a incidentes",
      },
      { label: "Testes", items: "JUnit, Kotest, Rest Assured, Testcontainers" },
    ],
    educationHeading: "Formação",
    education: [
      { title: "Pós-graduação em Arquitetura de Software", school: "FIAP", period: "2024 – 2025" },
      {
        title: "Extensão em Engenharia de Software Moderna",
        school: "UFMG",
        period: "2020",
      },
      { title: "Graduação em Engenharia de Software", school: "UNICID", period: "2019 – 2023" },
    ],
    certificationsHeading: "Certificações",
    certifications: [
      { name: "AWS Certified AI Practitioner", date: "jul 2025" },
      { name: "AWS Certified Developer – Associate", date: "abr 2024" },
    ],
  },
  contact: {
    heading: "Vamos conversar",
    text: "Aberto a vagas de backend sênior, remotas. O jeito mais rápido de falar comigo é por e-mail ou LinkedIn.",
    email: "leodelmiroms@gmail.com",
  },
  footer: "Feito com Next.js.",
};
