'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Home,
  MapPinned,
  Ruler,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { MockMap } from './MockMap';
import { displayHomesData, houseDesignsData, propertiesData } from '../data/properties';
import { guideCards } from '../data/siteContent';
import { ScrollAnimate, StaggerContainer, StaggerItem, Magnetic } from './ScrollReveal';
import { motion, useInView } from 'framer-motion';

function FloatingHighlightCard({
  isInView,
  title,
  desc,
  metric,
  metricLabel,
  icon: Icon
}: {
  isInView: boolean;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  if (!isOpen) return null;

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9, pointerEvents: 'none' as const },
        visible: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto' as const }
      }}
      transition={{ type: 'spring', damping: 22, stiffness: 100, delay: 0.35 }}
      className="fixed bottom-6 right-6 z-[100] hidden md:flex flex-col gap-3 bg-[#0B2341]/95 backdrop-blur-md border border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] w-[300px] text-left text-white select-none rounded-none"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[#1C4D8C]/50 flex items-center justify-center text-brand-yellow shrink-0">
            <Icon size={12} />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">
            {title}
          </span>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          className="text-white/40 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <p className="text-[10px] leading-relaxed text-white/70">
        {desc}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-1">
        <div className="flex flex-col text-left">
          <span className="text-[14px] font-serif font-bold text-brand-yellow">
            {metric}
          </span>
          <span className="text-[7.5px] uppercase font-bold text-white/50 tracking-wider">
            {metricLabel}
          </span>
        </div>
        <span className="text-[7px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 uppercase tracking-widest">
          LIVE AUDIT
        </span>
      </div>
    </motion.div>
  );
}


const houseLandPackages = propertiesData.filter((property) => property.type === 'house-land').slice(0, 3);
const landLots = propertiesData.filter((property) => property.type === 'land-only').slice(0, 3);
const featuredPackage = houseLandPackages[0];
const featuredDisplay = displayHomesData[0];
const featuredDesign = houseDesignsData[0];

const wantToItems = [
  {
    title: 'Build my first home',
    href: '/first-home-buyers',
    icon: Home,
  },
  {
    title: 'Upgrade to a larger home',
    href: '/house-designs',
    icon: Building2,
  },
  {
    title: 'Find an investment property',
    href: '/investment-properties',
    icon: ShieldCheck,
  },
  {
    title: 'Renovate or develop a site',
    href: '/knockdown-rebuild',
    icon: Ruler,
  },
];

const buildTypeCards = [
  {
    title: '1. Property Purchase',
    href: '/development-sites',
    image: '/img/home5.jpg',
    description: 'We strategically acquire high-potential land blocks, estates, and properties in premium growth corridors using advanced feasibility metrics.',
  },
  {
    title: '2. Construction',
    href: '/construction-services',
    image: '/img/construction.jpg',
    description: 'Licensed building crews execute premium structural works, subdivisions, and luxury dual-occupancy developments with 6-stage quality checks.',
  },
  {
    title: '3. Shell Completion',
    href: '/new-builds',
    image: '/img/shell.jpg',
    description: 'We complete structural lock-up shell stages, framing, and roofing, preparing the asset for premium interior fit-out and modern finishes.',
  },
  {
    title: '4. Construction Video Showcase',
    href: '/development-projects',
    video: '/img/video.mp4',
    description: 'Watch a cinematic walkthrough of our active structural sites, displaying engineering execution and premium building techniques.',
  },
  {
    title: '5. Completed Turnkey Home',
    href: '/renovated-homes',
    image: '/img/modern2.jpeg',
    description: 'Explore fully completed, structurally warranted, and professionally landscaped luxury residences ready for direct developer-to-buyer sales.',
  },
];

const trustPoints = [
  {
    title: 'Master of design',
    description: 'Designs are matched to frontage, lifestyle, orientation, and budget before the build contract is finalised.',
    icon: Award,
  },
  {
    title: 'Lifetime structural confidence',
    description: 'Licensed construction teams coordinate engineering, supervision, quality checks, and handover documents.',
    icon: ShieldCheck,
  },
  {
    title: '6 stage quality assurance',
    description: 'Modern-property tracks slab, frame, lock-up, fixing, fit-off, and handover so every stage has a clear checkpoint.',
    icon: ClipboardCheck,
  },
  {
    title: 'A local home builder',
    description: 'Property, design, and construction advice stays grounded in Australian suburbs, land releases, and estate rules.',
    icon: MapPinned,
  },
];

