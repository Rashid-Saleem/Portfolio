import Image from "next/image";
import { CheckCircle2, Compass, Cpu, Handshake } from "lucide-react";

import { siteConfig } from "@/lib/portfolio/data";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const highlights = [
  {
    icon: Compass,
    title: "Development philosophy",
    text: "Simple beats clever. I ship clean, well-typed, well-documented code that is easy to extend — and I choose boring, proven technology over hype whenever it serves you better.",
  },
  {
    icon: Cpu,
    title: "Technical interests",
    text: "The intersection of web engineering and applied AI: LLM-powered products, RAG systems, computer vision, and the performance details that make interfaces feel instant.",
  },
  {
    icon: Handshake,
    title: "How I work with clients",
    text: "Transparent estimates, weekly demos on staging links, and honest advice — including when a feature is not worth building. Your product goal drives the technical decisions.",
  },
];

/**
 * About — professional introduction, philosophy and why clients should care.
 * Uses a real image slot that the owner can swap for a personal photo.
 */
export function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="A developer who cares about your outcome, not just the output"
            description="I'm a full-stack developer and AI engineer focused on building products that are fast, reliable and genuinely useful."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Visual */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-500/10 blur-xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/about-workspace.png"
                  alt="Illustration of a modern developer workspace with code editors on dual monitors — replace with your own photo"
                  width={864}
                  height={1152}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-5">
                  <p className="font-mono text-xs text-emerald-300/90">
                    {"// where the work happens"}
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    {siteConfig.fullName} — {siteConfig.role}
                  </p>
                </div>
              </div>

              {/* Small floating credential card */}
              <div className="absolute -right-3 -top-4 rounded-xl border border-white/10 bg-zinc-900/95 px-4 py-3 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur sm:-right-5">
                <p className="font-mono text-[11px] text-muted-foreground">
                  currently building
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" aria-hidden />
                  AI-powered web products
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <Reveal delay={0.08}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                For the past {siteConfig.yearsExperienceLabel} years I&apos;ve
                helped founders, agencies and businesses ship web products —
                from marketing sites that convert to full SaaS platforms and
                AI-powered tools. My edge is combining{" "}
                <span className="text-foreground">
                  solid full-stack engineering
                </span>{" "}
                with{" "}
                <span className="text-foreground">practical AI expertise</span>{" "}
                and an SEO-aware mindset, so the product you launch is found,
                fast and future-proof.
              </p>
            </Reveal>

            <div className="flex flex-col gap-5">
              {highlights.map((item, i) => (
                <Reveal key={item.title} delay={0.12 + i * 0.06}>
                  <div className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-emerald-400/20">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.08]">
                      <item.icon className="size-5 text-emerald-300" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="rounded-full bg-emerald-500 font-medium text-emerald-950 hover:bg-emerald-400"
                >
                  <Link href="#contact">
                    <CheckCircle2 className="size-4" aria-hidden />
                    Start a Conversation
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Free intro call · No obligation
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
