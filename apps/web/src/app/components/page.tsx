'use client';

import React, { useState } from 'react';
import {
  HeaderNav,
  HeroHeadline,
  SectionSubHeadline,
  SectionCounter,
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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Switch,
  Checkbox,
  Slider,
  Progress,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Separator,
  Skeleton,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Footer,
} from '@hallelx2/ui';
import { ChevronDown, SlidersHorizontal, Info } from 'lucide-react';

export default function ComponentsShowcasePage() {
  const [switchChecked, setSwitchChecked] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [sliderVal, setSliderVal] = useState([74]);
  const [progressVal, setProgressVal] = useState(82);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] flex flex-col font-sans">
        <HeaderNav />

        {/* Hero Header */}
        <section className="w-full bg-[var(--color-abyssal-ink)] pt-12 pb-16 px-4 md:px-8 border-b border-[var(--color-graphite)]/40">
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <SectionCounter current="UI" total="SYSTEM" />
              <span className="font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.26px] uppercase">
                SHADCN COMPONENT SUITE // HALLELX2
              </span>
            </div>
            <HeroHeadline terminateWithPeriod={false}>
              Design System Component Library
            </HeroHeadline>
            <p className="font-sans text-[20px] text-[var(--color-lichen)] max-w-2xl leading-[1.3]">
              A complete, accessible suite of Shadcn UI primitives styled strictly under the Integrated Biosciences laboratory visual language.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <main className="max-w-[1200px] mx-auto w-full py-16 px-4 md:px-8 space-y-20">
          
          {/* Section 1: Buttons & Badges */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
              <SectionSubHeadline>Buttons &amp; Badges</SectionSubHeadline>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>Primary, ghost, pill, arrow, and danger button states.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="ghost">Outlined Ghost</Button>
                  <Button variant="pill" active={true}>Active Pill</Button>
                  <Button variant="pill">Inactive Pill</Button>
                  <Button variant="arrow" aria-label="Arrow" />
                  <Button variant="danger">Critical Action</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badges &amp; Tags</CardTitle>
                  <CardDescription>Classification markers and status indicators.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 items-center">
                  <Badge variant="tag">PUBLICATIONS</Badge>
                  <Badge variant="tag">TELEMETRY // ACTIVE</Badge>
                  <Badge variant="solid">99.98% METRIC</Badge>
                  <Badge variant="outline">LAB NOTEBOOK</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Section 2: Form Inputs & Controls */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
              <SectionSubHeadline>Inputs &amp; Controls</SectionSubHeadline>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>Hairline-bordered inputs, textareas, and select dropdowns.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="font-mono text-[13px] text-[var(--color-lichen)] uppercase">Sequence Query ID</label>
                    <Input placeholder="e.g. SEQ-90214-LAB" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[13px] text-[var(--color-lichen)] uppercase">Analysis Model</label>
                    <Select defaultValue="model-alpha">
                      <SelectTrigger>
                        <SelectValue placeholder="Select Model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="model-alpha">Model Alpha-1 (Deep Sequence)</SelectItem>
                        <SelectItem value="model-beta">Model Beta-2 (Structure Predictor)</SelectItem>
                        <SelectItem value="model-gamma">Model Gamma-3 (Telemetry Rerank)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[13px] text-[var(--color-lichen)] uppercase">Notebook Excerpt</label>
                    <Textarea placeholder="Enter scientific notes or experiment observations..." />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Toggles, Sliders &amp; Progress</CardTitle>
                  <CardDescription>Bioluminescent Lime interactive indicators.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[13px] text-[var(--color-paper)]">Darkroom Mode</span>
                    <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox id="terms" checked={checkboxChecked} onCheckedChange={(val) => setCheckboxChecked(!!val)} />
                    <label htmlFor="terms" className="font-mono text-[13px] text-[var(--color-lichen)] cursor-pointer">
                      Acknowledge lab measurement telemetry rules
                    </label>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-[13px]">
                      <span className="text-[var(--color-lichen)]">Sampling Density</span>
                      <span className="text-[var(--color-paper)]">{sliderVal[0]}%</span>
                    </div>
                    <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-[13px]">
                      <span className="text-[var(--color-lichen)]">Telemetry Stream Capacity</span>
                      <span className="text-[var(--color-bioluminescent-lime)]">{progressVal}%</span>
                    </div>
                    <Progress value={progressVal} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Section 3: Navigation, Tabs & Menus */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
              <SectionSubHeadline>Navigation, Tabs &amp; Dialogs</SectionSubHeadline>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Tabs &amp; Dropdowns</CardTitle>
                  <CardDescription>Pill-styled tab triggers and context dropdowns.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="telemetry">
                    <TabsList className="w-full justify-start">
                      <TabsTrigger value="telemetry">Telemetry</TabsTrigger>
                      <TabsTrigger value="models">Models</TabsTrigger>
                      <TabsTrigger value="logs">Logs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="telemetry" className="p-4 border border-[var(--color-graphite)] rounded-[12px] bg-[var(--color-abyssal-ink)]/50 font-mono text-[13px]">
                      Active Telemetry Stream: 120,490 events/sec. Zero packet loss.
                    </TabsContent>
                    <TabsContent value="models" className="p-4 border border-[var(--color-graphite)] rounded-[12px] bg-[var(--color-abyssal-ink)]/50 font-mono text-[13px]">
                      Deploying 3 sequence modeling instances in iad1.
                    </TabsContent>
                    <TabsContent value="logs" className="p-4 border border-[var(--color-graphite)] rounded-[12px] bg-[var(--color-abyssal-ink)]/50 font-mono text-[13px]">
                      [INFO] 18:28:40 — Subsystem sync complete.
                    </TabsContent>
                  </Tabs>

                  <div className="flex items-center gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                          Actions <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Laboratory Operations</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Run Sequence Analysis</DropdownMenuItem>
                        <DropdownMenuItem>Export Raw Telemetry</DropdownMenuItem>
                        <DropdownMenuItem>Calibrate Instrumentation</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <SlidersHorizontal className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="space-y-2">
                          <h4 className="font-sans text-subheading text-[16px]">Filter Settings</h4>
                          <p className="font-mono text-[12px] text-[var(--color-lichen)]">Configure darkroom instrument filters.</p>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4 text-[var(--color-bioluminescent-lime)]" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Instrumentation Status: Normal</TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modals &amp; Skeleton States</CardTitle>
                  <CardDescription>Dialog overlays and microscopy loading skeletons.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="primary">Open Experiment Modal</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Calibrate Subsystem</DialogTitle>
                        <DialogDescription>
                          Initiating darkroom calibration routine for sequence pipeline #09.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4 font-mono text-[13px]">
                        <div className="p-3 border border-[var(--color-graphite)] rounded-[8px] bg-[var(--color-abyssal-ink)]">
                          Target Frequency: 440 THz (Bioluminescent Signal)
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="primary">Confirm Calibration</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-[12px] text-[var(--color-lichen)] uppercase">Loading Skeleton State</span>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[60%]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Section 4: Scientific Data Table & Accordion */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
              <SectionSubHeadline>Instrumentation Data &amp; Accordion</SectionSubHeadline>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Telemetry Data Table</CardTitle>
                <CardDescription>Scientific laboratory dataset output.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sample ID</TableHead>
                      <TableHead>Target Gene / Marker</TableHead>
                      <TableHead>Sequence Quality</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">SMP-8819-C</TableCell>
                      <TableCell>POL-1442 (Subtype C)</TableCell>
                      <TableCell className="font-mono text-[var(--color-bioluminescent-lime)]">Q42 High</TableCell>
                      <TableCell><Badge variant="solid">Verified</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">SMP-8820-A</TableCell>
                      <TableCell>ENV-3011 (Glycoprotein)</TableCell>
                      <TableCell className="font-mono text-[var(--color-bioluminescent-lime)]">Q38 Normal</TableCell>
                      <TableCell><Badge variant="solid">Verified</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">SMP-8821-F</TableCell>
                      <TableCell>GAG-0912 (Capsid Cluster)</TableCell>
                      <TableCell className="font-mono text-[var(--color-lichen)]">Q32 Processing</TableCell>
                      <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Architecture Specifications</CardTitle>
                <CardDescription>Frequently asked questions &amp; platform specs.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What defines the hallelx2 laboratory visual system?</AccordionTrigger>
                    <AccordionContent>
                      The system operates in a darkroom-laboratory visual language: near-black canvas (#222f30) with cool green undertones, single-weight Aspekta typography, hairline borders, and a rationed bioluminescent lime (#cef79e) signal accent.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How does the monorepo manage component sharing?</AccordionTrigger>
                    <AccordionContent>
                      All components are exported from the shared @hallelx2/ui package and consumed seamlessly across all web applications in the monorepo with 100% token consistency.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  );
}
