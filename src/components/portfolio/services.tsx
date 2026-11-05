import Link from "next/link";
import { ArrowRight, Check, TrendingUp } from "lucide-react";

import { services } from "@/lib/portfolio/data";
import { iconMap } from "@/components/portfolio/icon-map";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";

/**
 * Services — three core offers. Each card states what it is, what's included,
 * the business value for the client, and a conversion CTA.
 */
export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      {/* Ambient background */}
      <div
        className="glow-emerald absolute top-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What I can do for your business"
            description="Three focused service lines — each one designed to solve a specific business problem, not just deliver code."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.id} delay={0.08 * i} className="h-full">
                <article className="group relative flex h-full flex-col rounded-2xl border border-white/[0.07] bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-7">
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />

                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] transition-colors group-hover:bg-emerald-400/[0.14]">
                      <Icon className="size-6 text-emerald-300" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-xs text-emerald-300/80">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.offerings.map((offering) => (
                      <li
                        key={offering}
                        className="flex items-start gap-2.5 text-sm text-zinc-300"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-emerald-400"
                          aria-hidden
                        />
                        {offering}
                      </li>
                    ))}
                  </ul>

                  {/* Business value callout */}
                  <div className="mt-5 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] p-4">
                    <p className="flex items-start gap-2 text-sm leading-relaxed text-emerald-100/90">
                      <TrendingUp
                        className="mt-0.5 size-4 shrink-0 text-emerald-300"
                        aria-hidden
                      />
                      <span>
                        <span className="font-medium text-emerald-300">
                          Business value:{" "}
                        </span>
                        {service.businessValue}
                      </span>
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-emerald-400"
                      aria-label={`Discuss the ${service.title} service`}
                    >
                      Discuss this service
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-gradient-to-r from-emerald-500/[0.08] via-card/40 to-teal-500/[0.06] p-6 sm:flex-row sm:p-7">
            <p className="text-center text-sm text-muted-foreground sm:text-left sm:text-base">
              <span className="font-medium text-foreground">
                Not sure which service fits?
              </span>{" "}
              Describe your project — I&apos;ll recommend the pragmatic path.
            </p>
            <Button
              asChild
              className="shrink-0 rounded-full bg-emerald-500 font-medium text-emerald-950 hover:bg-emerald-400"
            >
              <Link href="#contact">
                Get a Free Consultation
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
