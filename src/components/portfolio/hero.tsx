import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FolderKanban, Sparkles } from "lucide-react";

import { heroStats, heroTechStack, siteConfig } from "@/lib/portfolio/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/portfolio/reveal";

/**
 * Hero — first impression: value-led headline, dual CTAs, developer-themed
 * code window visual, availability status and tech-stack indicators.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Background layers */}
      <div className="bg-grid mask-radial-faded absolute inset-0" aria-hidden />
      <div
        className="glow-emerald absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2"
        aria-hidden
      />
      <div
        className="absolute top-1/3 -left-40 h-72 w-72 rounded-full bg-emerald-500/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-teal-500/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        {/* ── Copy column ── */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              {siteConfig.availableForWork ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-1.5 text-xs font-medium text-emerald-300">
                  <span
                    className="size-2 animate-pulse-dot rounded-full bg-emerald-400"
                    aria-hidden
                  />
                  Available for new projects
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-muted-foreground">
                <Sparkles className="size-3.5 text-emerald-400/80" aria-hidden />
                {siteConfig.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
              I build{" "}
              <span className="text-gradient">fast, scalable web apps</span>{" "}
              and{" "}
              <span className="text-gradient">AI solutions</span> that turn
              your ideas into working products.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Full-stack developer helping startups and businesses worldwide
              design, launch and grow digital products — clean code, SEO built
              in, and clear communication from kickoff to deployment.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-full bg-emerald-500 px-7 text-base font-medium text-emerald-950 shadow-[0_0_36px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_48px_rgba(16,185,129,0.5)]"
              >
                <Link href="#contact">
                  Let&apos;s Work Together
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/[0.03] px-7 text-base font-medium hover:bg-white/[0.07] hover:text-foreground"
              >
                <Link href="#projects">
                  <FolderKanban className="size-4 text-emerald-400" aria-hidden />
                  View My Projects
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-2 flex flex-wrap gap-2" aria-label="Core technologies">
              {heroTechStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Visual column: developer code window ── */}
        <Reveal delay={0.2} y={32} className="relative">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Glow behind window */}
            <div
              className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-transparent to-teal-500/10 blur-2xl"
              aria-hidden
            />

            {/* Code window */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
                <span className="size-3 rounded-full bg-red-500/80" aria-hidden />
                <span className="size-3 rounded-full bg-yellow-500/80" aria-hidden />
                <span className="size-3 rounded-full bg-emerald-500/80" aria-hidden />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  developer.ts
                </span>
                <span className="ml-auto rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  TypeScript
                </span>
              </div>

              {/* Code body */}
              <pre className="overflow-x-auto custom-scrollbar p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-sm">
                <code>
                  <span className="text-teal-300">const</span>{" "}
                  <span className="text-zinc-100">developer</span>{" "}
                  <span className="text-zinc-400">=</span>{" "}
                  <span className="text-zinc-300">{"{"}</span>
                  {"\n"}  <span className="text-amber-300">name</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-emerald-300">&quot;{siteConfig.fullName}&quot;</span>
                  <span className="text-zinc-400">,</span>
                  {"\n"}  <span className="text-amber-300">role</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-zinc-300">[</span>
                  <span className="text-emerald-300">&quot;Full-Stack Dev&quot;</span>
                  <span className="text-zinc-400">,</span>{" "}
                  <span className="text-emerald-300">&quot;AI Engineer&quot;</span>
                  <span className="text-zinc-300">]</span>
                  <span className="text-zinc-400">,</span>
                  {"\n"}  <span className="text-amber-300">stack</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-zinc-300">[</span>
                  <span className="text-emerald-300">&quot;Next.js&quot;</span>
                  <span className="text-zinc-400">,</span>{" "}
                  <span className="text-emerald-300">&quot;TypeScript&quot;</span>
                  <span className="text-zinc-400">,</span>{" "}
                  <span className="text-emerald-300">&quot;Python&quot;</span>
                  <span className="text-zinc-300">]</span>
                  <span className="text-zinc-400">,</span>
                  {"\n"}  <span className="text-amber-300">focus</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-emerald-300">&quot;Ideas → shipped products&quot;</span>
                  <span className="text-zinc-400">,</span>
                  {"\n"}  <span className="text-amber-300">openToWork</span>
                  <span className="text-zinc-400">:</span>{" "}
                  <span className="text-amber-300">true</span>
                  <span className="text-zinc-400">,</span>
                  {"\n"}
                  <span className="text-zinc-300">{"}"}</span>
                  <span className="text-zinc-400">;</span>
                  {"\n\n"}
                  <span className="text-zinc-500">{"// Let's build something great"}</span>
                  {"\n"}
                  <span className="text-teal-300">export default</span>{" "}
                  <span className="text-zinc-100">developer</span>
                  <span className="text-zinc-400">;</span>
                  <span
                    className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-emerald-400 align-middle"
                    aria-hidden
                  />
                </code>
              </pre>

              {/* Status bar */}
              <div className="flex items-center justify-between border-t border-white/[0.06] bg-white/[0.02] px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" aria-hidden />
                  build: passing
                </span>
                <span>UTF-8 · TS · Ln 9, Col 1</span>
              </div>
            </div>

            {/* Floating card: profile */}
            <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/95 p-3 pr-4 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur sm:-left-8">
              <span className="relative shrink-0">
                <Image
                  src="/images/avatar.png"
                  alt={`Illustrated avatar placeholder of ${siteConfig.fullName}`}
                  width={44}
                  height={44}
                  className="size-11 rounded-full border border-emerald-400/30 object-cover"
                />
                <span
                  className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-zinc-900 bg-emerald-400"
                  aria-hidden
                />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium">{siteConfig.name}</span>
                <span className="text-xs text-muted-foreground">
                  Full-Stack · AI Engineer
                </span>
              </span>
            </div>

            {/* Floating card: metrics */}
            <div className="absolute -top-5 -right-2 hidden rounded-xl border border-white/10 bg-zinc-900/95 p-3 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur sm:block lg:-right-6">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1" aria-hidden>
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-teal-400" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  Lighthouse <span className="text-emerald-300">98</span>
                </span>
              </div>
              <div className="mt-2 h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stats strip */}
      <div className="relative mx-auto mt-16 w-full max-w-6xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 backdrop-blur-sm transition-colors hover:border-emerald-400/20"
              >
                <dt className="order-2 text-sm text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-3xl font-semibold text-transparent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* Re-export a small helper for section paddings used across the page */
export const sectionWrapper = cn(
  "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
);
