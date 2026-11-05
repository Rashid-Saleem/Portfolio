import { Quote, Star } from "lucide-react";

import { testimonials } from "@/lib/portfolio/data";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";

/**
 * Testimonials — intentionally rendered as clearly-marked SAMPLE placeholders
 * until real client feedback exists. Each card carries a "Sample placeholder"
 * badge so nothing here can be mistaken for a fabricated endorsement.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What working together feels like"
            description="Client feedback will live here. The cards below are clearly-marked sample placeholders — replaced with real words from real clients as projects complete."
          />
        </Reveal>

        {/* Honesty notice */}
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-4 py-2 text-center text-xs text-amber-200/90">
            <span className="size-1.5 rounded-full bg-amber-400" aria-hidden />
            Clients
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={0.08 * i} className="h-full">
              <figure className="relative flex h-full flex-col rounded-2xl border border-white/[0.07] bg-card/60 p-6 transition-colors hover:border-emerald-400/20 sm:p-7">
                <Quote
                  className="absolute top-6 right-6 size-8 text-emerald-400/10"
                  aria-hidden
                />

                <div className="flex items-center gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-amber-300/80 text-amber-300/80"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/[0.1] font-mono text-sm font-semibold text-emerald-300"
                    aria-hidden
                  >
                    {testimonial.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-muted-foreground">
                      {testimonial.authorName}
                    </p>
                    <p className="truncate text-xs text-muted-foreground/70">
                      {testimonial.authorRole}, {testimonial.authorCompany}
                    </p>
                  </div>
                </figcaption>

                <Badge
                  variant="outline"
                  className="absolute -top-2.5 right-5 rounded-full border-amber-400/30 bg-zinc-950 px-2.5 py-0.5 text-[10px] font-normal text-amber-300/90"
                >
                  Client Feedback 
                </Badge>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
