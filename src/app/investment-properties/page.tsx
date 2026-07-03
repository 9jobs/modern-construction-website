'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import { CTASection, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { pageHeroContent, trustPoints } from '../../data/siteContent';

export default function InvestmentPropertiesPage() {
  const { properties, selectedState } = useProperties();
  const investments = properties.filter(
    (property) => property.type === 'investment' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.investment}
        primaryHref="/properties?type=investment"
        primaryLabel="View investments"
        secondaryHref="/contact?interest=Investment"
        secondaryLabel="Ask an advisor"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Investor shortlist"
          title={`Investment opportunities in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
          description="Explore dual-income homes, co-living formats, leaseback style options, and completed builds with practical rental and ROI indicators."
        />
        {investments.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {investments.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-brand-border bg-brand-section p-10 text-center text-sm font-semibold text-brand-muted">
            No investment properties are listed in this region right now.
          </div>
        )}
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investor due diligence"
            title="Investment logic behind the numbers"
            description="Modern Properties presents rental yield, estimated ROI, depreciation-ready inclusions, tenancy format, and property completion status in one place."
          />
          <div className="mt-8">
            <IconCardGrid items={trustPoints} />
          </div>
        </div>
      </section>

      <CTASection
        title="Need a build-and-hold property brief?"
        description="Tell Modern Properties your target state, budget, yield range, loan timing, and preferred tenant format."
        href="/contact?interest=Investment"
        label="Request investor shortlist"
      />
    </div>
  );
}
