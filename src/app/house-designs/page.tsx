'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bath, BedDouble, Car, Check, Eye, Info, Ruler } from 'lucide-react';
import { CTASection, PageHero, SectionHeading } from '../../components/MarketingSections';
import { QuickViewPopup } from '../../components/QuickViewPopup';
import { AnimatedCounter } from '../../components/ScrollReveal';
import { pageHeroContent } from '../../data/siteContent';
import { houseDesignsData, type HouseDesign } from '../../data/properties';

export default function HouseDesignsPage() {
  const [storeyFilter, setStoreyFilter] = useState<'ALL' | 'single' | 'double'>('ALL');
  const [widthFilter, setWidthFilter] = useState<'ALL' | 'narrow' | 'medium' | 'wide'>('ALL');
  const [budgetFilter, setBudgetFilter] = useState<number>(500000);
  const [selectedDesign, setSelectedDesign] = useState<HouseDesign | null>(null);

  const filteredDesigns = houseDesignsData.filter((design) => {
    if (storeyFilter !== 'ALL' && design.type !== storeyFilter) return false;
    if (widthFilter === 'narrow' && design.width >= 12) return false;
    if (widthFilter === 'medium' && (design.width < 12 || design.width > 14)) return false;
    if (widthFilter === 'wide' && design.width <= 14) return false;
    if (design.price > budgetFilter) return false;
    return true;
  });

  const formatPrice = (price: number) =>
    price.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.houseDesigns}
        primaryHref="/contact?interest=Home%20Design"
        primaryLabel="Start design brief"
        secondaryHref="/land-estates"
        secondaryLabel="Find land"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Design filter"
          title="Find a home that fits the block"
          description="Filter by storey, block width, and starting build budget. After you choose a design, Modern-property can match it to land or a house and land package."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 border border-brand-border bg-brand-section p-5 lg:grid-cols-3">
          <div>
            <div className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0B2341]">Storey</div>
            <div className="grid grid-cols-3 border border-brand-border bg-white p-1 text-xs font-extrabold">
              {(['ALL', 'single', 'double'] as const).map((value) => (
                <button
                  key={value}
                  onClick={() => setStoreyFilter(value)}
                  className={`px-3 py-2 ${storeyFilter === value ? 'bg-[#0B2341] text-white' : 'text-[#0B2341] hover:bg-brand-section'}`}
                >
                  {value === 'ALL' ? 'All' : value === 'single' ? 'Single' : 'Double'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0B2341]">Block width</div>
            <div className="grid grid-cols-4 border border-brand-border bg-white p-1 text-xs font-extrabold">
              {(['ALL', 'narrow', 'medium', 'wide'] as const).map((value) => (
                <button
                  key={value}
                  onClick={() => setWidthFilter(value)}
                  className={`px-3 py-2 ${widthFilter === value ? 'bg-[#0B2341] text-white' : 'text-[#0B2341] hover:bg-brand-section'}`}
                >
                  {value === 'ALL' ? 'All' : value === 'narrow' ? '<12m' : value === 'medium' ? '12-14m' : '14m+'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-[10px] font-extrabold uppercase tracking-widest text-[#0B2341]">
              <span>Build budget</span>
              <span className="text-brand-secondary">{formatPrice(budgetFilter)}</span>
            </div>
            <input
              type="range"
              min="200000"
              max="600000"
              step="10000"
              value={budgetFilter}
              onChange={(event) => setBudgetFilter(Number(event.target.value))}
              className="w-full accent-[#0B2341]"
            />
          </div>
        </div>

        {filteredDesigns.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDesigns.map((design) => (
              <article key={design.id} className="border border-brand-border bg-white">
                <button
                  type="button"
                  onClick={() => setSelectedDesign(design)}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-100 text-left"
                  aria-label={`Quick view ${design.name}`}
                >
                  <img src={design.image} alt={design.name} className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 bg-[#0B2341] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {design.type === 'single' ? 'Single storey' : 'Double storey'}
                  </span>
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-white/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#0B2341] shadow-sm">
                    <Eye size={12} />
                    Quick view
                  </span>
                </button>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedDesign(design)}
                      className="text-left font-serif text-xl font-bold text-[#0B2341] transition-colors hover:text-brand-secondary"
                    >
                      {design.name}
                    </button>
                    <span className="text-sm font-extrabold text-brand-secondary">{formatPrice(design.price)}*</span>
                  </div>
                  <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{design.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 border-y border-brand-border py-4 text-xs font-bold text-[#0B2341]">
                    <span className="inline-flex items-center gap-1"><BedDouble size={14} /><AnimatedCounter value={design.bedrooms} /> bed</span>
                    <span className="inline-flex items-center gap-1"><Bath size={14} /><AnimatedCounter value={design.bathrooms} decimals={design.bathrooms % 1 === 0 ? 0 : 1} /> bath</span>
                    <span className="inline-flex items-center gap-1"><Car size={14} /><AnimatedCounter value={design.cars} /> car</span>
                    <span className="inline-flex items-center gap-1"><Ruler size={14} /><AnimatedCounter value={design.width} decimals={design.width % 1 === 0 ? 0 : 1} />m</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-semibold text-[#0B2341]">
                    {design.features.slice(0, 4).map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1">
                        <Check size={11} className="text-brand-secondary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDesign(design)}
                      className="inline-flex items-center justify-center gap-2 border border-brand-border px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341] hover:border-brand-secondary"
                    >
                      <Eye size={13} />
                      Details
                    </button>
                    <Link
                      href={`/contact?design=${design.slug}&title=${encodeURIComponent(design.name)}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#0B2341] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-brand-secondary"
                    >
                      Enquire
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center border border-brand-border bg-brand-section p-12 text-center">
            <Info size={34} className="text-brand-secondary" />
            <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">No designs match those filters</h3>
            <p className="mt-2 max-w-md text-xs font-medium leading-6 text-brand-muted">
              Try a wider block setting, larger build budget, or all storey types.
            </p>
            <button
              onClick={() => {
                setStoreyFilter('ALL');
                setWidthFilter('ALL');
                setBudgetFilter(500000);
              }}
              className="mt-5 border border-brand-border bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#0B2341]"
            >
              Reset filters
            </button>
          </div>
        )}

        <p className="mt-8 border border-brand-border bg-[#EAF3FC] p-5 text-xs font-semibold leading-6 text-[#0B2341]">
          * House-only starting price. Land, site costs, developer requirements, planning fees, and upgrade selections are confirmed after block feasibility.
        </p>
      </section>

      <CTASection
        title="Already have land?"
        description="Send the lot width, depth, estate guidelines, and budget. Modern-property can help shortlist designs that fit before pricing the build."
        href="/contact?interest=Home%20Design"
        label="Match my block"
      />

      {selectedDesign ? (
        <QuickViewPopup
          isOpen={Boolean(selectedDesign)}
          onClose={() => setSelectedDesign(null)}
          kicker={selectedDesign.type === 'single' ? 'Single storey home design' : 'Double storey home design'}
          title={selectedDesign.name}
          image={selectedDesign.image}
          description={selectedDesign.description}
          stats={[
            { label: 'Beds', value: <AnimatedCounter value={selectedDesign.bedrooms} />, icon: BedDouble },
            { label: 'Baths', value: <AnimatedCounter value={selectedDesign.bathrooms} decimals={selectedDesign.bathrooms % 1 === 0 ? 0 : 1} />, icon: Bath },
            { label: 'Cars', value: <AnimatedCounter value={selectedDesign.cars} />, icon: Car },
            { label: 'Width', value: <><AnimatedCounter value={selectedDesign.width} decimals={selectedDesign.width % 1 === 0 ? 0 : 1} />m</>, icon: Ruler },
          ]}
          features={selectedDesign.features}
          note={`${formatPrice(selectedDesign.price)} house-only starting price. Land, site costs, developer requirements, planning fees, and upgrade selections are confirmed after block feasibility.`}
          primaryHref={`/contact?design=${selectedDesign.slug}&title=${encodeURIComponent(selectedDesign.name)}`}
          primaryLabel="Enquire about design"
          secondaryHref="/display-homes"
          secondaryLabel="Find display homes"
        />
      ) : null}
    </div>
  );
}
