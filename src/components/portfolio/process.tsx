import { processSteps } from "@/lib/portfolio/data";
import { iconMap } from "@/components/portfolio/icon-map";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

/**
 * Development process — six phases rendered as a numbered timeline.
 * Vertical line on mobile, horizontal flow on desktop.
 */
export function Process() {
  return (
    <section
      id="process"
      aria-label="Development process"
      className="relative scroll-mt-20 bg-zinc-950/60 py-20 sm:py-28"
    >
      <div className="bg-grid mask-radial-faded absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A workflow built to remove surprises"
            description="Six clear phases with defined deliverables — you always know what's happening, what's next, and what you're paying for."
          />
        </Reveal>

        <ol className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <Reveal key={step.id} delay={0.06 * (i % 3)}>
                <li className="group relative h-full rounded-2xl border border-white/[0.07] bg-card/60 p-6 transition-all duration-300 hover:border-emerald-400/25 hover:bg-card">
                  {/* Step number */}
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08]">
                      <Icon
                        className="size-5 text-emerald-300"
                        aria-hidden
                      />
                    </span>
                    <span
                      className="bg-gradient-to-b from-zinc-700/80 to-zinc-800/20 bg-clip-text font-mono text-4xl font-bold text-transparent transition-colors group-hover:from-emerald-400/70"
                      aria-hidden
                    >
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-emerald-400/15 bg-emerald-400/[0.05] px-2 py-1 text-[11px] text-emerald-200/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
