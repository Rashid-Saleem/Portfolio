"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

import { navItems, services, siteConfig } from "@/lib/portfolio/data";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { id: "github", label: "GitHub", href: siteConfig.socials.github, icon: Github },
  { id: "linkedin", label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
  { id: "whatsapp", label: "WhatsApp", href: siteConfig.socials.whatsapp, icon: MessageCircle },
  { id: "email", label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

/**
 * Footer — branding, quick navigation, services, socials, copyright and a
 * back-to-top control. Uses `mt-auto` inside the page flex column so it
 * always sits at the bottom of the viewport on short pages.
 */
export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-zinc-950/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="flex items-center gap-2.5 font-semibold tracking-tight"
              aria-label={`${siteConfig.name} — back to top`}
            >
              <span
                className="flex size-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300"
                aria-hidden
              >
                &lt;/&gt;
              </span>
              <span className="text-lg">
                {siteConfig.name}
                <span className="text-emerald-400">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <ul className="mt-5 flex items-center gap-2" aria-label="Social media links">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={`${social.label} profile`}
                    className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-muted-foreground transition-all hover:border-emerald-400/30 hover:text-emerald-300"
                  >
                    <social.icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-zinc-200">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-emerald-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services offered">
            <h3 className="text-sm font-semibold text-zinc-200">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-emerald-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  Free consultation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Back to top */}
          <div className="flex flex-col items-start gap-4 sm:items-end lg:items-end">
            <h3 className="text-sm font-semibold text-zinc-200">Get in touch</h3>
                <a
              href={`mailto:${siteConfig.fullName}`}
              className="text-sm text-muted-foreground transition-colors hover:text-emerald-300"
            >
              Name: {siteConfig.fullName}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-emerald-300"
            >
              Email:{siteConfig.email}
            </a>
            
                <a
              href={`mailto:${siteConfig.whatsappNumber}`}
              className="text-sm text-muted-foreground transition-colors hover:text-emerald-300"
            >
              Contact: {siteConfig.whatsappNumber}
            </a>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border-white/12 bg-white/[0.03]"
            >
              <Link href="#contact">Start a project</Link>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 pb-[env(safe-area-inset-bottom)] sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights
            reserved.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>

      {/* Floating back-to-top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed right-5 bottom-5 z-40 flex size-11 items-center justify-center rounded-full border border-emerald-400/30 bg-zinc-900/90 text-emerald-300 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur transition-all duration-300 hover:bg-emerald-500 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-emerald-400 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" aria-hidden />
      </button>
    </footer>
  );
}
