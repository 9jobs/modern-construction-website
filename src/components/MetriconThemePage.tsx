import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Search, type LucideIcon } from 'lucide-react';
import { FaqAccordion } from './FaqAccordion';

interface FeatureCard {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

interface ActionTile {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface ProofPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface MetriconThemePageProps {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  promoTitle: string;
  promoCards: FeatureCard[];
  actionTitle: string;
  actionTiles: ActionTile[];
  storyTitle: string;
  storyBody: string[];
  storyImage: string;
  proofTitle: string;
  proofPoints: ProofPoint[];
  ctaTitle: string;
  ctaDescription: string;
  ctaHref: string;
  ctaLabel: string;
  faqs: FaqItem[];
}

function PillLink({
  href,
  children,
  inverse = false,
}: {
  href: string;
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold transition-colors ${
        inverse
          ? 'border-white text-white hover:bg-white hover:text-[#071d38]'
          : 'border-[#071d38] text-[#071d38] hover:bg-[#071d38] hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

export function MetriconThemePage({
  eyebrow,
  title,
  description,
  heroImage,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  promoTitle,
  promoCards,
  actionTitle,
  actionTiles,
  storyTitle,
  storyBody,
  storyImage,
  proofTitle,
  proofPoints,
  ctaTitle,
  ctaDescription,
  ctaHref,
  ctaLabel,
  faqs,
}: MetriconThemePageProps) {
  return (
    <div className="bg-white font-sans text-[#071d38]">
      <section className="mx-auto max-w-[1512px] px-4 pt-3 sm:px-6 2xl:px-0">
        <div className="relative min-h-[520px] overflow-hidden bg-[#071d38]">
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071d38]/78 via-[#071d38]/18 to-transparent" />
          <div className="relative flex min-h-[520px] flex-col items-center justify-end px-4 pb-12 text-center text-white">
            <div className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.26em] text-white/80">{eyebrow}</div>
            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-white/86">{description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PillLink href={primaryHref} inverse>
                {primaryLabel}
              </PillLink>
              <PillLink href={secondaryHref} inverse>
                {secondaryLabel}
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] bg-[#F4F8FB] px-4 py-12 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold">{promoTitle}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {promoCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href || primaryHref}
              className={`group bg-white ${index === 0 ? 'md:col-span-1' : ''}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#DDEAF3]">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#071d38,#1C4D8C)] text-white">
                    <Search size={34} />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold leading-tight">{card.title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-[#41556B]">{card.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#1C4D8C]">
                  Learn more
                  <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1152px] px-4 py-14 text-center sm:px-6">
        <h2 className="mb-7 font-serif text-2xl font-bold">{actionTitle}</h2>
        <div className="grid grid-cols-2 border border-[#DADDE2] md:grid-cols-4">
          {actionTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <Link key={tile.title} href={tile.href} className="group flex min-h-[118px] flex-col items-center justify-center gap-3 border-b border-r border-[#DADDE2] p-4 last:border-r-0 hover:bg-[#F4F8FB] md:border-b-0">
                <Icon size={24} />
                <span className="text-[11px] font-extrabold leading-4 underline-offset-4 group-hover:underline">{tile.title}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1512px] grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[16/11] overflow-hidden bg-[#DDEAF3]">
            <img src={storyImage} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{storyTitle}</h2>
          <div className="mt-5 space-y-4 text-sm font-medium leading-7 text-[#41556B]">
            {storyBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7">
            <PillLink href={primaryHref}>Start now</PillLink>
          </div>
        </div>
      </section>

      <section className="bg-[#DDEAF3] py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold">{proofTitle}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-white p-6">
                  <Icon size={24} className="text-[#1C4D8C]" />
                  <h3 className="mt-4 font-serif text-xl font-bold">{point.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-[#41556B]">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-12 sm:px-6 2xl:px-0">
        <div className="bg-[#071d38] px-6 py-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold">{ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/78">{ctaDescription}</p>
          <div className="mt-6">
            <PillLink href={ctaHref} inverse>
              {ctaLabel}
              <ArrowRight size={13} />
            </PillLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 pb-14 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2 className="font-serif text-2xl font-bold md:col-span-3">FAQs:</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
