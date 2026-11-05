import { valueProps } from "@/lib/portfolio/data";
import { iconMap } from "@/components/portfolio/icon-map";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

/**
 * "Why work with me" — trust-building value propositions in a compact grid.
 */
export function WhyMe() {
  return (
    <section
      id="why-me"
      aria-label="Why work with me"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Sticky intro column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Why Me"
                title="Reliability you can plan a launch around"
                description="Good code is table stakes. What clients actually remember is how the project felt to run — and that's where I focus."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-gradient-to-br from-emerald-500/[0.08] to-transparent p-6">
                <blockquote className="text-sm leading-relaxed text-emerald-50/90">
                  &ldquo;My promise is simple: clear scope, honest timelines,
                  and code I&apos;m proud to hand over.&rdquo;
                </blockquote>
                <p className="mt-3 font-mono text-xs text-emerald-300/80">
                  — personal working agreement, included in every project
                </p>
              </div>
            </Reveal>
          </div>

          {/* Value props grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {valueProps.map((prop, i) => {
              const Icon = iconMap[prop.icon];
              return (
                <Reveal key={prop.id} delay={0.05 * (i % 3)}>
                  <article className="group h-full rounded-2xl border border-white/[0.07] bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/25 hover:bg-card sm:p-6">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.08] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5 text-emerald-300" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-medium">{prop.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {prop.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
