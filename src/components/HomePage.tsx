import type { Dictionary } from "@/content/types";

const LINKEDIN_URL = "https://www.linkedin.com/in/leodelmiro/";
const GITHUB_URL = "https://github.com/leodelmiro";

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="font-mono text-sm uppercase tracking-widest text-accent">
      {children}
    </h2>
  );
}

function Header({ dict, onToggleLocale }: { dict: Dictionary; onToggleLocale: () => void }) {
  const links = [
    { href: "#work", label: dict.nav.work },
    { href: "#projects", label: dict.nav.projects },
    { href: "#experience", label: dict.nav.experience },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          Leonardo Delmiro
        </a>
        <div className="flex items-center gap-1 text-sm">
          <nav aria-label={dict.nav.label} className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded px-2 py-2 text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={onToggleLocale}
            className="ml-2 min-h-8 min-w-10 rounded border border-border px-2 font-mono text-xs transition-colors hover:border-accent hover:text-accent"
          >
            {dict.nav.switchLabel}
            {/* Keeps the visible label in the accessible name (WCAG 2.5.3). */}
            <span className="sr-only" lang={dict.locale === "en" ? "pt-BR" : "en"}>
              {` · ${dict.nav.switchLang}`}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="hero-heading" className="pt-16 pb-12 sm:pt-24">
      <p className="font-mono text-sm text-accent">{dict.hero.role}</p>
      <h1
        id="hero-heading"
        className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
      >
        {dict.hero.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{dict.hero.intro}</p>
      <p className="mt-4 text-sm text-muted">{dict.hero.location}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={dict.hero.resumeHref}
          className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          {dict.hero.resumeLabel}
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          {dict.hero.contactLabel}
        </a>
      </div>
    </section>
  );
}

function Metrics({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="metrics-heading" className="pb-16">
      <h2 id="metrics-heading" className="sr-only">
        {dict.metricsLabel}
      </h2>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
        {dict.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col-reverse gap-1 bg-surface p-5">
            <dt className="text-sm text-muted">{metric.label}</dt>
            <dd className="font-mono text-xl font-semibold tracking-tight">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Work({ dict }: { dict: Dictionary }) {
  const { work } = dict;

  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-border py-16">
      <SectionHeading id="work-heading">{work.heading}</SectionHeading>
      <p className="mt-3 max-w-2xl text-muted">{work.intro}</p>
      <div className="mt-10 grid gap-6">
        {work.items.map((item) => (
          <article key={item.title} className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{item.tag}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
            <dl className="mt-5 grid gap-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <dt className="text-sm font-medium">{work.problemLabel}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{item.problem}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium">{work.approachLabel}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{item.approach}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-accent">{work.resultLabel}</dt>
                <dd className="mt-1 text-sm leading-relaxed">{item.result}</dd>
              </div>
            </dl>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <li key={tech} className="rounded bg-accent-soft px-2 py-0.5 font-mono text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({ dict }: { dict: Dictionary }) {
  const { projects } = dict;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border py-16">
      <SectionHeading id="projects-heading">{projects.heading}</SectionHeading>
      <p className="mt-3 max-w-2xl text-muted">{projects.intro}</p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.items.map((project) => (
          <li
            key={project.name}
            className="group relative flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <h3 className="font-semibold tracking-tight">
              {/* The pseudo-element stretches the link over the whole card. */}
              <a
                href={project.href}
                className="after:absolute after:inset-0 after:content-['']"
                aria-label={`${projects.sourceLabel} ${project.name} (GitHub)`}
              >
                {project.name}
                <span aria-hidden="true" className="ml-1 text-muted transition-colors group-hover:text-accent">
                  ↗
                </span>
              </a>
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="font-mono text-xs text-muted">
                  #{tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience({ dict }: { dict: Dictionary }) {
  const { experience } = dict;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-border py-16">
      <SectionHeading id="experience-heading">{experience.heading}</SectionHeading>
      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{experience.company}</h3>
          <p className="text-sm text-muted">{experience.companyNote}</p>
          <ul className="mt-4 space-y-1">
            {experience.roles.map((role) => (
              <li key={role.title} className="flex flex-wrap justify-between gap-x-4 text-sm">
                <span className="font-medium">{role.title}</span>
                <span className="font-mono text-muted">{role.period}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <h3 className="mt-10 font-semibold">{experience.skillsHeading}</h3>
          <dl className="mt-3 space-y-3 text-sm">
            {experience.skills.map((group) => (
              <div key={group.label}>
                <dt className="font-medium">{group.label}</dt>
                <dd className="text-muted">{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-semibold">{experience.educationHeading}</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {experience.education.map((item) => (
                <li key={item.title}>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-muted">
                    {item.school} · <span className="font-mono">{item.period}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">{experience.certificationsHeading}</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {experience.certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="font-mono text-muted">{cert.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ dict }: { dict: Dictionary }) {
  const links = [
    { href: `mailto:${dict.contact.email}`, label: dict.contact.email },
    { href: LINKEDIN_URL, label: "LinkedIn" },
    { href: GITHUB_URL, label: "GitHub" },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-border py-16">
      <SectionHeading id="contact-heading">{dict.contact.heading}</SectionHeading>
      <p className="mt-3 max-w-xl text-lg">{dict.contact.text}</p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-medium text-accent underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HomePage({ dict, onToggleLocale }: { dict: Dictionary; onToggleLocale: () => void }) {
  return (
    <>
      <a
        href="#content"
        className="sr-only z-20 rounded bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {dict.nav.skipToContent}
      </a>
      <Header dict={dict} onToggleLocale={onToggleLocale} />
      <main id="content" className="mx-auto max-w-4xl px-4 sm:px-6">
        <div id="top" />
        <Hero dict={dict} />
        <Metrics dict={dict} />
        <Work dict={dict} />
        <Projects dict={dict} />
        <Experience dict={dict} />
        <Contact dict={dict} />
      </main>
      <footer className="border-t border-border">
        <p className="mx-auto max-w-4xl px-4 py-8 text-sm text-muted sm:px-6">
          Leonardo Delmiro · {dict.footer}
        </p>
      </footer>
    </>
  );
}
