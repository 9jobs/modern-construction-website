'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BedDouble, Bath, Calendar, Car, Eye, MapPin } from 'lucide-react';
import { CTASection, PageHero, SectionHeading } from '../../components/MarketingSections';
import { QuickViewPopup } from '../../components/QuickViewPopup';
import { AnimatedCounter } from '../../components/ScrollReveal';
import { pageHeroContent } from '../../data/siteContent';
import { displayHomesData, type DisplayHome } from '../../data/properties';

const states = ['ALL', 'VIC', 'NSW', 'QLD', 'SA', 'WA'] as const;

export default function DisplayHomesPage() {
  const [selectedState, setSelectedState] = useState<(typeof states)[number]>('ALL');
  const [selectedDisplay, setSelectedDisplay] = useState<DisplayHome | null>(null);

  const displays = displayHomesData.filter((home) => selectedState === 'ALL' || home.state === selectedState);

  const formatPrice = (price: number) =>
    price.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.displayHomes}
        primaryHref="/contact?interest=Display"
        primaryLabel="Book inspection"
        secondaryHref="/house-designs"
        secondaryLabel="Browse designs"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit before you build"
          title="Display homes by region"
          description="Inspect room proportions, kitchen selections, ceiling heights, facade materials, and upgrade options before choosing your build path."
        />
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-extrabold">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              className={`border px-4 py-2 uppercase tracking-wider transition-colors ${
                selectedState === state
                  ? 'border-[#0B2341] bg-[#0B2341] text-white'
                  : 'border-brand-border bg-white text-[#0B2341] hover:border-brand-secondary'
              }`}
            >
              {state === 'ALL' ? 'All regions' : state}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displays.map((home) => (
            <article key={home.id} className="border border-brand-border bg-white">
              <button
                type="button"
                onClick={() => setSelectedDisplay(home)}
                className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-100 text-left"
                aria-label={`Quick view ${home.name}`}
              >
                <img src={home.image} alt={home.name} className="h-full w-full object-cover" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-white/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#0B2341] shadow-sm">
                  <Eye size={12} />
                  Quick view
                </span>
              </button>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-brand-secondary">
                  <MapPin size={12} />
                  {home.suburb}, {home.state}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDisplay(home)}
                  className="mt-3 text-left font-serif text-xl font-bold text-[#0B2341] transition-colors hover:text-brand-secondary"
                >
                  {home.name}
                </button>
                <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{home.description}</p>
                <div className="mt-4 grid grid-cols-4 gap-3 border-y border-brand-border py-4 text-xs font-bold text-[#0B2341]">
                  <span className="inline-flex items-center gap-1"><BedDouble size={14} /><AnimatedCounter value={home.bedrooms} /></span>
                  <span className="inline-flex items-center gap-1"><Bath size={14} /><AnimatedCounter value={home.bathrooms} decimals={home.bathrooms % 1 === 0 ? 0 : 1} /></span>
                  <span className="inline-flex items-center gap-1"><Car size={14} /><AnimatedCounter value={home.cars} /></span>
                  <span>{formatPrice(home.price)}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0B2341]">
                  <Calendar size={14} className="text-brand-secondary" />
                  {home.hours}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDisplay(home)}
                    className="inline-flex items-center justify-center gap-2 border border-brand-border px-3 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341] hover:border-brand-secondary"
                  >
                    <Eye size={13} />
                    Details
                  </button>
                  <Link
                    href={`/contact?display=${home.slug}&title=${encodeURIComponent(home.name)}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#0B2341] px-3 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-brand-secondary"
                  >
                    Book
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href={home.virtualTourLink}
                    className="inline-flex items-center justify-center gap-2 border border-brand-border px-3 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341] hover:border-brand-secondary"
                  >
                    <Eye size={13} />
                    Tour
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Want to inspect finishes before choosing?"
        description="Book a local display appointment or virtual tour, then Modern-property can match what you liked to a land or package option."
        href="/contact?interest=Display"
        label="Book display visit"
      />

      {selectedDisplay ? (
        <QuickViewPopup
          isOpen={Boolean(selectedDisplay)}
          onClose={() => setSelectedDisplay(null)}
          kicker={`${selectedDisplay.suburb}, ${selectedDisplay.state} display centre`}
          title={selectedDisplay.name}
          image={selectedDisplay.image}
          description={selectedDisplay.description}
          stats={[
            { label: 'Beds', value: <AnimatedCounter value={selectedDisplay.bedrooms} />, icon: BedDouble },
            { label: 'Baths', value: <AnimatedCounter value={selectedDisplay.bathrooms} decimals={selectedDisplay.bathrooms % 1 === 0 ? 0 : 1} />, icon: Bath },
            { label: 'Cars', value: <AnimatedCounter value={selectedDisplay.cars} />, icon: Car },
            { label: 'From', value: formatPrice(selectedDisplay.price), icon: Calendar },
          ]}
          features={[selectedDisplay.hours, selectedDisplay.address, ...selectedDisplay.features]}
          note="Display homes may show optional upgrades, landscaping, furniture, and finishes. Confirm standard inclusions before choosing a build path."
          primaryHref={`/contact?display=${selectedDisplay.slug}&title=${encodeURIComponent(selectedDisplay.name)}`}
          primaryLabel="Book inspection"
          secondaryHref={selectedDisplay.virtualTourLink}
          secondaryLabel="Open virtual tour"
        />
      ) : null}
    </div>
  );
}
