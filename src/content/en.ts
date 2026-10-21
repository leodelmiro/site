import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "Leonardo Delmiro · Senior Backend Engineer",
    description:
      "Senior Backend Engineer building reliable, event-driven systems on AWS for high-scale financial platforms in Brazil.",
  },
  nav: {
    skipToContent: "Skip to content",
    label: "Main",
    work: "Work",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    switchLabel: "PT",
    switchLang: "Ler em português",
  },
  hero: {
    role: "Senior Backend Engineer",
    headline: "I build backend systems that move money and keep working.",
    intro:
      "5+ years designing, building and operating distributed systems at Zup Innovation, part of Itaú Unibanco, the largest bank in Latin America. Kotlin, Java and AWS, with most of my energy on reliability: timeouts, retries, concurrency, and the observability to see what is actually going on in production.",
    location: "Curitiba, Brazil · Remote",
    resumeLabel: "Download resume (PDF)",
    resumeHref: "/leonardo-delmiro-resume-en.pdf",
    contactLabel: "Get in touch",
  },
  metricsLabel: "Results in production",
  metrics: [
    { value: "1M+", label: "daily requests at 99.9% availability" },
    { value: "−96%", label: "production incidents" },
    { value: "300 → 100 ms", label: "P90 latency" },
    { value: "R$100M", label: "daily volume on the TED platform" },
  ],
  work: {
    heading: "Selected work",
    intro:
      "Production work on Brazilian payment systems: PIX, the instant payment system, and TED, interbank wire transfers.",
    problemLabel: "Problem",
    approachLabel: "Approach",
    resultLabel: "Result",
    items: [
      {
        tag: "Reliability",
        title: "Cutting production incidents by 96%",
        problem:
          "Services behind the PIX Indirect Participants product kept failing in production for structural reasons: concurrent processing, missing timeouts and inefficient retry/backoff strategies.",
        approach:
          "Traced each failure to its root cause with logs, distributed tracing, correlation IDs, technical and business metrics, dashboards and alerting, then fixed the underlying design instead of the symptoms.",
        result:
          "Production incidents dropped by 96.25%, on a product handling more than 1M requests a day at 99.9% availability.",
        stack: ["Kotlin", "AWS", "Datadog", "Distributed tracing"],
      },
      {
        tag: "Event-driven architecture",
        title: "Automating participant onboarding",
        problem:
          "Onboarding a new participant depended on manual operational steps that became a bottleneck.",
        approach:
          "Designed and implemented asynchronous workflows with EventBridge, SNS, SQS and Lambda that run the onboarding end to end.",
        result: "Around 160 engineering hours of onboarding effort eliminated.",
        stack: ["EventBridge", "SNS", "SQS", "Lambda"],
      },
      {
        tag: "Performance",
        title: "Taking S3 off the critical path",
        problem: "S3 data processing ran synchronously and weighed on response times.",
        approach: "Refactored the processing to run asynchronously.",
        result: "P90 latency went from 300 ms to 100 ms under production load.",
        stack: ["Kotlin", "Amazon S3", "Async processing"],
      },
      {
        tag: "Legacy modernization",
        title: "Moving TED from mainframe to AWS",
        problem:
          "Itaú's TED infrastructure, a critical platform processing about 115K transactions and R$100M a day, ran on the mainframe.",
        approach:
          "Developed and tested backend services for the new platform and took part in the technical solution decisions.",
        result: "Contributed to migrating a mission-critical financial platform to AWS.",
        stack: ["AWS", "Backend services", "Testing"],
      },
    ],
  },
  projects: {
    heading: "Side projects",
    intro:
      "Things I build for myself. The recent ones are planned with spec-driven development (OpenSpec) and AI agents before any code is written.",
    sourceLabel: "Source code for",
    items: [
      {
        name: "LibrasAnki",
        href: "https://github.com/leodelmiro/LibrasAnki",
        description:
          "Generates Anki decks for Brazilian Sign Language (LIBRAS) from the official INES dictionary, with the sign's video in every card. Handles the dictionary's gaps and data errors explicitly instead of hiding them.",
        tags: ["Python", "OpenSpec", "Anki"],
      },
      {
        name: "imdb-to-letterboxd",
        href: "https://github.com/leodelmiro/imdb-to-letterboxd",
        description:
          "Migrates your IMDb Watch History to Letterboxd. IMDb has no export for it; this fills exactly that gap, with a reconciliation report as the acceptance test.",
        tags: ["JavaScript", "OpenSpec", "CSV"],
      },
      {
        name: "Microservices on Kubernetes",
        href: "https://github.com/leodelmiro/tech-challenge-estabelecimento-infra",
        description:
          "Postgraduate project at FIAP: ordering, payment, product and customer services on Kubernetes, with Terraform, API Gateway and a Lambda authorizer.",
        tags: ["Java", "Kubernetes", "Terraform"],
      },
      {
        name: "Video processing pipeline",
        href: "https://github.com/leodelmiro/fiap-hackaton-video-processa",
        description:
          "FIAP hackathon: an event-driven pipeline that receives, processes and notifies about uploaded videos, split into Kotlin services and infrastructure as code.",
        tags: ["Kotlin", "Event-driven", "Terraform"],
      },
    ],
  },
  experience: {
    heading: "Experience",
    company: "Zup Innovation",
    companyNote: "An Itaú Unibanco Group company · Remote",
    roles: [
      { title: "Senior Software Engineer", period: "Nov 2023 – Present" },
      { title: "Software Engineer", period: "May 2021 – Oct 2023" },
      { title: "Junior Software Engineer", period: "Feb 2021 – Apr 2021" },
    ],
    highlights: [
      "Own features end to end on PIX Indirect Participants, from requirements refinement and trade-off analysis with Product to production support.",
      "Built a Kotlin backend MVP with gRPC and REST on AWS that cut a manual process from 7 days to under 24 hours.",
      "Replaced spreadsheet-driven workflows with Python Lambdas and SNS/SQS integrations.",
      "Created the automated testing approach that became the team standard, and introduced Docker-based local development and AI-assisted practices (SDD, AI agents).",
      "Mentored an engineer through a three-month transition from QA to Software Engineering.",
    ],
    skillsHeading: "Skills",
    skills: [
      { label: "Languages & frameworks", items: "Kotlin, Java, Python, Spring Boot, Micronaut" },
      {
        label: "Architecture",
        items: "Distributed systems, microservices, event-driven, REST, gRPC, Clean & Hexagonal Architecture",
      },
      {
        label: "Cloud",
        items: "AWS (Lambda, API Gateway, S3, SQS, SNS, EventBridge, CloudWatch), Terraform, CloudFormation, Docker",
      },
      { label: "Data & messaging", items: "SQL, DynamoDB, Kafka, Redis, Athena" },
      {
        label: "Observability",
        items: "Datadog, Grafana, CloudWatch, distributed tracing, alerting, incident response",
      },
      { label: "Testing", items: "JUnit, Kotest, Rest Assured, Testcontainers" },
    ],
    educationHeading: "Education",
    education: [
      { title: "Postgraduate in Software Architecture", school: "FIAP", period: "2024 – 2025" },
      {
        title: "Extension Course in Modern Software Engineering",
        school: "UFMG",
        period: "2020",
      },
      { title: "Bachelor's in Software Engineering", school: "UNICID", period: "2019 – 2023" },
    ],
    certificationsHeading: "Certifications",
    certifications: [
      { name: "GitHub Copilot (Microsoft)", date: "May 2026" },
      { name: "AWS Certified AI Practitioner", date: "Jul 2025" },
      { name: "AWS Certified Developer – Associate", date: "Apr 2024" },
    ],
    languagesHeading: "Languages",
    languages: [
      { name: "English", level: "C2 Proficient (EF SET 71/100)" },
      { name: "Portuguese", level: "Native" },
    ],
  },
  contact: {
    heading: "Let's talk",
    text: "Open to senior backend roles, remote. The fastest way to reach me is email or LinkedIn.",
    email: "leodelmiroms@gmail.com",
  },
  footer: "Built with Next.js.",
};
