import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react';
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
          <div className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-yellow">Modern-Property build promise</div>
          <p>
            Every enquiry is mapped to a practical path: property shortlist, site feasibility,
            design fit, pricing, approvals, construction milestones, and handover.
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

export function ConstructionTimeline({ steps }: { steps: StepItem[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 gap-px overflow-hidden border border-brand-border bg-brand-border md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <StaggerItem key={step.title} variant="fadeUp" className="bg-white p-6 h-full">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-secondary">
            Modern-property process
          </span>
          <h3 className="mt-3 font-serif text-xl font-bold text-[#0B2341]">{step.title}</h3>
          <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{step.description}</p>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function CTASection({
  title,
  description,
  href = '/contact',
  label = 'Start your build enquiry',
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
