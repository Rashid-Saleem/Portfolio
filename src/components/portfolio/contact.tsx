"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

import { projectTypeOptions, budgetOptions, siteConfig } from "@/lib/portfolio/data";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/portfolio/contact-schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

const quickContacts = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    note: "Best for detailed briefs",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Message directly",
    href: siteConfig.socials.whatsapp,
    icon: MessageCircle,
    note: "Fastest response",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: siteConfig.socials.linkedin,
    icon: Linkedin,
    note: "Professional profile",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@your-username",
    href: siteConfig.socials.github,
    icon: Github,
    note: "See my open-source code",
  },
];

/**
 * Contact — conversion-focused section with a validated form (wired to
 * `/api/contact`, which persists inquiries) and direct contact channels.
 */
export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: undefined,
      budget: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { success: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      toast.success("Message sent!", {
        description:
          "Thanks for reaching out — I'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast.error("Could not send your message", {
        description:
          error instanceof Error
            ? error.message
            : "Please try again or email me directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div className="bg-grid mask-radial-faded absolute inset-0 opacity-40" aria-hidden />
      <div
        className="glow-emerald absolute -bottom-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Tell me about your project"
            description="Briefly describe what you want to build or fix. I reply to every serious inquiry — usually within 24 hours."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* ── Form ── */}
          <Reveal>
            <div className="rounded-2xl border border-white/[0.07] bg-card/60 p-6 sm:p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jane Smith"
                              autoComplete="name"
                              className="h-11 rounded-xl border-white/10 bg-white/[0.03] focus-visible:border-emerald-400/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jane@company.com"
                              autoComplete="email"
                              className="h-11 rounded-xl border-white/10 bg-white/[0.03] focus-visible:border-emerald-400/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11 w-full rounded-xl border-white/10 bg-white/[0.03] data-[size=default]:h-11">
                                <SelectValue placeholder="Select a project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="border-white/10 bg-zinc-900">
                              {projectTypeOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Budget range{" "}
                            <span className="font-normal text-muted-foreground">
                              (optional)
                            </span>
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11 w-full rounded-xl border-white/10 bg-white/[0.03] data-[size=default]:h-11">
                                <SelectValue placeholder="Select a range (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="border-white/10 bg-zinc-900">
                              {budgetOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project description</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="What are you building? What problem should it solve? Any timeline or tech preferences?"
                            className="min-h-28 resize-y rounded-xl border-white/10 bg-white/[0.03] focus-visible:border-emerald-400/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      disabled={submitting}
                      size="lg"
                      className={cn(
                        "group h-12 rounded-full bg-emerald-500 px-8 text-base font-medium text-emerald-950 shadow-[0_0_28px_rgba(16,185,129,0.25)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.45)]",
                        submitting && "cursor-not-allowed opacity-80"
                      )}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" aria-hidden />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send
                            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                        </>
                      )}
                    </Button>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Your details are stored securely and never shared.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </Reveal>

          {/* ── Direct channels ── */}
          <div className="flex flex-col gap-4">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-white/[0.07] bg-card/60 p-6">
                <h3 className="font-semibold">Prefer direct contact?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pick the channel you like — all of them reach me.
                </p>
                <ul className="mt-5 space-y-3">
                  {quickContacts.map((channel) => (
                    <li key={channel.id}>
                      <a
                        href={channel.href}
                        target={
                          channel.href.startsWith("mailto:") ? undefined : "_blank"
                        }
                        rel={
                          channel.href.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-emerald-400/25 hover:bg-white/[0.04]"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.08]">
                          <channel.icon
                            className="size-5 text-emerald-300"
                            aria-hidden
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium">
                            {channel.label}
                          </span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {channel.value}
                          </span>
                        </span>
                        <span className="hidden text-[11px] text-muted-foreground/70 sm:block">
                          {channel.note}
                        </span>
                        <ArrowRight
                          className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-300"
                          aria-hidden
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.05] p-6">
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/[0.1]">
                  <MapPin className="size-5 text-emerald-300" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-emerald-100">
                    Working hours & location
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {siteConfig.location}. Flexible overlap with EU & US time
                    zones. Typical response time: under 24 hours on business
                    days.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
