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
  PublicationTag,
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
          { label: 'TELEMETRY', href: '#telemetry' },
          { label: 'COMPANY', href: '#company' },
          { label: 'NEWSROOM', href: '#newsroom' },
        ]}
        ctaLabel="WORK WITH US"
        ctaHref="#contact"
      />

      {/* Hero Section — Full-Bleed Abyssal Ink (#222f30) with Massive Negative Space */}
      <section className="w-full bg-[var(--color-abyssal-ink)] pt-12 pb-32 md:pt-20 md:pb-40 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-24">
          {/* Upper Third: Section Counter + Architectural Aspekta Headline */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <SectionCounter current={1} total={4} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                HALLELX2 LABS // CANONICAL ARCHITECTURE
              </span>
            </div>

            <HeroHeadline>
              Precision biological computation at laboratory scale.
            </HeroHeadline>
          </div>

          {/* Massive Vertical Breathing Room (Negative Space) with Ambient Darkroom Microscopy Visual */}
          <div className="min-h-[260px] md:min-h-[360px] flex items-center">
            <div className="w-full h-[220px] md:h-[280px] rounded-[20px] overflow-hidden border border-[var(--color-graphite)]/40 relative bg-[var(--color-abyssal-ink)] group">
              <img
                src="/images/cell_microscopy.jpg"
                alt="Bio-computing darkroom laboratory render"
                className="w-full h-full object-cover filter brightness-[0.9] opacity-85 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-5 left-6 flex items-center gap-3 font-mono text-[13px] text-[var(--color-bioluminescent-lime)] bg-[var(--color-abyssal-ink)]/90 px-4 py-2 rounded-full border border-[var(--color-graphite)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-bioluminescent-lime)] animate-pulse"></span>
                <span>SYSTEM STATUS: ACTIVE TELEMETRY // 99.98% OPTICAL GAIN</span>
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

      {/* Section 02 — What We Do / Platform Architecture */}
      <section id="platform" className="w-full bg-[var(--color-abyssal-ink)] py-28 md:py-36 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={2} total={4} />
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

            <div className="space-y-8 text-[var(--color-lichen)] text-[18px] leading-[1.3]">
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
            <div className="flex items-center justify-between border-b border-[var(--color-graphite)]/40 pb-4">
              <span className="font-mono text-[13px] text-[var(--color-bioluminescent-lime)] uppercase tracking-[-0.02em]">
                THREE-LAYER ARCHITECTURE STACK
              </span>
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.02em]">GROUND-UP SOFTWARE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/60 space-y-6">
                <Badge variant="tag">LAYER 1 // ENGINES</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Vectorless &amp; Apocrita
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Structure-preserving document retrieval and deep exploration search engines eliminating vector database dependencies.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/60 space-y-6">
                <Badge variant="tag">LAYER 2 // DIAGNOSTICS</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Voxtar &amp; Oncolens
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Voice biomarker acoustic analysis, digital telepathology slide streaming, and point-of-care mobile vision.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/60 space-y-6">
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

      {/* Section 03 — Laboratory Instrumentation Bench & Telemetry Console */}
      <section id="telemetry" className="w-full bg-[var(--color-abyssal-ink)] py-28 md:py-36 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-16">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={3} total={4} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                LABORATORY BENCH INSTRUMENTATION
              </span>
            </div>
            <PillNavButton active={false} href="/components">LIVE TELEMETRY CONSOLE</PillNavButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionSubHeadline variant="dark" className="text-[var(--color-paper)]">
                Real-time sequence alignment and cellular telemetry.
              </SectionSubHeadline>
              <p className="font-sans text-[18px] text-[var(--color-lichen)] leading-[1.3] tracking-[-0.018px]">
                Our instrumentation bench provides millisecond-level telemetry across genomic sequence streams, structural fold matrices, and clinical event streams with zero visual clutter.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <FilledActionButton href="#newsroom" onLightCanvas={false}>
                  EXPLORE RESEARCH
                </FilledActionButton>
                <ArrowCTAButton href="#newsroom" ariaLabel="Explore Research" />
              </div>
            </div>

            <div className="lg:col-span-7 p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] space-y-6 font-mono text-[13px]">
              <div className="flex items-center justify-between border-b border-[var(--color-graphite)] pb-4 text-[var(--color-graphite)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
                  <span className="text-[var(--color-paper)]">SEQUENCE MODEL TELEMETRY</span>
                </div>
                <span>NODE_ID // AG-8890</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-[var(--color-lichen)]">
                  <span>STRUCTURAL CONFORMATIONAL LATENCY</span>
                  <span className="text-[var(--color-bioluminescent-lime)]">0.42 ms</span>
                </div>
                <div className="w-full bg-[var(--color-graphite)]/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[var(--color-bioluminescent-lime)] h-full w-[88%]"></div>
                </div>

                <div className="flex justify-between items-center text-[var(--color-lichen)] pt-2">
                  <span>VECTORLESS INDEXING DENSITY</span>
                  <span className="text-[var(--color-bioluminescent-lime)]">1.4 TB / s</span>
                </div>
                <div className="w-full bg-[var(--color-graphite)]/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[var(--color-bioluminescent-lime)] h-full w-[94%]"></div>
                </div>

                <div className="flex justify-between items-center text-[var(--color-lichen)] pt-2">
                  <span>CLINICAL EVENT SCHEMA INTEGRITY</span>
                  <span className="text-[var(--color-bioluminescent-lime)]">100.0% FHIR R4</span>
                </div>
                <div className="w-full bg-[var(--color-graphite)]/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[var(--color-bioluminescent-lime)] h-full w-full"></div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-graphite)]/40 flex items-center justify-between text-[12px] text-[var(--color-graphite)]">
                <span>BUFFER: OPTIMIZED</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 — Newsroom & Editorial Section (Full-Bleed Bone White #f7f7f5 Canvas Flip) */}
      <section id="newsroom" className="w-full bg-[var(--color-bone-white)] text-[var(--color-abyssal-ink)] py-28 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={4} total={4} />
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

            {/* Featured Primary News Card */}
            <NewsArticleCard
              category="PUBLICATIONS"
              date="JULY 2026"
              title="High-throughput biological sequence modeling in darkroom environments"
              excerpt="Introducing hallelx2's architectural framework for real-time cellular data aggregation, Shadcn design primitives, and low-latency biological inference."
              imageUrl="/images/protein_structure.jpg"
              href="#article-1"
            />

            {/* Secondary Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="bg-[var(--color-paper)] rounded-[20px] p-8 md:p-10 border border-[var(--color-lichen)] space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <PublicationTag label="RESEARCH NOTE" onLightCanvas={true} />
                    <span className="font-mono text-[13px] text-[var(--color-graphite)]">JUNE 2026</span>
                  </div>
                  <h4 className="text-subheading font-sans text-[var(--color-abyssal-ink)] leading-[1.2]">
                    Structure-preserving document retrieval without vector databases
                  </h4>
                  <p className="text-body font-sans text-[var(--color-graphite)] text-[16px] leading-[1.3]">
                    Benchmarking Vectorless engine performance on multi-terabyte biochemical repositories and structural literature datasets.
                  </p>
                </div>
                <div className="pt-6 flex items-center justify-between border-t border-[var(--color-lichen)]">
                  <a href="#article-2" className="font-mono text-[13px] text-[var(--color-abyssal-ink)] uppercase hover:underline">
                    READ NOTE
                  </a>
                  <ArrowCTAButton href="#article-2" ariaLabel="Read Research Note" />
                </div>
              </div>

              <div className="bg-[var(--color-tissue)] rounded-[20px] p-8 md:p-10 border border-[var(--color-lichen)] space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <PublicationTag label="CLINICAL OS" onLightCanvas={true} />
                    <span className="font-mono text-[13px] text-[var(--color-graphite)]">MAY 2026</span>
                  </div>
                  <h4 className="text-subheading font-sans text-[var(--color-abyssal-ink)] leading-[1.2]">
                    Event-driven EMR architectures and strict clinician authority
                  </h4>
                  <p className="text-body font-sans text-[var(--color-graphite)] text-[16px] leading-[1.3]">
                    How HalleX Health Core separates non-blocking AI draft generation from cryptographic physician sign-off in point-of-care environments.
                  </p>
                </div>
                <div className="pt-6 flex items-center justify-between border-t border-[var(--color-lichen)]">
                  <a href="#article-3" className="font-mono text-[13px] text-[var(--color-abyssal-ink)] uppercase hover:underline">
                    READ PAPER
                  </a>
                  <ArrowCTAButton href="#article-3" ariaLabel="Read Clinical OS Paper" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Absolute Void ground (#000000) */}
      <Footer brandName="hallelx2" />
    </div>
  );
}

