import React from 'react';
import {
  HeaderNav,
  SectionSubHeadline,
  SectionCounter,
  PillNavButton,
  FilledActionButton,
  ArrowCTAButton,
  OutlinedGhostButton,
  Badge,
  Footer,
} from '@hallelx2/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070d14] text-[var(--color-paper)] flex flex-col font-sans selection:bg-[#38bdf8] selection:text-[#070d14]">
      {/* IntegratedBio Fullscreen Hero Section with Blue Backdrop */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#070d14] pb-12">
        {/* Fullscreen High-Res Blue Fluid Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hallelx2_blue_hero_bg.jpg"
            alt="HallelX2 Blue Bio-Computing Fluid Backdrop"
            className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d14] via-transparent to-black/30"></div>
        </div>

        {/* Header Navigation */}
        <HeaderNav brandName="HallelX2" />

        {/* Main Hero Display Text — IntegratedBio Style */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 my-auto pt-12 pb-20">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-sans font-normal text-[clamp(44px,7vw,110px)] leading-[0.98] tracking-[-0.035em] text-white">
              Engineering the future of clinical computing.
            </h1>
          </div>
        </div>

        {/* Bottom Bar: Sub-copy Left + CTA Right (IntegratedBio exact placement) */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end justify-between gap-8">
          <p className="font-sans font-normal text-[18px] md:text-[22px] text-white/95 max-w-xl leading-[1.3] tracking-[-0.01em]">
            We build low-latency infrastructure, structure-preserving retrieval engines, and event-driven EMR backends for next-generation healthcare.
          </p>

          <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            <a
              href="#stack"
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-mono text-[11px] uppercase tracking-[0.03em] px-6 py-3 rounded-full transition-all"
            >
              DISCOVER OUR PLATFORM
            </a>
            <a
              href="#stack"
              className="w-10 h-10 rounded-full bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#070d14] flex items-center justify-center transition-all"
              aria-label="Discover Our Platform"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Architecture Stack Section — 3 Layers */}
      <section id="stack" className="w-full bg-[#070d14] py-28 md:py-40 px-6 md:px-12 border-b border-[#1e293b]">
        <div className="max-w-[1200px] mx-auto space-y-20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SectionCounter current={2} total={3} />
              <span className="font-mono text-[13px] text-[#94a3b8] tracking-[-0.26px] uppercase">
                HALLELX2 LABS THREE-LAYER STACK
              </span>
            </div>
            <PillNavButton active={true} href="/components">SYSTEM ARCHITECTURE</PillNavButton>
          </div>

          <SectionSubHeadline variant="dark" className="text-white">
            Ground-up software substrates across engines, clinical vertical applications, and headless platforms.
          </SectionSubHeadline>

          {/* Layer 1: Core Engines */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
              <span className="font-mono text-[14px] text-[#38bdf8] uppercase">
                LAYER 1 // CORE ENGINES &amp; INFRASTRUCTURE SUBSTRATE
              </span>
              <span className="font-mono text-[12px] text-[#94a3b8]">FOUNDATIONAL DATA PROCESSING</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">VECTORLESS</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-white">
                  Structure-Preserving Retrieval Engine
                </h3>
                <p className="text-body text-[#94a3b8] text-[16px]">
                  Eliminates traditional document chunking and vector databases by indexing tokens directly while retaining structural and spatial hierarchy.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">APOCRITA</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-white">
                  Deep Index Search Engine
                </h3>
                <p className="text-body text-[#94a3b8] text-[16px]">
                  Built for deep exploration across large indexes, surfacing complex information superior to standard discovery APIs like Exa or Tavily.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">OMNI</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-white">
                  Healthcare AI Agent Engine
                </h3>
                <p className="text-body text-[#94a3b8] text-[16px]">
                  Autonomous clinical agent engine engineered specifically for healthcare workflows and hospital integration.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">SIGNLM</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-white">
                  Bio-Signal &amp; Acoustic Engine
                </h3>
                <p className="text-body text-[#94a3b8] text-[16px]">
                  Specialized signal-processing substrate extracting physiological markers and acoustic features from live sensor and sound feeds.
                </p>
              </div>
            </div>
          </div>

          {/* Layer 2: Vertical Applications */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
              <span className="font-mono text-[14px] text-[#38bdf8] uppercase">
                LAYER 2 // VERTICAL APPLICATIONS &amp; DIAGNOSTICS
              </span>
              <span className="font-mono text-[12px] text-[#94a3b8]">DIRECT CLINICAL SOLUTIONS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">VOXTAR</Badge>
                <h3 className="text-[22px] font-sans font-normal text-white">
                  Voice Diagnostics &amp; Ambient Clerking
                </h3>
                <p className="text-body text-[#94a3b8] text-[15px]">
                  Vocal biomarker analysis processing jitter, shimmer, and pause frequencies for clinical monitoring.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">ONCOLENS</Badge>
                <h3 className="text-[22px] font-sans font-normal text-white">
                  Digital Telepathology Platform
                </h3>
                <p className="text-body text-[#94a3b8] text-[15px]">
                  Remote slide image streaming and collaborative digital tumor boards for pathology teams.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">CERVICALLENS</Badge>
                <h3 className="text-[22px] font-sans font-normal text-white">
                  Point-of-Care Visual Triage
                </h3>
                <p className="text-body text-[#94a3b8] text-[15px]">
                  Edge-based mobile computer vision tool for visual screening and immediate lesion scoring.
                </p>
              </div>
            </div>
          </div>

          {/* Layer 3: Operating Systems */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center justify-between border-b border-[#1e293b] pb-4">
              <span className="font-mono text-[14px] text-[#38bdf8] uppercase">
                LAYER 3 // OPERATING SYSTEMS &amp; PLATFORM INFRASTRUCTURE
              </span>
              <span className="font-mono text-[12px] text-[#94a3b8]">HEADLESS CLINICAL BACKENDS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">HALLEX HEALTH CORE</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-white">
                  Event-Driven EMR Engine
                </h3>
                <p className="text-body text-[#94a3b8] text-[16px]">
                  FHIR-aligned data schemas (Patient, Encounter, ServiceRequest) with strict two-stage state transitions (Drafted by AI &rarr; Signed by Clinician).
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#0f172a]/60 border border-[#1e293b] space-y-4">
                <Badge variant="tag">CLOUDREFERRAL</Badge>
                <h3 className="text-heading-sm font-sans font-normal text-white">
                  Cross-Facility Referral System
                </h3>
                <p className="text-body text-[#94a3b8] text-[16px]">
                  Closed-loop event tracking system monitoring inter-facility patient transfers from referral creation to outcome reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Axioms & IP Strategy Section — Light Canvas Flip (#f7f7f5) */}
      <section id="axioms" className="w-full bg-[var(--color-bone-white)] text-[var(--color-abyssal-ink)] py-28 md:py-40 px-6 md:px-12">
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
        </div>
      </section>

      {/* Footer — Absolute Void ground (#000000) */}
      <Footer brandName="HallelX2 Labs" />
    </div>
  );
}
