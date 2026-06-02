'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, MapPin, ShieldCheck } from 'lucide-react';
import { CTASection, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { pageHeroContent, trustPoints } from '../../data/siteContent';
import { landEstatesData } from '../../data/properties';

const states = ['ALL', 'VIC'] as const;
const releaseStatuses = ['ALL', 'Selling Fast', 'Registering Now', 'Limited Release', 'Stage 1 Sold Out'] as const;

export default function LandEstatesPage() {
  const [selectedState, setSelectedState] = useState<(typeof states)[number]>('ALL');
  const [availabilityFilter, setAvailabilityFilter] = useState<(typeof releaseStatuses)[number]>('ALL');

  const filteredEstates = landEstatesData.filter((estate) => {
    if (selectedState !== 'ALL' && estate.state !== selectedState) return false;
    if (availabilityFilter !== 'ALL' && estate.availability !== availabilityFilter) return false;
    return true;
  });

  const formatPrice = (price: number) =>
    price.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.landEstates}
        primaryHref="/properties?type=land-only"
        primaryLabel="View land lots"
        secondaryHref="/house-designs"
        secondaryLabel="Match home designs"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Masterplanned releases"
          title="Compare estates before you buy land"
          description="Review lot sizes, release status, price guide, suburbs, and build-readiness before pairing land with an Modern-property home design."
        />
        <div className="mt-6 flex flex-col gap-4 border border-brand-border bg-brand-section p-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#0B2341]">State</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`border px-4 py-2 text-xs font-extrabold uppercase tracking-wider ${
                    selectedState === state ? 'border-[#0B2341] bg-[#0B2341] text-white' : 'border-brand-border bg-white text-[#0B2341]'
                  }`}
                >
                  {state === 'ALL' ? 'All Victoria' : 'Victoria (VIC)'}
                </button>
              ))}
            </div>
          </div>
          <label className="flex flex-col gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0B2341]">
            Release status
            <select
              value={availabilityFilter}
              onChange={(event) => setAvailabilityFilter(event.target.value as (typeof releaseStatuses)[number])}
              className="min-w-56 border border-brand-border bg-white px-4 py-2.5 text-xs font-bold normal-case tracking-normal text-[#0B2341] outline-none"
            >
              {releaseStatuses.map((status) => (
                <option key={status} value={status}>
                  {status === 'ALL' ? 'All releases' : status}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredEstates.map((estate) => (
            <article key={estate.id} className="grid border border-brand-border bg-white md:grid-cols-5">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 md:col-span-2 md:aspect-auto">
                <img src={estate.image} alt={estate.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:col-span-3">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-brand-secondary">
                  <MapPin size={12} />
                  {estate.suburb}, {estate.state}
                </div>
                <h3 className="mt-3 font-serif text-2xl font-bold text-[#0B2341]">{estate.name}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{estate.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-4 border-y border-brand-border py-4 text-xs font-bold text-[#0B2341]">
                  <span>Lots: {estate.lotSizes}</span>
                  <span>From {formatPrice(estate.priceFrom)}</span>
                  <span>Status: {estate.availability}</span>
                  <span>Build design matching</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <Link href={`/properties?estate=${encodeURIComponent(estate.name)}`} className="inline-flex items-center justify-center gap-2 bg-[#0B2341] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-brand-secondary">
                    Lots
                    <ArrowRight size={13} />
                  </Link>
                  <button onClick={() => alert('Modern-Property masterplan and land release pack requested locally.')} className="inline-flex items-center justify-center gap-2 border border-brand-border px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341] hover:border-brand-secondary">
                    <FileText size={13} />
                    Pack
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Land checks"
            title="What Modern-Property checks before you build"
            description="Land price is only one part of the decision. Modern-property helps check the build details that can change the real budget."
          />
          <div className="mt-8">
            <IconCardGrid items={trustPoints} />
          </div>
          <div className="mt-8 border border-brand-border bg-white p-6 text-sm font-semibold leading-7 text-[#0B2341]">
            <ShieldCheck size={20} className="mb-3 text-brand-secondary" />
            Typical land due diligence includes soil, contour, service connections, build envelope, developer guidelines, easements, overlays, and frontage.
          </div>
        </div>
      </section>

      <CTASection
        title="Found an estate you like?"
        description="Modern-property can help compare the lot and match an appropriate single or double-storey design before you commit."
        href="/contact?interest=Land%20Estate"
        label="Ask about an estate"
      />
    </div>
  );
}
