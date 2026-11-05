import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github, Sparkles, Target } from "lucide-react";

import { projects } from "@/lib/portfolio/data";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Featured projects showcase.
 * Content comes from `src/lib/portfolio/data.ts` — add a new object to the
 * `projects` array and a card is rendered automatically.
 */
export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Portfolio projects"
      className="relative scroll-mt-20 bg-zinc-950/60 py-20 sm:py-28"
    >
      <div className="bg-dots mask-radial-faded absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected projects & case studies"
            description="Real products, real problems. Each project below shows the problem it solves and how the solution was built."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={0.08 * (i % 2)}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
                {/* Screenshot */}
                <div className="relative aspect-video overflow-hidden border-b border-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-70"
                    aria-hidden
                  />
                  {project.links.demo && project.links.demo !== "#" ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1.5 text-xs font-medium text-emerald-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      Live demo
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </a>
                  ) : null}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-emerald-300/85">
                    {project.tagline}
                  </p>

                  {/* Problem */}
                  <p className="mt-4 flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5 text-sm leading-relaxed text-muted-foreground">
                    <Target
                      className="mt-0.5 size-4 shrink-0 text-emerald-400"
                      aria-hidden
                    />
                    <span>
                      <span className="font-medium text-zinc-300">
                        Problem:{" "}
                      </span>
                      {project.problem}
                    </span>
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Key features */}
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-1.5 text-xs text-zinc-300"
                      >
                        <span
                          className="size-1 rounded-full bg-emerald-400"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-md border border-white/[0.07] bg-white/[0.04] font-mono text-[11px] font-normal text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center gap-4 pt-6">
                    {project.links.demo && project.links.demo !== "#" ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                      >
                        <ExternalLink className="size-4" aria-hidden />
                        Live demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/60">
                        <ExternalLink className="size-4" aria-hidden />
                        Demo on request
                      </span>
                    )}
                    {project.links.github && project.links.github !== "#" ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="size-4" aria-hidden />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/60">
                        <Github className="size-4" aria-hidden />
                        Private repo
                      </span>
                    )}
                    {project.links.caseStudy &&
                    project.links.caseStudy !== "#" ? (
                      <a
                        href={project.links.caseStudy}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Case study
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Expandability card — honest placeholder notice */}
          {/* <Reveal delay={0.1} className="h-full">
            <div className="flex h-full min-h-64 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.015] p-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                <Sparkles className="size-6 text-emerald-300" aria-hidden />
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  The four cards above are sample placeholders.
                </span>{" "}
                Add your real projects in{" "}
                <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-xs text-emerald-300">
                  src/lib/portfolio/data.ts
                </code>{" "}
                — new cards render automatically.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-white/15 bg-transparent"
              >
                <a href="#contact">
                  Your project could be next — let&apos;s talk
                </a>
              </Button>
            </div>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
