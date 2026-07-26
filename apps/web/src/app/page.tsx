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
  Footer,
} from '@hallelx2/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] flex flex-col">
      {/* Navigation */}
      <HeaderNav />

      {/* Hero Section — Dark Canvas (#222f30) */}
      <section className="w-full bg-[var(--color-abyssal-ink)] pt-12 pb-24 md:py-32 px-4 md:px-8 border-b border-[var(--color-graphite)]/40">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="flex items-center gap-4">
            <SectionCounter current={1} total={3} />
            <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
              LABORATORY COMPUTATION // 01
            </span>
          </div>

          <div className="space-y-8 max-w-5xl">
            <HeroHeadline>
              Precision biological computation at laboratory scale
            </HeroHeadline>

            <p className="font-sans text-[22px] md:text-[24px] text-[var(--color-lichen)] max-w-2xl leading-[1.3] tracking-[-0.13px]">
              Sculpting next-generation bio-computational systems, darkroom laboratory telemetry, and state-of-the-art computational infrastructure.
            </p>
          </div>

          <div className="pt-8 flex flex-wrap items-center gap-4">
            <FilledActionButton href="#platform" onLightCanvas={false}>
              Explore Platform
            </FilledActionButton>

            <div className="flex items-center gap-2">
              <OutlinedGhostButton href="#research" onLightCanvas={false}>
                Read Publications
              </OutlinedGhostButton>
              <ArrowCTAButton href="#research" ariaLabel="Go to research" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section — Dark Canvas */}
      <section id="platform" className="w-full bg-[var(--color-abyssal-ink)] py-24 md:py-32 px-4 md:px-8 border-b border-[var(--color-graphite)]/40">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SectionCounter current={2} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                INSTRUMENTATION ARCHITECTURE
              </span>
            </div>
            <PillNavButton active={true}>SYSTEM OVERVIEW</PillNavButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <SectionSubHeadline variant="dark">
              We operate at the interface of cellular intelligence, deep sequence models, and high-throughput laboratory measurement.
            </SectionSubHeadline>

            <div className="space-y-6 text-[var(--color-lichen)] text-body">
              <p>
                Our core platform delivers real-time analytical telemetry across biological datasets, bringing lab-instrument calm and rigorous mathematical discipline to complex biochemical workflows.
              </p>
              <HairlineDivider onLightCanvas={false} />
              <div className="grid grid-cols-2 gap-4 font-mono text-[13px] text-[var(--color-graphite)] pt-2">
                <div>
                  <div className="text-[var(--color-paper)]">ACCURACY</div>
                  <div>99.98% Telemetry</div>
                </div>
                <div>
                  <div className="text-[var(--color-paper)]">LATENCY</div>
                  <div>&lt; 1.2ms Realtime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsroom Section — Light Canvas Flip (#f7f7f5) */}
      <section id="newsroom" className="w-full bg-[var(--color-bone-white)] text-[var(--color-abyssal-ink)] py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SectionCounter current={3} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-graphite)] tracking-[-0.26px] uppercase">
                NEWSROOM & EDITORIAL
              </span>
            </div>
            <PillNavButton active={false} onLightSurface={true}>
              VIEW ALL ARTICLES
            </PillNavButton>
          </div>

          <div className="space-y-8">
            <SectionSubHeadline variant="light">
              Latest publications and instrumentation notes
            </SectionSubHeadline>

            <NewsArticleCard
              category="PUBLICATIONS"
              date="JULY 2026"
              title="High-throughput biological sequence modeling in darkroom environments"
              excerpt="Introducing hallelx2's architectural framework for real-time cellular data aggregation and low-latency biological inference."
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
