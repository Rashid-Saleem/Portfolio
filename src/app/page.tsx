import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { WhyMe } from "@/components/portfolio/why-me";
import { Process } from "@/components/portfolio/process";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { siteConfig } from "@/lib/portfolio/data";

/**
 * Portfolio landing page — all sections composed in conversion order:
 * Hero → About → Services → Projects → Skills → Why Me → Process →
 * Testimonials → Contact, wrapped in a flex column so the footer always
 * sticks to the bottom of the viewport.
 */
export default function Home() {
  /* Structured data: helps search engines understand who you are. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.fullName,
        jobTitle: siteConfig.role,
        description: siteConfig.tagline,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        image: `${siteConfig.url}/images/avatar.png`,
        knowsAbout: [
          "Full-Stack Web Development",
          "Next.js",
          "React",
          "TypeScript",
          "Python",
          "Artificial Intelligence",
          "Machine Learning",
          "Retrieval-Augmented Generation",
          "Computer Vision",
          "Search Engine Optimization",
        ],
        sameAs: [
          siteConfig.socials.github,
          siteConfig.socials.linkedin,
          ...(siteConfig.socials.x ? [siteConfig.socials.x] : []),
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.fullName} — ${siteConfig.role}`,
        description: siteConfig.tagline,
        author: { "@id": `${siteConfig.url}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: `${siteConfig.fullName} — Web Development, AI & SEO Services`,
        description:
          "Full-stack web development (Next.js, React, TypeScript), AI solutions (RAG, chatbots, computer vision) and technical SEO services.",
        url: siteConfig.url,
        areaServed: "Worldwide",
        provider: { "@id": `${siteConfig.url}/#person` },
        serviceType: [
          "Web Development",
          "AI Development",
          "SEO & Performance Optimization",
        ],
      },
    ],
  };

  return (
    <div className="flex min-h-svh flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <WhyMe />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