const faqs = [
  {
    question: 'How does Modern-property identify high-potential property acquisitions?',
    answer:
      'Modern-property uses a data-driven feasibility matrix to evaluate soil quality, slope, utility connections, zoning overlays, and regional growth metrics before property acquisition.',
  },
  {
    question: 'What is Modern-property\'s project execution and construction framework?',
    answer:
      'We manage the entire pipeline from zoning approvals and civil engineering to lock-up and fit-off stages, ensuring that every asset meets premium build and quality guidelines.',
  },
  {
    question: 'Does Modern-property sell completed properties direct to buyers?',
    answer:
      'Yes. Modern-property develops residential townhouses, co-living units, and commercial assets, selling fully completed, turnkey holdings directly to investors and homebuyers.',
  },
  {
    question: 'Where are Modern-property showcase developments located?',
    answer:
      'Modern-property developments are located in premium growth corridors across major Australian states. Prospective buyers can book showcase inspections and view investor folders online.',
  },
];

function TextButton({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold transition-all duration-300 ${
        dark
          ? 'border-white text-white hover:bg-white hover:text-[#0B2341]'
          : 'border-[#0B2341] text-[#0B2341] hover:bg-[#0B2341] hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({
  title,
  actionHref,
  actionLabel,
}: {
  title: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="mb-7 flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
      <h2 className="font-serif text-[1.55rem] font-bold leading-tight text-[#071d38] md:text-[1.9rem]">{title}</h2>
      {actionHref && actionLabel ? (
        <Magnetic>
          <TextButton href={actionHref}>{actionLabel}</TextButton>
        </Magnetic>
      ) : null}
    </div>
  );
}

function HeroVideo() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0B2341]">
      <div className="relative w-full aspect-[16/9] min-h-[480px] sm:min-h-[600px] md:min-h-[720px] lg:min-h-[800px] xl:min-h-[850px] overflow-hidden">
        {/* Background Video */}
        <motion.video
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          src="/img/build5.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Modern-property property development hero video"
        />
        {/* Dark overlay backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute inset-0 bg-black/35 pointer-events-none" 
        />

        {/* Centered Glassdoor Content Box */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 backdrop-blur-md p-8 sm:p-12 md:p-16 max-w-3xl text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] flex flex-col items-center select-none"
          >
            <StaggerContainer delayChildren={0.2} staggerChildren={0.12}>
              <StaggerItem variant="fadeUp">
                <span 
                  className="text-[36px] md:text-[44px] text-brand-yellow mb-2 block font-normal leading-none" 
                  style={{ 
                    fontFamily: "'Monsieur La Doulaise', 'Pinyon Script', cursive", 
                    textTransform: 'none', 
                    letterSpacing: 'normal' 
                  }}
                >
                  Modern Property
                </span>
              </StaggerItem>
              <StaggerItem variant="fadeUp">
                <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Acquire. Develop. Execute. Sell.
                </h1>
              </StaggerItem>
              <StaggerItem variant="fadeUp">
                <p className="mt-5 max-w-xl text-xs font-semibold leading-relaxed text-white/90 sm:text-sm">
                  Modern-property acquires high-potential properties, develops them through quality construction and planning, and executes sales of premium holdings.
                </p>
              </StaggerItem>
              <StaggerItem variant="fadeUp">
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Magnetic>
                    <TextButton href="/house-and-land" dark>
                      Explore house and land
                    </TextButton>
                  </Magnetic>
                  <Magnetic>
                    <TextButton href="/contact?interest=Consultation" dark>
                      Book consultation
                    </TextButton>
                  </Magnetic>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PromoCards() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-180px" });

  return (
    <div ref={ref} className="relative">
      <StaggerContainer className="mx-auto max-w-[1512px] bg-[#F4F8FB] px-4 pt-16 pb-12 sm:px-6">
        {/* Sleek Strategic Pathways Header */}
        <StaggerItem variant="fadeUp" className="mb-10 flex flex-col justify-between border-b border-brand-border pb-6 md:flex-row md:items-end w-full">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-secondary">/AURA CAPABILITIES</span>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#071d38]">Strategic Property Lifecycle</h2>
          </div>
          <p className="mt-3 text-xs font-semibold text-brand-navy/60 md:mt-0 md:max-w-xs md:text-right">
            Developer-direct capabilities driving consistent returns through site sourcing, construction, and lock-up execution.
          </p>
        </StaggerItem>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <StaggerItem variant="fadeUp" className="md:col-span-6">
            <Link href="/development-sites" className="group block bg-white h-full shadow-xs">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src="/img/modern1.jpeg" 
                  alt="Property Purchase" 
                  className="h-full w-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#071d38]/70 via-[#071d38]/15 to-transparent" />
                <div className="absolute right-5 top-6 max-w-[200px] text-right text-white">
                  <div className="font-serif text-3xl font-bold leading-none">Property Purchase</div>
                  <div className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.2em]">Acquisition & Sourcing</div>
                </div>
              </div>
              <div className="p-4 text-xs font-bold text-[#071d38] group-hover:text-[#1C4D8C] transition-colors">Modern-Property strategic land and site acquisitions</div>
            </Link>
          </StaggerItem>

          <StaggerItem variant="fadeUp" className="md:col-span-3">
            <Link href="/construction-services" className="group relative block min-h-[260px] h-full overflow-hidden bg-white shadow-xs">
              <img 
                src="/img/construction2.jpg" 
                alt="Construction Stage" 
                className="h-full min-h-[260px] w-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent" />
              <div className="absolute bottom-5 left-5 max-w-[170px]">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1C4D8C]">In Progress</div>
                <h3 className="mt-2 font-serif text-lg font-bold leading-tight text-[#071d38] group-hover:text-[#1C4D8C] transition-colors">Premium Civil Construction</h3>
              </div>
            </Link>
          </StaggerItem>

          <StaggerItem variant="fadeUp" className="md:col-span-3">
            <Link href="/new-builds" className="group relative block min-h-[260px] h-full overflow-hidden bg-white shadow-xs">
              <img 
                src="/img/shell2.jpg" 
                alt="Shell Completion" 
                className="h-full min-h-[260px] w-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent" />
              <div className="absolute bottom-5 left-5 max-w-[170px]">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1C4D8C]">Lock-up stage</div>
                <h3 className="mt-2 font-serif text-lg font-bold leading-tight text-[#071d38] group-hover:text-[#1C4D8C] transition-colors">Completed Structural Shells</h3>
              </div>
            </Link>
          </StaggerItem>
        </div>
        <div className="mt-7 flex items-center justify-center gap-2 text-[#0B2341]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0B2341]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#9EB8CF]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#9EB8CF]" />
        </div>
      </StaggerContainer>

      <FloatingHighlightCard 
        isInView={isInView}
        title="Site Sourcing Engine"
        desc="Our acquisition pipeline screens 350+ regional Victorian allotments weekly to secure only the top 3% yield opportunities."
        metric="Top 3%"
        metricLabel="Site Selectivity"
        icon={MapPinned}
      />
    </div>
  );
}

