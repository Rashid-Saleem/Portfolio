"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { navItems, siteConfig } from "@/lib/portfolio/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Sticky glassmorphic navigation with active-section highlighting,
 * scroll progress bar and an animated mobile sheet menu.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  /* Track scroll position for the glass background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    const sectionIds = ["home", "about", "services", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5 rounded-md font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-emerald-400"
          aria-label={`${siteConfig.name} — back to top`}
        >
          <span
            className="flex size-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300 transition-colors group-hover:bg-emerald-400/20"
            aria-hidden
          >
            &lt;/&gt;
          </span>
          <span className="text-base sm:text-lg">
            {siteConfig.name}
            <span className="text-emerald-400">.dev</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-emerald-400",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                      aria-hidden
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            size="sm"
            className="group rounded-full bg-emerald-500 font-medium text-emerald-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_32px_rgba(16,185,129,0.45)]"
          >
            <Link href="#contact">
              Hire Me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-foreground transition-colors hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-emerald-400 lg:hidden"
        >
          {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/[0.06] bg-zinc-950/[0.97] shadow-[0_24px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base transition-colors",
                      activeSection === item.href.replace("#", "")
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-2">
                <Button
                  asChild
                  className="w-full rounded-full bg-emerald-500 font-medium text-emerald-950 hover:bg-emerald-400"
                >
                  <Link href="#contact" onClick={() => setMobileOpen(false)}>
                    Hire Me
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
