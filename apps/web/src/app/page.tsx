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
  Footer,
} from '@hallelx2/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] flex flex-col font-sans">
      {/* Header Navigation */}
      <HeaderNav
        brandName="HallelX2 Labs"
        navItems={[
          { label: 'Overview', href: '#overview', active: true },
          { label: 'Architecture Stack', href: '#stack' },
          { label: 'Axioms & IP', href: '#axioms' },
          { label: 'Shadcn Suite', href: '/components' },
        ]}
        ctaLabel="Work With Us"
        ctaHref="#contact"
      />

      {/* Hero Section — Darkroom Laboratory Backdrop inspired by Integrated Bio */}
      <section id="overview" className="relative w-full bg-[var(--color-abyssal-ink)] pt-16 pb-32 md:pt-24 md:pb-40 px-4 md:px-8 border-b border-[var(--color-graphite)]/30 overflow-hidden">
        {/* Ambient Organic Fluid Backdrop */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-screen">
          <img
            src="/images/cell_microscopy.jpg"
            alt="Bio-computation laboratory background"
            className="w-full h-full object-cover filter blur-[2px] scale-105"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto space-y-16">
          <div className="flex items-center gap-4">
            <SectionCounter current={1} total={3} />
            <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
              CANONICAL FRAMEWORK // v2.2.0
            </span>
          </div>

          <div className="space-y-10 max-w-5xl">
            <HeroHeadline>
              Engineering low-latency bio-computing, core retrieval engines, &amp; clinical operating systems.
            </HeroHeadline>

            <p className="font-sans text-[22px] md:text-[26px] text-[var(--color-paper)]/90 max-w-3xl leading-[1.3] tracking-[-0.13px]">
              HallelX2 Labs builds ground-up infrastructure—eliminating thin wrappers, vector database bloat, and fragile dependencies.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-5">
            <FilledActionButton href="#stack" onLightCanvas={false}>
              Explore Master Architecture
            </FilledActionButton>

            <div className="flex items-center gap-3">
              <OutlinedGhostButton href="/components" onLightCanvas={false}>
                View Component Suite
              </OutlinedGhostButton>
              <ArrowCTAButton href="/components" ariaLabel="View component suite" />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Stack Section — 3 Layers */}
      <section id="stack" className="w-full bg-[var(--color-abyssal-ink)] py-28 md:py-40 px-4 md:px-8 border-b border-[var(--color-graphite)]/30">
        <div className="max-w-[1200px] mx-auto space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={2} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                HALLELX2 LABS THREE-LAYER STACK
              </span>
            </div>
            <PillNavButton active={true} href="/components">SYSTEM ARCHITECTURE</PillNavButton>
          </div>

          <SectionSubHeadline variant="dark" className="text-[var(--color-paper)]">
            Ground-up software substrates across engines, clinical vertical applications, and headless platforms.
          </SectionSubHeadline>

          {/* Layer 1: Core Engines */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[var(--color-graphite)] pb-4">
              <span className="font-mono text-[14px] text-[var(--color-bioluminescent-lime)] uppercase">
                LAYER 1 // CORE ENGINES &amp; INFRASTRUCTURE SUBSTRATE
              </span>
              <span className="font-mono text-[12px] text-[var(--color-lichen)]">FOUNDATIONAL DATA PROCESSING</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">VECTORLESS</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Structure-Preserving Retrieval Engine
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Eliminates traditional document chunking and vector databases by indexing tokens directly while retaining structural and spatial hierarchy.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">APOCRITA</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Deep Index Search Engine
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Built for deep exploration across large indexes, surfacing complex information superior to standard discovery APIs like Exa or Tavily.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">OMNI</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Healthcare AI Agent Engine
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Autonomous clinical agent engine engineered specifically for healthcare workflows and hospital integration.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">SIGNLM</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Bio-Signal &amp; Acoustic Engine
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Specialized signal-processing substrate extracting physiological markers and acoustic features from live sensor and sound feeds.
                </p>
              </div>
            </div>
          </div>

          {/* Layer 2: Vertical Applications */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-between border-b border-[var(--color-graphite)] pb-4">
              <span className="font-mono text-[14px] text-[var(--color-bioluminescent-lime)] uppercase">
                LAYER 2 // VERTICAL APPLICATIONS &amp; DIAGNOSTICS
              </span>
              <span className="font-mono text-[12px] text-[var(--color-lichen)]">DIRECT CLINICAL SOLUTIONS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">VOXTAR</Badge>
                <h3 className="text-[22px] font-sans font-normal text-[var(--color-paper)]">
                  Voice Diagnostics &amp; Ambient Clerking
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[15px]">
                  Vocal biomarker analysis processing jitter, shimmer, and pause frequencies for clinical monitoring.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">ONCOLENS</Badge>
                <h3 className="text-[22px] font-sans font-normal text-[var(--color-paper)]">
                  Digital Telepathology Platform
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[15px]">
                  Remote slide image streaming and collaborative digital tumor boards for pathology teams.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">CERVICALLENS</Badge>
                <h3 className="text-[22px] font-sans font-normal text-[var(--color-paper)]">
                  Point-of-Care Visual Triage
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[15px]">
                  Edge-based mobile computer vision tool for visual screening and immediate lesion scoring.
                </p>
              </div>
            </div>
          </div>

          {/* Layer 3: Operating Systems */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-between border-b border-[var(--color-graphite)] pb-4">
              <span className="font-mono text-[14px] text-[var(--color-bioluminescent-lime)] uppercase">
                LAYER 3 // OPERATING SYSTEMS &amp; PLATFORM INFRASTRUCTURE
              </span>
              <span className="font-mono text-[12px] text-[var(--color-lichen)]">HEADLESS CLINICAL BACKENDS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">HALLEX HEALTH CORE</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Event-Driven EMR Engine
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  FHIR-aligned data schemas (Patient, Encounter, ServiceRequest) with strict two-stage state transitions (Drafted by AI &rarr; Signed by Clinician).
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]/50 space-y-4">
                <Badge variant="tag">CLOUDREFERRAL</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-[var(--color-paper)]">
                  Cross-Facility Referral System
                </h3>
                <p className="text-body text-[var(--color-lichen)] text-[16px]">
                  Closed-loop event tracking system monitoring inter-facility patient transfers from referral creation to outcome reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Axioms & IP Strategy Section — Light Canvas Flip (#f7f7f5) */}
      <section id="axioms" className="w-full bg-[var(--color-bone-white)] text-[var(--color-abyssal-ink)] py-28 md:py-40 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={3} total={3} />
              <span className="font-mono text-[13px] text-[var(--color-graphite)] tracking-[-0.26px] uppercase">
                OPERATING AXIOMS &amp; TRADE SECRECY
              </span>
            </div>
            <PillNavButton active={false} onLightSurface={true} href="/components">
              VIEW SHADCN COMPONENTS
            </PillNavButton>
          </div>

          {/* Axioms Grid */}
          <div className="space-y-12">
            <SectionSubHeadline variant="light">
              Core Operating Axioms
            </SectionSubHeadline>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[20px] bg-[var(--color-paper)] border border-[var(--color-lichen)] space-y-3">
                <div className="font-mono text-[13px] text-[var(--color-graphite)]">01 / ARCHITECTURE</div>
                <h4 className="text-[22px] font-sans font-normal text-[var(--color-abyssal-ink)]">Direct Solutions Over Wrappers</h4>
                <p className="text-body text-[var(--color-graphite)] text-[16px]">
                  No thin wrappers around third-party APIs. Bottlenecks in memory, retrieval, search, and latency are solved with custom, ground-up software.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-paper)] border border-[var(--color-lichen)] space-y-3">
                <div className="font-mono text-[13px] text-[var(--color-graphite)]">02 / INTEGRITY</div>
                <h4 className="text-[22px] font-sans font-normal text-[var(--color-abyssal-ink)]">Structure Preservation</h4>
                <p className="text-body text-[var(--color-graphite)] text-[16px]">
                  Raw inputs—whether documents, audio waveforms, or pathology slides—retain structural, spatial, and chronological integrity.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-paper)] border border-[var(--color-lichen)] space-y-3">
                <div className="font-mono text-[13px] text-[var(--color-graphite)]">03 / CLINICAL SAFETY</div>
                <h4 className="text-[22px] font-sans font-normal text-[var(--color-abyssal-ink)]">Determinism &amp; Human Authority</h4>
                <p className="text-body text-[var(--color-graphite)] text-[16px]">
                  AI features act strictly as event proposers (Draft). Authenticated licensed human practitioners are the sole signers (Signed).
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[var(--color-paper)] border border-[var(--color-lichen)] space-y-3">
                <div className="font-mono text-[13px] text-[var(--color-graphite)]">04 / HARDWARE</div>
                <h4 className="text-[22px] font-sans font-normal text-[var(--color-abyssal-ink)]">Resource Resilience</h4>
                <p className="text-body text-[var(--color-graphite)] text-[16px]">
                  Engineered to run reliably under real-world constraints, including low bandwidth, power instability, and intermittent networks.
                </p>
              </div>
            </div>
          </div>

          {/* IP & Protection Matrix Table */}
          <div className="space-y-8 pt-8">
            <h3 className="text-heading-sm font-sans font-normal text-[var(--color-abyssal-ink)]">
              IP &amp; Protection Strategy Matrix
            </h3>

            <div className="overflow-x-auto rounded-[20px] border border-[var(--color-lichen)] bg-[var(--color-paper)] p-8">
              <table className="w-full text-left font-sans border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-lichen)] font-mono text-[13px] text-[var(--color-graphite)] uppercase">
                    <th className="pb-4 pr-6 font-normal">Category</th>
                    <th className="pb-4 pr-6 font-normal">Trade Secrets &amp; Proprietary</th>
                    <th className="pb-4 font-normal">Patented &amp; Open Frameworks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-lichen)] text-[16px] text-[var(--color-abyssal-ink)]">
                  <tr>
                    <td className="py-4 pr-6 font-mono text-[13px] text-[var(--color-graphite)]">ALGORITHMS</td>
                    <td className="py-4 pr-6">&bull; Custom Acoustic &amp; Jitter Thresholds</td>
                    <td className="py-4">&bull; Published API Schemas &amp; SDKs</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 font-mono text-[13px] text-[var(--color-graphite)]">MODELS &amp; SEARCH</td>
                    <td className="py-4 pr-6">&bull; Model Weights &amp; Hyperparameters<br />&bull; Custom Search &amp; Indexing Heuristics</td>
                    <td className="py-4">&bull; Core Pipeline Architectures<br />&bull; Structural System Flowcharts</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 font-mono text-[13px] text-[var(--color-graphite)]">CODE &amp; HARDWARE</td>
                    <td className="py-4 pr-6">&bull; Proprietary Backend Source Code</td>
                    <td className="py-4">&bull; Hardware/Software Sync Mechanics (PCT Runway)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Absolute Void ground (#000000) */}
      <Footer brandName="HallelX2 Labs" />
    </div>
  );
}