function WantToTiles() {
  return (
    <section className="mx-auto max-w-[1152px] px-4 py-12 sm:px-6">
      <ScrollAnimate variant="fadeUp">
        <h2 className="mb-6 text-center font-serif text-xl font-bold text-[#071d38]">I want to...</h2>
      </ScrollAnimate>
      <StaggerContainer className="grid grid-cols-2 border border-[#DADDE2] md:grid-cols-4">
        {wantToItems.map((item) => {
          const Icon = item.icon;
          return (
            <StaggerItem key={item.title} variant="fadeUp" className="h-full animate-stagger-item">
              <Link
                href={item.href}
                className="group flex min-h-[112px] h-full flex-col items-center justify-center gap-3 border-b border-r border-[#DADDE2] bg-white p-4 text-center last:border-r-0 hover:bg-[#F4F8FB] md:border-b-0 transition-colors duration-300"
              >
                <Icon size={22} className="text-[#0B2341] group-hover:scale-110 transition-transform duration-300" />
                <span className="max-w-[9rem] text-[11px] font-extrabold leading-4 text-[#071d38] underline-offset-4 group-hover:underline">
                  {item.title}
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}

function BuildTypeCards() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-180px" });

  return (
    <div ref={ref} className="relative">
      <section className="bg-[#DDEAF3] py-12">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <SectionTitle title="Our Development Lifecycle: Sourcing to Completed Homes" />
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" viewportMargin="0px">
            {buildTypeCards.map((card) => (
              <StaggerItem key={card.title} variant="fadeUp">
                <Link href={card.href} className="group block bg-white h-full shadow-xs">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    {card.video ? (
                      <video
                        src={card.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="h-full w-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out" 
                      />
                    )}
                  </div>
                  <div className="p-5 flex flex-col justify-between min-h-[180px]">
                    <div>
                      <h3 className="font-serif text-lg font-bold leading-tight text-[#071d38] group-hover:text-[#1C4D8C] transition-colors">{card.title}</h3>
                      <p className="mt-3 text-xs font-medium leading-6 text-[#41556B]">{card.description}</p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0B2341] px-3 py-1.5 text-[10px] font-extrabold text-[#0B2341] group-hover:bg-[#0B2341] group-hover:text-white transition-all duration-300 w-fit">
                      Learn more
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-7 flex justify-center gap-2 text-[#0B2341]">
            <ChevronRight size={16} className="rotate-180 opacity-55" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B2341]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#9EB8CF]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#9EB8CF]" />
            <ChevronRight size={16} className="opacity-55" />
          </div>
        </div>
      </section>

      <FloatingHighlightCard 
        isInView={isInView}
        title="Yield Optimization Engine"
        desc="Architectural footprints are engineered to maximize exit valuation, with dual-occupancy and co-living configurations yielding up to 8.2% gross returns."
        metric="8.2%"
        metricLabel="Target Yield"
        icon={Award}
      />
    </div>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="mx-auto max-w-[1512px] px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Overlapping Collage Collage Layout */}
        <ScrollAnimate variant="fadeRight" className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full aspect-[4/5] max-w-[450px] sm:max-w-[480px]">
            {/* Background Outline Frame */}
            <div className="absolute top-[6%] left-0 w-[78%] h-[80%] border-2 border-[#0B2341]/35 pointer-events-none" />
            
            {/* Background Image (Tall vertical alignment) */}
            <div className="absolute top-0 left-[6%] w-[78%] h-[80%] overflow-hidden bg-slate-100 shadow-lg">
              <img src="/img/home6.jpg" alt="Modern-Property premium development exterior" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
            </div>

            {/* Foreground Image (Tall vertical alignment with border) */}
            <div className="absolute bottom-0 right-[6%] w-[70%] h-[75%] overflow-hidden bg-slate-100 shadow-2xl">
              <img src="/img/home7.jpg" alt="Modern-Property luxury interior design showcase" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
            </div>
          </div>
        </ScrollAnimate>

        {/* Right Column: Features and Text content */}
        <ScrollAnimate variant="fadeLeft" className="lg:col-span-6 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="border border-[#1C4D8C]/40 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#1C4D8C] w-fit mb-4">
            Why Choose Us
          </div>
          
          {/* Main title */}
          <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#071d38] uppercase tracking-tight">
            Why Homeowners Trust Us - And Recommend Us
          </h2>

          {/* Subheading / Description */}
          <p className="mt-4 text-xs font-semibold leading-relaxed text-[#41556B]">
            Building is a big decision. Our focus is simple: clear pricing, strong communication, and a proven process that keeps your project moving smoothly - from first consult to handover.
          </p>

          {/* Features list with boxed icons */}
          <div className="mt-8 space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 border border-[#1C4D8C]/30 flex items-center justify-center text-[#1C4D8C] shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-serif text-sm font-bold text-[#071d38] tracking-tight">
                  Transparent pricing & inclusions
                </h3>
                <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#41556B]">
                  We detail what is included, what is optional and where costs may vary - so you can budget confidently and avoid surprises.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 border border-[#1C4D8C]/30 flex items-center justify-center text-[#1C4D8C] shrink-0">
                <Ruler size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-serif text-sm font-bold text-[#071d38] tracking-tight">
                  Guided decisions, less stress
                </h3>
                <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#41556B]">
                  From plans to finishes, we simplify choices and recommend upgrades that improve liveability and long-term value.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 border border-[#1C4D8C]/30 flex items-center justify-center text-[#1C4D8C] shrink-0">
                <Building2 size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-serif text-sm font-bold text-[#071d38] tracking-tight">
                  Reliable delivery & site management
                </h3>
                <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#41556B]">
                  Structured timelines, quality checkpoints and regular updates - so you always know what is happening and what is next.
                </p>
              </div>
            </div>
          </div>

          {/* Magnetic CTA button */}
          <div className="mt-8">
            <Magnetic>
              <TextButton href="/about">
                Learn more
              </TextButton>
            </Magnetic>
          </div>

          {/* Footer features summary */}
          <div className="mt-6 border-t border-gray-100 pt-5 text-[9px] font-extrabold text-[#41556B]/75 uppercase tracking-wider flex flex-wrap gap-x-4 gap-y-1">
            <span>Trusted Communication</span>
            <span className="text-[#1C4D8C]">•</span>
            <span>Quality Workmanship</span>
            <span className="text-[#1C4D8C]">•</span>
            <span>End-to-End Support</span>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

function QualitySection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-180px" });

  return (
    <div ref={ref} className="relative">
      <section className="mx-auto max-w-[1512px] px-4 pb-16 sm:px-6 overflow-hidden">
        <ScrollAnimate variant="fadeUp">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-[#071d38]">Developing quality real estate with clear steps</h2>
        </ScrollAnimate>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <StaggerItem key={point.title} variant="fadeUp">
                  <div className="flex gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#EAF3FC] flex items-center justify-center text-[#1C8BA8] shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#071d38]">{point.title}</h3>
                      <p className="mt-2 text-[11px] font-medium leading-5 text-[#41556B]">{point.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <ScrollAnimate variant="fadeLeft" className="lg:col-span-5 lg:col-start-8">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 shadow-md">
              <img src="/img/home3.jpg" alt="Modern-property premium development interior" className="h-full w-full object-cover" />
            </div>
          </ScrollAnimate>
        </div>
        <ScrollAnimate variant="fadeUp" delay={0.2} className="mt-8 text-center">
          <TextButton href="/about">Learn more about developing with Modern-Property</TextButton>
        </ScrollAnimate>
      </section>

      <FloatingHighlightCard 
        isInView={isInView}
        title="Quality Guarantee Audit"
        desc="Every Aura project undergoes a strict 120-point independent quality verification audit prior to construction sign-off."
        metric="120-Point"
        metricLabel="Audit Checklist"
        icon={ClipboardCheck}
      />
    </div>
  );
}

function ServiceAreaMap() {
  return (
    <ScrollAnimate variant="fadeUp" className="mx-auto max-w-[1512px] px-4 pb-14 text-center sm:px-6">
      <h2 className="font-serif text-2xl font-bold text-[#071d38]">Find out if we develop in your area.</h2>
      <p className="mx-auto mt-3 max-w-2xl text-xs font-medium leading-6 text-[#41556B]">
        Modern-property coordinates development projects across Victoria&apos;s premium growth corridors with acquisitions, planning, and construction pathways.
      </p>
      <div className="mt-7 shadow-md overflow-hidden">
        <MockMap variant="light" />
      </div>
      <div className="mt-5">
        <Magnetic>
          <TextButton href="/contact?interest=Region">Find out eligibility</TextButton>
        </Magnetic>
      </div>
    </ScrollAnimate>
  );
}

function DarkJourneyCta() {
  return (
    <ScrollAnimate variant="scrollReveal" className="mx-auto max-w-[1512px] px-4 pb-12 sm:px-6 2xl:px-0">
      <div className="relative overflow-hidden bg-[#EAF3FC] px-5 py-16 text-center text-[#0B2341] shadow-xl border border-white/20">
        <img 
          src="/img/home.jpg" 
          alt="" 
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none" 
          style={{ opacity: 0.04 }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl font-bold leading-tight md:text-3xl text-[#0B2341]">
            Secure your next premium real estate asset with Modern-Property today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs font-semibold leading-6 text-[#1C4D8C]/90">
            From strategic site acquisition to premium civil execution, Modern-property delivers developer-direct investment value.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <TextButton href="/house-and-land">
                Explore house and land
              </TextButton>
            </Magnetic>
            <Magnetic>
              <TextButton href="/house-designs">
                Explore home designs
              </TextButton>
            </Magnetic>
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
}

function BlogSection() {
  const feature = guideCards[0];
  const sideCards = guideCards.slice(1, 3);

  return (
    <section className="bg-[#F4F8FB] py-12">
      <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
        <SectionTitle title="Design and building tips from our blog" actionHref="/blog" actionLabel="View all guides" />
        <StaggerContainer className="grid grid-cols-1 gap-7 lg:grid-cols-12">
          <StaggerItem variant="fadeUp" className="lg:col-span-7">
            <Link href={feature.href} className="group block h-full">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" 
                  alt={feature.title} 
                  className="h-full w-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out" 
                />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold leading-tight text-[#071d38] group-hover:text-[#1C4D8C] transition-colors">{feature.title}</h3>
              <p className="mt-3 text-xs font-medium leading-6 text-[#41556B]">{feature.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-[#1C4D8C] group-hover:text-[#0B2341] transition-colors">
                Read guide
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </StaggerItem>
          <div className="space-y-7 lg:col-span-4 lg:col-start-9">
            {sideCards.map((card, index) => (
              <StaggerItem key={card.title} variant="fadeUp">
                <Link href={card.href} className="group block">
                  <div className="w-full overflow-hidden bg-slate-100">
                    <img
                      src={index === 0 ? "/img/villa1.jpg" : "/img/villa2.jpg"}
                      alt={card.title}
                      className="w-full h-auto block scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold leading-tight text-[#071d38] group-hover:text-[#1C4D8C] transition-colors">{card.title}</h3>
                  <p className="mt-2 text-[11px] font-medium leading-5 text-[#41556B]">{card.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <ScrollAnimate variant="fadeRight" className="md:col-span-3">
          <h2 className="font-serif text-2xl font-bold text-[#071d38]">FAQs:</h2>
        </ScrollAnimate>
        <StaggerContainer className="space-y-7 md:col-span-8">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question} variant="fadeUp">
              <h3 className="font-serif text-lg font-bold text-[#071d38]">{faq.question}</h3>
              <p className="mt-2 text-xs font-medium leading-6 text-[#41556B]">{faq.answer}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FooterPrompt() {
  return (
    <ScrollAnimate variant="fadeIn" className="border-y border-[#DADDE2] bg-white px-4 py-5 text-center">
      <div className="mx-auto flex max-w-[1512px] flex-col items-center justify-center gap-3 sm:flex-row">
        <span className="font-serif text-base font-bold text-[#071d38]">Secure your next premium real estate asset with Modern-Property today</span>
        <Magnetic>
          <TextButton href="/contact?interest=Enquiry">Enquire</TextButton>
        </Magnetic>
      </div>
    </ScrollAnimate>
  );
}

function OurServicesSection() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(0);

  const showcaseItems = [
    {
      num: '/01',
      titlePart1: 'PA9',
      titlePart2: 'Apartment',
      image: '/img/home.jpg',
      sub: 'Liberty Hill LN, Independence Village, VA | 4 beds | 4 ba | 2,657 sqft | House for sale',
      link: '/properties/the-grandview-package-box-hill',
    },
    {
      num: '/02',
      titlePart1: 'K',
      titlePart2: 'Residence',
      image: '/img/home2.jpg',
      sub: 'Mulgrave, VIC | 5 beds | 4 baths | 3 cars | 580 sqm | Premium showcase display home featuring structural guarantees.',
      link: '/properties/the-emperor-display-mulgrave',
    },
    {
      num: '/03',
      titlePart1: '512',
      titlePart2: 'Residential',
      image: '/img/home3.jpg',
      sub: 'Sydney, NSW | 4 beds | 3 baths | 2 cars | 190 sqm | Historic terrace house converted into modern luxury co-living layout.',
      link: '/properties/paddington-terrace-revival-sydney',
    },
    {
      num: '/04',
      titlePart1: 'Vivo',
      titlePart2: 'Apartment',
      image: '/img/home4.jpg',
      sub: 'Oran Park, NSW | 4 beds | 3 baths | 2 cars | 260 sqm | Spacious double-storey family estate package with custom finishes.',
      link: '/properties/the-clarendon-oran-park',
    },
  ];

  const hotspotCards = [
    {
      id: 1,
      title: 'Property Purchase',
      image: '/img/property-purchase.jpg',
      footerLeft: 'Trustee / Pure Mist',
      footerRight: '240',
      positionClasses: 'top-[8%] left-[6%] lg:top-[12%] lg:left-[8%]',
      floatOffset: 8,
      floatDelay: 0,
    },
    {
      id: 2,
      title: 'Construction',
      image: '/img/construction.jpg',
      footerLeft: 'Trustee / Pure Mist',
      footerRight: '340',
      positionClasses: 'top-[15%] right-[6%] lg:top-[18%] lg:right-[8%]',
      floatOffset: 6,
      floatDelay: 1.5,
    },
    {
      id: 3,
      title: 'Shell Completion',
      image: '/img/shell.jpg',
      footerLeft: 'Trustee / Pure Mist',
      footerRight: '245',
      positionClasses: 'bottom-[8%] right-[10%] lg:bottom-[10%] lg:right-[15%]',
      floatOffset: 10,
      floatDelay: 0.8,
    }
  ];

  return (
    <section className="bg-black border-y border-white/10 py-12 md:py-16 text-white overflow-hidden">
      <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
        {/* Accordion Section Header */}
        <div className="mb-10 flex flex-col justify-between border-b border-white/10 pb-5 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-yellow">/Our Services</span>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight md:text-4xl">What we do (and do really well)</h2>
          </div>
          <p className="mt-4 text-xs font-semibold text-white/50 md:mt-0 md:max-w-xs md:text-right">
            Acquire, design, and execute. Click or hover on a collection item to explore structural details.
          </p>
        </div>

        {/* Sunset Hotspots Zoom Out Reveal */}
        <div className="mb-12 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.15, clipPath: 'inset(10% 10% 10% 10% round 16px)' }}
            whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 0px)' }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-none overflow-hidden aspect-[16/7] min-h-[240px] sm:min-h-[350px] lg:min-h-[420px] w-full bg-black border border-white/5 group"
          >
            {/* Background Video */}
            <motion.video 
              src="/img/buttom-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover select-none transition-transform duration-[2.5s] ease-out group-hover:scale-[1.03]"
            />
            {/* Warm overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Desktop Widget Hotspots */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {hotspotCards.map((card) => (
                <motion.div
                  key={card.id}
                  className={`absolute w-[230px] pointer-events-auto ${card.positionClasses}`}
                  initial={{ opacity: 0, scale: 1.25, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: card.floatDelay + 0.4
                  }}
                >
                  <motion.div 
                    animate={{
                      y: [0, -card.floatOffset, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.floatDelay
                    }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.03, y: -4, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)' }}
                      className="bg-white text-[#222222] border border-white/10 p-2.5 flex flex-col shadow-lg select-none"
                    >
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-gray-100 pb-1.5 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400 block" />
                          <span className="w-2 h-2 rounded-full bg-amber-400 block" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400 block" />
                        </div>
                        <span className="text-[7.5px] uppercase tracking-wider font-extrabold text-gray-400">Aura</span>
                      </div>

                      {/* Card Title */}
                      <span className="text-[9.5px] font-extrabold text-[#0B2341] tracking-tight mb-2 truncate">
                        {card.title}
                      </span>

                      {/* Inner Image */}
                      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-50 mb-2">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                      </div>

                      {/* Window Footer */}
                      <div className="flex items-center justify-between text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                        <span>{card.footerLeft}</span>
                        <span className="text-gray-400">{card.footerRight}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile/Tablet Widget Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 lg:hidden">
            {hotspotCards.map((card) => (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, scale: 1.15, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: card.floatDelay * 0.2 }}
                className="bg-white text-[#222222] p-3 flex flex-col shadow-md"
              >
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400 block" />
                    <span className="w-2 h-2 rounded-full bg-amber-400 block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400 block" />
                  </div>
                  <span className="text-[8px] uppercase tracking-wider font-extrabold text-gray-400">Aura</span>
                </div>

                <span className="text-xs font-extrabold text-[#0B2341] mb-2 truncate">
                  {card.title}
                </span>

                <div className="aspect-[16/9] w-full overflow-hidden bg-gray-50 mb-2.5">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex items-center justify-between text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                  <span>{card.footerLeft}</span>
                  <span className="text-gray-400">{card.footerRight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expandable Accordion List */}
        <div className="border-t border-white/10">
          {showcaseItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIndex(index)}
                className="border-b border-white/10 py-4 md:py-5"
              >
                {/* Accordion Row Header */}
                <div 
                  onClick={() => setHoveredIndex(isHovered ? null : index)}
                  className="flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white/90 group-hover:text-white flex items-center flex-wrap select-none gap-3 md:gap-5">
                    <span>{item.num}</span>
                    <span className="font-serif italic font-normal tracking-wide lowercase">{item.titlePart1}</span>
                    <motion.div 
                      initial={{ width: 0, scale: 0.8, opacity: 0 }} 
                      animate={{ 
                        width: isHovered ? 90 : 0, 
                        scale: isHovered ? 1 : 0.8, 
                        opacity: isHovered ? 1 : 0,
                        marginRight: isHovered ? 10 : 0,
                        marginLeft: isHovered ? 10 : 0
                      }} 
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="aspect-[16/10] overflow-hidden bg-slate-800 shrink-0 hidden sm:block"
                    >
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                    <span>{item.titlePart2}</span>
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/50 group-hover:text-brand-yellow transition-colors shrink-0">
                    /See more
                  </div>
                </div>

                {/* Accordion Expanded Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isHovered ? 'auto' : 0, 
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? 20 : 0,
                    marginBottom: isHovered ? 4 : 0
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden px-1"
                >
                  <div className="max-w-2xl py-2">
                    <p className="text-xs font-semibold leading-relaxed text-white/70">
                      {item.sub}
                    </p>
                    <div className="mt-5">
                      <Magnetic>
                        <Link
                          href={item.link}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C4D8C] hover:bg-[#153B6C] px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white transition-all duration-300"
                        >
                          Check the property
                          <ArrowRight size={13} />
                        </Link>
                      </Magnetic>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FamilyBuiltSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsData = [
    {
      num: '01.',
      tabTitle: 'Modern Family Residence',
      image: '/img/home8.jpg',
      heading: 'Built for families who want premium, not complicated',
      description: 'Light-filled living, thoughtful storage and quality inclusions delivered with clear milestones and proactive updates from day one.',
      bullets: [
        'Fixed-scope inclusions with clear upgrade options',
        '120-point quality checkpoints at every key stage',
        'On-time delivery focus with regular progress updates',
        'Transparent fixed-price construction contracts',
        'Bespoke designer kitchens with premium stone benchtops'
      ],
      link: '/house-designs',
    },
    {
      num: '02.',
      tabTitle: 'Luxury Double-Storey',
      image: '/img/home9.jpg',
      heading: 'Elevated living with grand scale and presence',
      description: 'Double-storey masterplans designed for maximum space efficiency, high ceilings, seamless indoor-outdoor transition and multi-generational flexibility.',
      bullets: [
        'Double-height entry voids & premium architectural facades',
        'Custom spatial zoning for privacy and entertainment',
        'Integrated alfresco dining and landscape flow',
        'High ceilings on both levels with floor-to-ceiling double glazing',
        'Luxury master suites with massive walk-in robes and custom ensuites'
      ],
      link: '/house-designs',
    },
    {
      num: '03.',
      tabTitle: 'Contemporary Townhomes',
      image: '/img/home10.png',
      heading: 'Sleek, low-maintenance urban masterpieces',
      description: 'Designed for modern growth corridors, our townhomes combine architectural efficiency with luxury finishes to maximize both lifestyle and investment returns.',
      bullets: [
        'Intelligent layouts maximizing natural daylighting',
        'Premium energy-rated insulation and smart features',
        'High-yield potential with low-maintenance lock-up-and-go',
        'Sustainable 7-star NatHERS energy efficient ratings',
        'Custom multi-unit development planning & permit management'
      ],
      link: '/development-projects',
    },
    {
      num: '04.',
      tabTitle: 'Designer Renovation',
      image: '/img/home11.jpg',
      heading: 'Transforming existing spaces into architectural gems',
      description: 'Breathe new life into your cherished location. Our specialized renovation workflows integrate seamless extensions and structural updates with high-end interior styling.',
      bullets: [
        'Heritage integration with state-of-the-art extensions',
        'Complete custom interior strip-outs and rebuilds',
        'Seamless permit planning and engineering management',
        'High-end structural modifications & open-plan conversions',
        'Bespoke timber joinery and premium luxury interior finishes'
      ],
      link: '/renovated-homes',
    },
    {
      num: '05.',
      tabTitle: 'Custom Acreage Estate',
      image: '/img/home6.jpg',
      heading: 'Spacious luxury estates tailored for acreage living',
      description: 'Designed for grand country allotments and premium acreage growth zones. We create bespoke homesteads that maximize panoramic views and capture natural light.',
      bullets: [
        'Custom architectural layouts for expansive site footprints',
        'Double-glazed soaring glass facades and high-pitch ceilings',
        'Integrated solar power and off-grid luxury capabilities',
        'Premium mudrooms, custom laundries, and butler kitchens',
        'Extensive outdoor living, wrap-around verandahs and pergolas'
      ],
      link: '/house-designs',
    }
  ];

  const current = tabsData[activeTab];

  return (
    <section className="mx-auto max-w-[1512px] px-4 py-16 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <ScrollAnimate variant="fadeUp" className="text-center mb-12">
        {/* Stylish Eyebrow Frame */}
        <div className="border-y border-brand-secondary/20 px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.35em] text-brand-secondary w-fit mx-auto mb-6 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
          <span>MODERN PROPERTY</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
        </div>
        
        {/* Main Title */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy uppercase max-w-4xl mx-auto">
          Built for your family - with care, clarity & confidence
        </h2>
        
        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-3xl text-xs font-semibold leading-relaxed text-[#41556B] italic">
          A home is more than a build - it is where life happens. Modern-Property combines quality workmanship, transparent communication and a steady, guided process so your family feels supported from day one to handover.
        </p>
      </ScrollAnimate>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch mt-8">
        {/* Left Column: Toggle Menu (4 Columns) - Stretches perfectly to match image height */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3 h-full min-h-[380px] lg:min-h-0">
          {tabsData.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 flex items-center text-left p-5 transition-all duration-300 w-full group relative overflow-hidden select-none border-b border-gray-100/50 cursor-pointer ${
                  isActive
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-[#F5F6F8] text-[#41556B] hover:bg-[#EAF3FC] hover:text-[#0B2341]'
                }`}
              >
                <span className={`text-xs font-extrabold mr-4 shrink-0 transition-colors ${
                  isActive ? 'text-brand-yellow' : 'text-[#667085]'
                }`}>
                  {tab.num}
                </span>
                <span className="font-serif text-sm font-bold tracking-tight">
                  {tab.tabTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Center Column: Interactive Large Image (4 Columns) with premium offset outline frame */}
        <div className="lg:col-span-4 relative flex items-center justify-center">
          {/* Background Outline Frame (Offset to top-right) */}
          <div className="absolute -top-3.5 -right-3.5 w-full h-full border-2 border-brand-secondary/35 pointer-events-none z-0" />
          
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] w-full bg-gray-50 overflow-hidden shadow-xl border border-brand-border z-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full absolute inset-0"
            >
              <img
                src={current.image}
                alt={current.tabTitle}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Dynamic Text Details & Bullets (4 Columns) - Natural vertical flow without huge empty gaps */}
        <div className="lg:col-span-4 flex flex-col lg:pl-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Heading */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
              {current.heading}
            </h3>

            {/* Description */}
            <p className="mt-4 text-xs font-medium text-[#41556B] leading-relaxed">
              {current.description}
            </p>

            {/* Bullet Points - Expanded to 5 for high-value detail */}
            <ul className="mt-6 space-y-3.5">
              {current.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 items-start text-[11px] font-semibold text-brand-navy/85">
                  <svg className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA & Subtext footer sitting naturally below bullets */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4">
              <Magnetic>
                <Link
                  href={current.link}
                  className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-secondary text-white text-[10px] font-extrabold uppercase tracking-widest px-8 py-3.5 w-fit transition-all duration-300 shadow-md"
                >
                  Read more
                </Link>
              </Magnetic>
              
              <div className="text-[9px] font-extrabold text-[#667085]/75 uppercase tracking-wider flex flex-wrap gap-x-3 gap-y-1">
                <span>Premium planning</span>
                <span>•</span>
                <span>Trusted delivery</span>
                <span>•</span>
                <span>End-to-end support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function HomeSections() {
  return (
    <div className="bg-white font-sans text-[#222222]">
      <HeroVideo />
      <PromoCards />
      <WantToTiles />
      <BuildTypeCards />
      <WhyChooseUsSection />
      <QualitySection />
      <ServiceAreaMap />
      <FamilyBuiltSection />
      <DarkJourneyCta />
      <OurServicesSection />
      <BlogSection />
      <FaqSection />
      <FooterPrompt />
    </div>
  );
}
