'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import { CTASection, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { mainJourneys, pageHeroContent, trustPoints } from '../../data/siteContent';

export default function LandOnlyPage() {
  const { properties, selectedState } = useProperties();
  const landLots = properties.filter(
    (property) => property.type === 'land-only' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.landOnly}
        primaryHref="/properties?type=land-only"
        primaryLabel="Search land"
        secondaryHref="/house-designs"
        secondaryLabel="Match a design"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Land purchase support"
          title="Buy land with the build in mind"
          description="Modern Properties helps buyers check whether a block supports the intended layout, frontage, slope, services, and estate controls before any development plan is set."
        />
        <div className="mt-8">
          <IconCardGrid items={trustPoints} />
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Titled and build-ready lots"
            title={`Land only in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
            description="Save lots, compare land size, then speak with Modern Properties about the home designs that fit each block."
            actionHref="/contact?interest=Land"
            actionLabel="Ask about land"
          />
          {landLots.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {landLots.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-brand-border bg-white p-10 text-center text-sm font-semibold text-brand-muted">
              No titled land is listed for this region yet. Change region or ask Modern Properties to source land for your brief.
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Next step"
          title="After you shortlist land, choose the build path"
          description="Move from a vacant block into a practical property plan with site costs, approvals, contractor coordination, and clear resale potential."
        />
        <div className="mt-8">
          <IconCardGrid items={mainJourneys.slice(1, 4)} />
        </div>
      </section>

      <CTASection
        title="Need land checked before you buy?"
        description="Send the address, lot size, and target home brief. Modern Properties will help identify the build questions to ask before signing."
        href="/contact?interest=Land"
        label="Check a land option"
      />
    </div>
  );
}
