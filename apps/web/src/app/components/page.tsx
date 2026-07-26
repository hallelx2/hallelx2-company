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
  PublicationTag,
  NewsArticleCard,
  HairlineDivider,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Textarea,
  Switch,
  Checkbox,
  Slider,
  Progress,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Footer,
} from '@hallelx2/ui';

export default function ComponentsShowcasePage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] flex flex-col font-sans">
        {/* Navigation */}
        <HeaderNav
          navItems={[
            { label: 'Platform', href: '/' },
            { label: 'Shadcn Suite', href: '/components', active: true },
          ]}
        />

        {/* Hero Section */}
        <section className="w-full py-16 px-6 md:px-10 border-b border-[var(--color-graphite)]">
          <div className="max-w-[1200px] mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <SectionCounter current={1} total={1} />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] uppercase">
                SHADCN COMPONENT SUITE
              </span>
            </div>
            <HeroHeadline>
              Design System Component Library
            </HeroHeadline>
            <p className="font-sans text-[20px] text-[var(--color-lichen)] max-w-2xl leading-[1.3]">
              Radix-powered Shadcn primitives styled strictly with Integrated Biosciences design tokens.
            </p>
          </div>
        </section>

        {/* Component Showcase Sections */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 space-y-24 w-full">
          {/* Buttons Showcase */}
          <section className="space-y-6">
            <h2 className="text-heading-sm text-[var(--color-paper)] font-sans">Buttons &amp; Triggers</h2>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)]">
              <Button variant="primary">Primary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="pill">Active Pill Nav</Button>
              <Button variant="danger">Danger Action</Button>
              <ArrowCTAButton ariaLabel="CTA Arrow" />
            </div>
          </section>

          {/* Cards & Badges */}
          <section className="space-y-6">
            <h2 className="text-heading-sm text-[var(--color-paper)] font-sans">Cards &amp; Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="tag">TELEMETRY</Badge>
                    <span className="font-mono text-[13px] text-[var(--color-graphite)]">01 / 02</span>
                  </div>
                  <CardTitle>Biological Compute Engine</CardTitle>
                  <CardDescription>
                    Structure-preserving document and sequence retrieval substrate.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-[var(--color-graphite)]">
                    Low-latency inference operating at scale. Zero elevation flat card surface with hairline borders.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="font-mono text-[13px] text-[var(--color-graphite)]">ACTIVE</span>
                  <ArrowCTAButton ariaLabel="Open card" />
                </CardFooter>
              </Card>

              <Card className="bg-[var(--color-tissue)] border-[var(--color-lichen)]">
                <CardHeader>
                  <Badge variant="outline">WARM CARD</Badge>
                  <CardTitle>Secondary Surface</CardTitle>
                  <CardDescription>
                    Warm tissue surface (#e7e8e1) used to differentiate secondary content blocks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-[var(--color-graphite)]">
                    Maintains flat elevation discipline across light and dark surface transitions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Inputs & Controls */}
          <section className="space-y-6">
            <h2 className="text-heading-sm text-[var(--color-paper)] font-sans">Form Inputs &amp; Controls</h2>
            <div className="p-8 rounded-[20px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] space-y-6 max-w-xl">
              <div className="space-y-2">
                <label className="font-mono text-[13px] text-[var(--color-lichen)]">LAB TELEMETRY QUERY</label>
                <Input placeholder="Enter query parameters..." />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[13px] text-[var(--color-lichen)]">NOTES / OBSERVATIONS</label>
                <Textarea placeholder="Type observation logs..." />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[13px] text-[var(--color-paper)]">ENABLE REALTIME LOGGING</span>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <Checkbox id="terms" defaultChecked />
                <label htmlFor="terms" className="font-mono text-[13px] text-[var(--color-lichen)] cursor-pointer">
                  Acknowledge FHIR compliance standards
                </label>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between font-mono text-[13px] text-[var(--color-lichen)]">
                  <span>TELEMETRY GAIN</span>
                  <span>75%</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={1} />
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between font-mono text-[13px] text-[var(--color-lichen)]">
                  <span>BUFFER ALLOCATION</span>
                  <span>90%</span>
                </div>
                <Progress value={90} />
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </TooltipProvider>
  );
}
