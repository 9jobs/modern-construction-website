'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import {
  ConstructionTimeline,
  IconCardGrid,
  PageHero,
  SectionHeading,
  CTASection,
} from '../../components/MarketingSections';
import { constructionSteps, pageHeroContent, trustPoints } from '../../data/siteContent';

export default function HouseAndLandPage() {
  const { properties, selectedState } = useProperties();
  const relevantProperties = properties.filter(
    (property) => property.type === 'house-land' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.houseAndLand}
        primaryHref="/properties?type=house-land"
        primaryLabel="Search packages"
        secondaryHref="/house-designs"
        secondaryLabel="Compare designs"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Turnkey purchase path"
          title="Buy land and home design together"
          description="Each Modern Properties house and land package shows the block, home design, estate, land size, guide price, build stage, and core inclusions so buyers can compare the total journey."
        />
        <div className="mt-8">
          <IconCardGrid items={trustPoints} />
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Available now"
            title={`House and land in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
            description="Shortlist a package, save it, compare inclusions, then enquire to confirm land availability and build timing."
            actionHref="/contact?interest=House%20and%20Land"
            actionLabel="Ask about packages"
          />
          {relevantProperties.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relevantProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-brand-border bg-white p-10 text-center text-sm font-semibold text-brand-muted">
              No package is currently listed for this region. Change the region selector or enquire so Modern Properties can prepare a matching brief.
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From package shortlist to handover"
          description="Modern Properties checks the land, confirms the development fit, prepares the scope, and manages approvals before contractor work begins."
        />
        <div className="mt-8">
          <ConstructionTimeline steps={constructionSteps.slice(0, 6)} />
        </div>
      </section>

      <CTASection
        title="Have a package in mind?"
        description="Send Modern Properties your target state, budget, preferred bedrooms, and timing. We will confirm what packages are build-ready locally."
        href="/contact?interest=House%20and%20Land"
        label="Start package enquiry"
      />
    </div>
  );
}
