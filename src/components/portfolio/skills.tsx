import { skillCategories } from "@/lib/portfolio/data";
import { iconMap } from "@/components/portfolio/icon-map";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

/**
 * Technical skills grouped by category. Rendered as icon + badge clusters.
 * No fabricated proficiency percentages — categories convey depth honestly.
 */
export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A toolkit built around shipping: typed end to end, tested where it matters, and tuned for performance."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <Reveal
                key={category.id}
                delay={0.05 * (i % 4)}
                className={
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : undefined
                }
              >
                <article className="group h-full rounded-2xl border border-white/[0.07] bg-card/60 p-6 transition-all duration-300 hover:border-emerald-400/25 hover:bg-card">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.08]">
                      <Icon
                        className="size-5 text-emerald-300"
                        aria-hidden
                      />
                    </span>
                    <h3 className="font-semibold leading-snug">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${category.title} skills`}>
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300 transition-colors group-hover:border-emerald-400/15"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
