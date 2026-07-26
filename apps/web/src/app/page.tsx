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
  NewsArticleCard,
  HairlineDivider,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Footer,
} from '@hallelx2/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] flex flex-col font-sans">
      {/* Header Navigation */}
      <HeaderNav
        navItems={[
          { label: 'Overview', href: '#overview', active: true },
          { label: 'Platform', href: '#platform' },
          { label: 'Shadcn Suite', href: '/components' },
          { label: 'Newsroom', href: '#newsroom' },
        ]}
      />

      {/* Hero Section — Massive Negative Space & Architectural Aspekta Type */}
      <section className="w-full bg-[var(--color-abyssal-ink)] pt-16 pb-32 md:pt-24 md:pb-40 px-4 md:px-8 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto space-y-20">
          <div className="flex items-center gap-4">
            <SectionCounter current={1} total={3} />
            <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
              LABORATORY COMPUTATION // 01
            </span>
          </div>

          <div className="space-y-12 max-w-5xl">
            <HeroHeadline>
              Precision biological computation at laboratory scale.
            </HeroHeadline>

            <p className="font-sans text-[22px] md:text-[26px] text-[var(--color-paper)]/90 max-w-2xl leading-[1.3] tracking-[-0.13px]">
              Sculpting next-generation bio-computational systems, darkroom laboratory telemetry, and state-of-the-art computational infrastructure.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-5">
            <FilledActionButton href="/components" onLightCanvas={false}>
              Explore Shadcn Suite
            </FilledActionButton>

            <div className="flex items-center gap-3">
              <OutlinedGhostButton href="#platform" onLightCanvas={false}>
                Discover Our Platform
              </OutlinedGhostButton>
              <ArrowCTAButton href="#platform" ariaLabel="Go to platform" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section — Dark Canvas with Scientific Render */}
      <section id="platform" className="w-full bg-[var(--color-abyssal-ink)] py-28 md:py-40 px-4 md:px-8 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={2} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                INSTRUMENTATION ARCHITECTURE
              </span>
            </div>
            <PillNavButton active={true} href="/components">SHADCN COMPONENTS LIVE</PillNavButton>
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

          {/* Scientific Visual Highlight Card */}
          <div className="rounded-[24px] overflow-hidden border border-[var(--color-graphite)]/40 bg-[var(--color-abyssal-ink)] grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 space-y-6">
              <Badge variant="tag">MOLECULAR COMPUTATION</Badge>
              <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                Deep Sequence Reranking &amp; Protein Telemetry
              </h3>
              <p className="text-body text-[var(--color-lichen)]">
                High-throughput structure predictions rendered in real-time darkroom laboratory monitors.
              </p>
              <OutlinedGhostButton href="/components">View Interactive Data Tables</OutlinedGhostButton>
            </div>
            <div className="h-full min-h-[300px] overflow-hidden">
              <img
                src="/images/protein_structure.jpg"
                alt="Protein molecular 3D render"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsroom Section — Light Canvas Flip (#f7f7f5) */}
      <section id="newsroom" className="w-full bg-[var(--color-bone-white)] text-[var(--color-abyssal-ink)] py-28 md:py-40 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={3} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-graphite)] tracking-[-0.26px] uppercase">
                NEWSROOM &amp; EDITORIAL
              </span>
            </div>
            <PillNavButton active={false} onLightSurface={true} href="/components">
              VIEW COMPONENT SUITE
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
              imageUrl="/images/cell_microscopy.jpg"
              href="#article-1"
            />
          </div>
        </div>
      </section>

      {/* Footer — Absolute Void ground (#000000) */}
      <Footer />
    </div>
  );
}
