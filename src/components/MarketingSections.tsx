import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft, 
  ArrowDown, 
  CheckCircle2, 
  Search, 
  Compass, 
  Users2, 
  Hammer, 
  Sparkles, 
  BadgeDollarSign, 
  type LucideIcon 
} from 'lucide-react';
import { ScrollAnimate, StaggerContainer, StaggerItem, HoverScale, HoverCard } from './ScrollReveal';

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

interface IconCard {
  title: string;
  description: string;
  href?: string;
  icon?: LucideIcon;
}

interface StepItem {
  title: string;
  description: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryHref = '/contact',
  primaryLabel = 'Start enquiry',
  secondaryHref = '/properties',
  secondaryLabel = 'View properties',
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B2341] text-white">
      <div className="absolute inset-0">
        <ScrollAnimate variant="fadeIn" duration={1.5} className="h-full w-full">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </ScrollAnimate>
        <div className="absolute inset-0 bg-gradient-to-b from-[#08182d]/85 via-[#08182d]/75 to-[#08182d]/45 lg:bg-gradient-to-r lg:from-[#08182d]/92 lg:via-[#08182d]/80 lg:to-[#08182d]/40" />
      </div>
      <div className="relative mx-auto grid min-h-[420px] max-w-[1512px] grid-cols-1 items-end gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-7">
          <StaggerContainer delayChildren={0.1}>
            <StaggerItem variant="fadeUp" className="mb-4 block text-xs font-extrabold uppercase tracking-[0.24em] text-brand-yellow">
              {eyebrow}
            </StaggerItem>
            <StaggerItem variant="fadeUp">
              <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {title}
              </h1>
            </StaggerItem>
            <StaggerItem variant="fadeUp" duration={0.9}>
              <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/82 md:text-base">
                {description}
              </p>
            </StaggerItem>
            <StaggerItem variant="fadeUp" duration={1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <HoverScale>
                  <Link
                    href={primaryHref}
                    className="inline-flex w-full items-center justify-center gap-2 bg-brand-yellow px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341] transition-colors hover:bg-white"
                  >
                    {primaryLabel}
                    <ArrowRight size={15} />
                  </Link>
                </HoverScale>
                <HoverScale>
                  <Link
                    href={secondaryHref}
                    className="inline-flex w-full items-center justify-center gap-2 border border-white/35 bg-white/10 px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur transition-colors hover:bg-white/18"
                  >
                    {secondaryLabel}
                  </Link>
                </HoverScale>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
        <ScrollAnimate variant="fadeLeft" duration={1.1} delay={0.25} className="hidden border-l border-white/20 pl-8 text-xs font-semibold leading-6 text-white/76 lg:col-span-4 lg:col-start-9 lg:block">
          <div className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-yellow">Modern Properties assurance promise</div>
          <p>
            Every enquiry is mapped to a practical path: property shortlist, site feasibility,
            design fit, pricing, approvals, project milestones, and handover.
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <ScrollAnimate variant="fadeUp" className="flex flex-col gap-4 border-b border-brand-border pb-5 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-secondary">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0B2341] md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-brand-muted">
            {description}
          </p>
        ) : null}
      </div>
      {actionHref && actionLabel ? (
        <HoverScale className="shrink-0">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0B2341] hover:text-brand-secondary"
          >
            {actionLabel}
            <ArrowRight size={14} />
          </Link>
        </HoverScale>
      ) : null}
    </ScrollAnimate>
  );
}

export function IconCardGrid({ items }: { items: IconCard[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon ?? CheckCircle2;
        const content = (
          <StaggerItem variant="fadeUp" className="h-full">
            <HoverCard className="group h-full border border-brand-border bg-white p-5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center bg-[#EAF3FC] text-[#0B2341] group-hover:bg-[#0B2341] group-hover:text-white transition-colors duration-300">
                  <Icon size={21} />
                </div>
                <h3 className="font-serif text-lg font-bold leading-tight text-[#0B2341]">{item.title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{item.description}</p>
              </div>
              {item.href ? (
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-brand-secondary group-hover:text-[#0B2341] transition-colors">
                  View path
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              ) : null}
            </HoverCard>
          </StaggerItem>
        );

        return item.href ? (
          <Link key={item.title} href={item.href} className="block h-full">
            {content}
          </Link>
        ) : (
          <div key={item.title} className="h-full">{content}</div>
        );
      })}
    </StaggerContainer>
  );
}

const stepIcons = [
  Search,
  Compass,
  Users2,
  Hammer,
  Sparkles,
  BadgeDollarSign
];

const stepColors = [
  { bg: 'bg-[#F4F8FB]', border: 'border-[#D4E2EE]', text: 'text-[#1C4D8C]', circle: 'bg-[#1C4D8C]/10', arrow: '#1C4D8C' },
  { bg: 'bg-[#F5F7FA]', border: 'border-[#E2E8F0]', text: 'text-[#475569]', circle: 'bg-[#475569]/10', arrow: '#475569' },
  { bg: 'bg-[#F0FDF4]', border: 'border-[#DCFCE7]', text: 'text-[#16A34A]', circle: 'bg-[#16A34A]/10', arrow: '#16A34A' },
  { bg: 'bg-[#FFFBEB]', border: 'border-[#FEF3C7]', text: 'text-[#D97706]', circle: 'bg-[#D97706]/10', arrow: '#D97706' },
  { bg: 'bg-[#ECFDF5]', border: 'border-[#D1FAE5]', text: 'text-[#059669]', circle: 'bg-[#059669]/10', arrow: '#059669' },
  { bg: 'bg-[#F8FAFC]', border: 'border-[#E2E8F0]', text: 'text-[#0F172A]', circle: 'bg-[#0F172A]/10', arrow: '#0F172A' }
];

