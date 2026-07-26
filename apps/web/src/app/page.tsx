import React from 'react';
import {
  HeaderNav,
  HeroHeadline,
  SectionSubHeadline,
  SectionCounter,
  PillNavButton,
  FilledActionButton,
  ArrowCTAButton,
  OutlinedGhostButton,
  HairlineDivider,
  Badge,
  NewsArticleCard,
  Footer,
} from '@hallelx2/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] flex flex-col font-sans selection:bg-[var(--color-bioluminescent-lime)] selection:text-[var(--color-abyssal-ink)]">
      {/* Header Navigation */}
      <HeaderNav
        brandName="hallelx2"
        navItems={[
          { label: 'PLATFORM', href: '#platform' },
          { label: 'COMPANY', href: '#company' },
          { label: 'NEWSROOM', href: '#newsroom' },
        ]}
        ctaLabel="WORK WITH US"
        ctaHref="#contact"
      />

      {/* Hero Section — Full-Bleed Abyssal Ink (#222f30) with Massive Negative Space */}
      <section className="w-full bg-[var(--color-abyssal-ink)] pt-12 pb-32 md:pt-20 md:pb-48 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-24">
          {/* Upper Third: Section Counter + Architectural Aspekta Headline */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <SectionCounter current={1} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                HALLELX2 LABS // CANONICAL ARCHITECTURE
              </span>
            </div>

            <HeroHeadline>
              Precision biological computation at laboratory scale.
            </HeroHeadline>
          </div>

          {/* Massive Vertical Breathing Room (400px Negative Space) */}
          <div className="min-h-[280px] md:min-h-[380px] flex items-center">
            {/* Ambient Darkroom Laboratory Telemetry Visual */}
            <div className="w-full h-[180px] md:h-[240px] rounded-[20px] overflow-hidden border border-[var(--color-graphite)]/30 relative bg-[var(--color-abyssal-ink)]">
              <img
                src="/images/cell_microscopy.jpg"
                alt="Bio-computing darkroom laboratory render"
                className="w-full h-full object-cover filter brightness-[0.9] opacity-80"
              />
              <div className="absolute bottom-4 left-6 flex items-center gap-3 font-mono text-[12px] text-[var(--color-bioluminescent-lime)] bg-[var(--color-abyssal-ink)]/80 px-3 py-1.5 rounded-full border border-[var(--color-graphite)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-bioluminescent-lime)] animate-pulse"></span>
                <span>SYSTEM STATUS: ACTIVE TELEMETRY</span>
              </div>
            </div>
          </div>

          {/* Lower Third: Supporting Copy Left + CTA Group Right */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 pt-8 border-t border-[var(--color-graphite)]/30">
            <p className="font-sans text-[22px] md:text-[24px] text-[var(--color-paper)]/95 max-w-2xl leading-[1.3] tracking-[-0.13px]">
              Sculpting next-generation bio-computational systems, structure-preserving retrieval engines, and event-driven clinical operating systems.
            </p>

            <div className="flex items-center gap-4">
              <OutlinedGhostButton href="#platform" onLightCanvas={false}>
                DISCOVER OUR PLATFORM
              </OutlinedGhostButton>
              <ArrowCTAButton href="#platform" ariaLabel="Discover Our Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Platform Section — Full-Bleed Abyssal Ink (#222f30) */}
      <section id="platform" className="w-full bg-[var(--color-abyssal-ink)] py-28 md:py-40 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={2} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                INSTRUMENTATION ARCHITECTURE
              </span>
            </div>
            <PillNavButton active={true} href="/components">SYSTEM ARCHITECTURE</PillNavButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionSubHeadline variant="dark" className="text-[var(--color-paper)]">
              We operate at the interface of cellular intelligence, deep sequence models, and high-throughput laboratory measurement.
            </SectionSubHeadline>

            <div className="space-y-8 text-[var(--color-lichen)] text-[19px] leading-[1.3]">
              <p>
                Our core platform delivers real-time analytical telemetry across biological datasets, bringing lab-instrument calm and rigorous mathematical discipline to complex biochemical workflows.
              </p>
              <HairlineDivider onLightCanvas={false} />
              <div className="grid grid-cols-2 gap-6 font-mono text-[13px] text-[var(--color-graphite)] pt-2">
                <div>
                  <div className="text-[var(--color-paper)] text-[14px]">ACCURACY</div>
                  <div className="text-[var(--color-bioluminescent-lime)]">99.98% Telemetry</div>
                </div>
                <div>
                  <div className="text-[var(--color-paper)] text-[14px]">LATENCY</div>
                  <div className="text-[var(--color-bioluminescent-lime)]">&lt; 1.2ms Realtime</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Layer Stack Grid */}
          <div className="space-y-12 pt-8">
            <div className="flex items-center justify-between border-b border-[var(--color-graphite)] pb-4">
              <span className="font-mono text-[14px] text-[var(--color-bioluminescent-lime)] uppercase">
                THREE-LAYER ARCHITECTURE STACK
              </span>
              <span className="font-mono text-[12px] text-[var(--color-lichen)]">GROUND-UP SOFTWARE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] space-y-4">
                <Badge variant="tag">LAYER 1 // ENGINES</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Vectorless &amp; Apocrita
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Structure-preserving document retrieval and deep exploration search engines eliminating vector database dependencies.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] space-y-4">
                <Badge variant="tag">LAYER 2 // DIAGNOSTICS</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Voxtar &amp; Oncolens
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Voice biomarker acoustic analysis, digital telepathology slide streaming, and point-of-care mobile vision.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] space-y-4">
                <Badge variant="tag">LAYER 3 // PLATFORMS</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  HalleX Health Core
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Headless event-driven EMR engine with FHIR-aligned schemas and strict AI-Draft to Clinician-Signed authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsroom & Editorial Section — Full-Bleed Bone White (#f7f7f5) Canvas Flip */}
      <section id="newsroom" className="w-full bg-[var(--color-bone-white)] text-[var(--color-abyssal-ink)] py-28 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={3} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-graphite)] tracking-[-0.26px] uppercase">
                NEWSROOM &amp; EDITORIAL
              </span>
            </div>
            <PillNavButton active={false} onLightSurface={true} href="/components">
              VIEW SHADCN SUITE
            </PillNavButton>
          </div>

          <div className="space-y-12">
            <SectionSubHeadline variant="light">
              Latest publications and instrumentation notes
            </SectionSubHeadline>

            <NewsArticleCard
              category="PUBLICATIONS"
              date="JULY 2026"
              title="High-throughput biological sequence modeling in darkroom environments"
              excerpt="Introducing hallelx2's architectural framework for real-time cellular data aggregation, Shadcn design primitives, and low-latency biological inference."
              imageUrl="/images/protein_structure.jpg"
              href="#article-1"
            />
          </div>
        </div>
      </section>

      {/* Footer — Absolute Void ground (#000000) */}
      <Footer brandName="hallelx2" />
    </div>
  );
}
