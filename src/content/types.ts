export type Locale = "en" | "pt";

export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  tag: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
};

export type Project = {
  name: string;
  href: string;
  description: string;
  tags: string[];
};

export type Dictionary = {
  locale: Locale;
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    skipToContent: string;
    label: string;
    work: string;
    projects: string;
    experience: string;
    contact: string;
    switchHref: string;
    switchLabel: string;
    switchLang: string;
  };
  hero: {
    role: string;
    headline: string;
    intro: string;
    location: string;
    resumeLabel: string;
    resumeHref: string;
    contactLabel: string;
  };
  metricsLabel: string;
  metrics: Metric[];
  work: {
    heading: string;
    intro: string;
    problemLabel: string;
    approachLabel: string;
    resultLabel: string;
    items: CaseStudy[];
  };
  projects: {
    heading: string;
    intro: string;
    sourceLabel: string;
    items: Project[];
  };
  experience: {
    heading: string;
    company: string;
    companyNote: string;
    roles: { title: string; period: string }[];
    highlights: string[];
    skillsHeading: string;
    skills: { label: string; items: string }[];
    educationHeading: string;
    education: { title: string; school: string; period: string }[];
    certificationsHeading: string;
    certifications: { name: string; date: string }[];
  };
  contact: {
    heading: string;
    text: string;
    email: string;
  };
  footer: string;
};