export function ConstructionTimeline({ steps }: { steps: StepItem[] }) {
  const isSixSteps = steps.length === 6;
  const isFourSteps = steps.length === 4;

  const gridStepsSix = [
    { step: steps[0], originalIndex: 0, arrow: 'right' },
    { step: steps[1], originalIndex: 1, arrow: 'right' },
    { step: steps[2], originalIndex: 2, arrow: 'down' },
    { step: steps[5], originalIndex: 5, arrow: 'none' },
    { step: steps[4], originalIndex: 4, arrow: 'left' },
    { step: steps[3], originalIndex: 3, arrow: 'left' }
  ];

  const gridStepsFour = [
    { step: steps[0], originalIndex: 0, arrow: 'right' },
    { step: steps[1], originalIndex: 1, arrow: 'right' },
    { step: steps[2], originalIndex: 2, arrow: 'right' },
    { step: steps[3], originalIndex: 3, arrow: 'none' }
  ];

  const gridStepsDefault = steps.map((step, idx) => ({
    step,
    originalIndex: idx,
    arrow: idx < steps.length - 1 ? 'right' : 'none'
  }));

  const desktopGridSteps = isSixSteps 
    ? gridStepsSix 
    : (isFourSteps ? gridStepsFour : gridStepsDefault);

  const gridColsClass = isSixSteps 
    ? "lg:grid-cols-3" 
    : (isFourSteps ? "lg:grid-cols-4" : "lg:grid-cols-3");

  return (
    <div className="relative w-full py-6">
      <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:hidden">
        {steps.map((step, idx) => {
          const Icon = stepIcons[idx] || Search;
          const colors = stepColors[idx] || stepColors[0];
          return (
            <div key={step.title} className="block">
              <StaggerItem variant="fadeUp" className="h-full">
                <div className="relative flex flex-col items-center text-center p-6 bg-white border border-brand-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-secondary h-full rounded-2xl">
                  <div className={`absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-extrabold text-white ${idx < 3 ? 'bg-[#1C4D8C]' : 'bg-[#0B2341]'}`}>
                    Step 0{idx + 1}
                  </div>
                  <div className={`mt-4 p-4 rounded-full ${colors.circle} ${colors.text} mb-4`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B2341]">{step.title}</h3>
                  <p className="mt-3 text-xs font-semibold leading-relaxed text-[#667085]">{step.description}</p>
                  {idx < steps.length - 1 && (
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 bg-white border border-brand-border p-1.5 rounded-full text-[#1C4D8C] shadow-sm">
                      <ArrowDown size={14} />
                    </div>
                  )}
                </div>
              </StaggerItem>
            </div>
          );
        })}
      </StaggerContainer>

      <StaggerContainer className={`hidden lg:grid grid-cols-1 gap-8 ${gridColsClass} lg:gap-y-16 lg:gap-x-12`}>
        {desktopGridSteps.map((gridItem, gridIdx) => {
          const step = gridItem.step;
          if (!step) return null;
          
          const idx = gridItem.originalIndex;
          const Icon = stepIcons[idx] || Search;
          const colors = stepColors[idx] || stepColors[0];
          
          return (
            <div key={`desktop-${step.title}`} className="h-full">
              <StaggerItem variant="fadeUp" className="h-full">
                <div className="relative flex flex-col items-center text-center p-8 bg-white border border-brand-border shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-secondary h-full rounded-3xl min-h-[260px] justify-between">
                  <div className={`absolute -top-3.5 left-8 px-3 py-1 rounded-full text-[10px] font-extrabold text-white ${idx < 3 ? 'bg-[#1C4D8C]' : 'bg-[#0B2341]'}`}>
                    Step 0{idx + 1}
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <div className={`mt-3 p-4 rounded-full ${colors.circle} ${colors.text} mb-4`}>
                      <Icon size={30} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0B2341] leading-tight">{step.title}</h3>
                    <p className="mt-3 text-xs font-semibold leading-relaxed text-[#667085]">{step.description}</p>
                  </div>
                  {gridItem.arrow === 'right' && (
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 bg-white border border-brand-border p-2 rounded-full text-[#1C4D8C] shadow-md hover:scale-110 transition-transform">
                      <ArrowRight size={18} />
                    </div>
                  )}
                  {gridItem.arrow === 'left' && (
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 bg-white border border-brand-border p-2 rounded-full text-[#1C4D8C] shadow-md hover:scale-110 transition-transform">
                      <ArrowLeft size={18} />
                    </div>
                  )}
                  {gridItem.arrow === 'down' && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 bg-white border border-brand-border p-2 rounded-full text-[#1C4D8C] shadow-md hover:scale-110 transition-transform">
                      <ArrowDown size={18} />
                    </div>
                  )}
                </div>
              </StaggerItem>
            </div>
          );
        })}
      </StaggerContainer>
    </div>
  );
}

export function CTASection({
  title,
  description,
  href = '/contact',
  label = 'Start your property enquiry',
}: {
  title: string;
  description: string;
  href?: string;
  label?: string;
}) {
  return (
    <ScrollAnimate variant="scrollReveal" className="w-full">
      <section className="bg-[#0B2341] px-5 py-10 text-white md:px-8 md:py-12">
        <div className="mx-auto flex max-w-[1512px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-white/75">{description}</p>
          </div>
          <HoverScale className="shrink-0">
            <Link
              href={href}
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341] transition-colors hover:bg-white"
            >
              {label}
              <ArrowRight size={15} />
            </Link>
          </HoverScale>
        </div>
      </section>
    </ScrollAnimate>
  );
}
